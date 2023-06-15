import { useNavigate, useParams } from "react-router-dom";
import { adminService } from "../../../services";
import { useEffect } from "react";
import { admins } from "../../../core/admin";

const InitialPage = () => {
  const { email } = useParams();
  const redirect = useNavigate();
  console.log(email);

  useEffect(() => {
    const initAdmin = async () => {
      if (email) {
        const data = await adminService.initAdmin(email);
        if (data.isSuper) {
          redirect("/verifyquestion");
        }
        const isAdmin = admins.includes(email);
        if (isAdmin) {
          console.log("Is admin");
          redirect("/questions");
        } else {
          console.log("Is not an admin or super admin");
          //   redirect("/");
        }
      }
    };
    initAdmin();
  }, [email, redirect]);

  return <div>Loading...</div>;
};

export default InitialPage;
