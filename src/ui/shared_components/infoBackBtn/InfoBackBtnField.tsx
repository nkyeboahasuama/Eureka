import Container from "../atoms/container/Container";
import Date from "../date/Date";
import UserEmail from "../user/UserEmail";
import BackBtn from "../backBtn/BackBtn";

interface IInfoProps {
  user?: string;
  date?: string;
}

const InfoField: React.FC<IInfoProps> = ({ user, date }) => {
  return (
    <Container
      style={{ height: 110, flexShrink: 0 }}
      w="100%"
      justify="center"
      align="start"
    >
      <BackBtn />
      <Container h="45px" m="5px 0 0 0" align="start" fd="row">
        {/* Remember to add the date prop to the Date component */}
        <Date />
        <UserEmail user={user} />
      </Container>
    </Container>
  );
};

export default InfoField;
