import Container from "../../../shared_components/atoms/container/Container";
import { Icon } from "@iconify/react";
import Typography from "../../../shared_components/atoms/typography/Typography";

const SAAQField = () => {
  return (
    <Container justify="start" fd="row">
      <Icon
        icon="mdi:help-circle-outline"
        style={{ marginRight: "5px", fontSize: "20px" }}
      />
      <Typography variant="medium">How can I be saved if i am dead?</Typography>
    </Container>
  );
};

export default SAAQField;
