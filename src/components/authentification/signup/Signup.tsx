import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Auth';

const Signup = () => {
  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState<any>({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  const SignInUser = async () => {
    /*   setisLoading(!isLoading);

    setTimeout(async () => {
      try {
       // const response = await login(user);

        setIsAuthenticated(response);

        if (response) {
          navigate('/dashboard');
        }
      } catch ({ response }) {
        console.log(response);
        setisLoading(false);
      }
    }, 2000); */
  };

  return (
    <div className="selection-text-white mb-10 ">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-4 flex-grow-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-4">
              <h1 className=" b-10">
                Inscrivez vous
              </h1>

              <div className="mb-3">
    <label  className="form-label">Nom</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Prénom</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label  className="form-label">E-mail</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="button" className="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
