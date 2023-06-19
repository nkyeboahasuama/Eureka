import { useEffect, useState } from "react";
import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Logo from "../../../shared_components/logo/Logo";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import { TextArea } from "../../../shared_components/atoms/input/Input";

interface IuserFnc {
  userFnc: (identity: string) => void;
}

const EmailField: React.FC<IuserFnc> = ({ userFnc }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    userFnc(user);
  }, [user, userFnc]);

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
        <BodyContainer style={{ alignItems: "start" }}>
          <Typography textalign="start" variant="h1">
            Share your worries
          </Typography>
          <Typography textalign="start" variant="normal" m="2px 0 ">
            An amazing lorem ipsum is used for dummy texts
          </Typography>
        </BodyContainer>

        <BodyContainer
          style={{
            height: "40%",
            width: "100%",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          <Typography weight={600}>Enter your email</Typography>
          <input
            required
            onChange={(e) => setUser(e.target.value)}
            style={{
              height: "40px",
              fontSize: "14px",
              width: "100%",
              padding: "0 5px",
              margin: "0",
              display: "flex",
              boxSizing: "border-box",
            }}
          />
        </BodyContainer>
      </BodyContainer>
    </>
    // <Container bg="blue" text="left" w="90%" h="35%">
    //   <Logo />
    //   <Container align="start" w="100%" h="75%">
    //     <Typography variant="h1">Share your worries</Typography>
    //     <Typography textalign="start" variant="normal" m="2px 0 ">
    //       An amazing lorem ipsum is used for dummy texts
    //     </Typography>
    //     <BodyContainer
    //       style={{
    //         height: "40%",
    //         width: "100%",
    //         marginTop: "20px",
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "start",
    //         justifyContent: "space-evenly",
    //       }}
    //     >
    //       <Typography weight={600}>Enter your email</Typography>
    //       <input
    //         onChange={(e) => setUser(e.target.value)}
    //         style={{
    //           height: "40px",
    //           fontSize: 18,
    //           width: "100%",
    //           padding: "0",
    //           margin: "0",
    //         }}
    //       />
    //     </BodyContainer>
    //   </Container>
    // </Container>
  );
};

export default EmailField;
{
  /*  */
}
