import { Injectable } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { IUser } from 'src/app/modales/users';
import { USER_STORE_NAME } from 'src/app/modales/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private user: IUser

  constructor() { }
  

  getUser() : IUser { 
    //return this.userService.getUser();

    if (this.user) {
      return this.user
    } else {
      const userFromStore = JSON.parse(localStorage.getItem(USER_STORE_NAME) || '')
      return userFromStore
    }
    

  }
    
   setUser(user: IUser) {
    this.user = user
    //this.userService.setUser(user)
}
}