import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';

import { MyComponent } from './components/my-component';
import { MyProvider } from './providers/my-provider';

@NgModule({
  declarations: [
    MyComponent
  ],
  providers: [ MyProvider ],
  exports: [
    MyComponent
  ],
  imports: [
  ]
})
export class MyModule {}
