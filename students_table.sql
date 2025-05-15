CREATE DATABASE school;
USE school;

CREATE TABLE students (
    student_name     VARCHAR(50),
    admission_year   INT,
    major_code       INT,
    serial_number    INT,
    phone_number     VARCHAR(15),
    address          VARCHAR(100),
    credits          INT DEFAULT 0,
    gpa              FLOAT DEFAULT 0.0,
    enrolled         BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (admission_year, major_code, serial_number)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

