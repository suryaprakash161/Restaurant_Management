import * as Yup from 'yup';

const signUpSchema = () => Yup.object({
    firstName:Yup.string().min(5).max(16).required("Please Enter the first Name !"),
    lastName:Yup.string().min(1).max(3).required("Please Enter the last Name !"),
    username:Yup.string().min(5).max(12).required("Please Enter the username!"),
    email:Yup.string().email().min(5).max(30).required("Please Enter the Email ID !"),
    password:Yup.string().min(6).max(15).required("Please Enter the password !"),
})

export default signUpSchema;