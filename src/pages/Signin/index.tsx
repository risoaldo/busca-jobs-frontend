import { FiMail, FiLock } from 'react-icons/fi';
import logo from "../../assets/logo.svg";
import background from "../../assets/background.png";

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => (
  <Container>
   
    <Background>
      <img src={background} alt="BuscaJobs" />
    </Background>

    <Content>
      <img src={logo} alt="BuscaJobs" />
      <form>
        <Input icon={FiMail} name="email" placeholder="Email" />

        <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="forgot">Criar Conta!</a>
    </Content>
  </Container>
);

export default SignIn;
