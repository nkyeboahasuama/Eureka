import Container from "../../../shared_components/atoms/container/Container";
import { Icon } from "@iconify/react";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { IQuestionDocument } from "../../../../core";
import { useEffect, useState } from "react";
import { getQuestionById } from "../../../functions/question";
import { lineClampStyle } from "../../../shared_components/lineHeightStyles/lineHeight";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";

interface ISAAQFieldProps {
  question?: string;
}
const SAAQField: React.FC<ISAAQFieldProps> = ({ question }) => {
  const [questionBody, setQuestionBody] = useState<IQuestionDocument | null>(
    null
  );

  useEffect(() => {
    const fetchQuestion = async () => {
      const bod = await getQuestionById(question ?? "");
      setQuestionBody(bod);
    };

    fetchQuestion();
  }, [question]);
  return (
    <Container w="100%" h="50px" justify="start" fd="row">
      <BodyContainer
        style={{
          width: "5%",
          alignItems: "start",
        }}
      >
        <Icon
          icon="mdi:help-circle-outline"
          style={{
            marginRight: "5px",
            fontSize: "20px",
            width: "100%",
          }}
        />
      </BodyContainer>
      <Typography
        style={{
          ...lineClampStyle,
          WebkitLineClamp: 1,
          width: "70%",
          textAlign: "left",
        }}
        variant="medium"
      >
        {questionBody?.body}
      </Typography>
    </Container>
  );
};

export default SAAQField;
