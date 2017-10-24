import { Observable } from 'rxjs';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MyComponent } from './components/my-component';
import { MyProvider } from './providers/my-provider';

@NgModule({
  declarations: [
    // declare all components that your module uses
    MyComponent
  ],
  exports: [
    // export the component(s) that you want others to be able to use
    MyComponent
  ]
})
export class MyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyModule,
      providers: [ MyProvider ]
    };
  }

