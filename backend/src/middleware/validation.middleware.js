import { body, validationResult } from "express-validator"; 

export const contactValidation = [
    body("name")
      .notEmpty()
      .withMessage("name is required")
      .isLength({ min: 3, max: 30 })
      .withMessage("name must be between 3 and 30 characters"),

    body("email")
       .notEmpty()
       .withMessage("email is required")
       .isEmail()
       .withMessage("email is not valid"), 

    body("message")
      .notEmpty()
      .withMessage("message is required"),
      
    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(404).json({
                errors: errors.array()
            })
        }
        next()
    }  
];

export default contactValidation;