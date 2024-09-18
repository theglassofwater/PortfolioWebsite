import React from "react";
import styles from "./Contact.module.css";
import {useForm, Controller} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import AxiosInstance from "../Axios";

const Contact = () => {
    const schema = object().shape({
        name: string().required('Name is required'),
        email: string().email().required('Email is required'),
        message: string().required('Message is required')
    });

    const { register, control, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  
    const onSubmit = data => {
        AxiosInstance.post('users/', {
            name: data.name,
            email: data.email,
            message: data.message
        })
        .then(response => {
            console.log('Data successfully posted:', response.data);
        })
        .catch(error => {
            console.log('Error posting data:', error);
        });
    };
    return (
        <section id="contact" className={styles.container}>
            <h1 className="sectionTitle">contact</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formGroup">
                    <label htmlFor="name" hidden>Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" {...register('name', { required: 'name is required' })} required />
                </div>
                <div className="">
                    <label htmlFor="Email" hidden>Email</label>
                    <input type="text" id="Email" name="Email" placeholder="Email" {...register('email', { required: 'email is required' })} required />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="">
                    <label htmlFor="Message" hidden>Message</label>
                    <textarea type="text" id="Message" name="Message" placeholder="Message" {...register('message', { required: 'message is required' })} required />
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <input type="submit" value="Submit" />  {/* add text or something to show it is submitted */}
            </form>
        </section>
    );
}

export default Contact;