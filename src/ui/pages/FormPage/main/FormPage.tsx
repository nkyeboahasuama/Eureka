import Container from "../../../shared_components/atoms/container/Container";
import EmailField from "../components/EmailField";
import FormField from "../components/FormField";

const FormPage = () => {
  return (
    <Container border="solid 1px black" m="10px auto">
      <EmailField />
      <FormField />
    </Container>
  );
};

export default FormPage;
