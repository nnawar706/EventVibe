import {link} from "@/types/general";

export const navLinks: link[] = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Create Event',
        route: '/events/create',
    },
    {
        label: 'My Profile',
        route: '/profile',
    },
]

export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
}

export const defaultMongooseConnection = {
    conn: null,
    promise: null
}

export enum Role {
    USER = "user",
    ADMIN = "admin"
}

export enum DiscountType {
    Amount, Percent
}

export const baseUrl = {
    url: process.env.NEXT_API_URL
}