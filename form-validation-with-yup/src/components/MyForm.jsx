import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema
const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

const MyForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
        alert("Form submitted successfully!");
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label>Name</label>
                <input type="text" {...register("name")} />
                <p className="error">{errors.name?.message}</p>
            </div>

            <div className="form-control">
                <label>Email</label>
                <input type="email" {...register("email")} />
                <p className="error">{errors.email?.message}</p>
            </div>

            <div className="form-control">
                <label>Password</label>
                <input type="password" {...register("password")} />
                <p className="error">{errors.password?.message}</p>
            </div>

            <div className="form-control">
                <label>Confirm Password</label>
                <input type="password" {...register("confirmPassword")} />
                <p className="error">{errors.confirmPassword?.message}</p>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
