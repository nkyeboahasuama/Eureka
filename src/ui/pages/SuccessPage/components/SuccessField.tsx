import Typography from "../../../shared_components/atoms/typography/Typography";
import Button from "../../../shared_components/atoms/button/Button";
import { useNavigate } from "react-router-dom";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";

const SuccessField = () => {
  const navigate = useNavigate();
  return (
    <>
      <BodyContainer text="left" w="90%">
        <Typography variant="h1">{"\u{1F389}"}Congratulations!</Typography>
        <Typography variant="normal">
          An answer will be sent to you via email.
        </Typography>
      </BodyContainer>
      <BodyContainer w="90%" style={{ height: "75%" }}>
        <BodyContainer
          style={{
            flexShrink: 0,
            height: "100%",
            margin: 0,
            width: "100%",
            justifyContent: "end",
          }}
          w="90%"
        >
          <Button
            style={{ margin: 0 }}
            onClick={() => navigate(-1)}
            variant="primary"
          >
            Back to home
          </Button>
        </BodyContainer>
      </BodyContainer>
    </>
  );
};

export default SuccessField;
