import Container from "../../../shared_components/atoms/container/Container";
import SAEPageQField from "../components/SAEPageQField";
import Header from "../../../shared_components/header/Header";
import SAEPageInput from "../components/SAEPageInput";
import { NavLink } from "../../../shared_components/header/Header";

const SAEPage = () => {
  const navigations = (
    <>
      <NavLink href="/verifyquestion">Question poll</NavLink>
      <NavLink href="/verifyanswer" isActive={true}>
        Answer poll
      </NavLink>
    </>
  );
  return (
    <Container justify="space-between">
      <Header page={navigations} />
      <SAEPageQField />
      <SAEPageInput />
    </Container>
  );
};

export default SAEPage;
