import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Esse campo precisa ser preenchido'),
  email: Yup.string()
    .email('Email inválido')
    .required('Esse campo precisa ser preenchido'),
  password: Yup.string().required('Esse campo precisa ser preenchido'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
    .required('Esse campo precisa ser preenchido'),
});

export type FormData = Yup.InferType<typeof schema>;
