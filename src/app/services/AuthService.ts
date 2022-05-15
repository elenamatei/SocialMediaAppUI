import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private email: string;
  private password : string;

  constructor(private http: HttpClient) {
    this.email = ''
    this.password = ''
  }

  login(email: string, password: string) {
    return this.http.get(environment.hostUrl + `/login`,
      { headers: { authorization: this.createBasicAuthToken(email, password) } }).pipe(map((res) => {
      this.email = email;
      this.password = password;
      this.registerSuccessfulLogin(email, password);
    }));
  }

  createBasicAuthToken(email: string, password: string) {
    return 'Basic ' + window.btoa(email + ":" + password);
  }

  registerSuccessfulLogin(email: string, password: string) {
    this.email = email;
    this.password = password;

    // save the username to session
  }


}
