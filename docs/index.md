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

