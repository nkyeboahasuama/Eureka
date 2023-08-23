import Container from "../../../shared_components/atoms/container/Container";
import { TextArea } from "../../../shared_components/atoms/input/Input";
import Button from "../../../shared_components/atoms/button/Button";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { IAnswerDocument } from "../../../../core";
import { getAnswerById } from "../../../functions/answers";
import { answerService } from "../../../../services/answer.service";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../types/routing";
import { useToast } from "../../../hooks/useToast";

const SAEPageInput = () => {
  const [textareaValue, setTextareaValue] = useState<IAnswerDocument | string>(
    ""
  );
  const [answer, setAnswer] = useState<IAnswerDocument | null>(null);

  const navigate = useNavigate();
  const { show: showToast, update: updateToast } = useToast();

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
      console.error(error);
    }
  }, [answerId]);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaValue(event.target.value);
  };

  const adminId = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : null;

  const handleSubmit = async () => {
    if (adminId && answerId && textareaValue) {
      if (true) {
        try {
          showToast("Submitting review...", { isLoading: true });
          await answerService.editAndSubmitDraft(
            adminId.id,
            answerId,
            textareaValue as string
          );
          setTextareaValue("");
          updateToast("Review submitted", {
            isLoading: false,
            autoClose: 1200,
          });

          navigate(AppRoutes.SADMIN_ANSWERS);
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  return (
    <Container h="45%" w="90%">
      <TextArea
        value={textareaValue as string}
        onChange={handleTextareaChange}
      />
      {adminId.id !== answer?.admin && answer?.availability === "open" && (
        <Button onClick={handleSubmit} variant="secondary">
          Submit Review
        </Button>
      )}
    </Container>
  );
};

export default SAEPageInput;
