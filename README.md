# Connect House Web App

Este é o repositório do web app da Connect House, uma empresa especializada em serviços de conectividade residencial. O web app foi desenvolvido utilizando React.js e TypeScript, fornecendo uma experiência moderna e responsiva para os usuários.

## Características Principais

- **Landing Page Atraente:** A landing page do Connect House Web App é projetada para atrair a atenção dos visitantes, fornecendo informações concisas sobre a empresa e seus serviços.
- **Páginas de Serviços Prestados:** O web app oferece páginas dedicadas para cada um dos serviços prestados pela Connect House, permitindo que os usuários obtenham detalhes sobre os pacotes e recursos disponíveis.
- **Páginas de Projetos Realizados:** Os projetos concluídos pela Connect House são apresentados em páginas específicas, onde os usuários podem ver informações detalhadas, imagens e depoimentos dos clientes satisfeitos.
- **Design Responsivo:** O web app é completamente responsivo, garantindo uma experiência de uso otimizada em dispositivos móveis, tablets e desktops.

## Pré-requisitos

Antes de executar o Connect House Web App, certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- Node.js - [Baixe e instale o Node.js](https://nodejs.org)
- npm - Geralmente é instalado junto com o Node.js, mas você pode verificar digitando `npm -v` no terminal.

## Configuração do Ambiente

Siga as etapas abaixo para configurar o ambiente de desenvolvimento:

1. Clone este repositório para o seu ambiente local.
2. Navegue até o diretório raiz do projeto.
3. Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

## Executando o Web App

Após a conclusão da configuração do ambiente, você pode iniciar o Connect House Web App localmente. Para fazer isso, siga as etapas abaixo:

1. Navegue até o diretório raiz do projeto.
2. Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm start
```

3. O web app estará disponível em `http://localhost:3000` por padrão.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
|-- connecthouse/
  |-- webapp/
    |-- public/
    |-- src/
        |-- components/
        |-- pages/
        |-- App.tsx
        |-- main.tsx
        |-- ...
    |-- package.json
    |-- index.html
  |-- LICENSE
  |-- README.md
```
- A pasta `webapp` é a pasta raiz que contém o arquivo `index.html` e o arquivo `package.json` com as dependencias do projeto.
- A pasta `public` contém os recursos estáticos necessários para o web app.
- A pasta `src` contém o código-fonte do web app, incluindo componentes reutilizáveis, páginas e arquivos de configuração.
- O arquivo `App.tsx` é o componente raiz do web app.
- O arquivo `main.tsx` é responsável por inicializar o aplicativo React e renderizar o componente raiz App no DOM.

## Contribuição

Contribuições são bem-vindas! Se você quiser melhorar o Connect House Web App, sinta-se à vontade para criar uma nova branch e enviar uma solicitação de pull. Certifique-se de seguir as melhores práticas de desenvolvimento e incluir descrições claras de suas alterações.

## Licença

Este projeto está

 licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

Esperamo que você aproveite o Connect House Web App. Sinta-se à vontade para entrar em contato com a empresa em caso de dúvidas ou feedback.