import Container from "../../../shared_components/atoms/container/Container";
import { TextArea } from "../../../shared_components/atoms/input/Input";
import Button from "../../../shared_components/atoms/button/Button";

const SAEPageInput = () => {
  return (
    <Container h="50%" w="90%">
      <TextArea style={{ height: "75%" }} />
      <Button variant="secondary">Submit Review</Button>
    </Container>
  );
};

export default SAEPageInput;
