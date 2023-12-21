"use client"

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

import { DropdownProps } from '@/types/general'
import { ICategory } from '@/types/model-category'

// TODO fetch categories

const Dropdown = ({ onChange, value } : DropdownProps) => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    return (
        <Select onValueChange={onChange} defaultValue={value}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default Dropdown
