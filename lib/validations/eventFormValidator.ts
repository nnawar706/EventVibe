import * as z from "zod"

export const eventFormSchemaValidator = z.object({
    categoryId: z.string(),
    title: z.string().min(2, "Title must be at least 2 characters."),
    description: z.string().min(2, "Description must be at least 2 characters.")
        .max(400, "Description must be less than 400 characters."),
    location: z.string().min(3, "Location must be at least 3 characters.")
        .max(400, "Location must be less than 400 characters."),
    startDateTime: z.date(),
    endDateTime: z.date(),
    ticketPrice: z.string(),
    refererDiscount: z.string(),
    refererDiscountType: z.number()
            .refine((value) => value === 0 || value === 1, "Invalid referer discount type selected."),
    url: z.string().url(),
    imageUrl: z.string().url()
})