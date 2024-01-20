### Blog: https://medium.com/@estherwavinya/observables-in-angular-7f90d0b2613e

https://blog.bitsrc.io/mastering-rxjs-operators-unlocking-the-power-of-angular-af375e45d4eb

https://medium.com/ngconf/rxjs-for-beginner-angular-developers-introduction-2d26ffa364af

### Pluralsight: https://app.pluralsight.com/library/courses/rxjs-angular-reactive-development/table-of-contents

### Observable Operators

<img width="797" alt="Screenshot 2023-03-18 at 1 21 16 AM" src="https://user-images.githubusercontent.com/55907622/226015796-278ae2b3-8988-4416-a07a-fb8785e83080.png">

### Serializing query params

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiServices {
  constructor(private http: HttpClient) {}

  serialize(obj) {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }

    getAllData(params): Observable<any> {
        return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100' + '&' +  this.serialize(params));
    }
}
