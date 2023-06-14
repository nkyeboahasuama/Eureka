import FormPage from "./ui/pages/FormPage/main/FormPage";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SuccessPage from "./ui/pages/SuccessPage/main/SuccessPage";
import AdminPage from "./ui/pages/AdminPage/main/AdminPage";
import QuestionsPage from "./ui/pages/QuestionsPage/main/QuestionsPage";
import SAAPage from "./ui/pages/SAAPage/main/SAAPage";
import SAQPage from "./ui/pages/SuperAdminPage/main/SAQPage";
import SAEPage from "./ui/pages/SAEPage/main/SAEPage";

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage />} />

          <Route path="/success" element={<SuccessPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/question/:id" element={<AdminPage />} />
          <Route path="/verifyquestion" element={<SAQPage />} />
          <Route path="/verifyanswer" element={<SAAPage />} />
          <Route path="/edit" element={<SAEPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
