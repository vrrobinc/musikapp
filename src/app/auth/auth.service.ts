import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}
export interface Profile {
  email: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  userId: string;
  email: string;

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    );

  }

  setUser(userId: string) {
    this.userId = userId;
    this.isAuthenticated = true;
  }

  getUser() {
    return this.userId;
  }

  getUserEmail() {
    return this.email;
  }
  unsetUser() {
    // this.userId = null;
    // this.isAuthenticated = false;
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  logout() {
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
  }
}
