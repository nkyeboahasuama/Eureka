import Date from "../../../shared_components/date/Date";
import Chips from "../../../shared_components/atoms/chips/Chips";
import SAAQField from "./SAAQField";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { lineClampStyle } from "../../../shared_components/lineHeightStyles/lineHeight";
import Loader from "../../../shared_components/loader/Loader";
import { useNavigate } from "react-router";
import { AppRoutes } from "../../../types/routing";
import { useSubscribeToRepository } from "../../../hooks/useSubscribeCloudDocs";
import { Repos } from "../../../../infras/cloud/repos/interface";

const SAAField = () => {
  const {
    data: answers,
    error,
    loading,
  } = useSubscribeToRepository(Repos.ANSWER);
  const navigate = useNavigate();

  if (loading) {
    return <Loader />;
  }

  if (!error && answers.length === 0) {
    return <Typography variant="h3">No data available</Typography>;
  }

  return (
    <BodyContainer
      style={{ overflow: "scrollY" }}
      w="90%"
      text="left"
      m="10px 0"
    >
      {answers?.map((answer) => (
        <BodyContainer key={answer.id}>
          {answer.admin && answer.body && (
            <>
              <Date date={answer.createdAt} />
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
                onClick={() =>
                  navigate(`${AppRoutes.SADMIN_ANSWERS}/${answer.id}`)
                }
              >
                {answer.body}
              </Typography>

              <BodyContainer justify="space-between" m="0 0 25px 0" fd="row">
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
  );
};

export default SAAField;
