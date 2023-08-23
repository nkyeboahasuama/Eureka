import Logo from "../../../shared_components/logo/Logo";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";

const WhiteField = () => {
  return (
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
          <Typography variant="h2">Come back later!</Typography>
        </BodyContainer>
      </BodyContainer>
    </>
  );
};

export default WhiteField;
