import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Esse campo precisa ser preenchido'),
  password: Yup.string().required('Esse campo precisa ser preenchido'),
});

export type FormData = Yup.InferType<typeof schema>;
