import FormPage from "./ui/pages/FormPage/main/FormPage";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SuccessPage from "./ui/pages/SuccessPage/main/SuccessPage";
import AdminPage from "./ui/pages/AdminPage/main/AdminPage";
import QuestionsPage from "./ui/pages/QuestionsPage/main/QuestionsPage";
import SAAPage from "./ui/pages/SAAPage/main/SAAPage";
import SAQPage from "./ui/pages/SuperAdminPage/main/SAQPage";
import SAEPage from "./ui/pages/SAEPage/main/SAEPage";
import InitialPage from "./ui/pages/UserInitialPage/InitialPage";

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/askquestion/form/" element={<FormPage />} />

          <Route path="/openforum/entry/:email/" element={<InitialPage />} />

          <Route path="askquestion/success" element={<SuccessPage />} />

          <Route path="/admin/validquestions" element={<QuestionsPage />} />

          <Route path="/questions/question/:id" element={<AdminPage />} />

          <Route path="/superadmin/validatequestions" element={<SAQPage />} />

          <Route path="/superadmin/validateanswers" element={<SAAPage />} />
          <Route path="superadmin/edit" element={<SAEPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
