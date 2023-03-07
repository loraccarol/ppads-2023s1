-- TODO adicionar mais datas e arrumar queries para o desejado 

-- Qual é o número de faltas do aluno Beto no período de 12/2/2023 a 15/2/2023?
SELECT count(tia) as qtde_faltas, aluno.nome FROM aluno
inner join faltas on faltas.aluno_tia = aluno.tia
inner join aula on aula.id = faltas.aula_id
inner join disciplina on disciplina.codigo = disciplina_codigo
WHERE aluno.tia = 606569 and (data BETWEEN '2023-02-01 00:00:00' AND '2023-02-02 00:00:00')
group by aluno.tia;

-- Qual é o número de faltas da aluna Ana na disciplina de Matemática no período de 13/2/2023 a 16/2/2023?
SELECT count(tia), aluno.nome, disciplina.nome FROM aluno
inner join faltas on faltas.aluno_tia = aluno.tia
inner join aula on aula.id = faltas.aula_id
inner join disciplina on disciplina.codigo = disciplina_codigo
WHERE aluno.tia = 445035 and (data BETWEEN '2023-02-01 00:00:00' AND '2023-02-02 00:00:00') and disciplina.codigo = 2
group by aluno.tia, disciplina.codigo;

-- Quais foram as datas no período de 14/2/2023 a 17/2/2023 em que a turma 5A teve aulas de Educação Física?
select turma.codigo, data, disciplina.nome from turma
inner join aula on aula.turma_id = turma.id
inner join disciplina on disciplina.codigo = disciplina_codigo
where turma.codigo = '5A' and disciplina.codigo = 7;

-- No período de 15/2/2023 a 18/2/2023, quais foram os dias em que a aluna Carla esteve presente e quais foram os dias em que ela faltou?
SELECT count(tia) as faltas, aluno.nome, data FROM aluno
inner join turma on turma.id = turma_id
inner join aula on aula.turma_id = turma.id
where aluno.tia = 445035 and (data BETWEEN '2023-02-01 00:00:00' AND '2023-02-02 00:00:00')
group by aluno.nome, data;

-- Quem é o professor de Inglês da turma 3A?
select turma.codigo, disciplina.nome, professor.nome from turma
inner join aula on turma.id = aula.turma_id
inner join disciplina on disciplina.codigo = aula.disciplina_codigo
inner join professor on professor.drt = disciplina.professor_drt
where turma.id = 4 and disciplina.nome = 'Inglês';