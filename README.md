<img src="src/gif/nitro.gif" alt="nitro">

# Teste técnico para o cargo de Desenvolvedor FrontEnd da Nitro

Projeto seguindo as especificações abaixo:

## Objetivo

* Fazer a codificação do layout proposto (está dentro da pasta layout);
* Entregar o código fonte, junto com a automação para gerar nos ambientes de desenvolvimento e produção;
* Fazer a consulta do JSON (dados.json), e mostrar na tela o resultado (usar XMLHttp​Request ou Fetch API);
* Se o usuário pesquisar um código que não existe (ex.: QWE-728), mostrar a tela de erro (tem no layout);
* O resultado deve exibir os seguintes dados:
    + Número de ordem (cliente.id) - nome do cliente (cliente.nome)
    + Data do pedido (formato dd/mm/aaaaa)
    + Valor do pedido (formatado em reais e não pode aparecer na versão mobile)
    + Se entregue, colocar 'entregue', se não, colocar 'entregar'

## Obrigatório

* Não usar nenhum framework ou library (ex.: Bootstrap, jQuery e etc...);
* Código Cross-browser (suporte para a última versão de cada browser);
* Escrever o JavaScript em ES6+ (JS Moderno);
* Escrever o HTML da forma mais semântica possível;
* Usar algum pré-processador CSS ([Sass](http://sass-lang.com), [Less](http://lesscss.org), [Stylus](http://stylus-lang.com));
* Utilizar alguma automatização (task runner ou bundler), como por exemplo: [Gulp](http://gulpjs.com), [Grunt](http://gruntjs.com), [webpack](https://webpack.js.org/) ou [NPM Scripts](https://docs.npmjs.com/misc/scripts).

> Seu teste precisa ter um comando de build (ex.: `npm run build`), que gere para uma pasta os arquivos para produção, utilizando alguma ferramenta de automação, sendo da seguinte forma:

* HTML = Minificado;
* CSS = Todos em um único arquivo e minificado;
* JS = Gerar em ES5 e minificado.

## Para rodar:
* npm install
* npm run dev
* npm run build
* json-server --watch dados.json 

## Feito Com:

[![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://www.microsoft.com/pt-br/windows/get-windows-10)
[![IDE](https://img.shields.io/badge/Visual_studio_code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white)
