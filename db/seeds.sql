INSERT INTO department (dept_name)
VALUES ('TECH'),
        ('COOK'),
        ('STOCK'),
        ('TEACHER')
        ('WASHER');

INSERT INTO roles (title, salary, department_id)
VALUES ('Web Developer', 70000, 1),
        ('Head Chef', 100000, 1),
        ('Junior Dev', 40000, 1),
        ('Teacher', 70000, 2),
        ('Restocker', 100000, 2),
        ('Junior Cook', 40000, 2),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Denice', 'Tom', 2, NULL),
        ('Lue', 'Anne', 5, NULL),
        ('Barry', 'Zinger', 1, 1),
        ('Lucky', 'Fond', 1, 1),
        ('Dairy', 'Mlk', 4, 2)