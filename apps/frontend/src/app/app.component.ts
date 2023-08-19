import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'production-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend title';

  loaded = false;
  hello = {} as any;

  ngOnInit() {
    initFlowbite();
    this.sayHello();
  }

  async sayHello() {
    this.hello = await fetch('/api').then((r) => r.json());
    console.log(this.hello);
  }
}
