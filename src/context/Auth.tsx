import React from 'react';
import AuthContextProps from '../interfaces/AuthContextProps';
import { User } from '../interfaces/User';



const defaultValue: AuthContextProps = {
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  user: {
    email: '',
    nom: '',
    prenom: '',
  },
  setUser: (value: User) => {},
  services: [],
  setServices: (value: string[]) => {},
};

const AuthContext = React.createContext(defaultValue);

const AuthProvider: React.FC = (props: React.PropsWithChildren<{}>) => {
  const [user, setUser] = React.useState(defaultValue.user);
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    defaultValue.isAuthenticated
  );
  const [services, setServices] = React.useState(defaultValue.services);

  const authContextValue = {
    user,
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    setServices,
    services,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
