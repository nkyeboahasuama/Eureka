import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { Icon } from "@iconify/react";
import InfoField from "../../../shared_components/infoBackBtn/InfoBackBtnField";
import { useParams } from "react-router";
import { getQuestionById } from "../../../functions/question";
import { getAnswerById } from "../../../functions/answers";
import { useEffect, useState } from "react";
import { IQuestionDocument } from "../../../../core";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";

const SAEPageQField = () => {
  const [questionBody, setQuestionBody] = useState<IQuestionDocument | null>(
    null
  );
  const { answerId } = useParams();

  useEffect(() => {
    try {
      if (answerId) {
        const fetchQuestion = async () => {
          const answer = await getAnswerById(answerId);
          const question = await getQuestionById(answer.question);

          setQuestionBody(question);
        };
        fetchQuestion();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container w="90%" align="start" h="40%" justify="space-between">
      <InfoField user={questionBody?.user} />
      <Container
        w="100%"
        h="150px"
        fd="row"
        justify="space-between"
        align="start"
      >
        <BodyContainer style={{ width: "5%", alignItems: "start" }}>
          <Icon
            style={{
              fontSize: 25,
              width: "100%",
              textAlign: "left",
              marginRight: 0,
              display: "flex",
              alignItems: "start",

              justifyContent: "start",
            }}
            icon="mdi:help-circle-outline"
          />
        </BodyContainer>
        <BodyContainer
          style={{
            alignItems: "start",
            //  backgroundColor: "green"
          }}
        >
          <Typography textalign="left" variant="h3" weight={600}>
            {questionBody?.body}
          </Typography>
        </BodyContainer>
      </Container>
    </Container>
  );
};

export default SAEPageQField;
