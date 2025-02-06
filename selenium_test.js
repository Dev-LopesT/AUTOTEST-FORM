const { describe, it, before, after } = require('mocha');
const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const { ServiceBuilder } = require('selenium-webdriver/chrome');

let driver;

describe('Teste de Login com Selenium', function () {
    this.timeout(30000);  

    before(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeService(new ServiceBuilder('C:/Users/thiag/Downloads/chromedriver-win64/chromedriver.exe'))
            .build();
    });

    after(async () => {
        if (driver) {
            await driver.quit();
        }
    });

    it('Deve fazer login com credenciais válidas', async () => {
        await driver.get('https://practicetestautomation.com/practice-test-login/');

        const usernameField = await driver.findElement(By.id('username'));
        const passwordField = await driver.findElement(By.id('password'));
        const submitButton = await driver.findElement(By.id('submit'));

        // Entrar com as credenciais válidas
        await usernameField.sendKeys('student');
        await passwordField.sendKeys('Password123');
        await submitButton.click();

        // Espera explícita para garantir que a URL seja a esperada após o login
        await driver.wait(until.urlContains('/logged-in-successfully/'), 5000);
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include('/logged-in-successfully/');
    });

    it('Deve exibir erro ao usar credenciais inválidas', async () => {
        await driver.get('https://practicetestautomation.com/practice-test-login/');

        const usernameField = await driver.findElement(By.id('username'));
        const passwordField = await driver.findElement(By.id('password'));
        const submitButton = await driver.findElement(By.id('submit'));

        // Entrar com as credenciais inválidas
        await usernameField.sendKeys('usuario_invalido');
        await passwordField.sendKeys('senhaerrada');
        await submitButton.click();

        // Esperar o erro aparecer na tela
        const errorMessage = await driver.findElement(By.css('#error')).getText();
        expect(errorMessage).to.include('Your username is invalid!');
    });
});


// Para realizar o teste:
// npm test