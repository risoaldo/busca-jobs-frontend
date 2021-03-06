import logo from "../../assets/logo.svg";
import background from "../../assets/background.png";

import { BiRocket } from "react-icons/bi";

import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="BuscaJobs" />
      <p>O lugar certo para você <strong style={{borderRadius: '5px', backgroundColor:'#FAA146', color: 'white', padding: '1px 10px'}}><i>encontrar</i></strong> a oportunidade da sua vida!</p>

      <button>
        Ir à busca
        <BiRocket />
      </button>
    </Content>

    <Background>
      <img src={background} alt="BuscaJobs" />
    </Background>
  </Container>
);

export default SignIn;
