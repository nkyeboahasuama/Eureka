import FormPage from "./ui/pages/UserFormPage/main/FormPage";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SuccessPage from "./ui/pages/SuccessPage/main/SuccessPage";
import AdminPage from "./ui/pages/AdminAnswerPage/main/AdminPage";
import QuestionsPage from "./ui/pages/AdminQuestionsPollPage/main/QuestionsPage";
import SAAPage from "./ui/pages/SAAnswerPollPage/main/SAAPage";
import SAQPage from "./ui/pages/SAQuestionsPollPage/main/SAQPage";
import SAEPage from "./ui/pages/SAAnswerEditPage/main/SAEPage";
import InitialPage from "./ui/pages/UserInitialPage/InitialPage";
// import ErrorBoundary from "./ui/errorhandler/ErrorBoundary";

function App() {
  return (
    <>
      <GlobalStyles />

      {/* <ErrorBoundary> */}
      <BrowserRouter>
        <Routes>
          <Route path="/askquestion/form/" element={<FormPage />} />

          <Route path="/openforum/entry/:email/" element={<InitialPage />} />

          <Route path="askquestion/success" element={<SuccessPage />} />

          <Route path="/admin/validquestions" element={<QuestionsPage />} />

          <Route path="/questions/question/:id" element={<AdminPage />} />

          <Route path="/superadmin/validatequestions" element={<SAQPage />} />

          <Route path="/superadmin/validateanswers" element={<SAAPage />} />
          <Route path="superadmin/edit/:answerId" element={<SAEPage />} />
        </Routes>
      </BrowserRouter>
      {/* </ErrorBoundary> */}
    </>
  );
}

export default App;
