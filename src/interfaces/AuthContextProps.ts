import { User } from "./User";


export default interface AuthContextProps {
  user: User;
  isAuthenticated: boolean;
  services: any[];
  setIsAuthenticated: (value: boolean) => void;
  setUser: (value: User) => void;
  setServices: (value: any[]) => void;
}
