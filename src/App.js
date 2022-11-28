import Principal from "./pages/principal/index";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/app";

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Principal />
    </Container>
  );
}
