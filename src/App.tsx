import FormPage from "./ui/pages/FormPage/main/FormPage";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import SuccessPage from "./ui/pages/SuccessPage/main/SuccessPage";
import AdminPage from "./ui/pages/AdminPage/main/AdminPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <AdminPage />
      <FormPage />;
      <SuccessPage />
    </>
  );
}

export default App;
