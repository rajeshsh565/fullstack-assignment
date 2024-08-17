import { body, validationResult } from "express-validator";

const withValidationErrors = (validationValues) => {
    return [
        validationValues, (req,res,next)=>{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                const errorMessages = errors.array().map((error)=>error.msg);
                return res.status(400).json({msg:errorMessages});
            }
            next();
        }
    ]
}

export const validateCreateCardInputs = withValidationErrors([
    body('title').trim().notEmpty().withMessage("title can not be empty").isLength({max:65}).withMessage("title too long").not().isNumeric().withMessage('title can not be numeric, use words'),
    body('description').trim().notEmpty().withMessage("description can not be empty")
])