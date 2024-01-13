import { api } from "../providers"

import { AuthData, Profile, User } from "../schemas/models"
import { LoginDTO } from "../schemas/dto"


const authLogin = (login: LoginDTO) => api.post<AuthData>('/user/authenticate', login)
const getProfile = () => api.get<Profile>(`/user`)
const getAllUsers = () => api.get<User[]>(`/user/all`)

export const userService = {
    authLogin,
    getProfile,
    getAllUsers
}