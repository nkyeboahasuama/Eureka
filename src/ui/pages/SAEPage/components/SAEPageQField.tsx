import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { Icon } from "@iconify/react";
import Date from "../../../shared_components/date/Date";
import UserEmail from "../../../shared_components/user/UserEmail";
import BackBtn from "../../../shared_components/backBtn/BackBtn";

const SAEPageQField = () => {
  return (
    <Container w="90%" align="start" h="37%" justify="space-between">
      <BackBtn />

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
