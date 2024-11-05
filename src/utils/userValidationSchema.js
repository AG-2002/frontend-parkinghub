import { object, string,ref} from 'yup';

    const userSignupValidationSchema = object({
        username: string().required().lowercase(),
        email: string().email().required(),
        password: string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[0-9]/, "Password must contain a number")
        .matches(/[@$!%*?&]/, "Password must contain a special character")
        .required("Password is required"),
        confirmPassword: string()
        .oneOf([ref('password'), null], "Passwords do not match")
        .required("Confirm Password is required"),
      });

export {userSignupValidationSchema};
