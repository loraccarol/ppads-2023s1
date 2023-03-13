-- TODO adicionar mais datas e arrumar queries para o desejado 

-- Qual é o número de faltas do aluno kaique no período de 06/2/2023 a 10/2/2023?
SELECT count(tia) as qtde_faltas, aluno.nome FROM aluno
inner join faltas on faltas.aluno_tia = aluno.tia
inner join aula on aula.id = faltas.aula_id
inner join grade_horarios on grade_horarios.turma_id = aula.turma_id
and grade_horarios.dia_da_semana = aula.dia_da_semana
and aula.chamada = grade_horarios.chamada
inner join disciplina on disciplina.codigo = disciplina_codigo
WHERE aluno.tia = 892440 and (data BETWEEN '2023-02-06 00:00:00' AND '2023-02-10 00:00:00')
group by aluno.tia;

-- Qual é o número de faltas da aluna Beatriz na disciplina de Portugies no período de 06/2/2023 a 10/2/2023?
SELECT count(tia), aluno.nome, disciplina.nome FROM aluno
inner join faltas on faltas.aluno_tia = aluno.tia
inner join aula on aula.id = faltas.aula_id
inner join grade_horarios on grade_horarios.turma_id = aula.turma_id
and grade_horarios.dia_da_semana = aula.dia_da_semana
and aula.chamada = grade_horarios.chamada
inner join disciplina on disciplina.codigo = disciplina_codigo
WHERE aluno.tia = 319363 and (data BETWEEN '2023-02-06 00:00:00' AND '2023-02-10 00:00:00') and disciplina.codigo = 2
group by aluno.tia, disciplina.codigo;

-- Quais foram as datas no período de 06/2/2023 a 10/2/2023 em que a turma 5A teve aulas de Educação Física?
select turma.codigo, data, disciplina.nome from turma
inner join aula on aula.turma_id = turma.id
inner join grade_horarios on grade_horarios.turma_id = aula.turma_id
and grade_horarios.dia_da_semana = aula.dia_da_semana
and aula.chamada = grade_horarios.chamada
inner join disciplina on disciplina.codigo = disciplina_codigo
where turma.codigo = '5A' and disciplina.codigo = 7;

-- No período de 06/2/2023 a 10/2/2023, quais foram os dias em que a aluna Beatriz esteve presente e quais foram os dias em que ela faltou?
SELECT count(aluno.tia), aluno.nome, data from faltas
inner join aluno on faltas.aluno_tia = aluno.tia
inner join aula on aula.id = faltas.aula_id
where(data BETWEEN '2023-02-06 00:00:00' AND '2023-02-10 00:00:00') and aluno.tia = 319363
group by data, aluno.nome

-- Quem é o professor de Inglês da turma 3A?
select turma.codigo, disciplina.nome, professor.nome from turma
inner join aula on turma.id = aula.turma_id
inner join grade_horarios on grade_horarios.turma_id = aula.turma_id
and grade_horarios.dia_da_semana = aula.dia_da_semana
and aula.chamada = grade_horarios.chamada
inner join disciplina on disciplina.codigo = disciplina_codigo
inner join professor on professor.drt = grade_horarios.professor_drt
where turma.id = 4 and disciplina.nome = 'Inglês';