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
import { AppRoutes } from "./ui/types/routing";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.ROOT} element={<FormPage />} />

          <Route path={AppRoutes.FORM_SUCCESS} element={<SuccessPage />} />

          <Route
            path={`${AppRoutes.SETUP}/:email/`}
            element={<InitialPage />}
          />

          <Route path={AppRoutes.ADMIN_QUESTIONS} element={<QuestionsPage />} />

          <Route
            path={`${AppRoutes.ADMIN_QUESTIONS}/:id`}
            element={<AdminPage />}
          />

          <Route path={AppRoutes.SADMIN_QUESTIONS} element={<SAQPage />} />

          <Route path={AppRoutes.SADMIN_ANSWERS} element={<SAAPage />} />

          <Route
            path={`${AppRoutes.SADMIN_ANSWERS}/:answerId`}
            element={<SAEPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
