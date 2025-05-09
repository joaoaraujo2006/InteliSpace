# Projeto Individual (UX Parte 1): Personas e User Stories

### 1. Introdução

**InteliSpace**

O InteliSpace é um aplicativo para a reserva de salas de estudo do Instituto de Tecnologia e Liderança(Inteli). As salas no Inteli vão de R01 a R10 e a plataforma pode ser utilizada por alunos, professores, funcionários ou qualquer um que tenha um cadastro no sistema do Instituto.

O objetivo dessa plataforma é tornar a reservas de salas mais fácil e prática a todos, dessa forma, automatizando o processo de alocação e evitando problemas entre a comunidade Inteli.

Como forma de verificação, caso seja um aluno, deve informar qual ateliê e grupo pertence, dessa forma, integrantes do mesmo grupo não poderiam alocar diferentes salas. Qualquer pessoa da comunidade Inteli, só poderá reservar a mesma sala por uma hora por dia, para facilitar a rotabilidade e garantir que todos tenham acesso. Além disso, para reservar uma sala, o usuário também deve estar conectado a uma rede Inteli, para evitar que pessoas reservem salas estando fora do ambiente do Instituto.


### 2.1 Personas

#### Persona 1 - Manuela
Manuela Costa de Jesus é uma jovem de 18 anos que estuda no Inteli, cursando Engenharia de Software.

<img src="./Imagens/Persona1.png" width=100% />

#### Persona 2 - Pablo Oliveira Garcia
Pablo Oliveira Garcia é um homem adulto de 39 anos que mestra aulas de computação no Inteli.

<img src="./Imagens/Persona2.png" width=100% />


### 2.2. User Stories (Semana 01)

Identificação | US001
--- | ---
Persona | Manuela (Estudante)
User Story | Como estudante do Inteli, posso reservar uma sala, para organizar o projeto com meu grupo?
Critério de aceite 1 | CR1: Devo estar logado corretamente.
Critério de aceite 2 | CR2: Nenhum integrante do meu grupo pode ter reservado uma sala.
Critério de aceite 3 | CR3: A sala não pode estar reservada por outra pessoa. 
Critérios INVEST | Independente: Ela não necessita de outra User Story. <br> Negociável: Sim, ela pode escolher qual horário ou sala deseja. <br> Valiosa: Sim, ela precisa reservar uma sala.<br> Estimável: Sim, sabemos o esforço necessário pelo usuário. <br> Pequena: Sim, os critérios de aceite tornam-a curta. <br> Testável: Sim, é possível testar se o sistema de verificar que alguém reservou a sala ou se o usuário está conectado a rede funciona.


Identificação | US002
--- | ---
Persona | Manuela (Estudante)
User Story | Como estudante do Inteli, posso reservar mais de uma sala, para outra pessoa estudar?
Critério de aceite 1 | CR1: Devo estar no Inteli e conectado na rede Wi-fi.
Critério de aceite 2 | CR2: Devo estar logado corretamente.
Critério de aceite 3 | CR3: Nenhum integrante do meu grupo pode ter reservado uma sala.
Critério de aceite 4 | CR4: A sala não pode estar reservada por outra pessoa. 
Critérios INVEST | Independente: Ela não necessita de outra User Story. <br> Negociável: Sim, ela pode escolher qual horário ou sala deseja. <br> Valiosa: Sim, já que permite ao estudante reservar um espaço de estudos.<br> Estimável: Sim, sabemos o esforço necessário pelo usuário. <br> Pequena: Sim, os critérios de aceite reduzem drásticamente o tempo necessário. <br> Testável: Sim, é possível testar se o sistema de verifica corretamente se o usuário já reservou uma sala.

Identificação | US003
--- | ---
Persona | Manuela (Estudante)
User Story | Como estudante do Inteli, quero reservar uma sala disponível, para conseguir estudar?
Critério de aceite 2 | CR1: Devo estar no Inteli e conectado na rede Wi-fi.
Critério de aceite 2 | CR2: Devo estar logado corretamente.
Critério de aceite 3 | CR3: Nenhum integrante do meu grupo pode ter reservado uma sala.
Critério de aceite 4 | CR4: A sala não pode estar reservada por outra pessoa. 
Critérios INVEST | Independente: Sim, não depende de outra User Story. <br> Negociável: Sim, ela pode escolher qual horário ou sala deseja. <br> Valiosa: Sim, já que permite ao estudante reservar um espaço de estudos.<br> Estimável: Sim, sabemos o esforço necessário pelo usuário. <br> Pequena: Sim, os critérios de aceite reduzem drásticamente o tempo necessário. <br> Testável: Sim, é possível testar se o sistema de verifica corretamente se o usuário está no campus para alocar uma sala.

Identificação | US004
--- | ---
Persona | Pablo (Professor)
User Story | Como professor do Inteli, quero reservar uma sala disponível, para conseguir organizar minhas aulas?
Critério de aceite 1 | CR1: Devo estar logado corretamente.
Critério de aceite 2 | CR2: A sala não pode estar reservada por outra pessoa. 
Critérios INVEST | Independente: Não necessariamente, já que depende que o usuário esteja logado. <br> Negociável: Sim, ele pode escolher qual horário ou sala deseja. <br> Valiosa: Sim, já que permite ao professor reservar um espaço para organizar suas aulas.<br> Estimável: Sim, sabemos o esforço necessário pelo usuário. <br> Pequena: Sim, seu tempo é curto. <br> Testável: Sim, é possível testar se o sistema de verifica corretamente se um professor consegue reservar uma sala.

Identificação | US005
--- | ---
Persona | Pablo (Professor)
User Story | Como professor do Inteli, quero realizar login, para agendar uma sala.
Critério de aceite 1 | CR1: Devo estar cadastrado no sistema Inteli.
Critérios INVEST | Independente: Sim, não depende de outra User Story. <br> Negociável: Sim, caso ele não lembre sua senha, existe a opção de alterar. <br> Valiosa: Sim, já que permite ao professor realizar login para agendar uma sala.<br> Estimável: Sim, sabemos o esforço necessário pelo usuário. <br> Pequena: Sim, seu tempo é curto. <br> Testável: Sim, é possível testar se o usuário consegue realizar login no sistema.

Identificação | US006
--- | ---
Persona | Pablo (Professor)
User Story | Como professor do Inteli, quero sair da minha conta.
Critério de aceite 1 | CR1: Devo estar logado.
Critérios INVEST | Independente: Não necessariamente, já que depende que o usuário esteja logado. <br> Negociável: Sim, ela permite que o professor saia de sua conta. <br> Valiosa: Sim, já que permite ao professor sair da sua conta se necessário.<br> Estimável: Sim, sabemos o esforço necessário pelo usuário. <br> Pequena: Sim, seu tempo é curto. <br> Testável: Sim, é possível testar se o usuário sair de sua conta.
