import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  authenticated:boolean=false;
  constructor() { }
  authenticate(crdentials, callback)
  {
    if(crdentials && crdentials.username == "admin" && crdentials.password == "admin")
    {
      this.authenticated=true;
    }
    else {
      this.authenticated=false;
    }
    return callback && callback();
  }
}
