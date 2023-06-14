import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import SAQField from "../components/SAQField";
import Navigations from "../../../shared_components/navLinks/Navigations";

const SAQPage = () => {
  return (
    <Container variant="primary" justify="start">
      <Header page={<Navigations />} />
      <SAQField />
    </Container>
  );
};

export default SAQPage;
