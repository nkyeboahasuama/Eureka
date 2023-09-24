import WhiteField from "../components/WhiteField";
import SuccessField from "../components/SuccessField";
import Container from "../../../shared_components/atoms/container/Container";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";

const SuccessPage = () => {
  return (
    <Container justify="space-between">
      <BodyContainer style={{ height: "35%" }}>
        <WhiteField />
      </BodyContainer>

      <BodyContainer
        bg="black"
        style={{
          height: "65%",
          color: "white",
          gap: 5,
          justifyContent: "space-between",
        }}
      >
        <SuccessField />
      </BodyContainer>
    </Container>
  );
};

export default SuccessPage;
