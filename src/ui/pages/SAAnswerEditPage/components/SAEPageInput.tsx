import Container from "../../../shared_components/atoms/container/Container";
import { TextArea } from "../../../shared_components/atoms/input/Input";
import Button from "../../../shared_components/atoms/button/Button";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { IAnswerDocument } from "../../../../core";
import { getAnswerById } from "../../../functions/answers";
import { answerService } from "../../../../services/answer.service";
import { useNavigate } from "react-router-dom";

const SAEPageInput = () => {
  const [textareaValue, setTextareaValue] = useState<IAnswerDocument | string>(
    ""
  );
  const [answer, setAnswer] = useState<IAnswerDocument | null>(null);

  const navigate = useNavigate();

  const { answerId } = useParams();
  useEffect(() => {
    try {
      if (answerId) {
        const fetchAnswer = async () => {
          const answer = await getAnswerById(answerId);
          setAnswer(answer);
          setTextareaValue(answer.body || "");
        };
        fetchAnswer();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaValue(event.target.value);
  };

  const adminId = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : null;

  console.log(adminId);
  console.log(answer);

  const handleSubmit = async () => {
    if (adminId && answerId && textareaValue) {
      if (true) {
        try {
          await answerService.editAndSubmitDraft(
            adminId.id,
            answerId,
            textareaValue as string
          );
          setTextareaValue("");
          navigate("/superadmin/validateanswers");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <Container h="45%" w="90%">
      <TextArea
        style={{ height: "80%", margin: "0" }}
        value={textareaValue as string}
        onChange={handleTextareaChange}
      />
      {adminId.id === answer?.admin ? (
        <Button
          style={{ border: "black 1px solid" }}
          onClick={handleSubmit}
          variant="disabled"
        >
          Not allowed to review
        </Button>
      ) : (
        <Button onClick={handleSubmit} variant="secondary">
          Submit Review
        </Button>
      )}
    </Container>
  );
};

export default SAEPageInput;
