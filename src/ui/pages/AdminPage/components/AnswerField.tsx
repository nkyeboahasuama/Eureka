import Container from "../../../shared_components/atoms/container/Container";
import { TextArea } from "../../../shared_components/atoms/input/Input";
import Button from "../../../shared_components/atoms/button/Button";

const AnswerField = () => {
  return (
    <Container w="90%" h="330px">
      <Container w="100%" h="100%">
        <TextArea style={{ height: "80%", margin: 0, padding: 0 }} />
        <Button variant="secondary">Submit your answer</Button>
      </Container>
    </Container>
  );
};

export default AnswerField;
