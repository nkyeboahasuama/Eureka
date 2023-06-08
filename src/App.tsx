import styled from "styled-components";
import FormPage from "./ui/pages/FormPage/FormPage";
import { Container } from "./ui/atoms/Container";

function App() {
  const AppContainer = styled(Container)`
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100vh;
  `;

  return (
    <AppContainer>
      <FormPage />
    </AppContainer>
  );
}

export default App;
