import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  borrado: string = '';
  borrarHeroe(){
    console.log('Borrando...');
    this.borrado = this.heroes.pop() || '';
    console.log(this.borrado);
  }
}
