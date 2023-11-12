import { CollectionLocationDTO, CollectionLocationRepository } from "../interfaces/collectionlocation.interface";
import { CollectionLocationRepositoryPrisma } from "../repositories/collectionlocation.repository";
import { CollectionLocation } from "@prisma/client";

class CollectionLocationUseCase {
    private collectionLocationRepository: CollectionLocationRepository;
    constructor() {
        this.collectionLocationRepository = new CollectionLocationRepositoryPrisma();
    }

    async create(body: CollectionLocationDTO): Promise<CollectionLocation> {

        const result = await this.collectionLocationRepository.create(body);

        return result;
    }

    async findById(id: number): Promise<CollectionLocation | null> {

        const result = await this.collectionLocationRepository.findById(id);

        return result;
    }

    async deleteById(id: number): Promise<null> {

        const verifyIfCollectionLocationExists = await this.collectionLocationRepository.findById(id);

        if (!verifyIfCollectionLocationExists) {
            throw new Error('Collection Location doesnot exists.')
        }

        const result = await this.collectionLocationRepository.deleteById(id);

        return result;
    }

    async findAll(): Promise<CollectionLocation[] | []> {

        const result = await this.collectionLocationRepository.findAll();

        return result;
    }

    async updateById(id: number, body: CollectionLocationDTO) {

        const verifyIfCollectionLocationExists = await this.collectionLocationRepository.findById(id);

        if (!verifyIfCollectionLocationExists) {
            throw new Error('Collection Location doesnot exists.')
        }

        const result = await this.collectionLocationRepository.updateById(id, body);

        return result;
    }
}

export { CollectionLocationUseCase }