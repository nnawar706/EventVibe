import {Dispatch, SetStateAction} from "react";

export interface link {
    label: string;
    route: string
}

export interface QueryParams {
    params: string
    keys: string[]
}

export interface FileUploaderProps {
    onFieldChange: (value: string) => void,
    imageUrl: string,
    setFiles: Dispatch<SetStateAction<File[]>>
}

export interface AddQueryParams extends QueryParams {
    value: string | null
}

export type EventFormProps = {
    authId: string
    type: "create" | "update"
}

export type DropdownProps = {
    value?: string
    onChange?: () => void
}