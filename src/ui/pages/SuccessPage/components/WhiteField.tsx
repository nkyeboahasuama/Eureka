import Container from "../../../shared_components/atoms/container/Container";
import Logo from "../../../shared_components/logo/Logo";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";

const WhiteField = () => {
  return (
    // <Container w="90%" variant="primary" h="35%">
    //   <Logo />
    //   <Container h="75%" w="90%">
    //     <Typography variant="h1">Just white space!</Typography>
    //   </Container>
    // </Container>
    <>
      <BodyContainer
        w="90%"
        text="left"
        align="start"
        justify="space-between"
        style={{ height: "90%" }}
      >
        <Logo />
        <BodyContainer
          style={{
            alignItems: "center",
            height: "70%",
          }}
        >
          <Typography variant="h1">Just white space!</Typography>
        </BodyContainer>
      </BodyContainer>
    </>
  );
};

export default WhiteField;
