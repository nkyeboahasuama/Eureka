import Typography from "../../../shared_components/atoms/typography/Typography";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import InfoField from "../../../shared_components/infoBackBtn/InfoBackBtnField";
import Container from "../../../shared_components/atoms/container/Container";

import { IQuestionDocument } from "../../../../core";
import Loader from "../../../shared_components/loader/Loader";
import { Icon } from "@iconify/react";

interface IQuestion {
  question: IQuestionDocument | undefined;
}
const QuestionField: React.FC<IQuestion> = ({ question }) => {
  return (
    <>
      <BodyContainer
        style={{ height: "40%", overflow: "auto" }}
        w="90%"
        text="left"
        align="start"
        justify="space-between"
      >
        <InfoField date={question?.createdAt} user={question?.user} />
        {question === undefined ? (
          <Loader />
        ) : (
          <Container justify="left" align="start">
            <BodyContainer h="250px" fd="row" justify="left" align="center">
              <Icon
                icon="mdi:help-circle-outline"
                style={{
                  margin: 0,
                  width: "30px",
                }}
              />

              <Typography variant="h3" weight={600} textalign="left">
                {question && question.body}
              </Typography>
            </BodyContainer>
          </Container>
        )}
      </BodyContainer>
    </>
  );
};

export default QuestionField;
