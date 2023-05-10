import { FormSignUp } from './components/Form/Form';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Title } from '../components/Title/Title';

export function Cadastro() {
  return (
    <>
      <Header href="/" children={'Já possui uma conta?'} />
      <Main>
        <div className="container">
          <Title>Nova conta</Title>
          <FormSignUp/>
        </div>
      </Main>
    </>
  );
}
