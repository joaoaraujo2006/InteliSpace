CREATE TABLE Turma (
    Número_Turma INT PRIMARY KEY
);

CREATE TABLE Grupos (
    Identificador_Grupo INT PRIMARY KEY,
    Número_Turma INT,
    FOREIGN KEY (Número_Turma) REFERENCES Turma(Número_Turma)
);

CREATE TABLE Usuários (
    ID_Usuario INT PRIMARY KEY,
    Nome VARCHAR,
    Email VARCHAR,
    Senha VARCHAR,
    Tipo CHAR,
    Identificador_Grupo_Usuário INT,
    FOREIGN KEY (Identificador_Grupo_Usuário) REFERENCES Grupos(Identificador_Grupo)
);

CREATE TABLE Reservante_Aluno (
    Nome_Aluno CHAR,
    Email_Aluno CHAR,
    Senha_Aluno VARCHAR,
    RA VARCHAR PRIMARY KEY,
    Identificador_Grupo INT,
    Número_Turma INT,
    ID_Usuário INT,
    FOREIGN KEY (Identificador_Grupo) REFERENCES Grupos(Identificador_Grupo),
    FOREIGN KEY (Número_Turma) REFERENCES Turma(Número_Turma),
    FOREIGN KEY (ID_Usuário) REFERENCES Usuários(ID_Usuario)
);

CREATE TABLE Reservante_Funcionário (
    Nome CHAR,
    Email_Funcionário CHAR,
    Senha_Funcionário VARCHAR,
    CPF CHAR PRIMARY KEY,
    ID INTEGER,
    Identificador_Grupo INTEGER,
    ID_Usuário INT,
    FOREIGN KEY (Identificador_Grupo) REFERENCES Grupos(Identificador_Grupo),
    FOREIGN KEY (ID_Usuário) REFERENCES Usuários(ID_Usuario)
);

CREATE TABLE Salas (
    Número_Sala INT PRIMARY KEY,
    Identificador_Grupo VARCHAR
    -- Se você quiser integrar com Grupos, Identificador_Grupo precisa ser INT
    -- FOREIGN KEY (Identificador_Grupo) REFERENCES Grupos(Identificador_Grupo)
);

CREATE TABLE Horarios_Disponiveis (
    ID_Horario INT PRIMARY KEY,
    Numero_Sala INT,
    Horario_Inicio TIMESTAMP,
    Horario_Fim TIMESTAMP,
    FOREIGN KEY (Numero_Sala) REFERENCES Salas(Número_Sala)
);

CREATE TABLE Reservas (
    ID_Reserva INT PRIMARY KEY,
    Número_Sala INT,
    Horário TIMESTAMP,
    ID_Usuário INTEGER,
    Identificador_Grupo_Reservas INT,
    FOREIGN KEY (Número_Sala) REFERENCES Salas(Número_Sala),
    FOREIGN KEY (ID_Usuário) REFERENCES Usuários(ID_Usuario),
    FOREIGN KEY (Identificador_Grupo_Reservas) REFERENCES Grupos(Identificador_Grupo)
);