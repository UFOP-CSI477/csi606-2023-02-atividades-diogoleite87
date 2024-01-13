export type Theme = 'dark' | 'light'

export type User = {
    id: string,
    email: string,
    name: string,
    type: number,
    description: string
}

export type AuthData = {
    user_token: string | null | undefined
    user: User
}

export type Profile = {
    id: string,
    email: string,
    name: string,
    type: 1 | 2,
    description: string
}
