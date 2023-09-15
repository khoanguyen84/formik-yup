import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';

const registerFormValidation = yup.object({
    name: yup.string().required(),
    password: yup.string().min(8).required(),
    confirmPassword : yup.string().min(8).oneOf([yup.ref('password')], 'Confirm password does not match').required()
})
const RegisterForm = () => {
    const formik = useFormik({
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
        <div className=" d-flex align-items-center justify-content-center ">
            <div className="row col-md-6 py-3">
                <h3 className="fw-bolder text-center">Register Form</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" className="form-control form-control-sm" onChange={formik.handleChange}/>
                        {formik.errors?.name && formik.touched.name && (<span className="text-danger">{formik.errors?.name}</span>)}
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control form-control-sm" onChange={formik.handleChange} />
                        {formik.errors?.password && formik.touched.password && (<span className="text-danger">{formik.errors?.password}</span>)}
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="confirmPassword" className="form-control form-control-sm" onChange={formik.handleChange} />
                        {formik.errors?.confirmPassword && formik.touched.confirmPassword && (<span className="text-danger">{formik.errors?.confirmPassword}</span>)}
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className="btn btn-dark btn-sm">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;