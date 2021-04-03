import { SigninPage } from './page-objects/signin.po';
import { SignupPage } from './page-objects/signup.po';

interface CadastroTestInterface {
  email: string;
  name: string;
  user: string;
  password: string;
}

import { browser, protractor} from 'protractor';
let slowDown = (() => {
  var origFn = browser.driver.controlFlow().execute;
  
  browser.driver.controlFlow().execute = function() {
    var args = arguments;
  
    // queue 100ms wait
    origFn.call(browser.driver.controlFlow(), function() {
      return protractor.promise.delayed(100);
    });
  
    return origFn.apply(browser.driver.controlFlow(), args);
  };
});
//slowDown()

describe('Tela home', () => {
  let signinPage: SigninPage;
  let signupPage: SignupPage;

  let massaCadastro: CadastroTestInterface = {
    email: "teste@teste.com",
    name: "Igor dos testes",
    user: `testigor_${Math.floor(Math.random() * 1000)}`,
    password: "12312312"
  }

  beforeEach(() => {
    signinPage = new SigninPage();
    signupPage = new SignupPage();
  });

  it('deve ir para /home/signup', () => {
    signupPage.acessarSignup();
  });

  it('deve ter a url correspondente', () => {    
    expect(signupPage.obterUrl()).toBe('http://localhost:4200/#/home/signup');
  })

  it('deve cadastrar um novo usuário', () => {
    expect(signupPage.preencherFormControl('email', massaCadastro.email));
    expect(signupPage.preencherFormControl('fullName', massaCadastro.name));
    expect(signupPage.preencherFormControl('userName', massaCadastro.user));
    expect(signupPage.preencherFormControl('password', massaCadastro.password));
    expect(signupPage.obterBotaoRegister().click());    
  })

  it('deve ter a url correspondente', () => {    
    expect(signinPage.obterUrl()).toBe('http://localhost:4200/#/home');
  })

  it('deve fazer login', () => {
    expect(signinPage.preencherFormControl('userName', 'flavio'));
    expect(signinPage.preencherFormControl('password', '123'));
    expect(signinPage.obterBotaoLogin().click())
  })
});
