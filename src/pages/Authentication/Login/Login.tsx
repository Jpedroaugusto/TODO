import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Title } from '../components/Title/Title';
import { FormSignIn } from './components/Form/Form';



export function Login() {
  return (
    <>
      <Header href="cadastro">Não possui uma conta?</Header>
      <Main>
        <div className="container">
          <Title>Autenticação</Title>
          <FormSignIn/>
        </div>
      </Main>
    </>
  );
}
