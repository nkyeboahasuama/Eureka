import { TextArea } from "../../../shared_components/atoms/input/Input";
import Button from "../../../shared_components/atoms/button/Button";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import { useState } from "react";
import { answerService } from "../../../../services/answer.service";
import { useParams, useNavigate } from "react-router";
import { AppRoutes } from "../../../types/routing";
import { useToast } from "../../../hooks/useToast";

const AnswerField = () => {
  const [body, setBody] = useState("");
  const params = useParams();
  const questionId = params.id;
  const navigate = useNavigate();

  const admin = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : null;

  const { show: showToast, update: updateToast } = useToast();

  const handleDraftAnswerSubmit = async () => {
    if (admin && questionId && body) {
      try {
        showToast("Submittng answer...", { isLoading: true });
        await answerService.submitDraftAnswer(admin.id, questionId, body);
        updateToast("Submitted successfully", {
          isLoading: false,
          autoClose: 1500,
        });
        setBody("");
        if (admin.isSuper) {
          navigate(AppRoutes.SADMIN_QUESTIONS);
        } else {
          navigate(AppRoutes.ADMIN_QUESTIONS);
        }
      } catch (error) {
        updateToast("There was an error", {
          isLoading: false,
          autoClose: 1500,
        });
        console.error(error);
      }
    }
  };

  return (
    <BodyContainer style={{ flexShrink: 0, height: "45%" }} w="90%">
      <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
      <Button onClick={handleDraftAnswerSubmit} variant="secondary">
        Submit
      </Button>
    </BodyContainer>
  );
};

export default AnswerField;
