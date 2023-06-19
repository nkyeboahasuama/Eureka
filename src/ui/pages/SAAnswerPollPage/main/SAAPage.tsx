import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import Navigations from "../../../shared_components/navLinks/Navigations";
import SAAField from "../components/SAAField";

const SAAPage = () => {
  return (
    <Container h="auto" variant="primary" justify="start">
      <Header page={<Navigations />} />
      <SAAField />
    </Container>
  );
};

export default SAAPage;
