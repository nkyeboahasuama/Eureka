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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoContent from "./ui/pages/NoContentPage/NoContent";
import ProtectedRoute from "./ui/pages/ProtectedRoute/ProtectedRoute";
import AdminAuthorization from "./ui/pages/ProtectedRoute/AdminAuthorization";
import SuperAdminAuthorization from "./ui/pages/ProtectedRoute/SuperAdminAuthorization";
import IntroductionPage from "./ui/pages/LandingPage.tsx/IntroductionPage";
import HowItWorksPage from "./ui/pages/LandingPage.tsx/HowItWorksPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path={AppRoutes.ROOT} element={<FormPage />} />

          <Route path={AppRoutes.FORM_SUCCESS} element={<SuccessPage />} />

          <Route
            path={`${AppRoutes.SETUP}/:email/`}
            element={<InitialPage />}
          />

          <Route element={<ProtectedRoute />}>
            <Route
              path={AppRoutes.INTRODUCTION}
              element={<IntroductionPage />}
            />
            <Route path={AppRoutes.INSTRUCTION} element={<HowItWorksPage />} />
            <Route
              path={`${AppRoutes.ADMIN_QUESTIONS}/:id`}
              element={<AdminPage />}
            />

            <Route element={<AdminAuthorization />}>
              <Route
                path={AppRoutes.ADMIN_QUESTIONS}
                element={<QuestionsPage />}
              />
            </Route>

            <Route element={<SuperAdminAuthorization />}>
              <Route path={AppRoutes.SADMIN_QUESTIONS} element={<SAQPage />} />

              <Route path={AppRoutes.SADMIN_ANSWERS} element={<SAAPage />} />

              <Route
                path={`${AppRoutes.SADMIN_ANSWERS}/:answerId`}
                element={<SAEPage />}
              />
            </Route>
          </Route>

          <Route path={AppRoutes.MISSING} element={<NoContent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
