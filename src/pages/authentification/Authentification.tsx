import Login from "../../components/authentification/login/Login";
import Signup from "../../components/authentification/signup/Signup";


export default function FormulaireAuthentification() {
  return (
<div>
<div className=" position-relative d-flex justify-content-center  ">
      <div className="container row ">
        <div className="col-md-6">
          <Login />
        </div>
        <div className="col-md-6">
         <Signup/>
        </div>
      </div>
    </div>
</div>
  );
}
