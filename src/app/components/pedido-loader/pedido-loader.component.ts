import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-loader',
  templateUrl: './pedido-loader.component.html',
  styleUrls: ['./pedido-loader.component.scss'],
})
export class PedidoLoaderComponent  implements OnInit {
  dummy = Array(10);
  constructor() { }

  ngOnInit() {}

}
