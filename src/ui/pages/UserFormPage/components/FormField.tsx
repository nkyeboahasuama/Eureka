import { TextArea } from "../../../shared_components/atoms/input/Input";

import Button from "../../../shared_components/atoms/button/Button";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { useEffect, useState } from "react";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";

interface IBodyFnc {
  bodyFnc: (body: string) => void;
  handleSubmit: () => void;
}
const FormField: React.FC<IBodyFnc> = ({ bodyFnc, handleSubmit }) => {
  const [textareaContent, setTextareaContent] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      bodyFnc(textareaContent);
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  }, [textareaContent, bodyFnc]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaContent(event.target.value);
  };

  return (
    <>
      <BodyContainer text="left" align="start" w="90%">
        <Typography variant="h2">What is on your mind?</Typography>
        <Typography variant="normal">
          Share your thoughts with an amazing community of leaders.
        </Typography>
      </BodyContainer>
      <BodyContainer w="90%" style={{ height: "75%" }}>
        <BodyContainer
          style={{
            flexShrink: 0,
            height: "100%",
            margin: 0,
            width: "100%",
            justifyContent: "space-between",
          }}
          w="90%"
        >
          <TextArea
            style={{
              margin: 0,
              backgroundColor: "black",

              color: "white",
            }}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} variant="primary">
            Submit your question
          </Button>
        </BodyContainer>
      </BodyContainer>
    </>
  );
};

export default FormField;
