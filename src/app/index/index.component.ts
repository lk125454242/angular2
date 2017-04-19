import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  private title: string;
  private describe: string;
  position: Array<string>;
  constructor(
    //public id: number,
    //public name: string
  ) {
    this.title = '这里是标题';
    this.describe = '这里是描述';
    this.position = ['121','312'];
  }
  onAppend() {
    this.position.push(
      Math.ceil(Math.random() * 1000).toString()
    )
  }
  onkeydown(e: KeyboardEvent) {
    //KeyboardEvent 导致可以不使用 e.target.value
    this.title += (<HTMLInputElement>event.target).value;
  }
  onKey(value : string){
    this.describe = value;
  }
  onBlur(){
    this.describe = ''
  }
  onEnter(value : string){
    this.describe = value;
  }
  ngOnInit() {
    console.log(1);
  }
}
