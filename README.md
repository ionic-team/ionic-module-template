# Ionic2 Module Template

This is a template for building your own reusable Angular2/Ionic2 module using TypeScript. Supports Angular's ngc and Ahead-of-Time compiling out of the box.

## Developing

Develop your module like any other Angular 2 module. Then, run `npm run build` to build a local copy.

When you're ready to publish to npm, run `npm publishPackage`.

## Using your module in an Ionic 2 app

```typescript
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import your module
import { MyModule } from 'ionic2-module-template';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),

    MyModule // Put your module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
```
