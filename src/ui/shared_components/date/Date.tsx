import React from "react";
import Container from "../atoms/container/Container";
import Typography from "../atoms/typography/Typography";
import { Icon } from "@iconify/react";

const Date = () => {
  return (
    <Container m="0px 0" justify="start" h="30px" w="100%" fd="row">
      <Icon
        style={{ fontSize: 20, marginRight: 5 }}
        icon="mdi:calendar-month-outline"
      />
      <Typography variant="medium" weight={700}>
        3rd June, 2023
      </Typography>
    </Container>
  );
};

export default Date;
