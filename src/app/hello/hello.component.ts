import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-hello',
  templateUrl: './hello.component.html',

  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  
  public name = 'thalia'
  public port = window.location.href

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "hello" + this.name
  }

}
