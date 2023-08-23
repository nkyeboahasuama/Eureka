import React from "react";
import Container from "../atoms/container/Container";
import Typography from "../atoms/typography/Typography";
import { Icon } from "@iconify/react";

interface IDateProp {
  date?: string | null;
}

const DateComponent: React.FC<IDateProp> = ({ date }) => {
  const markedAt = date ? new Date(date) : null;
  const formattedDate = markedAt?.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <Container
      m="0px 0"
      justify="start"
      h="30px"
      w="100%"
      fd="row"
      style={{ fontSize: "15px" }}
    >
      <Icon style={{ marginRight: 5 }} icon="mdi:calendar-month-outline" />
      <Typography variant="medium" weight={700}>
        {formattedDate}
      </Typography>
    </Container>
  );
};

export default DateComponent;
