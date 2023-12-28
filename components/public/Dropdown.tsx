"use client"

import {startTransition, useState} from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
    AlertDialogTrigger } from "@/components/ui/alert-dialog";

import { DropdownProps } from '@/types/general'
import { ICategory } from '@/types/model-category'
import {Input} from "@/components/ui/input";

// TODO fetch categories

const Dropdown = ({ onChange, value } : DropdownProps) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [newCategoryName, setNewCategoryName] = useState<string>('')

    const sendRequest = () => {}

    return (
        <Select onValueChange={onChange} defaultValue={value}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                {categories.length > 0 && categories.map((item: ICategory) => (
                    <SelectItem key={item._id} value={item._id}
                    className="select-item p-regular-14">
                        {item.name}
                    </SelectItem>
                ))}

                <AlertDialog>
                    <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8
                    text-primary-500 hover:bg-primary-50 focus:text-primary-500">Open</AlertDialogTrigger>
                    <AlertDialogContent className="bg-white">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Add New Category</AlertDialogTitle>
                            <AlertDialogDescription>
                                <Input className="input-field mt-3" type="text" placeholder="Category Name"
                                onChange={(e) => setNewCategoryName(e.target.value)}/>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Exit</AlertDialogCancel>
                            <AlertDialogAction onClick={() => startTransition(sendRequest)}>Save</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </SelectContent>
        </Select>
    )
}

export default Dropdown
