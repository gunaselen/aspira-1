import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useState, useRef } from 'react'
import FormInput from '../../components/input-form/FormInput'
import { useForm, Controller } from 'react-hook-form'
import "./MyProfile.scss"
import { EditIcon, ProfileIcon } from '../../utils/images'
import Button from '../../components/button/Button'

export default function Document() {
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
            name: "balaji",
            lastName: "g",
            designation: "ui",
            description: "sum think",
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

    const onsSubmit = (data) => {
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
                    <form className="formsection" onSubmit={handleSubmit(onsSubmit)}>
                        <div>
                            <Controller
                                name="file"
                                control={control}
                                defaultValue={null}
                                render={({ field }) => (
                                    <input className=''
                                        type="file"
                                        accept=".pdf"
                                        ref={fileInputRef}
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            setValue('file', file);
                                        }}

                                    />
                                )}
                            />


                            <div className="profile-header">
                                <div className="header-profile-img"><img src={file ? URL.createObjectURL(file) : ProfileIcon} alt="" /></div>
                                <div className="header-profile-section">
                                    {edit && <p className='header-profile-id'>ID:AS0101</p>}
                                    
                                    <h6 className='header-profile-name'>Rio Johnson</h6>
                                    {!edit &&
                                    <div className="profile-header">
                                    <button type="button" onClick={onEditClick}>
                                        Edit
                                    </button>
                                    <button type="button" onClick={onRemoveClick}>
                                        Remove
                                    </button>
                                </div>
                                     }
                                    
                                </div>
                            </div>


                        </div>














                        <div className="formsection-inner">
                            <FormInput disabledInput={edit} label={"First Name"} placeholder={"Email"} errorMSG={errors.name?.message}
                                required={{
                                    ...register("name", {
                                        required: "Name is required",
                                    })
                                }}
                            />
                            <FormInput disabledInput={edit} label={"last Name"} placeholder={"last Name"} errorMSG={errors.lastName?.message}
                                required={{
                                    ...register("lastName", {
                                        required: "Last Name is required",
                                    })
                                }}
                            />

                            <FormInput disabledInput={edit} label={"Designation"} placeholder={"Designation"} errorMSG={errors.designation?.message}
                                required={{
                                    ...register("designation", {
                                        required: "Designation is required",
                                    })
                                }}
                            />

                        </div>
                        <FormInput disabledInput={edit} label={"Description"} placeholder={"Description"} errorMSG={errors.description?.message} textarea={true}
                            required={{
                                ...register("description", {
                                    required: "Description is required",
                                })
                            }}
                        />
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



