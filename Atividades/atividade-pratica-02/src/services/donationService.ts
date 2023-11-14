import { api } from "../providers";

import { DonationDTO } from "../schemas/dto";
import { Donation } from "../schemas/models";

const putDonationById = (id: number, data: DonationDTO) => api.put(`/donation/${id}`, data)
const getDonationById = (id: number) => api.get<Donation>(`/donation/${id}`)
const deleteDonationById = (id: number) => api.delete(`/donation/${id}`)
const postDonation = (data: DonationDTO) => api.post(`/donation`, data)
const getAllDonations = () => api.get<Donation[]>(`/donation`)

export const donationService = {
    deleteDonationById,
    getAllDonations,
    putDonationById,
    getDonationById,
    postDonation
}