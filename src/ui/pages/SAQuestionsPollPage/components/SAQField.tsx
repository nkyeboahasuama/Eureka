import { useState } from "react";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Chips from "../../../shared_components/atoms/chips/Chips";
import Button from "../../../shared_components/atoms/button/Button";
import SAdminModal from "../../../modals/superAdminModal/SAdminModal";
import AdminModal from "../../../modals/adminModal/AdminModal";
import SAQUserDetails from "./SAQUserDetails";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import { useEffect } from "react";
import { questionService } from "../../../../services";
import { IQuestionDocument } from "../../../../core";

import ValidationChips from "../../../shared_components/atoms/validations/ValidationChips";
import Loader from "../../../shared_components/loader/Loader";
import { lineClampStyle } from "../../../shared_components/lineHeightStyles/lineHeight";

const SAdminQuestionField = () => {
  const [modal, setModal] = useState(false);
  const [adminModal, setAdminModal] = useState(false);
  const [questions, setQuestions] = useState<IQuestionDocument[]>([]);
  const [selectedQuestion, setSelectedQuestion] =
    useState<IQuestionDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuestionsList();
    verifySuperAdmin();
  }, []);

  const getQuestionsList = async () => {
    const data = await questionService.getQuestions();
    setQuestions(data);
    setLoading(false);
  };

  const verifySuperAdmin = () => {
    if (localStorage.getItem("isAdminLocal")) {
      JSON.parse(localStorage.getItem("isAdminLocal")!);
    }
  };

  const newState = (data: IQuestionDocument) => {
    const newQuestions = questions.map((q) => {
      if (q.id === data.id) {
        return data;
      } else {
        return q;
      }
    });
    setQuestions(newQuestions);
  };
  const openSAdminModal = (question: IQuestionDocument) => {
    setSelectedQuestion(question);
    setModal(true);
  };

  const closeSAdminModal = () => {
    setModal(false);
  };

  const openAdminModal = (question: IQuestionDocument) => {
    setSelectedQuestion(question);
    setAdminModal(true);
  };
  const closeAdminModal = () => {
    setAdminModal(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : questions.length === 0 ? (
        <>
          <Typography variant="h3">Data not available</Typography>
        </>
      ) : (
        <BodyContainer
          style={{ overflow: "scrollY" }}
          w="90%"
          text="left"
          m="10px 0"
        >
          {questions.map((question) => (
            <BodyContainer key={question.id}>
              {question.user && question.body && (
                <>
                  <SAQUserDetails
                    user={question.user}
                    date={question.createdAt}
                  />

                  <Typography
                    style={{
                      width: "100%",
                      textAlign: "left",
                      cursor: "pointer",
                      margin: "5px 0 10px 0",
                      ...lineClampStyle,
                    }}
                    variant="h3"
                    onClick={() => openAdminModal(question)}
                  >
                    {question.body}
                  </Typography>

                  <BodyContainer
                    justify="space-between"
                    m="0 0 25px 0"
                    fd="row"
                  >
                    <Button
                      variant="secondary"
                      w="40%"
                      style={{
                        borderRadius: 20,
                        margin: 0,
                        height: "30px",
                        fontSize: "12px",
                        width: "100px",
                      }}
                      onClick={() => openSAdminModal(question)}
                    >
                      Review
                    </Button>
                    <BodyContainer
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "6px",
                        justifyContent: "end",
                      }}
                    >
                      {question.validators.map((state) => (
                        <ValidationChips
                          key={state.admin}
                          validation={state.status}
                        />
                      ))}

                      <Chips variant={question.availability} />
                    </BodyContainer>
                  </BodyContainer>
                </>
              )}
            </BodyContainer>
          ))}
          {modal && (
            <SAdminModal
              getQuestionsList={getQuestionsList}
              questions={questions}
              newState={newState}
              closeSAdminModal={closeSAdminModal}
              question={selectedQuestion}
            />
          )}
          {adminModal && (
            <AdminModal
              question={selectedQuestion}
              closeAdminModal={closeAdminModal}
            />
          )}
        </BodyContainer>
      )}
    </>
  );
};

export default SAdminQuestionField;
