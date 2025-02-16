<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao">Sistemas de Informação</a></h3>

# Missed Class

**Conteúdo**

- [Autores](#autores)
- [Descrição do projeto](#descrição-do-projeto)
- [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
- [Descrição dos casos de uso](#descrição-dos-casos-de-uso)
- [Protótipos de tela](#protótipos-de-tela)
- [Modelo de domínio](#modelo-de-domínio)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Diagrama de implantação](#diagrama-de-implantação)

# Autores

* Carolina Carvalho
* Enzo Cecone
* Enzo Fiorelli
* Marcus Vinicius



# Descrição do projeto

*O nosso projeto se baseia em um "Sistema de Presença" requisitado pela Escola Octógono, usufruiremos da programação para montar um software capaz de atender os requisitos levantados pela escola, para que os professores possam realizar o registro de faltas de uma maneira muito mais prática e intuitiva, com o objetivo de ter um controle maior de frequência dos alunos. Vamos utilizar o SpringBoot e o React JS como ferramentas para nos auxilixar na construção do Sistema, onde ao executar o programa, o professor registrará a falta, logo depois o software armazena esses dados registrados em um banco de dados, e em seguida apresenta os mesmos para uma visualização, dependendo da pesquisa que o usuário fazer.*

### [LINK PARA SISTEMA DE PRESENÇA](https://ppads-2023s1-escola-octogono.vercel.app/)

# Diagrama de casos de uso

![image](https://user-images.githubusercontent.com/83656921/232904379-0ad942f8-72bf-465e-ab49-4b3758a233f5.png)

# Descrição dos casos de uso

## CASO 01 - Gerenciar escola
Identificador   | CASO 01
--------- | ------
Nome | Gerenciar escola
Atores | Professor
Sumário | O professor tem uma área na qual vai gerenciar todos os professores, alunos, disciplinas e turmas da escola
Complexidade | Fácil
Regras de negócio | Cadastro de professores, alunos, disciplinas e turmas que existem na escola.

### Fluxo principal
Ação do ator   | Ações do sistema
------ | ------
-------- |1-O sistema mostra as listas para gerenciamento;
2-O professor adiciona/edita/exclui algum(a) professor(a), aluno(a), disciplina ou turma; | --------
-------- | 3-O sistema executa a ação solicitada;

## CASO 02 - Registrar faltas
Identificador   | CASO 02
--------- | ------
Nome | Registrar faltas
Atores | Professor
Sumário | O professor acessa a lista de alunos daquela turma, onde cada nome é clicável para realizar a ação de inserir uma falta naquela aula.
Complexidade | Fácil
Regras de negócio | Lançar falta para o aluno que não compareceu à aula.

### Fluxo principal
Ação do ator   | Ações do sistema
------ | ------
-------- |1-O sistema mostra a lista de turmas existentes para o professor;
2-O professor escolhe a turma que está em aula no momento; | --------
-------- | 3-O sistema mostra a lista dos alunos da turma selecionada;
4-O professor clica no nome do(s) aluno(s) faltantes; | --------
5-O clica no botão de confirmação; | --------
------ | 6-O sistema salva a lista, marcando quem faltou ou não.

## CASO 03 - Gerar relatório
Identificador   | CASO 03
--------- | ------
Nome | Gerar relatório
Atores | Professor
Sumário | O professor escolhe gerar o relatório do dia/ mês/ semestre/ ano. Com isso, recebe um arquivo com a quantidade consolidada de faltas de cada aluno.
Complexidade | Fácil
Regras de negócio | N/D

### Fluxo principal
Ação do ator   | Ações do sistema
------ | ------
1-O professor entra na área da turma na qual deseja gerar o relatório; | ---------
2-O professor clica no botão para gerar o relatório; | --------
-------- | 3-O sistema baixa na máquina do professor um arquivo com todas as informações necessárias;

## CASO 04 - Receber notificação
Identificador   | CASO 04
--------- | ------
Nome | Receber notificação
Atores | Responsável
Sumário | O sistema envia um email para os responsáveis dos alunos que faltaram mais de 20% das aulas.
Complexidade | Fácil
Regras de negócio | O recebimento dos emails será apenas para os pais ou responsáveis daqueles alunos que tem mais de 20% de faltas.

### Fluxo principal
Ação do ator   | Ações do sistema
------ | ------
1-O sistema verifica as faltas | ---------
-------- | 3-O sistema dispara os emails para os responsáveis dos alunos que faltaram mais de 20% nas aulas;
-------- | 3-O sistema confirma o envio dos emails para os pais e responsáveis.

# Protótipos de tela

[Protótipos de tela](https://www.figma.com/file/3FFFVbMPTyMaB3QJrErbXa/Escola-oct%C3%B3gno?node-id=0%3A1&t=XVkB8kYz7mUTq5zZ-1)

# Modelo de domínio

![image](https://user-images.githubusercontent.com/83656921/232906816-81819998-377c-4383-bf49-8451090566ed.png)

# Decisões de arquitetura

Para o nosso projeto, com uma abordagem monolítica, vamos utilizar as tecnologias Spring Boot, ReactJS e PostgreSQL. 

Spring Boot: Um framework para desenvolvimento de aplicações em Java que facilita a criação de APIs RESTful e aplicações web. 

ReactJS: Uma biblioteca JavaScript para construção de interfaces de usuário interativas, utiizando uma combinação de HTML e JS como linguagem, essa junção é conhecida como JSX.

PostgreSQL: Um sistema gerenciador de banco de dados relacional de código aberto.

# Diagrama de implantação

![image](https://user-images.githubusercontent.com/83656921/232909222-5ea5c3ea-46ae-436a-b5e7-69c374160cba.png)

# Plano de teste

## CASO 01 - Gerenciar escola
Informação   | Exemplo
--------- | ------
Identificação única | CASO 01
Caso de uso em que se baseia | Gerenciar escola
Cenário | Fluxo principal
Preparação (descrição da condição do sistema no início do teste) | Aluno deve ser cadastrado no sistema com seu tia, nome, e turma que está vinculado
Passos para a execução do teste | (1) Entrar na aba gerenciamento. (2) Escolher a aba 'Alunos' e clicar em Novo Aluno. (3) Preencher os campos com as informações corretas. (4) Clicar em 'Criar novo aluno'.
Resultado esperado  | O sistema deve mostrar o novo aluno na lista de alunos na página.
Resultado do teste (para ser preenchido após a execução do teste) | SUCESSO.
Descrição do resultado obtido  | Aluno foi cadastrado.
Data da última execução do teste  | 05/06/2023.

## CASO 02 - Registrar Faltas
Informação   | Exemplo
--------- | ------
Identificação única | CASO 02
Caso de uso em que se baseia | Registrar Faltas
Cenário | Fluxo principal
Preparação (descrição da condição do sistema no início do teste) | O professor deve estar cadastrado no sistema
Passos para a execução do teste | (1) Escolher uma turma mostrada na lista. (2) Seleciona a turma desejada. (3) Selecionar o aluno da lista daquela turma. (4) Clicar no botão "Lançar falta". (5) O sistema exibe a lista de falta dos alunos faltantes daquele dia'.
Resultado esperado  | O sistema deve registrar a falta do aluno.
Resultado do teste (para ser preenchido após a execução do teste) | SUCESSO.
Descrição do resultado obtido  | Foi registrado que o aluno recebeu falta.
Data da última execução do teste  | 05/06/2023.

## CASO 03 - Gerar relatório
Informação   | Exemplo
--------- | ------
Identificação única | CASO 03
Caso de uso em que se baseia | Gerar relatório
Cenário | Fluxo principal
Preparação (descrição da condição do sistema no início do teste) | Relatório deve mostrar as informações de alunos que faltaram em certo dia/ chamada/ disciplina
Passos para a execução do teste | (1) Entrar na aba relatório. (2) Visualizar informações dos alunos que faltaram.
Resultado esperado  | O sistema deve mostrar todos as faltas que foram registradas no sistema.
Resultado do teste (para ser preenchido após a execução do teste) | SUCESSO.
Descrição do resultado obtido  | A lista apareceu corretamente.
Data da última execução do teste  | 05/06/2023.

## CASO 04 - Receber notificação
Informação   | Exemplo
--------- | ------
Identificação única | CASO 04
Caso de uso em que se baseia | Receber notificação
Cenário | Fluxo principal
Preparação (descrição da condição do sistema no início do teste) | Se caso algum aluno obter menos que 75% de presença, deverá ter um aviso para o responsável.
Passos para a execução do teste | (1) Entrar na aba relatório. (2) Visualizar informações dos alunos que faltaram.
Resultado esperado  | O sistema deve mostrar todos as faltas que foram registradas no sistema e mandar um aviso ao responsável.
Resultado do teste (para ser preenchido após a execução do teste) | NÃO EXECUTADO.
Descrição do resultado obtido  | A lista apareceu corretamente, porém não foi enviada a notificação.
Data da última execução do teste  | 05/06/2023.

