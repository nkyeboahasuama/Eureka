import React from "react";
import Container from "../atoms/container/Container";
import Typography from "../atoms/typography/Typography";
import { Icon } from "@iconify/react";

interface IUserEmail {
  user?: string;
}

const UserEmail: React.FC<IUserEmail> = ({ user }) => {
  return (
    <Container
      justify="end"
      h="30px"
      w="fit"
      fd="row"
      style={{ fontSize: "15px" }}
    >
      <Icon style={{ marginRight: 5 }} icon="mdi:account" />
      <Typography variant="small" weight={500}>
        {user}
      </Typography>
    </Container>
  );
};

export default UserEmail;
