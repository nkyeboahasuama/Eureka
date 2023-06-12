import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Button from "../../../shared_components/atoms/button/Button";
import { Icon } from "@iconify/react";
import Date from "../../../shared_components/date/Date";
import UserEmail from "../../../shared_components/user/UserEmail";
import { Link, useNavigate } from "react-router-dom";

const SAEPageQField = () => {
  const navigate = useNavigate();
  return (
    <Container w="90%" align="start" h="250px" p="0px 0">
      <Button
        onClick={() => navigate(-1)}
        variant="secondary"
        w="100px"
        style={{ marginLeft: 0 }}
      >
        Back
      </Button>

      <Container fd="row" h="30px">
        <Date />
        <UserEmail />
      </Container>
      <Container m="0px 0" h="150px" fd="row" align="start">
        <Icon
          style={{
            fontSize: 20,
            width: 120,
            marginRight: 5,
          }}
          icon="mdi:help-circle-outline"
        />
        <Typography textAlign="left" variant="normal" weight={600}>
          Hows can I be saved if I am dead but I know with no money and I pray
          at the last hour that God should save me but I dont end the prayer
          with Amen and my land lady comes out to rape me and I scream God and I
          dont see it?
        </Typography>
      </Container>
    </Container>
  );
};

export default SAEPageQField;
