import Container from "../../../shared_components/atoms/container/Container";
import { BaseInput } from "../../../shared_components/atoms/input/Input";
import Button from "../../../shared_components/atoms/button/Button";

const AnswerField = () => {
  return (
    <Container variant="primary" h="45%">
      <Container h="100%">
        <BaseInput h="80%" w="90%" border="black 1px solid" />
        <Button variant="secondary">Submit your answer</Button>
      </Container>
    </Container>
  );
};

export default AnswerField;
