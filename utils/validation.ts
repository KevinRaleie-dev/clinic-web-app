import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email().label('Email').required(),
    firstName: yup.string().label('First name').required(),
    lastName: yup.string().label('Last name').required(),
    password: yup.string().min(6).label('Password').required()
});