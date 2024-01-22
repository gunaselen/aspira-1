import React, { useEffect } from 'react'
import FormInput from '../../components/input-form/FormInput'
import { Logo } from '../../utils/images'
import Button from '../../components/button/Button'
import AuthenticationLayout from './AuthenticationLayout/AuthenticationLayout'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts,selectedProducts, fetchProdcts } from '../../rexdux/actions/productionActions.jsx'




export default function LoginPage() {


// redux  

const product = useSelector((state)  => state.allproducts.products   )
const products = useSelector((state)  => state.product   )
const dispatch = useDispatch()



// const fetchProducts = async () =>{
//     const response = await axios 
//     .get("https://fakestoreapi.com/products")
//     .catch((err) =>{
//         console.log(err ,"err")
//     })
//     dispatch( setProducts( response.data))

// }




// const fetchProductsDetail = async () =>{
//     const response = await axios 
//     .get(`https://fakestoreapi.com/products/${3}`)
//     .catch((err) =>{
//         console.log(err ,"err")
//     })
//     dispatch( selectedProducts( response.data))

// }





useEffect(()=>{
   

   
},[])

console.log(product ,"dded")
console.log(products,"id")

// fetch('https://fakestoreapi.com/auth/login',{
//             method:'POST',
//             body:JSON.stringify({
//                 username: "mor_2314",
//                 password: "83r5^_"
//             })
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))




// other page 


// const {productId} = useParams()
// console.log(productId)  




    const navigate = useNavigate()

    const form = useForm({
        defaultValues: {
            email:"",
            password: "",
 
        },
        mode: "all",


    });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = data => {
        console.log("form in submite", data, errors.username?.message)
        dispatch(fetchProdcts(data))
        navigate("/")
    }

    return (
        <AuthenticationLayout>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="logo"><img src={Logo} alt="" /></div>
                <h2>Login Your Account</h2>
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
                <FormInput type="password" label={"Password"} placeholder={"Password"} errorMSG={errors.password?.message}  
                required={{
                    ...register("password",  {
                        required: "password is required",
                        validate: {

                            minLength: (v) =>
                            v.length >= 4 || "The password should have at most 7 characters",
                            maxLength: (v) =>
                            v.length <= 12 || "The password should have at most 12 characters",
                        },
                      })
                }} />

                
                <Link className='forgrt' to="/reset-password" >
                    Forget Password?
                </Link>

                <Button type={"submit"} fill={true} > Login</Button>

            </form>

        </AuthenticationLayout>

    )
}
