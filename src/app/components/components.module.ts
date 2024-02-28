import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoLoaderComponent } from './pedido-loader/pedido-loader.component';



@NgModule({
  declarations: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent, PedidoComponent, PedidoLoaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent, PedidoComponent, PedidoLoaderComponent]
})
export class ComponentsModule {}