import { Injectable } from '@angular/core';
import { IUser } from 'src/app/modales/users';
import { USER_STORE_NAME } from 'src/app/modales/users';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

private usersStorage : IUser[] = [];

  constructor() { }

/*checkUser(user : IUser) : boolean  {
    const isUserExists = this.usersStorage.find((el) => el.login === user.login);
  if (isUserExists) {
    return isUserExists.psw === user.psw;
  }
    return false;
  }
  */
 
 checkUser(user : IUser) :  boolean {

  console.log('user', user);
  
  const isUserExists = this.usersStorage.find((el) => el.login === user.login);
  let isUserSavedInStore = window.localStorage.getItem(USER_STORE_NAME);
  let userInStore = <IUser>{};

  if (isUserSavedInStore){
    userInStore = JSON.parse(isUserSavedInStore);
    console.log('userInStore', userInStore); 
  }
  if (isUserExists) {
    return isUserExists.psw === user.psw;
  } else if (userInStore?.login) {
    return userInStore.psw === user.psw;
  }
  return false;
 }


  setUser(user : IUser) : void {
    const isUserExists = this.usersStorage.find((el) => el.login === user.login);
    if(!isUserExists && user?.login) {
      this.usersStorage.push(user)
    }
  }
  

  isUserExsist (user : IUser) : boolean {
    const isUserExists = this.usersStorage.find((el) => el.login === user.login);
    return !!isUserExists
  }
}



