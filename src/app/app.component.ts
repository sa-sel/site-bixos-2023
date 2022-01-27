import { Component } from '@angular/core'
import { ImageModel } from '@models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  image1: ImageModel = {
    src: '../../../assets/images/banner.jpg',
    alt: 'uma foto da comissao',
  }

  image2: ImageModel = {
    src: '../../../assets/images/testing.jpg',
    alt: 'imagem teste',
  }
}
