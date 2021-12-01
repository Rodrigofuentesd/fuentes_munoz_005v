import { AppPage } from './app.po'
import { browser, by, element} from 'protractor';


describe('Test:', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage
    browser.get("/");
  });
  it("Titulo de app: Marketing Digital", () => {
    page.Titulo();
    expect(page.Titulo()).toContain("Marketing Digital");
  });
  it("Titulo de Barra Despliegue: Inicio", () => {
    page.Titulo2();
    expect(page.Titulo2()).toContain("inicio");
  });
  it("Testiando la API",()=>{
    expect(element(by.binding("user | json")).isPresent()).toBe;
  })
});
