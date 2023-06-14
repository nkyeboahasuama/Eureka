import React from "react";
import Container from "../atoms/container/Container";
import Typography from "../atoms/typography/Typography";
import { Icon } from "@iconify/react";

const UserEmail = () => {
  return (
    <Container justify="end" h="30px" w="fit" fd="row">
      <Icon style={{ fontSize: 20, marginRight: 5 }} icon="mdi:account" />
      <Typography variant="medium" weight={600}>
        ttdonald@gmail.com
      </Typography>
    </Container>
  );
};

export default UserEmail;
