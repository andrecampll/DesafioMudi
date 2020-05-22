<p align="center">
  <img src="../logo.png"/>
</p>

# Mudi Saúde 🩺
Esta pasta é referente ao backend do desafio proposto no processo de seleção da empresa Mudi.

# Proposta 🔥
Este projeto é uma intervenção tecnológica na área da saúde, permitindo que pacientes se conectem de forma mais eficiente com
os médicos, a fim de agilizar o sistema de saúde Brasileiro na medida do possível.<br /> Obs: O desafio original não exigia banco de dados.
Tal módulo foi criado apenas com um propósito de acréscimo, caso a aplicação seja colocada no ar.

# Tecnologias Utilizadas 🚀
Typescript 🦕 </br>
NodeJS ⚛️ <br />
Express 🚂 <br />
Typeorm ⚛️ <br />
Cors ⚛️ <br />
Jest 🃏 <br />
Entre outras...

# Estrutura de Pastas 🗃️
Este projeto foi construído seguindo a metodologia DDD (Domain Driven Development), portanto, dentro da pasta <code>src</code>,
há outras duas pastas principais, <code>modules</code> e <code>shared</code>, as quais contêm, respectivamente, os módulos (domínios)
da aplicação e os arquivos compartilhados entre os mesmos. <br />
<code>obs: 'provider' referencia o prestador de serviço, ou seja, o médico</code>

    ├── src
        ├── config         # Arquivos de configuração
        ├── modules        # módulos da aplicação
        ├── shared         # Arquivos compartilhados
        └── @types         # Sobrescrição de alguns tipos
 

Para cada módulo, há 4 pastas principais: <code>dtos</code>, <code>infra</code>,<code>repositories</code> e <code>services</code>.

    ├── "módulo"
        ├── dtos                 # Data Transfer Objects: responsáveis por definir interfaces para transferência de objetos.
        ├── infra                # Camada de infra: arquivos que podem se comunicar com servicos externos.
        ├── repositories         # Repositórios: arquivos responsáveis por toda e qualquer operação realizada no banco de dados.
        └── services             # Serviços: arquivos responsáveis por estabelecer todas as regras de negócio referentes ao módulo. 


Cada repositório também possui um repositório "fake", responsável por simular as operações no banco de dados, ao realizar um teste.

Para cada camada de Infra, existem duas pastas: <code>http</code> e <code>typeorm</code>, as quais possuem, respectivamente, as responsabilidades
de armazenar as rotas, controllers e middlewares da aplicação, e armazenar (caso haja) as migrations, entidades, e repositórios (reais, não fakes)
referentes ao módulo em questão.

     ├── http
            ├── routes                
            ├── middlewares
            └── controllers                  
     ├── typeorm
            ├── entities                 # "Models" da aplicação, responsável por definir a forma das entidades dentro do banco
            ├── migrations               # "Controle de versão do banco de dados", responsável por realizar alterações no banco.
            └── repositories             # Repositório real, responsável por executar todas as operações relacionadas ao banco de dados.

# Rotas 🛣️
<code>post/users</code>: Criação de um novo usuário. Recebe name, email e password no corpo da requisição; <br /><br />
<code>post/sessions</code>: Criação de uma nova sessão no app. Recebe email e password no corpo da requisição e gera um token JWT; <br /><br />
<code>post/appointments</code>: Criação de um novo agendamento com o médico. Recebe provider_id e a data do agendamento no corpo da requisição. Rota autenticada pelo token;<br /> <br />
<code>get/providers</code>: Lista todos os médicos cadastrados. Não necessita de corpo na requisiçaõ. Rota autenticada pelo token; <br /><br />
<code>get/profile</code>: Lista todos os dados do usuário cadastrado. Não necessita de corpo na requisiçaõ. Rota autenticada pelo token; <br />

# Testes 🧪
Todos os testes dessa aplicação foram desenvolvidos com Jest e utilizam dados fakes. <br />
Para rodar todos os testes use <code> yarn test </code>.

# Como obter esse repositório 🤔
- Backend:
  1. Clone esse repositório utilizando <code>git clone</code>.
  2. Navegue até a pasta 'backend'.
  3. Rode o comando <code> yarn </code> na raíz da pasta para baixar as dependências.
  4. Rode o comando <code> yarn dev:server</code> para inicializar o servidor.
  5. Happy Hacking! 🚀

# Como Contribuir? 😍
**Faça um fork deste repositório**

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd DesafioMudi

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Delete sua branch, se quiser, quando o merge da sua pull request for feito. <br />

Feito com 💜 por <a href="https://www.linkedin.com/in/andrecampll/" target="blank">andrecampll</a>.
