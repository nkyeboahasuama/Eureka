import Container from "../../../shared_components/atoms/container/Container";
import { BaseInput } from "../../../shared_components/atoms/input/Input";

import Button from "../../../shared_components/atoms/button/Button";
import Typography from "../../../shared_components/atoms/typography/Typography";

const FormField = () => {
  return (
    <Container w="100%" h="70%" variant="secondary">
      <Container text="justify" align="start" w="90%" h="20%">
        <Typography variant="h2">What is on your mind?</Typography>
        <Typography variant="normal">
          Share your thoughts with an amazing community of leaders.
        </Typography>
      </Container>
      <Container h="80%">
        <BaseInput
          h="80%"
          w="90%"
          border="white 1px solid"
          bg="black"
          color="white"
        />
        <Button variant="primary">Submit</Button>
      </Container>
    </Container>
  );
};

export default FormField;
