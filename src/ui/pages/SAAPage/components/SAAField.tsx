import { Icon } from "@iconify/react";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Container from "../../../shared_components/atoms/container/Container";
import Date from "../../../shared_components/date/Date";
import Chips from "../../../shared_components/atoms/chips/Chips";
import { Link } from "react-router-dom";

const SAAField = () => {
  return (
    <Container m="10px 0" w="90%" h="80%" justify="start">
      <Date />
      <Container m="20px 0" w="100%" align="start" h="15%">
        <Container justify="start" fd="row">
          <Icon icon="mdi:help-circle-outline" />
          <Typography variant="medium">
            How can I be saved if i am dead?
          </Typography>
        </Container>
        <Container text="left" m="10px 0">
          <Typography variant="h2">
            <Link to={"/edit"} style={{ color: "inherit" }}>
              Hello Jacob, to be saved, you have to belie...
            </Link>
          </Typography>
        </Container>
        <Chips variant="open" />
      </Container>
    </Container>
  );
};

export default SAAField;