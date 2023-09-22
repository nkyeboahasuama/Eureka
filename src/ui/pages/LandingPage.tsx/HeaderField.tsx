import { BodyContainer } from "../../shared_components/atoms/container/ContainerStyles";
import Typography from "../../shared_components/atoms/typography/Typography";
import Logo from "../../shared_components/logo/Logo";

const HeaderField = () => {
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
          m="2px 0"
          style={{
            alignItems: "start",
            justifyContent: "end",
            textAlign: "start",
            height: "40%",
          }}
        >
          <Typography variant="normal">Romans</Typography>
          <Typography variant="normal">
            "10:17 So then faith cometh by hearing and hearing by the word of
            God."
          </Typography>
        </BodyContainer>

        <BodyContainer
          style={{
            height: "30%",
            width: "100%",
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography textalign="start" variant="h1">
            Welcome to Eureka💡
          </Typography>
        </BodyContainer>
      </BodyContainer>
    </>
  );
};

export default HeaderField;
