import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../../../../shared/components/Button/Button';
import { Form } from '../../../../../shared/components/Form/Form';
import { Input } from '../../../../../shared/components/Form/components/Input/Input';
import Swal from 'sweetalert2';

import { schema, FormData } from './schema';
import api from '../../../../../services/api';
import '../../../styles/input.scss';
import { useNavigate } from 'react-router-dom';

export function FormSignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = (data: FormData) => signUpRegister(data);

  async function signUpRegister(data: FormData) {
    try {
      await api
        .post('/Auth/register', { ...data })
        .then((response) =>
          Swal.fire({
            icon: 'success',
            title: 'Sucesso...',
            text: `Usuário ${response.data.user.name} cadastrado!`
          })
        )
        .then(() => reset())
        .then(() => navigate('/'));
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuário já cadastrado!'
      })
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome completo"
        type="text"
        {...register('name')}
        error={errors.name}
      />
      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        {...register('password')}
        error={errors.password}
      />
      <Input
        label="Confirmação de Senha"
        type="password"
        {...register('passwordConfirm')}
        error={errors.passwordConfirm}
      />
      <Button type="submit">Cadastrar-se</Button>
    </Form>
  );
}
