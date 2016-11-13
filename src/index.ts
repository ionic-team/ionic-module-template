import { Observable } from 'rxjs';
import { Injectable, NgModule } from '@angular/core';

import { MyComponent } from './components/my-component';

@Injectable()
export class MyService {
  myMethod() {
    console.log("I'm afraid I can't do that.");
  }
}

@NgModule({
  declarations: [
    MyComponent
  ],
  exports: [
    MyComponent
  ]
})
export class MyModule {}
