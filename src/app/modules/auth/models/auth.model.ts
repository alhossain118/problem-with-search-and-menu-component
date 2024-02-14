export class AuthModel {
  constructor(){}
  authToken: string | any;
  refreshToken: string | any;
  expiresIn: Date | any;

  setAuth(auth: AuthModel) {
    this.authToken = auth.authToken;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
  }
}
