import React from "react";
import Container from "../../shared_components/atoms/container/Container";
import Date from "../../shared_components/date/Date";
import UserEmail from "../../shared_components/user/UserEmail";
import Button from "../../shared_components/atoms/button/Button";

import Typography from "../../shared_components/atoms/typography/Typography";
import { ModalContent, ModalWrapper } from "../modalStyles/ModalStyles";

interface SAdminModalProps {
  closeSAdminModal: () => void;
}

const SAdminModal: React.FC<SAdminModalProps> = ({ closeSAdminModal }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <Container
          justify="start"
          p="0 10px"
          variant="primary"
          h="60vh"
          w="80vw"
        >
          <Container w="95%" m="5px 0" h="10%" fd="row" align="start">
            <Date />
            <UserEmail />
          </Container>
          <Container h="330px" justify="start" lh="1.5">
            <Typography variant="h3">
              How can I be saved if I am dead but I know with no money and I
              pray at the last hour that God should save me but I dont end the
              prayer with Amen and my land lady comes out to rape me and I
              scream God and I dont see it?
            </Typography>
          </Container>
        </Container>
        <Container h="fit">
          <Button
            style={{
              backgroundColor: "#03C988",
              color: "white",
              width: "100%",
            }}
          >
            Accept
          </Button>
          <Button style={{ backgroundColor: "#CD1818", color: "white" }}>
            Reject
          </Button>
        </Container>
        <Button
          style={{ marginTop: 40 }}
          onClick={() => closeSAdminModal()}
          variant="secondary"
        >
          Close
        </Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default SAdminModal;
