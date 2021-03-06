import logo from "../../assets/logo.svg";
import background from "../../assets/background.png";

import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => (
  <Container>
   
    <Background>
      <img src={background} alt="BuscaJobs" />
    </Background>

    <Content>
      <img src={logo} alt="BuscaJobs" />
      <form>
        <input placeholder="email" />

        <input placeholder="senha" type="password" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="forgot">Criar Conta!</a>
    </Content>
  </Container>
);

export default SignIn;
