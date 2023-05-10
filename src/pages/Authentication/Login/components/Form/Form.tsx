import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../../../../shared/components/Button/Button';
import { Form } from '../../../../../shared/components/Form/Form';
import { Input } from '../../../../../shared/components/Form/components/Input/Input';

import { schema, FormData } from './schema';
import api from '../../../../../services/api';
import Swal from 'sweetalert2';

interface SignInProps {
  id: string;
  name: string;
  email: string;
}

interface LoggedUserProps {
  user: SignInProps;
  accessToken: string;
}

export function FormSignIn() {
  async function signIn(data: FormData) {
    try {
      const response = await api.post('/Auth/login', { ...data });
      const { user, accessToken }: LoggedUserProps = response.data;
      api.defaults.headers.Authorization = `Bearer ${accessToken}`

      Swal.fire({
        icon:'success',
        title: 'Sucesso...',
        text: `Usuário: ${user.email} foi logado`
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: "Ops...",
        text: `Usuário: ${data.email} não cadastrado`
      })
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => signIn(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="submit">Entrar</Button>
    </Form>
  );
}
