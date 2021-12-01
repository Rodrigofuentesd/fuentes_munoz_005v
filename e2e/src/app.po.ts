import { browser, by, element} from 'protractor';

export class AppPage {
  Titulo(){
    return element(by.css('.titulo ion-card-title')).getText();
  }
  Titulo2(){
    return element(by.css('.titulo2 ion-title')).getText();
  }
}
