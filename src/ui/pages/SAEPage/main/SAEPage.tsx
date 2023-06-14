import Container from "../../../shared_components/atoms/container/Container";
import SAEPageQField from "../components/SAEPageQField";
import Header from "../../../shared_components/header/Header";
import SAEPageInput from "../components/SAEPageInput";
import Navigations from "../../../shared_components/navLinks/Navigations";

const SAEPage = () => {
  return (
    <Container justify="space-between">
      <Header page={<Navigations />} />
      <SAEPageQField />
      <SAEPageInput />
    </Container>
  );
};

export default SAEPage;
