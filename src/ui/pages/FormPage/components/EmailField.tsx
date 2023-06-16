import { useEffect, useState } from "react";
import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Logo from "../../../shared_components/logo/Logo";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";

interface IuserFnc {
  userFnc: (identity: string) => void;
}

const EmailField: React.FC<IuserFnc> = ({ userFnc }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    userFnc(user);
  }, [user, userFnc]);

  return (
    <Container text="left" w="100%" h="40%">
      <Logo />
      <Container align="start" w="90%" h="75%">
        <Typography variant="h1">Share your worries</Typography>
        <Typography textalign="start" variant="normal" m="2px 0 ">
          An amazing lorem ipsum is used for dummy texts
        </Typography>
        <BodyContainer
          style={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography weight={600}>Enter your email</Typography>
          <input
            onChange={(e) => setUser(e.target.value)}
            style={{ height: "40px", width: "100%", fontSize: 18 }}
          />
        </BodyContainer>
      </Container>
    </Container>
  );
};

export default EmailField;
