"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {useState} from "react"
import Image from "next/image"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {eventFormSchemaValidator} from "@/lib/validations/eventFormValidator"
import {EventFormProps} from "@/types/general"
import { eventDefaultValues } from "@/constants"
import Dropdown from "@/components/public/Dropdown"
import FileUploader from "@/components/public/FileUploader"

const EventForm = ({ authId, type }: EventFormProps ) => {
    const [files, setFiles] = useState<File[]>([])
    const [startDate, setStartDate] = useState(new Date())
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

                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field, fieldState }) => (
                            <FormItem className="w-full">
                                <FormControl className="h-72">
                                    <Input placeholder="Description" {...field} className="textarea rounded-2xl" />
                                </FormControl>
                                {/* <FormMessage /> */}
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field, fieldState }) => (
                            <FormItem className="w-full">
                                <FormControl className="h-72">
                                    <FileUploader
                                    onFieldChange={field.onChange}
                                    imageUrl={field.value}
                                    setFiles={setFiles}/>
                                </FormControl>
                                {/* <FormMessage /> */}
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="startDateTime"
                        render={({ field, fieldState }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="flex-center h-[54px] w-full overflow-hidden
                                    rounded-full bg-grey-50 px-4 py-2">
                                        <Image
                                            src="/assets/icons/calendar.svg"
                                            width={24}
                                            height={24}
                                            alt="calendar"
                                        />
                                        <p className="ml-3 whitespace-nowrap text-grey-600">From:</p>
                                        <DatePicker
                                            selected={field.value}
                                            onChange={(date: Date) => field.onChange(date)}
                                        />
                                    </div>
                                </FormControl>
                                {/* <FormMessage /> */}
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field, fieldState }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="flex-center h-[54px] w-full overflow-hidden
                                    rounded-full bg-grey-50 px-4 py-2">
                                        <Image
                                            src="/assets/icons/location-grey.svg"
                                            width={24}
                                            height={24}
                                            alt="calendar"
                                        />
                                        <Input placeholder="Event Location" {...field} className="input-field" />
                                    </div>
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