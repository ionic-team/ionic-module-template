import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ]
})
export class MyModule {}
