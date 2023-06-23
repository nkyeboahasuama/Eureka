import Date from "../../../shared_components/date/Date";
import Chips from "../../../shared_components/atoms/chips/Chips";
import SAAQField from "./SAAQField";
import { answerService } from "../../../../services/answer.service";
import { useEffect, useState } from "react";
import { IAnswerDocument } from "../../../../core";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { lineClampStyle } from "../../../shared_components/lineHeightStyles/lineHeight";
import Loader from "../../../shared_components/loader/Loader";
import { useNavigate } from "react-router";

const SAAField = () => {
  const [answers, setAnswers] = useState<IAnswerDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log("in here");
  useEffect(() => {
    const getAnswers = async () => {
      console.log("in useEffect");
      try {
        const data = await answerService.getAnswers();
        setAnswers(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    };
    getAnswers();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : answers.length === 0 ? (
        <>
          <Typography variant="h3">No data available</Typography>
        </>
      ) : (
        <BodyContainer
          style={{ overflow: "scrollY" }}
          w="90%"
          text="left"
          m="20px 0"
        >
          {answers?.map((answer) => (
            <BodyContainer key={answer.id}>
              {answer.admin && answer.body && (
                <>
                  <Date />
                  <SAAQField question={answer.question} />
                  <Typography
                    style={{
                      width: "100%",
                      textAlign: "left",
                      cursor: "pointer",
                      margin: "5px 0 10px 0",
                      ...lineClampStyle,
                    }}
                    variant="h3"
                    onClick={() => navigate(`/superadmin/edit/${answer.id}`)}
                  >
                    {answer.body}
                  </Typography>

                  <BodyContainer
                    justify="space-between"
                    m="0 0 40px 0"
                    fd="row"
                  >
                    <BodyContainer
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "6px",
                        justifyContent: "start",
                      }}
                    >
                      <Chips variant={answer.availability} />
                    </BodyContainer>
                  </BodyContainer>
                </>
              )}
            </BodyContainer>
          ))}
        </BodyContainer>
      )}
    </>
  );
};

export default SAAField;
