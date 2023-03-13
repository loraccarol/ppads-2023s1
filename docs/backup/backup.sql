DROP TABLE aluno CASCADE;
DROP TABLE aula CASCADE;
DROP TABLE disciplina CASCADE;
DROP TABLE faltas CASCADE;
DROP TABLE grade_horarios CASCADE;
DROP TABLE professor CASCADE;
DROP TABLE turma CASCADE;

CREATE DATABASE escola_octogono_db;

use escola_octogono_db; 

CREATE TABLE turma (
    id bigint NOT NULL,
    ano integer,
    codigo character varying(255)
);

CREATE TABLE disciplina (
    codigo bigint NOT NULL,
    nome character varying(255)
);

CREATE TABLE professor (
    drt bigint NOT NULL,
    nome character varying(255),
    tipo_funcao smallint
);

CREATE TABLE aluno (
    tia bigint NOT NULL,
    nome character varying(255),
    turma_id bigint
);

CREATE TABLE aluno (
    tia bigint NOT NULL,
    nome character varying(255),
    turma_id bigint
);


CREATE TABLE aula (
    id bigint NOT NULL,
    chamada smallint,
    data timestamp(6),
    disciplina_codigo bigint,
    turma_id bigint
);

CREATE TABLE grade_horarios (
    id bigint NOT NULL,
    disciplina_codigo bigint,
    professor_drt bigint,
    turma_id bigint
);


CREATE TABLE faltas (
    id bigint NOT NULL,
    aluno_tia bigint,
    aula_id bigint
);

INSERT INTO turma (id, ano, codigo) VALUES (1,1,'1A');
INSERT INTO turma (id, ano, codigo) VALUES (2,1,'1B');
INSERT INTO turma (id, ano, codigo) VALUES (3,2,'2A');
INSERT INTO turma (id, ano, codigo) VALUES (4,3,'3A');
INSERT INTO turma (id, ano, codigo) VALUES (5,4,'4A');
INSERT INTO turma (id, ano, codigo) VALUES (6,5,'5A');

insert into disciplina (codigo, nome) values (1,'Matemática');
insert into disciplina (codigo, nome) values (2,'Português');
insert into disciplina (codigo, nome) values (3,'Artes');
insert into disciplina (codigo, nome) values (4,'Ciências');
insert into disciplina (codigo, nome) values (5,'História');
insert into disciplina (codigo, nome) values (6,'Geografia');
insert into disciplina (codigo, nome) values (7,'Ed. Física');
insert into disciplina (codigo, nome) values (8,'Inglês');

insert into professor (drt,nome,tipo_funcao) values (906753,'Maria Julia Caldeira',1);
insert into professor (drt,nome,tipo_funcao) values (519105,'Davi Ramos',1);
insert into professor (drt,nome,tipo_funcao) values (741687,'Davi Lucca Jesus',1);
insert into professor (drt,nome,tipo_funcao) values (124651,'Julia Cardoso',1);
insert into professor (drt,nome,tipo_funcao) values (120466,'Bárbara Lopes',1);
insert into professor (drt,nome,tipo_funcao) values (594167,'Olivia Pinto',1);
insert into professor (drt,nome,tipo_funcao) values (532110,'Maria Luiza Peixoto',2);
insert into professor (drt,nome,tipo_funcao) values (459558,'Calebe Peixoto',2);

insert into aluno (tia, nome, turma_id) values(445035,'Isabel Melo',1);
insert into aluno (tia, nome, turma_id) values(574783,'Isabelly Caldeira',1);
insert into aluno (tia, nome, turma_id) values(437433,'Cauê Martins',1);
insert into aluno (tia, nome, turma_id) values(435588,'Gabriel Lima',1);
insert into aluno (tia, nome, turma_id) values(554185,'Yasmin Martins',1);
insert into aluno (tia, nome, turma_id) values(122841,'Luiz Fernando Carvalho',1);
insert into aluno (tia, nome, turma_id) values(842436,'Joana Rezende',1);
insert into aluno (tia, nome, turma_id) values(658105,'Luiz Otávio Viana',1);
insert into aluno (tia, nome, turma_id) values(787244,'Daniel Caldeira',1);
insert into aluno (tia, nome, turma_id) values(433804,'Bruna Barbosa',1);
insert into aluno (tia, nome, turma_id) values(823797,'Alícia Jesus',1);
insert into aluno (tia, nome, turma_id) values(906753,'Maria Julia Caldeira',1);
insert into aluno (tia, nome, turma_id) values(519105,'Davi Ramos',1);
insert into aluno (tia, nome, turma_id) values(741687,'Davi Lucca Jesus',1);
insert into aluno (tia, nome, turma_id) values(124651,'Julia Cardoso',1);
insert into aluno (tia, nome, turma_id) values(120466,'Bárbara Lopes',1);
insert into aluno (tia, nome, turma_id) values(594167,'Olivia Pinto',1);
insert into aluno (tia, nome, turma_id) values(532110,'Maria Luiza Peixoto',1);
insert into aluno (tia, nome, turma_id) values(459558,'Calebe Peixoto',1);
insert into aluno (tia, nome, turma_id) values(881621,'Nicolas Ferreira',1);

insert into aluno (tia, nome, turma_id) values(937016,'Diego Alves',2);
insert into aluno (tia, nome, turma_id) values(980788,'Valentina da Mota',2);
insert into aluno (tia, nome, turma_id) values(992632,'Mirella Gomes',2);
insert into aluno (tia, nome, turma_id) values(195588,'Enzo Gabriel Carvalho',2);
insert into aluno (tia, nome, turma_id) values(789915,'João Ramos',2);
insert into aluno (tia, nome, turma_id) values(546033,'Leonardo Silva',2);
insert into aluno (tia, nome, turma_id) values(856670,'Ana Clara Viana',2);
insert into aluno (tia, nome, turma_id) values(643433,'Marcos Vinicius da Luz',2);
insert into aluno (tia, nome, turma_id) values(606569,'Anthony Gomes',2);
insert into aluno (tia, nome, turma_id) values(546286,'Miguel Sales',2);
insert into aluno (tia, nome, turma_id) values(295364,'Letícia Ribeiro',2);
insert into aluno (tia, nome, turma_id) values(797828,'Marcos Vinicius Gonçalves',2);
insert into aluno (tia, nome, turma_id) values(632489,'Yasmin Rodrigues',2);
insert into aluno (tia, nome, turma_id) values(769211,'Ana Sophia da Rosa',2);
insert into aluno (tia, nome, turma_id) values(283900,'Luiz Gustavo Pereira',2);
insert into aluno (tia, nome, turma_id) values(838848,'Maysa da Mata',2);
insert into aluno (tia, nome, turma_id) values(368005,'Lara Ferreira',2);
insert into aluno (tia, nome, turma_id) values(671489,'Murilo da Mota',2);
insert into aluno (tia, nome, turma_id) values(491435,'Kaique da Paz',2);

insert into aluno (tia, nome, turma_id) values(785356,'Heloísa da Luz',3);
insert into aluno (tia, nome, turma_id) values(688776,'Theo Lima',3);
insert into aluno (tia, nome, turma_id) values(843761,'Lorena da Mata',3);
insert into aluno (tia, nome, turma_id) values(535312,'Maria Caldeira',3);
insert into aluno (tia, nome, turma_id) values(251366,'João Guilherme da Cruz',3);
insert into aluno (tia, nome, turma_id) values(809654,'Raquel Farias',3);
insert into aluno (tia, nome, turma_id) values(147656,'Ian Vieira',3);
insert into aluno (tia, nome, turma_id) values(223002,'Maria Vitória Duarte',3);
insert into aluno (tia, nome, turma_id) values(801514,'Raquel Moraes',3);
insert into aluno (tia, nome, turma_id) values(905976,'Laura Carvalho',3);
insert into aluno (tia, nome, turma_id) values(536897,'Pedro Lucas Fogaça',3);
insert into aluno (tia, nome, turma_id) values(527558,'Marcelo Pinto',3);
insert into aluno (tia, nome, turma_id) values(774733,'Lucas da Mota',3);
insert into aluno (tia, nome, turma_id) values(395703,'Samuel Teixeira',3);
insert into aluno (tia, nome, turma_id) values(580526,'Lorenzo Campos',3);
insert into aluno (tia, nome, turma_id) values(215341,'Emanuelly Correia',3);
insert into aluno (tia, nome, turma_id) values(803719,'Otávio Cavalcanti',3);
insert into aluno (tia, nome, turma_id) values(823410,'Pedro Lucas Araújo',3);
insert into aluno (tia, nome, turma_id) values(416212,'Emanuel Pereira',3);
insert into aluno (tia, nome, turma_id) values(288281,'Joana da Luz',3);
insert into aluno (tia, nome, turma_id) values(955489,'Lívia Farias',3);
insert into aluno (tia, nome, turma_id) values(645912,'Helena Peixoto',3);

insert into aluno (tia, nome, turma_id) values(939953,'Noah Cardoso',4);
insert into aluno (tia, nome, turma_id) values(513581,'Matheus Teixeira',4);
insert into aluno (tia, nome, turma_id) values(575537,'Mariana Costa',4);
insert into aluno (tia, nome, turma_id) values(720171,'Ana Nascimento',4);
insert into aluno (tia, nome, turma_id) values(452647,'Maria Silva',4);
insert into aluno (tia, nome, turma_id) values(370216,'Guilherme Pinto',4);
insert into aluno (tia, nome, turma_id) values(594108,'Stephany Rodrigues',4);
insert into aluno (tia, nome, turma_id) values(392382,'Maria Vitória da Rocha',4);
insert into aluno (tia, nome, turma_id) values(892440,'Kaique Duarte',4);
insert into aluno (tia, nome, turma_id) values(666926,'Bruno Alves',4);
insert into aluno (tia, nome, turma_id) values(222143,'Paulo da Conceição',4);
insert into aluno (tia, nome, turma_id) values(908212,'Sofia Rodrigues',4);
insert into aluno (tia, nome, turma_id) values(146472,'Enzo da Rosa',4);
insert into aluno (tia, nome, turma_id) values(957060,'Maria Clara Teixeira',4);
insert into aluno (tia, nome, turma_id) values(939110,'Eduardo da Cruz',4);
insert into aluno (tia, nome, turma_id) values(271532,'Matheus Nascimento',4);
insert into aluno (tia, nome, turma_id) values(262448,'Diogo Lima',4);
insert into aluno (tia, nome, turma_id) values(201941,'Esther Gonçalves',4);
insert into aluno (tia, nome, turma_id) values(977821,'Felipe Almeida',4);
insert into aluno (tia, nome, turma_id) values(473635,'Ana Beatriz Pires',4);

insert into aluno (tia, nome, turma_id) values(184846,'Luiz Gustavo Ramos',5);
insert into aluno (tia, nome, turma_id) values(192562,'Pedro Alves',5);
insert into aluno (tia, nome, turma_id) values(712937,'Ana Sophia Nogueira',5);
insert into aluno (tia, nome, turma_id) values(520375,'Anthony Dias',5);
insert into aluno (tia, nome, turma_id) values(968700,'Ana Luiza Viana',5);
insert into aluno (tia, nome, turma_id) values(444239,'Stella Santos',5);
insert into aluno (tia, nome, turma_id) values(784403,'Rodrigo Porto',5);
insert into aluno (tia, nome, turma_id) values(598343,'Bryan Fogaça',5);
insert into aluno (tia, nome, turma_id) values(472007,'Yuri Azevedo',5);
insert into aluno (tia, nome, turma_id) values(862028,'Letícia Teixeira',5);
insert into aluno (tia, nome, turma_id) values(909412,'Vinicius Almeida',5);
insert into aluno (tia, nome, turma_id) values(161658,'Luiz Miguel Silva',5);
insert into aluno (tia, nome, turma_id) values(122744,'Nina Freitas',5);
insert into aluno (tia, nome, turma_id) values(106011,'Stella Ribeiro',5);
insert into aluno (tia, nome, turma_id) values(254052,'Stephany Viana',5);
insert into aluno (tia, nome, turma_id) values(236731,'Caio Costa',5);
insert into aluno (tia, nome, turma_id) values(962019,'Maria Eduarda Ramos',5);
insert into aluno (tia, nome, turma_id) values(683075,'Sofia Cunha',5);
insert into aluno (tia, nome, turma_id) values(920474,'Mariana Fernandes',5);
insert into aluno (tia, nome, turma_id) values(349443,'Vitória da Luz',5);
insert into aluno (tia, nome, turma_id) values(494108,'Laís Farias',5);
insert into aluno (tia, nome, turma_id) values(867560,'Marina Azevedo',5);
insert into aluno (tia, nome, turma_id) values(191512,'Luna Ferreira',5);
insert into aluno (tia, nome, turma_id) values(654204,'Murilo da Cunha',5);
insert into aluno (tia, nome, turma_id) values(258553,'Enrico Costa',5);

insert into aluno (tia, nome, turma_id) values(928324,'Renan Melo',6);
insert into aluno (tia, nome, turma_id) values(881918,'Laura da Mota',6);
insert into aluno (tia, nome, turma_id) values(583978,'Nathan Melo',6);
insert into aluno (tia, nome, turma_id) values(114342,'Esther da Cunha',6);
insert into aluno (tia, nome, turma_id) values(501289,'Isabella Fogaça',6);
insert into aluno (tia, nome, turma_id) values(720383,'Otávio Ferreira',6);
insert into aluno (tia, nome, turma_id) values(606705,'Amanda Porto',6);
insert into aluno (tia, nome, turma_id) values(214799,'Eduarda da Paz',6);
insert into aluno (tia, nome, turma_id) values(666179,'Marcelo Souza',6);
insert into aluno (tia, nome, turma_id) values(548168,'Lorenzo das Neves',6);
insert into aluno (tia, nome, turma_id) values(278718,'Noah Gonçalves',6);
insert into aluno (tia, nome, turma_id) values(265831,'Marcos Vinicius Souza',6);
insert into aluno (tia, nome, turma_id) values(826617,'Calebe Costela',6);
insert into aluno (tia, nome, turma_id) values(688793,'Cauã Melo',6);
insert into aluno (tia, nome, turma_id) values(718488,'Ana Luiza Moreira',6);
insert into aluno (tia, nome, turma_id) values(443645,'Ana Vitória Freitas',6);
insert into aluno (tia, nome, turma_id) values(319363,'Beatriz Souza',6);
insert into aluno (tia, nome, turma_id) values(886000,'Guilherme Teixeira',6);
insert into aluno (tia, nome, turma_id) values(711889,'Sophie Barros',6);
insert into aluno (tia, nome, turma_id) values(833495,'Maria Sophia Fernandes',6);
insert into aluno (tia, nome, turma_id) values(371636,'Amanda Moraes',6);
insert into aluno (tia, nome, turma_id) values(854262,'Daniela Viana',6);
insert into aluno (tia, nome, turma_id) values(485038,'Maria Fernanda Barbosa',6);
insert into aluno (tia, nome, turma_id) values(566683,'Agatha Freitas',6);
insert into aluno (tia, nome, turma_id) values(141329,'Emanuel Jesus',6);
insert into aluno (tia, nome, turma_id) values(406301,'Pedro Alves',6);
insert into aluno (tia, nome, turma_id) values(153769,'Rodrigo Araújo',6);
insert into aluno (tia, nome, turma_id) values(612687,'Samuel Ramos',6);
insert into aluno (tia, nome, turma_id) values(570971,'Samuel Dias',6);
insert into aluno (tia, nome, turma_id) values(635725,'Arthur Nascimento',6);

insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (1, 1, 2, 1, 906753, 4);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (2, 2, 2, 8, 459558, 4);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (3, 1, 3, 2, 519105, 4);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (4, 2, 3, 3, 741687, 4);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (5, 1, 4, 4, 124651, 4);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (6, 2, 4, 5, 120466, 4);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (7, 1, 5, 6, 594167, 4);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (8, 2, 5, 7, 532110, 4);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (9, 1, 6, 2, 519105, 4);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (10, 2, 6, 1, 906753, 4);

insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (11, 1, 2, 8, 459558, 6);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (12, 2, 2, 1, 906753, 6);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (13, 1, 3, 3, 741687, 6);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (14, 2, 3, 2, 519105, 6);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (15, 1, 6, 5, 120466, 6);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (16, 2, 6, 4, 124651, 6);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (17, 1, 5, 7, 532110, 6);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (18, 2, 5, 6, 594167, 6);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (19, 1, 6, 1, 906753, 6);
insert into grade_horarios (id, chamada, dia_da_semana, disciplina_codigo, professor_drt, turma_id) values (20, 2, 6, 2, 519105, 6);


insert into aula (id, chamada, data, dia_da_semana, turma_id) values (1,1,'2023-02-06', 2, 4);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (2,2,'2023-02-06', 2, 4);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (3,1,'2023-02-07', 3, 4);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (4,2,'2023-02-07', 3, 4);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (5,1,'2023-02-08', 4, 4);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (6,2,'2023-02-08', 4, 4);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (7,1,'2023-02-09', 5, 4);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (8,2,'2023-02-09', 5, 4);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (9,1,'2023-02-10', 6, 4);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (10,2,'2023-02-10', 6, 4);

insert into aula (id, chamada, data, dia_da_semana, turma_id) values (11,1,'2023-02-06', 2, 6);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (12,2,'2023-02-06', 2, 6);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (13,1,'2023-02-07', 3, 6);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (14,2,'2023-02-07', 3, 6);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (15,1,'2023-02-08', 4, 6);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (16,2,'2023-02-08', 4, 6);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (17,1,'2023-02-09', 5, 6);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (18,2,'2023-02-09', 5, 6);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (19,1,'2023-02-10', 6, 6);
insert into aula (id, chamada, data, dia_da_semana, turma_id) values (20,2,'2023-02-10', 6, 6);

insert into faltas (id, aluno_tia, aula_id) values (1, 892440, 1);
insert into faltas (id, aluno_tia, aula_id) values (2, 222143, 2);
insert into faltas (id, aluno_tia, aula_id) values (3, 892440, 2);
insert into faltas (id, aluno_tia, aula_id) values (4, 319363, 13);
insert into faltas (id, aluno_tia, aula_id) values (5, 319363, 14);
insert into faltas (id, aluno_tia, aula_id) values (6, 319363, 20);