import { TextArea } from "../../../shared_components/atoms/input/Input";
import Button from "../../../shared_components/atoms/button/Button";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import { ChangeEvent, useState } from "react";
import { answerService } from "../../../../services/answer.service";
import { useParams } from "react-router";

const AnswerField = () => {
  const [body, setBody] = useState("");
  const params = useParams();
  const questionId = params.id;

  let debounce: NodeJS.Timeout;

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      setBody(e.target.value);
    }, 1000);
    return () => {
      clearTimeout(debounce);
    };
  };

  const adminId = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : null;

  const handleDraftAnswerSubmit = async () => {
    if (adminId && questionId && body) {
      console.log(adminId.id);
      console.log(questionId);
      console.log(body);
      // const data = await answerService.submitDraftAnswer(
      //   adminId.id,
      //   questionId,
      //   body
      // );
      // console.log(data);
    } else {
      console.log("missing smth");
    }
    // answerService.submitDraftAnswer(adminId, questionId, body);
  };

  return (
    <BodyContainer style={{ flexShrink: 0, height: "45%" }} w="90%">
      <TextArea
        onChange={handleTextChange}
        style={{ height: "80%", margin: 0 }}
      />
      <Button onClick={handleDraftAnswerSubmit} variant="secondary">
        Submit your answer
      </Button>
    </BodyContainer>
  );
};

export default AnswerField;
