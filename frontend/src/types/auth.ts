declare namespace API {
  type LoginBody = {
    username: string;
    password: string;
    rememberMe: boolean;
  };

  type SignUpBody = {
    username: string;
    email: string;
    password: string;
  }
}
