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
import { useNavigate, useParams } from "react-router";
import Loader from "../../../shared_components/loader/Loader";
import { lineClampStyle } from "../../../shared_components/lineHeightStyles/lineHeight";

const SAdminQuestionField = () => {
  const [modal, setModal] = useState(false);
  const [adminModal, setAdminModal] = useState(false);
  const [questions, setQuestions] = useState<IQuestionDocument[]>([]);
  const [selectedQuestion, setSelectedQuestion] =
    useState<IQuestionDocument | null>(null);
  const { email } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getQuestionsList();
    verifySuperAdmin();
  }, []);

  const getQuestionsList = async () => {
    const data = await questionService.getQuestions();
    // console.log(data);
    setQuestions(data);
  };

  const verifySuperAdmin = () => {
    if (localStorage.getItem("isSuperLocal")) {
      const SuperAdminDate = JSON.parse(localStorage.getItem("isSuperLocal")!);
      console.log(SuperAdminDate);
      if (SuperAdminDate.isSuper) {
        console.log("Super User exists");
      } else {
        console.log("Is not Super admin");
      }
    } else {
      console.log("Does not exist");
    }
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
      {questions.length === 0 ? (
        <Loader />
      ) : (
        <BodyContainer
          // bg="blue"
          style={{ overflow: "scrollY" }}
          w="90%"
          text="left"
          m="20px 0"
        >
          {questions.map((question) => (
            <>
              {question.user && question.body && (
                <>
                  <SAQUserDetails user={question.user} />

                  <Typography
                    key={question.id}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      cursor: "pointer",
                      margin: "5px 0 10px 0",
                      ...lineClampStyle,
                      // backgroundColor: "red",
                    }}
                    variant="h3"
                    onClick={() => openAdminModal(question)}
                  >
                    {question.body}
                  </Typography>

                  <BodyContainer
                    justify="space-between"
                    m="0 0 40px 0"
                    fd="row"
                    // bg="green"
                  >
                    <Button
                      variant="secondary"
                      w="40%"
                      style={{ borderRadius: 20, margin: 0 }}
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
                  {modal && (
                    <SAdminModal
                      getQuestionsList={getQuestionsList}
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
                </>
              )}
            </>
          ))}
        </BodyContainer>
      )}
    </>
  );
};

export default SAdminQuestionField;
