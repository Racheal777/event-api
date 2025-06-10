 import { Events } from "../models/event_model.js"
 import { eventSchema } from "../schemas/event_schema.js"



export const postEvents = async(req, res) => {
    try {
        const {error, value} = eventSchema.validate(req.body)

    if(error){
        return res.status(400).json({'error': error.details[0].message})
    }

    const addEvent = await Events.create(value)
    return res.status(201).json({'event': addEvent})
        
    } catch (error) {
        return res.status(500).json({'error': error})
    }
}


export const getEvents = async(req, res) => {

    try {
        const events = await Events.find()

        return res.status(200).json({'events':events})
    } catch (error) {
        return res.status(500).json({'error': error})
    }
}

export const getOneEvent = async(req, res) => {

    const event = await Events.findById(req.params.id)

    res.send(event)
}

export const deleteEvent = async(req, res) => {
    const id = req.params.id

    const event = await Events.findByIdAndDelete(id)

    res.send(event)
}

export const updateEvent = async(req, res) => {
    const id = req.params.id

    const event = await Events.findByIdAndUpdate(id, req.body)

    res.send(event)
}




