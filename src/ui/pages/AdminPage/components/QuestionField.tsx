import Typography from "../../../shared_components/atoms/typography/Typography";
import { useParams } from "react-router-dom";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import InfoField from "../../../shared_components/infoBackBtn/InfoBackBtnField";
import Container from "../../../shared_components/atoms/container/Container";
import { questionService } from "../../../../services";
import { useState, useEffect } from "react";
import { IQuestionDocument } from "../../../../core";

interface IQuestion {
  question: IQuestionDocument | undefined;
}
const QuestionField: React.FC<IQuestion> = ({ question }) => {
  return (
    <BodyContainer
      style={{ height: "40%", overflow: "scroll" }}
      w="90%"
      text="left"
      align="start"
      justify="space-between"
    >
      <InfoField user={question?.user} />
      <Container h="150px" fd="row" justify="space-between" align="start">
        <Typography variant="h3" weight={600} textalign="left">
          {question && question.body}
        </Typography>
      </Container>
    </BodyContainer>
  );
};

export default QuestionField;
