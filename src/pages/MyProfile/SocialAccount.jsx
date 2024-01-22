import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useState, useRef } from 'react'
import FormInput from '../../components/input-form/FormInput'
import { useForm, Controller } from 'react-hook-form'
import "./MyProfile.scss"
import { EditIcon, ProfileIcon } from '../../utils/images'
import Button from '../../components/button/Button'
import { SubTitele } from '../../components/subTitele/SubTitele'
import FileUpload from '../../components/FileUpload'

export default function SocialAccount() {
    const [edit, setedit] = useState(true);
    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];


    //     if (file) {
    //       const reader = new FileReader();

    //       reader.onloadend = () => {
    //         setProfileImage(reader.result);

    //       };

    //       reader.readAsDataURL(file);
    //     }
    //   };
    //   const handleRemoveImage = () => {
    //     console.log(profileImage)
    //     setProfileImage(null);
    //   };



    const form = useForm({
        defaultValues: {
          linkedIn: "balaji",
          gitHub: "g",
          instagram: "ui",
          email: "sum think",
          contactnumber: "sum think",
        },
        mode: "all",


    });
    const { register, control, handleSubmit, formState, setValue, watch } = form;
    const { errors } = formState;

    const fileInputRef = useRef(null);
    const file = watch('file');
    // const onSubmit = data => {
    //     console.log("form in submite", data, errors.username?.message)

    // }

    const onSubmit = (data) => {
        // Handle form submission logic
        setedit(true)
        console.log(data);
    };

    const onEditClick = () => {
        // Handle edit button click
        // Open file input dialog
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const onRemoveClick = () => {
        // Handle remove button click
        // Reset the form value for the file input
        setValue('file', null);
    };
    return (
        <>
            <Layout header={"My Profile"}>
                <div className="profile-section">
                  <SubTitele>Social Accounts</SubTitele>
                    <form className="formsection" onSubmit={handleSubmit(onSubmit)}>
                      
                        <div className="formsection-inner">
                            <FormInput disabledInput={edit} label={"LinkedIn"} placeholder={"Enter LinkedIn link"} errorMSG={errors.linkedIn?.message} clipboard={!edit}
                                // required={{
                                //     ...register("linkedIn", {
                                //         required: "Name is required",
                                //     })
                                // }}
                            />
                            <FormInput disabledInput={edit} label={"GitHub"} placeholder={"Enter GitHub link"} errorMSG={errors.gitHub?.message} clipboard={!edit}
                                // required={{
                                //     ...register("gitHub", {
                                //         required: "Last Name is required",
                                //     })
                                // }}
                            />

                            <FormInput disabledInput={edit} label={"Instagram link"} placeholder={"Enter Instagram link"} errorMSG={errors.instagram?.message} clipboard={!edit}
                                // required={{
                                //     ...register("instagram", {
                                //         required: "Designation is required",
                                //     })
                                // }}
                            />
                              <FormInput disabledInput={edit} label={"Email ID"} placeholder={"Enter Email ID"} errorMSG={errors.email?.message} clipboard={!edit}
                                // required={{
                                //     ...register("email", {
                                //         required: "Designation is required",
                                //     })
                                // }}
                            />
                              <FormInput disabledInput={edit} label={"Contact number"} placeholder={"Enter Contact number"} errorMSG={errors.contactnumber?.message} 
                                // required={{
                                //     ...register("contactnumber", {
                                //         required: "Designation is required",
                                //     })
                                // }}
                            />

                        </div>
                     
                        <div className="button-section">

                        {edit && <Button functions={()=>setedit(false)} ><img src={EditIcon} alt="EditIcon" /> Edit</Button>}
                        {!edit &&<>
<Button functions={()=>setedit(true)}  > Cancel</Button>
<Button type={"submit"}> save</Button>
</>}
                        </div>


                    </form>



                </div>
               
            </Layout>
        </>
    )
}



