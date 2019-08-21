Protractor é um programa Node.js, portanto, para executá-lo é necessário possuir o Node instalado. Ao realizar o download do Protractor via npm, o Node será instalado e o Jasmine será o framework utilizado para teste de interface.

Installation
Execute o comando abaixo para instalar o protractor e o webdriver-manager globalmente:

$npm install -g protractor

O webdriver-manager provê um servidor Selenium e gerencia os drivers para os testes end-to-end. Antes de iniciar o servidor, é necessário baixar os binários do Selenium e do chromedriver por padrão:

$webdriver-manager update

Em seguida, o servidor será criado com o comando:

$webdriver-manager start
