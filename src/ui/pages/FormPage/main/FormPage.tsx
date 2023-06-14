import Container from "../../../shared_components/atoms/container/Container";
import EmailField from "../components/EmailField";
import FormField from "../components/FormField";

const FormPage = () => {
  return (
    <Container justify="space-between">
      <EmailField />
      <FormField />
    </Container>
  );
};

export default FormPage;
