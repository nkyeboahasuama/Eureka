import { useState, useEffect } from "react";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Chips from "../../../shared_components/atoms/chips/Chips";
import UserEmail from "../../../shared_components/user/UserEmail";
import AdminModal from "../../../modals/adminModal/AdminModal";
import { IQuestionDocument } from "../../../../core";
import { lineClampStyle } from "../../../shared_components/lineHeightStyles/lineHeight";
import Loader from "../../../shared_components/loader/Loader";
import DateComponent from "../../../shared_components/date/Date";
import { useSubscribeToRepository } from "../../../hooks/useSubscribeCloudDocs";
import { Repos } from "../../../../infras/cloud/repos/interface";
import { questionService } from "../../../../services";

const QuestionContainer = () => {
  const [modal, setModal] = useState(false);
  const {
    data: questions,
    error,
    loading,
  } = useSubscribeToRepository<IQuestionDocument>(Repos.QUESTION);
  const [selectedQuestion, setSelectedQuestion] =
    useState<IQuestionDocument | null>(null);

  const [validatedQuestions, setValidatedQuestions] = useState<
    IQuestionDocument[]
  >([]);

  useEffect(() => {
    const getQuestionsList = async () => {
      const data = await questionService.getValidatedQuestions();
      setValidatedQuestions(data);
    };
    getQuestionsList();
  }, []);

  const openAdminModal = (question: IQuestionDocument) => {
    setModal(true);
    setSelectedQuestion(question);
  };

  const closeAdminModal = () => {
    setModal(false);
    setSelectedQuestion(null);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Typography variant="h3" weight={500}>
        No data available
      </Typography>
    );
  }

  if (questions.length === 0 && !error) {
    return (
      <Typography variant="h3" weight={500}>
        No data available
      </Typography>
    );
  }

  return (
    <>
      {validatedQuestions.map((question) => (
        <BodyContainer
          key={question.id}
          w="90%"
          text="left"
          m="20px 0"
          align="left"
        >
          <DateComponent date={question.createdAt} />
          <Typography
            style={{
              cursor: "pointer",
              ...lineClampStyle,
            }}
            onClick={() => openAdminModal(question)}
            variant="h3"
            weight={500}
          >
            {question.body}
          </Typography>

          <BodyContainer
            m="10px 0 0 0"
            fd="row"
            justify="space-between"
            w="100%"
          >
            <UserEmail user={question.user} />
            <Chips variant={question.availability} />
          </BodyContainer>
        </BodyContainer>
      ))}
      {modal && (
        <AdminModal
          question={selectedQuestion}
          closeAdminModal={closeAdminModal}
        />
      )}
    </>
  );
};

export default QuestionContainer;
