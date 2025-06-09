
CREATE TABLE Reservante_Aluno (
    Nome_Aluno VARCHAR,
    Email_Aluno VARCHAR,
    Senha_Aluno VARCHAR,
    RA VARCHAR PRIMARY KEY,
    Identificador_Grupo INT,
    Número_Turma INT
);

CREATE TABLE Reservante_Funcionário (
    Nome VARCHAR,
    Email_Funcionário VARCHAR,
    Senha_Funcionário VARCHAR,
    CPF VARCHAR PRIMARY KEY,
    ID INT,
    Identificador_Grupo INT
);

CREATE TABLE Salas (
    Número_Sala INT PRIMARY KEY
);

CREATE TABLE Horarios_Disponiveis (
    ID_Horario SERIAL PRIMARY KEY,
    Horario_Inicio TIME,
    Horario_Fim TIME
);
CREATE TABLE Reservas (
    ID_Reserva SERIAL PRIMARY KEY,
    Número_Sala INT,
    ID_Usuário INT,
    Identificador_Grupo_Reservas INT,
    FOREIGN KEY (Número_Sala) REFERENCES Salas(Número_Sala)
);
CREATE TABLE Horarios_Reservados(
    ID_Horario SERIAL,
    ID_Reserva SERIAL,
    Estado BOOLEAN,
    FOREIGN KEY (ID_Horario) REFERENCES Horarios_Disponiveis(ID_Horario),
    FOREIGN KEY (ID_Reserva) REFERENCES Reservas(ID_Reserva)

);
