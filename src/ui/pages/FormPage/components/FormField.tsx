import Container from "../../../shared_components/atoms/container/Container";
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
    }, 1000);
    return () => {
      clearTimeout(debounce);
    };
  }, [textareaContent, bodyFnc]);

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
          }}
          w="90%"
        >
          <TextArea
            style={{
              margin: 0,
              backgroundColor: "black",
              width: "100%",
              height: "100%",
              color: "white",
            }}
          />
          <Button onClick={handleSubmit} variant="primary">
            Submit your answer
          </Button>
        </BodyContainer>
      </BodyContainer>
    </>
    // <Container w="100%" h="65%" variant="secondary">
    //   <Container w="90%">
    //     <BodyContainer text="left" align="start">
    //       <Typography variant="h2">What is on your mind?</Typography>
    //       <Typography variant="normal">
    //         Share your thoughts with an amazing community of leaders.
    //       </Typography>
    //     </BodyContainer>
    //     <BodyContainer style={{ flexShrink: 0, height: "50%" }} w="100%">
    //       <TextArea
    //         style={{
    //           height: "80%",
    //           margin: 0,
    //           backgroundColor: "black",
    //           color: "white",
    //         }}
    //       />
    //       <Button onClick={handleSubmit} variant="primary">
    //         Submit your answer
    //       </Button>
    //     </BodyContainer>
    //   </Container>
    // </Container>
  );
};

export default FormField;
{
  /* <BodyContainer style={{ flexShrink: 0, height: "45%" }} w="90%">
      <TextArea
        style={{ height: "80%", margin: 0 }}
        required
      />
      <Button onClick={handleSubmit} variant="secondary">
        Submit your answer
      </Button>
    </BodyContainer> */
}
