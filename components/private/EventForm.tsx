"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {eventFormSchemaValidator} from "@/lib/validations/eventFormValidator"
import {EventFormProps} from "@/types/general"
import { eventDefaultValues } from "@/constants"
import Dropdown from "../public/Dropdown"

const EventForm = ({ authId, type }: EventFormProps ) => {

    const initialValues = eventDefaultValues

    const form = useForm<z.infer<typeof eventFormSchemaValidator>>({
        resolver: zodResolver(eventFormSchemaValidator),
        defaultValues: initialValues,
    })

    function onSubmit(values: z.infer<typeof eventFormSchemaValidator>) {
        console.log(values)
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="flex flex-col gap-5 md:flex-row">
                    
                    {/* Title */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field, fieldState }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Event Title" {...field} className="input-field" />
                                </FormControl>
                                {/* <FormMessage /> */}
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="categoryId"
                        render={({ field, fieldState }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Dropdown onChange={field.onChange} value={field.value} />
                                </FormControl>
                                {/* <FormMessage /> */}
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default EventForm