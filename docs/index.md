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
- [Referências](#referências)


# Autores

* Carolina Carvalho
* Enzo Cecone
* Enzo Fiorelli
* Marcus Vinicius

# Descrição do projeto

*O nosso projeto se baseia em um "Sistema de Presença" requisitado pela Escola Octógono, usufruiremos da programação para montar um software capaz de atender os requisitos levantados pela escola, para que os professores possam realizar o registramento de faltas de uma maneira muito mais prática e intuitiva, e também que os usuários da plataforma (alunos) possam analisar os seus dados, e suas próprias quantidades de faltas, com o objetivo de ter um controle maior de frequência. Vamos utilizar o SpringBoot e o React JS como ferramentas para nos auxilixar na construção do Sistema, onde ao executar o programa, o administrador registrará a falta, logo depois o software armazena esses dados registrados em algum tipo de dicionário ou bando de dados, e em seguida apresenta os mesmos para uma visualização, dependendo da pesquisa que o usuário fazer.*

# Diagrama de casos de uso

![Captura de tela 2023-02-16 220433](https://user-images.githubusercontent.com/83656921/219533468-f5aa7e4b-60dd-46e3-9038-66cb2408538a.png)

# Descrição dos casos de uso

## CASO 01 - Registrar faltas
Identificador   | CASO 01
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

## CASO 02 - Gerar relatório
Identificador   | CASO 02
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

## CASO 03 - Enviar notificação
Identificador   | CASO 03
--------- | ------
Nome | Enviar notificação
Atores | Professor, responsável
Sumário | Com o professor gerando o relatório, ele terá o opção de enviar um email para os responsáveis dos alunos que faltaram mais de 20% das aulas.
Complexidade | Fácil
Regras de negócio | O envio dos emails será apenas para os pais ou responsáveis daqueles alunos que tem mais de 20% de faltas.

### Fluxo principal
Ação do ator   | Ações do sistema
------ | ------
1-O professor entra na área da turma na qual deseja enviar o email para os responsáveis; | ---------
-------- | 3-O sistema dispara os emails para os responsáveis dos alunos que faltaram mais de 20% nas aulas;
-------- | 3-O sistema confirma o envio dos emails para os pais e responsáveis.

# Protótipos de tela

[Protótipos de tela](https://www.figma.com/file/3FFFVbMPTyMaB3QJrErbXa/Escola-oct%C3%B3gno?node-id=0%3A1&t=XVkB8kYz7mUTq5zZ-1)

# Modelo de domínio

*&lt;Modelo de domínio&gt;*

# Decisões de arquitetura

*&lt;Decisões de arquitetura&gt;*

# Diagrama de implantação

*&lt;Diagrama de implantação&gt;*

# Referências

*&lt;Lista de referências&gt;*
