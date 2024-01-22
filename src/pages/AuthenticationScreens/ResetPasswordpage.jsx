import React from 'react'
import FormInput from '../../components/input-form/FormInput'
import Button from '../../components/button/Button'
import AuthenticationLayout from './AuthenticationLayout/AuthenticationLayout'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';



export default function ResetPasswordpage() {
    const navigate = useNavigate()

    const form = useForm({
        defaultValues: {
        
            email:""
        },
       


    });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = data => {
        console.log("form in submite", data, errors.username?.message)
        
            navigate('/login')
        
    }
    return (
        <AuthenticationLayout>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <h2>Reset Password</h2>
                <FormInput label={"Email"} placeholder={"Email"} errorMSG={errors.email?.message} 
                  required={{
                    ...register("email", {
                        required: "Email is required",
                        validate: {
                  
                          matchPattern: (v) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                            "Email address must be a valid address"
                        },
                      })
                }}
                 />
                <Button type={"submit"} fill={true} > Submit</Button>

            </form>

        </AuthenticationLayout>
    )
}
