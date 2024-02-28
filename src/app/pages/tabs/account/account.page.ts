import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  pedidos: any[] = [];
  isLoading: boolean = false;
  model: any = {
    icon: 'eye-outline',
    title: 'Nenhum pedido encontrado.'
  };

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(()=>{
      this.pedidos = [
        {
          name: 'Dom Henrique',
          endereco: 'Guarapuava, Paraná',
          preco: '60.00',
          entrega: 'Entregue',
          comidas:[
            'Pizza x2',
            'Burguer x2'
          ],
          data:'Janeiro 29, 2024'
        },
      ];
      this.isLoading = false;
    }, 3000);
  }

}
