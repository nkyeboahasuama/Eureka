import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import SAAField from "../components/SAAField";
import { NavLink } from "../../../shared_components/header/Header";

const SAAPage = () => {
  const navigations = (
    <>
      <NavLink href="/questions">Question poll</NavLink>
      <NavLink href="/verifyanswer" isActive={true}>
        Answer poll
      </NavLink>
    </>
  );

  return (
    <Container variant="primary" justify="start">
      <Header page={navigations} />
      <SAAField />
    </Container>
  );
};

export default SAAPage;
