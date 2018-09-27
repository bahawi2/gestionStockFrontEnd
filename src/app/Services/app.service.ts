import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  authenticated:boolean=false;
  constructor() { }
  authenticate(credentials, callback)
  {
    if(credentials && credentials.username == "admin" && credentials.password == "admin")
    {
      this.authenticated=true;
    }
    else {
      this.authenticated=false;
    }
    return callback && callback();
  }
}
