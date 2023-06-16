import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { Icon } from "@iconify/react";
import InfoField from "../../../shared_components/infoBackBtn/InfoBackBtnField";

const SAEPageQField = () => {
  return (
    <Container w="90%" align="start" h="40%" justify="space-between">
      <InfoField />
      <Container h="150px" fd="row" justify="space-between" align="start">
        <Icon
          style={{
            fontSize: 20,
            width: 100,
            marginRight: 5,
          }}
          icon="mdi:help-circle-outline"
        />
        <Typography textalign="left" variant="normal" weight={600}>
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
