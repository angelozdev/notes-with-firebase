export interface IAuthContext {
  user: User | null;
  isLogged: () => boolean;
  login: (user: User) => void;
}

export interface User {
  id: string;
  email: string;
}
