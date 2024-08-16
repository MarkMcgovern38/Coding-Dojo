CREATE TABLE dojos
(
  id         INT          NOT NULL AUTO_INCREMENT,
  created_at timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp    NULL     DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  name       VARCHAR(100) NULL    ,
  PRIMARY KEY (id)
);

CREATE TABLE ninjas
(
  id         INT          NOT NULL AUTO_INCREMENT,
  created_at timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp    NULL     DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  first_name VARCHAR(100) NULL    ,
  last_name  VARCHAR(100) NULL    ,
  age        INT          NULL    ,
  dojo_id    INT          NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE ninjas
  ADD CONSTRAINT FK_dojos_TO_ninjas
    FOREIGN KEY (dojo_id)
    REFERENCES dojos (id);