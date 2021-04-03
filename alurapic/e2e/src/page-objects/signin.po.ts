import { browser, by, element } from 'protractor';

export class SigninPage {
  acessarHome() {
    return browser.get('');
  }

  obterUrl() {
    return browser.getCurrentUrl()
  }

  /**
   * @summary Irá preencher o formControl com o dado parametrizado.
   * @param {string} name - Nome do formControl. Pode ser 'userName' ou 'password'
   * @param {string} dado - Dado para preencher no formControl
   * @returns {boolean} true ou false a depender de ter encontrado o formControl
  */
  preencherFormControl(name: string, dado: string) {
    return element(by.formControlName(name)).sendKeys(dado)
  }


  obterBotaoLogin() {
    return element(by.buttonText('login'))
  }
}
