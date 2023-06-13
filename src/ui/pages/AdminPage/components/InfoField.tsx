import Container from "../../../shared_components/atoms/container/Container";
import Date from "../../../shared_components/date/Date";
import UserEmail from "../../../shared_components/user/UserEmail";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared_components/atoms/button/Button";

const InfoField = () => {
  const navigate = useNavigate();
  return (
    <Container w="100%" h="130px" justify="space-between">
      <Container w="90%" h="50px" align="left">
        <Button
          onClick={() => navigate(-1)}
          variant="secondary"
          w="100px"
          style={{ margin: 0 }}
        >
          Back
        </Button>
      </Container>
      <Container h="45px" m="5px 0 0 0" w="90%" align="start" fd="row">
        <Date />
        <UserEmail />
      </Container>
    </Container>
  );
};

export default InfoField;
