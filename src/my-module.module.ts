import { Observable } from 'rxjs';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { MyComponent } from './components/my-component';
import { MyProvider } from './providers/my-provider';

@NgModule({
  declarations: [
    MyComponent // declare all components that your module uses
  ],
  exports: [
    MyComponent // export the component(s) that you want others to be able to use
  ],
  imports: [
    IonicModule // add this if you need to use Ionic components in your module
  ]
})
export class MyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyModule,
      providers: [ MyProvider ]
    };
      
  }
}
