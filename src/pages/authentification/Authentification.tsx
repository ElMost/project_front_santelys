import Login from "../../components/authentification/login/Login";


export default function FormulaireAuthentification() {
  return (
    <div className="h-100 bg-danger mb-0 p-0 md:p-5 md:m-5">
      <div className="row bg-light shadow-lg rounded-md md:m-5">
        <div className="col-md-6">
          <Login />
        </div>
        <div className="col-md-6">
          <Login />
        </div>
      </div>
    </div>
  );
}
