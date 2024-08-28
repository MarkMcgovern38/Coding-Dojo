        
CREATE TABLE Users
(
  id         INT          NOT NULL,
  created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP    NULL     DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  first_name VARCHAR(100) NULL    ,
  last_name  VARCHAR(100) NULL    ,
  password   VARCHAR(100) NULL    ,
  email      VARCHAR(100) NULL    ,
  PRIMARY KEY (id)
);

        