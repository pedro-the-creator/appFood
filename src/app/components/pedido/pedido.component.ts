import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent  implements OnInit {
  @Input() pedido: any;

  constructor() { }

  ngOnInit() {}

  getComida(pedido){
    return pedido.join(', ');
  }
}
