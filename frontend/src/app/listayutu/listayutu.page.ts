import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listayutu',
  templateUrl: './listayutu.page.html',
  styleUrls: ['./listayutu.page.scss'],
})
export class ListayutuPage implements OnInit {

  componentes: Componente[] =[
  {
    icon: 'american-football',
    name:'Cuernitos',
    url: 'https://www.youtube.com/embed/skrvo9EuziE',
  }

  ];

  constructor() { }

  ngOnInit() {
  }
}
  interface Componente{
    icon:string;
    name:string;
    url:string;
  }



