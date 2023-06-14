import { TextArea } from "../../../shared_components/atoms/input/Input";
import Button from "../../../shared_components/atoms/button/Button";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";

const AnswerField = () => {
  return (
    <BodyContainer style={{ flexShrink: 0, height: "45%" }} w="90%">
      <TextArea style={{ height: "80%", margin: 0 }} />
      <Button variant="secondary">Submit your answer</Button>
    </BodyContainer>
  );
};

export default AnswerField;
