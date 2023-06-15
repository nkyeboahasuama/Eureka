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

const SAdminQuestionField = () => {
  const [modal, setModal] = useState(false);
  const [adminModal, setAdminModal] = useState(false);
  const [questions, setQuestions] = useState<IQuestionDocument[]>([]);

  useEffect(() => {
    const getQuestionsList = async () => {
      const data = await questionService.getQuestions();
      console.log(data);
      setQuestions(data);
    };
    getQuestionsList();
  }, []);

  const openSAdminModal = () => {
    setModal(true);
  };

  const closeSAdminModal = () => {
    setModal(false);
  };

  const openAdminModal = () => {
    setAdminModal(true);
  };
  const closeAdminModal = () => {
    setAdminModal(false);
  };

  return (
    <BodyContainer
      style={{ overflow: "scrollY" }}
      h="auto"
      w="90%"
      text="left"
      m="20px 0"
    >
      {questions.map((question) => (
        <>
          <SAQUserDetails />
          <Typography
            key={question.id}
            style={{ cursor: "pointer", margin: "5px 0 10px 0" }}
            variant="h3"
            onClick={openAdminModal}
          >
            {question.body}
          </Typography>

          <BodyContainer justify="space-between" fd="row">
            <Button
              variant="secondary"
              w="40%"
              style={{ borderRadius: 20, margin: 0 }}
              onClick={openSAdminModal}
            >
              Review
            </Button>
            <Chips variant={question.availability} />
          </BodyContainer>
          {modal && (
            <SAdminModal
              closeSAdminModal={closeSAdminModal}
              question={question}
            />
          )}
          {adminModal && (
            <AdminModal question={question} closeAdminModal={closeAdminModal} />
          )}
        </>
      ))}
    </BodyContainer>
  );
};

export default SAdminQuestionField;
