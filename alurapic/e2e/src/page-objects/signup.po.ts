import { browser, by, element } from 'protractor';
export class SignupPage {
  acessarSignup() {
    return browser.get('/#/home/signup');
  }

  obterUrl() {
    return browser.getCurrentUrl()
  }

  /**
   * @summary Irá preencher o formControl com o dado parametrizado.
   * @param {string} name - Nome do formControl. Pode ser 'email', 'fullName', 'userName' ou 'password'
   * @param {string} dado - Dado para preencher no formControl
   * @returns {boolean} true ou false a depender de ter encontrado o formControl
  */  
  preencherFormControl(name, dado) {
    return element(by.formControlName(name)).sendKeys(dado)
  }

  obterBotaoRegister() {
    return element(by.buttonText('Register'))
  }
}
