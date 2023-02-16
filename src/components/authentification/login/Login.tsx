import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Auth';

const Login = () => {
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
    <div className="selection-text-white mb-10">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-4 flex-grow-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-4">
              <h1 className="text-3xl font-bold text-gray-700">
                Connecter vous
              </h1>

              <div className="mt-4">
                <div className="input-group mb-3">
                  <input
                    id="signin-email"
                    name="email"
                    type="text"
                    value={user.email}
                    onChange={handleInputChange}
                    className="form-control border-0 border-bottom border-gray-300 text-dark"
                    placeholder="exemple@doe.com"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    value={user.password}
                    onChange={handleInputChange}
                    id="signin-password"
                    type="password"
                    name="password"
                    className="form-control border-0 border-bottom border-gray-300 text-dark"
                    placeholder="Password"
                  />
                </div>

                <div className=" mt-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input border-0 bg-light"
                  />
                  <label
                    
                    className="form-check-label text-sm font-medium text-dark"
                  >
                    Se souvenir de moi
                  </label>
                </div>

                <div className="mt-3">
                  <input
                    id="signin-password/"
                    type="password"
                    name="password"
                    className="form-control border-0 border-bottom border-gray-300 text-dark"
                    placeholder="Password"
                  />
                  <label  className="form-label text-dark">
                    Password
                  </label>
                </div>

                <div className="mt-3">
                  <input
                    id="signin-password//"
                    type="password"
                    name="password"
                    className="form-control border-0 border-bottom border-gray-300 text-dark"
                    placeholder="Password"
                  />
                  <button className="mt-2 btn btn-success w-100">
                    Password
                  </button>
                </div>

                <button
                  value="Connexion"
                  onClick={() => SignInUser()}
                  className="mt-4 btn btn-success w-100"
                >
                  Connexion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
