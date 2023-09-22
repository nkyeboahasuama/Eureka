import React from "react";
import { BodyContainer } from "../../shared_components/atoms/container/ContainerStyles";
import Typography from "../../shared_components/atoms/typography/Typography";
import Button from "../../shared_components/atoms/button/Button";
import { AppRoutes } from "../../types/routing";
import { useNavigate } from "react-router-dom";

const BodyField = () => {
  const navigate = useNavigate();
  return (
    <>
      <BodyContainer
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <BodyContainer
          text="left"
          align="start"
          justify="start"
          w="90%"
          style={{ height: "75%" }}
        >
          <BodyContainer align="start" style={{ height: "50%" }}>
            <Typography variant="h3" textalign="left" p="0px 0px 10px 0px">
              Eureka seeks to serve all and sundry by answering questions about
              Jesus Christ, faith, the church and all that pertains to
              Christianity, in the hopes that, faith is built through the
              administering of the Word.
            </Typography>
            <Typography variant="h3">
              Thank you for accepting this call to serve.
            </Typography>
          </BodyContainer>
        </BodyContainer>
        <BodyContainer>
          <Button
            variant="secondary"
            w="90%"
            onClick={() => navigate(AppRoutes.INSTRUCTION)}
          >
            How it works
          </Button>
        </BodyContainer>
      </BodyContainer>
    </>
  );
};

export default BodyField;
