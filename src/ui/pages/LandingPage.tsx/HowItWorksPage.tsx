import Container from "../../shared_components/atoms/container/Container";
import Typography from "../../shared_components/atoms/typography/Typography";
import { BodyContainer } from "../../shared_components/atoms/container/ContainerStyles";
import Logo from "../../shared_components/logo/Logo";
import Button from "../../shared_components/atoms/button/Button";

const HowItWorksPage = () => {
  return (
    <Container justify="space-between">
      <Container variant="secondary" h="100px">
        <BodyContainer
          w="90%"
          fd="column"
          align="start"
          justify="space-between"
          style={{ height: "90%" }}
        >
          <Logo />
          <Typography variant="h2" weight={600}>
            How it works
          </Typography>
        </BodyContainer>
      </Container>

      <BodyContainer justify="space-between">
        <BodyContainer
          align="start"
          justify="start"
          w="90%"
          style={{
            textAlign: "left",
            alignItems: "start",
            justifyContent: "start",
            padding: "10px 0px 10px 0px",
            overflow: "auto",
            height: "60vh",
          }}
        >
          <BodyContainer w="100%" align="start" style={{ marginTop: "20px" }}>
            <Typography variant="h3" textalign="left" weight={600}>
              Authentication and your Board
            </Typography>
            <Typography variant="normal" textalign="left">
              Eureka aims to be easy to use, therefore you can access your board
              using the auto-signin link sent via email. Kindly make sure to
              always revisit your auto-signin link after you clear your browser
              data. Thank you
            </Typography>
          </BodyContainer>

          <BodyContainer w="100%" align="start" style={{ marginTop: "20px" }}>
            <Typography variant="h3" weight={600}>
              Question Pool
            </Typography>
            <Typography variant="normal" textalign="left">
              On your board, all questions are kept in a pool where all
              administrators can view and attempt to answer any available
              question. Questions are marked{" "}
              <span style={{ color: "#03c988", fontWeight: "700" }}>open</span>{" "}
              or{" "}
              <span style={{ color: "#cd1818", fontWeight: "700" }}>
                closed
              </span>{" "}
              to show their availability in the pool and admins can attempt to
              answer{" "}
              <span style={{ color: "#03c988", fontWeight: "700" }}>open</span>{" "}
              open questions. Once you attempt to answer a question, it is
              temporarily closed to you until you submit your answer.
            </Typography>
          </BodyContainer>

          <BodyContainer align="start" style={{ marginTop: "20px" }}>
            <Typography variant="h3" weight={700}>
              User Questions
            </Typography>
            <Typography variant="normal" textalign="left">
              Wondering how it all works? A user submits a question and an email
              alert is sent out.. You can view and attempt any available
              question in the pool. Finally submit your answer to the question.
            </Typography>
          </BodyContainer>
        </BodyContainer>

        <BodyContainer w="90%">
          <Button variant="secondary">My Board</Button>
        </BodyContainer>
      </BodyContainer>
    </Container>
  );
};

export default HowItWorksPage;
