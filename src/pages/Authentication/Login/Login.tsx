import { Button } from '../../../shared/components/Button/Button';
import { Form } from '../../../shared/components/Form/Form';
import { InputField } from '../../../shared/components/Form/components/InputField/InputField';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Title } from '../components/Title/Title';

export function Login() {
  return (
    <>
      <Header href="cadastro" children={'Não possui uma conta?'} />

      <Main>
        <div className="container">
          <Title>Autenticação</Title>

          <Form>
            <div className="container">
              <InputField
                label="Email"
                type="email"
                name="signIn-email-field"
              />
              <InputField
                label="Senha"
                type="password"
                name="signIn-password-field"
              />
            </div>
            <Button type="submit">Entrar</Button>
          </Form>
        </div>
      </Main>
    </>
  );
}
