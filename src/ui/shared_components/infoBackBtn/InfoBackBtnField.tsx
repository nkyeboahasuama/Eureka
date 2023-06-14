import Container from "../atoms/container/Container";
import Date from "../date/Date";
import UserEmail from "../user/UserEmail";
import BackBtn from "../backBtn/BackBtn";

const InfoField = () => {
  return (
    <Container
      style={{ height: 110, flexShrink: 0 }}
      w="100%"
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
