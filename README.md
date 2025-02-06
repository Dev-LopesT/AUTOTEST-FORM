Testes Automatizados de Login com Selenium e JavaScript

Este projeto automatiza testes de login utilizando Selenium WebDriver com JavaScript, Mocha como framework de testes e Chai para asserções. O objetivo principal é garantir que a funcionalidade de login do sistema esteja funcionando corretamente, testando credenciais válidas e inválidas.

Tecnologias Utilizadas
Selenium WebDriver: Para interação com o navegador e automação de testes.
JavaScript: Linguagem principal para os testes automatizados.
Mocha: Framework de testes para organização e execução dos testes.
Chai: Biblioteca de asserções para validar resultados nos testes.
Chromedriver: Driver necessário para controle do navegador Chrome.
Configuração do Ambiente
Instalar as dependências:

Para começar a usar o projeto, instale as dependências utilizando o npm:

bash
Copy
Edit
npm install
Configuração do package.json:

O script de testes está configurado para rodar o Mocha com o comando npm test, que executa o arquivo de testes selenium_test.js.
O projeto está configurado para usar CommonJS como sistema de módulos. Caso deseje utilizar ESM (import/export), altere a configuração no package.json para "type": "module" e renomeie os arquivos .js para .mjs.
Estrutura de Testes
Os testes estão organizados da seguinte maneira:

1. Login com credenciais válidas:
Acesse o formulário de login, insira as credenciais válidas e verifique se a URL muda para a página de login bem-sucedido.
2. Login com credenciais inválidas:
Acesse o formulário de login, insira credenciais inválidas e verifique se a mensagem de erro é exibida.
Como Executar os Testes
Para executar os testes automatizados, basta rodar o seguinte comando no terminal:

bash
Copy
Edit
npm test
Os testes irão rodar automaticamente no navegador Chrome, e você verá os resultados diretamente no terminal.

Conclusão:
Com o uso de Selenium WebDriver, JavaScript, Mocha e Chai, foi possível criar uma base sólida para testes automatizados de login, cobrindo tanto cenários de sucesso quanto de erro. O ambiente está configurado de maneira flexível, permitindo que os testes sejam facilmente expandidos para outras funcionalidades e cenários no futuro.

Este projeto oferece uma maneira eficaz de automatizar testes e garantir a qualidade e estabilidade do sistema à medida que ele evolui.

