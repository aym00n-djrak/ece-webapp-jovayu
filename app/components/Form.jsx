//Realiser un formulaire en jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
});

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Formulaire :</h1>

            <input type="text" placeholder="First name" {...register("firstName")} />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <input type="text" placeholder="Last name" {...register("lastName")} />
            {errors.lastName && <p>{errors.lastName.message}</p>}
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
            <input type="submit" />

        </form>
    );
}

export default Form;