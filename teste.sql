CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
  "Diego", 
  "diego@email.com", 
  20
);

SELECT * FROM usuarios;

DELETE FROM usuarios WHERE nome = "Maria";

UPDATE usuarios SET idade = 25 WHERE nome = "Diego";