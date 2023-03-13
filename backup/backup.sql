--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

-- Started on 2023-03-06 18:51:24 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16692)
-- Name: aluno; Type: TABLE; Schema: public; Owner: carol
--

CREATE TABLE public.aluno (
    tia bigint NOT NULL,
    nome character varying(255),
    turma_id bigint
);


ALTER TABLE public.aluno OWNER TO carol;

--
-- TOC entry 209 (class 1259 OID 16691)
-- Name: aluno_tia_seq; Type: SEQUENCE; Schema: public; Owner: carol
--

CREATE SEQUENCE public.aluno_tia_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.aluno_tia_seq OWNER TO carol;

--
-- TOC entry 3424 (class 0 OID 0)
-- Dependencies: 209
-- Name: aluno_tia_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: carol
--

ALTER SEQUENCE public.aluno_tia_seq OWNED BY public.aluno.tia;


--
-- TOC entry 212 (class 1259 OID 16699)
-- Name: aula; Type: TABLE; Schema: public; Owner: carol
--

CREATE TABLE public.aula (
    id bigint NOT NULL,
    chamada smallint,
    data timestamp(6) without time zone,
    disciplina_codigo bigint,
    turma_id bigint
);


ALTER TABLE public.aula OWNER TO carol;

--
-- TOC entry 211 (class 1259 OID 16698)
-- Name: aula_id_seq; Type: SEQUENCE; Schema: public; Owner: carol
--

CREATE SEQUENCE public.aula_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.aula_id_seq OWNER TO carol;

--
-- TOC entry 3425 (class 0 OID 0)
-- Dependencies: 211
-- Name: aula_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: carol
--

ALTER SEQUENCE public.aula_id_seq OWNED BY public.aula.id;


--
-- TOC entry 214 (class 1259 OID 16706)
-- Name: disciplina; Type: TABLE; Schema: public; Owner: carol
--

CREATE TABLE public.disciplina (
    codigo bigint NOT NULL,
    nome character varying(255)
);


ALTER TABLE public.disciplina OWNER TO carol;

--
-- TOC entry 213 (class 1259 OID 16705)
-- Name: disciplina_codigo_seq; Type: SEQUENCE; Schema: public; Owner: carol
--

CREATE SEQUENCE public.disciplina_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.disciplina_codigo_seq OWNER TO carol;

--
-- TOC entry 3426 (class 0 OID 0)
-- Dependencies: 213
-- Name: disciplina_codigo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: carol
--

ALTER SEQUENCE public.disciplina_codigo_seq OWNED BY public.disciplina.codigo;


--
-- TOC entry 216 (class 1259 OID 16713)
-- Name: faltas; Type: TABLE; Schema: public; Owner: carol
--

CREATE TABLE public.faltas (
    id bigint NOT NULL,
    aluno_tia bigint,
    aula_id bigint
);


ALTER TABLE public.faltas OWNER TO carol;

--
-- TOC entry 215 (class 1259 OID 16712)
-- Name: faltas_id_seq; Type: SEQUENCE; Schema: public; Owner: carol
--

CREATE SEQUENCE public.faltas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.faltas_id_seq OWNER TO carol;

--
-- TOC entry 3427 (class 0 OID 0)
-- Dependencies: 215
-- Name: faltas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: carol
--

ALTER SEQUENCE public.faltas_id_seq OWNED BY public.faltas.id;


--
-- TOC entry 218 (class 1259 OID 16720)
-- Name: grade_horarios; Type: TABLE; Schema: public; Owner: carol
--

CREATE TABLE public.grade_horarios (
    id bigint NOT NULL,
    disciplina_codigo bigint,
    professor_drt bigint,
    turma_id bigint
);


ALTER TABLE public.grade_horarios OWNER TO carol;

--
-- TOC entry 217 (class 1259 OID 16719)
-- Name: grade_horarios_id_seq; Type: SEQUENCE; Schema: public; Owner: carol
--

CREATE SEQUENCE public.grade_horarios_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.grade_horarios_id_seq OWNER TO carol;

--
-- TOC entry 3428 (class 0 OID 0)
-- Dependencies: 217
-- Name: grade_horarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: carol
--

ALTER SEQUENCE public.grade_horarios_id_seq OWNED BY public.grade_horarios.id;


--
-- TOC entry 220 (class 1259 OID 16727)
-- Name: professor; Type: TABLE; Schema: public; Owner: carol
--

CREATE TABLE public.professor (
    drt bigint NOT NULL,
    nome character varying(255),
    tipo_funcao smallint
);


ALTER TABLE public.professor OWNER TO carol;

--
-- TOC entry 219 (class 1259 OID 16726)
-- Name: professor_drt_seq; Type: SEQUENCE; Schema: public; Owner: carol
--

CREATE SEQUENCE public.professor_drt_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.professor_drt_seq OWNER TO carol;

--
-- TOC entry 3429 (class 0 OID 0)
-- Dependencies: 219
-- Name: professor_drt_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: carol
--

ALTER SEQUENCE public.professor_drt_seq OWNED BY public.professor.drt;


--
-- TOC entry 222 (class 1259 OID 16734)
-- Name: turma; Type: TABLE; Schema: public; Owner: carol
--

CREATE TABLE public.turma (
    id bigint NOT NULL,
    ano integer,
    codigo character varying(255)
);


ALTER TABLE public.turma OWNER TO carol;

--
-- TOC entry 221 (class 1259 OID 16733)
-- Name: turma_id_seq; Type: SEQUENCE; Schema: public; Owner: carol
--

CREATE SEQUENCE public.turma_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.turma_id_seq OWNER TO carol;

--
-- TOC entry 3430 (class 0 OID 0)
-- Dependencies: 221
-- Name: turma_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: carol
--

ALTER SEQUENCE public.turma_id_seq OWNED BY public.turma.id;


--
-- TOC entry 3237 (class 2604 OID 16695)
-- Name: aluno tia; Type: DEFAULT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.aluno ALTER COLUMN tia SET DEFAULT nextval('public.aluno_tia_seq'::regclass);


--
-- TOC entry 3238 (class 2604 OID 16702)
-- Name: aula id; Type: DEFAULT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.aula ALTER COLUMN id SET DEFAULT nextval('public.aula_id_seq'::regclass);


--
-- TOC entry 3239 (class 2604 OID 16709)
-- Name: disciplina codigo; Type: DEFAULT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.disciplina ALTER COLUMN codigo SET DEFAULT nextval('public.disciplina_codigo_seq'::regclass);


--
-- TOC entry 3240 (class 2604 OID 16716)
-- Name: faltas id; Type: DEFAULT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.faltas ALTER COLUMN id SET DEFAULT nextval('public.faltas_id_seq'::regclass);


--
-- TOC entry 3241 (class 2604 OID 16723)
-- Name: grade_horarios id; Type: DEFAULT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.grade_horarios ALTER COLUMN id SET DEFAULT nextval('public.grade_horarios_id_seq'::regclass);


--
-- TOC entry 3242 (class 2604 OID 16730)
-- Name: professor drt; Type: DEFAULT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.professor ALTER COLUMN drt SET DEFAULT nextval('public.professor_drt_seq'::regclass);


--
-- TOC entry 3243 (class 2604 OID 16737)
-- Name: turma id; Type: DEFAULT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.turma ALTER COLUMN id SET DEFAULT nextval('public.turma_id_seq'::regclass);


--
-- TOC entry 3406 (class 0 OID 16692)
-- Dependencies: 210
-- Data for Name: aluno; Type: TABLE DATA; Schema: public; Owner: carol
--

COPY public.aluno (tia, nome, turma_id) FROM stdin;
445035	Isabel Melo	1
574783	Isabelly Caldeira	1
437433	Cauê Martins	1
435588	Gabriel Lima	1
554185	Yasmin Martins	1
122841	Luiz Fernando Carvalho	1
842436	Joana Rezende	1
658105	Luiz Otávio Viana	1
787244	Daniel Caldeira	1
433804	Bruna Barbosa	1
823797	Alícia Jesus	1
906753	Maria Julia Caldeira	1
519105	Davi Ramos	1
741687	Davi Lucca Jesus	1
124651	Julia Cardoso	1
120466	Bárbara Lopes	1
594167	Olivia Pinto	1
532110	Maria Luiza Peixoto	1
459558	Calebe Peixoto	1
881621	Nicolas Ferreira	1
937016	Diego Alves	2
980788	Valentina da Mota	2
992632	Mirella Gomes	2
195588	Enzo Gabriel Carvalho	2
789915	João Ramos	2
546033	Leonardo Silva	2
856670	Ana Clara Viana	2
643433	Marcos Vinicius da Luz	2
606569	Anthony Gomes	2
546286	Miguel Sales	2
295364	Letícia Ribeiro	2
797828	Marcos Vinicius Gonçalves	2
632489	Yasmin Rodrigues	2
769211	Ana Sophia da Rosa	2
283900	Luiz Gustavo Pereira	2
838848	Maysa da Mata	2
368005	Lara Ferreira	2
671489	Murilo da Mota	2
491435	Kaique da Paz	2
785356	Heloísa da Luz	3
688776	Theo Lima	3
843761	Lorena da Mata	3
535312	Maria Caldeira	3
251366	João Guilherme da Cruz	3
809654	Raquel Farias	3
147656	Ian Vieira	3
223002	Maria Vitória Duarte	3
801514	Raquel Moraes	3
905976	Laura Carvalho	3
536897	Pedro Lucas Fogaça	3
527558	Marcelo Pinto	3
774733	Lucas da Mota	3
395703	Samuel Teixeira	3
580526	Lorenzo Campos	3
215341	Emanuelly Correia	3
803719	Otávio Cavalcanti	3
823410	Pedro Lucas Araújo	3
416212	Emanuel Pereira	3
288281	Joana da Luz	3
955489	Lívia Farias	3
645912	Helena Peixoto	3
939953	Noah Cardoso	4
513581	Matheus Teixeira	4
575537	Mariana Costa	4
720171	Ana Nascimento	4
452647	Maria Silva	4
370216	Guilherme Pinto	4
594108	Stephany Rodrigues	4
392382	Maria Vitória da Rocha	4
892440	Kaique Duarte	4
666926	Bruno Alves	4
222143	Paulo da Conceição	4
908212	Sofia Rodrigues	4
146472	Enzo da Rosa	4
957060	Maria Clara Teixeira	4
939110	Eduardo da Cruz	4
271532	Matheus Nascimento	4
262448	Diogo Lima	4
201941	Esther Gonçalves	4
977821	Felipe Almeida	4
473635	Ana Beatriz Pires	4
184846	Luiz Gustavo Ramos	5
192562	Pedro Alves	5
712937	Ana Sophia Nogueira	5
520375	Anthony Dias	5
968700	Ana Luiza Viana	5
444239	Stella Santos	5
784403	Rodrigo Porto	5
598343	Bryan Fogaça	5
472007	Yuri Azevedo	5
862028	Letícia Teixeira	5
909412	Vinicius Almeida	5
161658	Luiz Miguel Silva	5
122744	Nina Freitas	5
106011	Stella Ribeiro	5
254052	Stephany Viana	5
236731	Caio Costa	5
962019	Maria Eduarda Ramos	5
683075	Sofia Cunha	5
920474	Mariana Fernandes	5
349443	Vitória da Luz	5
494108	Laís Farias	5
867560	Marina Azevedo	5
191512	Luna Ferreira	5
654204	Murilo da Cunha	5
258553	Enrico Costa	5
928324	Renan Melo	6
881918	Laura da Mota	6
583978	Nathan Melo	6
114342	Esther da Cunha	6
501289	Isabella Fogaça	6
720383	Otávio Ferreira	6
606705	Amanda Porto	6
214799	Eduarda da Paz	6
666179	Marcelo Souza	6
548168	Lorenzo das Neves	6
278718	Noah Gonçalves	6
265831	Marcos Vinicius Souza	6
826617	Calebe Costela	6
688793	Cauã Melo	6
718488	Ana Luiza Moreira	6
443645	Ana Vitória Freitas	6
319363	Beatriz Souza	6
886000	Guilherme Teixeira	6
711889	Sophie Barros	6
833495	Maria Sophia Fernandes	6
371636	Amanda Moraes	6
854262	Daniela Viana	6
485038	Maria Fernanda Barbosa	6
566683	Agatha Freitas	6
141329	Emanuel Jesus	6
406301	Pedro Alves	6
153769	Rodrigo Araújo	6
612687	Samuel Ramos	6
570971	Samuel Dias	6
635725	Arthur Nascimento	6
\.


--
-- TOC entry 3408 (class 0 OID 16699)
-- Dependencies: 212
-- Data for Name: aula; Type: TABLE DATA; Schema: public; Owner: carol
--

COPY public.aula (id, chamada, data, disciplina_codigo, turma_id) FROM stdin;
1	1	2023-02-01 00:00:00	1	1
2	2	2023-02-01 00:00:00	2	1
3	1	2023-02-01 00:00:00	3	2
4	2	2023-02-01 00:00:00	4	2
5	1	2023-02-01 00:00:00	5	3
6	2	2023-02-01 00:00:00	6	3
7	1	2023-02-01 00:00:00	7	4
8	2	2023-02-01 00:00:00	8	4
9	1	2023-02-01 00:00:00	2	5
10	2	2023-02-01 00:00:00	1	5
11	1	2023-02-01 00:00:00	4	6
12	2	2023-02-01 00:00:00	7	6
13	2	2023-02-01 00:00:00	7	6
14	1	2023-02-02 00:00:00	1	1
15	2	2023-02-02 00:00:00	2	1
16	1	2023-02-02 00:00:00	3	2
17	2	2023-02-02 00:00:00	4	2
18	1	2023-02-02 00:00:00	5	3
19	2	2023-02-02 00:00:00	6	3
20	1	2023-02-02 00:00:00	7	4
21	2	2023-02-02 00:00:00	8	4
22	1	2023-02-02 00:00:00	2	5
23	2	2023-02-02 00:00:00	1	5
24	1	2023-02-02 00:00:00	4	6
25	2	2023-02-02 00:00:00	7	6
\.


--
-- TOC entry 3410 (class 0 OID 16706)
-- Dependencies: 214
-- Data for Name: disciplina; Type: TABLE DATA; Schema: public; Owner: carol
--

COPY public.disciplina (codigo, nome) FROM stdin;
1	Matemática
2	Português
3	Artes
4	Ciências
5	História
6	Geografia
7	Ed. Física
8	Inglês
\.


--
-- TOC entry 3412 (class 0 OID 16713)
-- Dependencies: 216
-- Data for Name: faltas; Type: TABLE DATA; Schema: public; Owner: carol
--

COPY public.faltas (id, aluno_tia, aula_id) FROM stdin;
1	445035	1
2	445035	2
3	445035	14
4	606569	3
5	606569	17
\.


--
-- TOC entry 3414 (class 0 OID 16720)
-- Dependencies: 218
-- Data for Name: grade_horarios; Type: TABLE DATA; Schema: public; Owner: carol
--

COPY public.grade_horarios (id, disciplina_codigo, professor_drt, turma_id) FROM stdin;
\.


--
-- TOC entry 3416 (class 0 OID 16727)
-- Dependencies: 220
-- Data for Name: professor; Type: TABLE DATA; Schema: public; Owner: carol
--

COPY public.professor (drt, nome, tipo_funcao) FROM stdin;
906753	Maria Julia Caldeira	1
519105	Davi Ramos	1
741687	Davi Lucca Jesus	1
124651	Julia Cardoso	1
120466	Bárbara Lopes	1
594167	Olivia Pinto	1
532110	Maria Luiza Peixoto	2
459558	Calebe Peixoto	2
\.


--
-- TOC entry 3418 (class 0 OID 16734)
-- Dependencies: 222
-- Data for Name: turma; Type: TABLE DATA; Schema: public; Owner: carol
--

COPY public.turma (id, ano, codigo) FROM stdin;
1	1	1A
2	1	1B
3	2	2A
4	3	3A
5	4	4A
6	5	5A
\.


--
-- TOC entry 3431 (class 0 OID 0)
-- Dependencies: 209
-- Name: aluno_tia_seq; Type: SEQUENCE SET; Schema: public; Owner: carol
--

SELECT pg_catalog.setval('public.aluno_tia_seq', 1, false);


--
-- TOC entry 3432 (class 0 OID 0)
-- Dependencies: 211
-- Name: aula_id_seq; Type: SEQUENCE SET; Schema: public; Owner: carol
--

SELECT pg_catalog.setval('public.aula_id_seq', 25, true);


--
-- TOC entry 3433 (class 0 OID 0)
-- Dependencies: 213
-- Name: disciplina_codigo_seq; Type: SEQUENCE SET; Schema: public; Owner: carol
--

SELECT pg_catalog.setval('public.disciplina_codigo_seq', 1, false);


--
-- TOC entry 3434 (class 0 OID 0)
-- Dependencies: 215
-- Name: faltas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: carol
--

SELECT pg_catalog.setval('public.faltas_id_seq', 5, true);


--
-- TOC entry 3435 (class 0 OID 0)
-- Dependencies: 217
-- Name: grade_horarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: carol
--

SELECT pg_catalog.setval('public.grade_horarios_id_seq', 1, false);


--
-- TOC entry 3436 (class 0 OID 0)
-- Dependencies: 219
-- Name: professor_drt_seq; Type: SEQUENCE SET; Schema: public; Owner: carol
--

SELECT pg_catalog.setval('public.professor_drt_seq', 1, false);


--
-- TOC entry 3437 (class 0 OID 0)
-- Dependencies: 221
-- Name: turma_id_seq; Type: SEQUENCE SET; Schema: public; Owner: carol
--

SELECT pg_catalog.setval('public.turma_id_seq', 6, true);


--
-- TOC entry 3245 (class 2606 OID 16697)
-- Name: aluno aluno_pkey; Type: CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.aluno
    ADD CONSTRAINT aluno_pkey PRIMARY KEY (tia);


--
-- TOC entry 3247 (class 2606 OID 16704)
-- Name: aula aula_pkey; Type: CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.aula
    ADD CONSTRAINT aula_pkey PRIMARY KEY (id);


--
-- TOC entry 3249 (class 2606 OID 16711)
-- Name: disciplina disciplina_pkey; Type: CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.disciplina
    ADD CONSTRAINT disciplina_pkey PRIMARY KEY (codigo);


--
-- TOC entry 3251 (class 2606 OID 16718)
-- Name: faltas faltas_pkey; Type: CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.faltas
    ADD CONSTRAINT faltas_pkey PRIMARY KEY (id);


--
-- TOC entry 3253 (class 2606 OID 16725)
-- Name: grade_horarios grade_horarios_pkey; Type: CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.grade_horarios
    ADD CONSTRAINT grade_horarios_pkey PRIMARY KEY (id);


--
-- TOC entry 3255 (class 2606 OID 16732)
-- Name: professor professor_pkey; Type: CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.professor
    ADD CONSTRAINT professor_pkey PRIMARY KEY (drt);


--
-- TOC entry 3257 (class 2606 OID 16739)
-- Name: turma turma_pkey; Type: CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.turma
    ADD CONSTRAINT turma_pkey PRIMARY KEY (id);


--
-- TOC entry 3263 (class 2606 OID 16765)
-- Name: grade_horarios fk1cy9kkv0xiom0mrpvbwoxnvmd; Type: FK CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.grade_horarios
    ADD CONSTRAINT fk1cy9kkv0xiom0mrpvbwoxnvmd FOREIGN KEY (disciplina_codigo) REFERENCES public.disciplina(codigo);


--
-- TOC entry 3259 (class 2606 OID 16745)
-- Name: aula fk222iqmv585ahn55jcsj84wlb5; Type: FK CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.aula
    ADD CONSTRAINT fk222iqmv585ahn55jcsj84wlb5 FOREIGN KEY (disciplina_codigo) REFERENCES public.disciplina(codigo);


--
-- TOC entry 3262 (class 2606 OID 16760)
-- Name: faltas fk4kej2xpgj6h6u9utpicafkk23; Type: FK CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.faltas
    ADD CONSTRAINT fk4kej2xpgj6h6u9utpicafkk23 FOREIGN KEY (aula_id) REFERENCES public.aula(id);


--
-- TOC entry 3258 (class 2606 OID 16740)
-- Name: aluno fkehtgr8rih20h4gomh4dd4sbxu; Type: FK CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.aluno
    ADD CONSTRAINT fkehtgr8rih20h4gomh4dd4sbxu FOREIGN KEY (turma_id) REFERENCES public.turma(id);


--
-- TOC entry 3265 (class 2606 OID 16775)
-- Name: grade_horarios fkf2eypmdxw3uorn8a6235c1pn1; Type: FK CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.grade_horarios
    ADD CONSTRAINT fkf2eypmdxw3uorn8a6235c1pn1 FOREIGN KEY (turma_id) REFERENCES public.turma(id);


--
-- TOC entry 3260 (class 2606 OID 16750)
-- Name: aula fkjvf4kup1uubq8y4hldrijp2ro; Type: FK CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.aula
    ADD CONSTRAINT fkjvf4kup1uubq8y4hldrijp2ro FOREIGN KEY (turma_id) REFERENCES public.turma(id);


--
-- TOC entry 3264 (class 2606 OID 16770)
-- Name: grade_horarios fklaw3mpmkvtiv64l90osoq32nh; Type: FK CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.grade_horarios
    ADD CONSTRAINT fklaw3mpmkvtiv64l90osoq32nh FOREIGN KEY (professor_drt) REFERENCES public.professor(drt);


--
-- TOC entry 3261 (class 2606 OID 16755)
-- Name: faltas fklgn5q62y32pbljykxgyixsd4v; Type: FK CONSTRAINT; Schema: public; Owner: carol
--

ALTER TABLE ONLY public.faltas
    ADD CONSTRAINT fklgn5q62y32pbljykxgyixsd4v FOREIGN KEY (aluno_tia) REFERENCES public.aluno(tia);


-- Completed on 2023-03-06 18:51:25 -03

--
-- PostgreSQL database dump complete
--

