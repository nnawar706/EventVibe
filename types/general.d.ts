export interface link {
    label: string;
    route: string
}

export interface QueryParams {
    params: string
    keys: string[]
}

export interface AddQueryParams extends QueryParams {
    value: string | null
}

export type EventFormProps = {
    authId: string
    type: "create" | "update"
}