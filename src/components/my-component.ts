import { Component } from '@angular/core';

@Component({
  template: `<div>I'm a special snowflake</div>`,
  host: {
    'style.backgroundColor': 'red'
  }
})
export class MyComponent {
  constructor() {}
}
