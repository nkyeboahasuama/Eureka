import Container from "../../shared_components/atoms/container/Container";
import { BodyContainer } from "../../shared_components/atoms/container/ContainerStyles";
import HeaderField from "./HeaderField";
import BodyField from "./BodyField";

const IntroductionPage = () => {
  return (
    <Container justify="space-between">
      <BodyContainer style={{ height: "35%", color: "white" }} bg="black">
        <HeaderField />{" "}
      </BodyContainer>

      <BodyContainer style={{ height: "65%", gap: 5 }}>
        <BodyField />{" "}
      </BodyContainer>
    </Container>
  );
};

export default IntroductionPage;
