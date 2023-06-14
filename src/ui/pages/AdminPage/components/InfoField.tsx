import Container from "../../../shared_components/atoms/container/Container";
import Date from "../../../shared_components/date/Date";
import UserEmail from "../../../shared_components/user/UserEmail";
import BackBtn from "../../../shared_components/backBtn/BackBtn";

const InfoField = () => {
  return (
    <Container
      style={{ height: 110, flexShrink: 0 }}
      w="90%"
      justify="center"
      align="start"
    >
      <BackBtn />
      <Container h="45px" m="5px 0 0 0" align="start" fd="row">
        <Date />
        <UserEmail />
      </Container>
    </Container>
  );
};

export default InfoField;
