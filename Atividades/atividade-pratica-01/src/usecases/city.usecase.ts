import { StateRepositoryPrisma } from "../repositories/state.interface";
import { CityDTO, CityRepository } from "../interfaces/city.interface";
import { CityRepositoryPrisma } from "../repositories/city.repository";
import { StateRepository } from "../interfaces/state.interface";
import { City } from "@prisma/client";

class CityUseCase {
    private cityRepository: CityRepository;
    private stateRepository: StateRepository;
    constructor() {
        this.cityRepository = new CityRepositoryPrisma;
        this.stateRepository = new StateRepositoryPrisma
    }

    async create(body: CityDTO): Promise<City> {

        const verifyIfCityExists = await this.cityRepository.findByNameAndStateId(body.name, body.stateId);
        const verifyIfStateExists = await this.stateRepository.findById(body.stateId);

        if (verifyIfCityExists) {
            throw new Error('City already exists.');
        } else if (!verifyIfStateExists) {
            throw new Error('State id doesnot exists.');
        }

        const result = await this.cityRepository.create(body);

        return result;
    }

    async findById(id: number): Promise<City | null> {

        const result = await this.cityRepository.findById(id);

        return result;
    }

    async deleteById(id: number): Promise<City | null> {

        const verifyIfCityExists = await this.cityRepository.findById(id);

        if (!verifyIfCityExists) {
            throw new Error('City doesnot exists.')
        }

        const result = await this.cityRepository.deleteById(id);

        return result;
    }

    async findAll(): Promise<City[] | []> {

        const result = await this.cityRepository.findAll();

        return result;
    }

    async updateById(id: number, body: CityDTO) {

        const verifyIfCityExists = await this.cityRepository.findById(id);
        const verifyIfStateExists = await this.stateRepository.findById(body.stateId);

        if (!verifyIfCityExists) {
            throw new Error('City doesnot exists.');
        } else if (!verifyIfStateExists) {
            throw new Error('State id doesnot exists.');
        }

        const result = await this.cityRepository.updateById(id, body);

        return result;
    }
}

export { CityUseCase }