"use client"

type EventFormProps = {
    authId: string
    type: "create" | "update"
}

const EventForm = ({ authId, type }: EventFormProps ) => {
    return (
        <p>form</p>
    )
}

export default EventForm