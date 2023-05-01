import { Button } from '../../../shared/components/Button/Button';
import { Form } from '../../../shared/components/Form/Form';
import { InputField } from '../../../shared/components/Form/components/InputField/InputField';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Title } from '../components/Title/Title';

export function Cadastro() {
  return (
    <>
      <Header href="/" children={'Já possui uma conta?'} />

      <Main>
        <div className='container'>
          <Title>Nova conta</Title>

          <Form>
            <div className='container'>
              <InputField label="Nome" type="text" name="signUp-email-field" />
              <InputField label="Email" type="email" name="signUp-email-field" />
              <InputField label="Senha" type="password" name="signUp-password-field" />
              <InputField label="Confirmação de senha" type="password" name="signUp-confirm-password-field" />
            </div>
            <Button type="submit">Cadastrar-se</Button>
          </Form>

        </div>
      </Main>
    </>
  );
}
