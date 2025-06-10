import Joi from "joi";

export const eventSchema = Joi.object({
    title: Joi.string().min(3).required(),
    date: Joi.date().required(),
    venue: Joi.string().required(),
    rate: Joi.string(),
    currency: Joi.string(),
    dressCode: Joi.string(),
    type: Joi.string()
    .valid("religious", "political", "entertainment")
    .required()


})