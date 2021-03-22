import { environment } from "./../../../environments/environment";
import { Observable } from "rxjs/Observable";
import { UserService } from "../../shared/services/user.service";
import { AuthService } from "../../shared/services/auth.service";
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate(): Observable<boolean> {
    if (environment.thanh) {
      return this.auth.appUser$.map((appUser) => environment.profile.isAdmin);
    } else {
      return this.auth.appUser$.map((appUser) => appUser.isAdmin);
    }
  }
}
