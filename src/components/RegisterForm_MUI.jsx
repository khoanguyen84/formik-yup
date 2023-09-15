import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { Box, Stack, TextField, Typography } from "@mui/material";

const registerFormValidation = yup.object({
    name: yup.string().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().min(8).oneOf([yup.ref('password')], 'Confirm password does not match').required()
})
const RegisterForm_MUI = () => {
    const { handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: registerFormValidation,
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        }
    })
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Stack display={"flex"}>
                <Typography variant="h5">Register Form</Typography>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <TextField fullWidth label="Name" name="name" onChange={handleChange} />
                        {errors?.name && touched.name && (<span className="text-danger">{errors?.name}</span>)}
                    </Box>
                    <div className="form-group mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control form-control-sm" onChange={handleChange} />
                        {errors?.password && touched.password && (<span className="text-danger">{errors?.password}</span>)}
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="confirmPassword" className="form-control form-control-sm" onChange={handleChange} />
                        {errors?.confirmPassword && touched.confirmPassword && (<span className="text-danger">{errors?.confirmPassword}</span>)}
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className="btn btn-dark btn-sm">Register</button>
                    </div>
                </form>
            </Stack>
        </Box>
    )
}

export default RegisterForm_MUI;