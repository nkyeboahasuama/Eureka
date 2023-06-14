import React from "react";
import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Button from "../../../shared_components/atoms/button/Button";

const SuccessField = () => {
  return (
    <Container h="60%" variant="secondary">
      <Container w="91%" h="80%" justify="start">
        <Typography variant="h1">{"\u{1F389}"}Congratulations!</Typography>
        <Typography variant="normal">
          An answer will be sent to via your mail soon.
        </Typography>
      </Container>
      <Button variant="primary">Back to home</Button>
    </Container>
  );
};

export default SuccessField;
