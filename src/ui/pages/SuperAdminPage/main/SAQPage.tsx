import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import SAQField from "../components/SAQField";
import { NavLink } from "../../../shared_components/header/Header";

const SAQPage = () => {
  const navigations = (
    <>
      <NavLink href="/verifyquestion" isActive={true}>
        Question poll
      </NavLink>
      <NavLink href="/verifyanswer">Answer poll</NavLink>
    </>
  );
  return (
    <Container variant="primary" justify="start">
      <Header page={navigations} />
      <SAQField />
    </Container>
  );
};

export default SAQPage;
