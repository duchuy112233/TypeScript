import Joi from "joi";

const ChemaProduct = Joi.object({
    title: Joi.string().required().min(3).max(100),
    price: Joi.number().required().min(3),
    description: Joi.string().required().min(3),
    thumbnail: Joi.string().required().min(3),
  });

export default ChemaProduct
