create table email(
  id varchar(10),
  name varchar(10),
  email_user varchar(25),
  email_touser varchar(25),
  content varchar(2000),
  title varchar(100),
  to_date varchar(50)
);

insert into email values('1001','wang','123456@163.com','654321@163.com',
'第一个测试数据','第一个测试数据','now');
insert into email values('1002','qang','1234561@163.com','6543212@163.com',
'第二个测试数据','第二个测试数据','now');
insert into email values('1003','eang','1234562@163.com','6543213@163.com',
'第三个测试数据','第三个测试数据','now');
insert into email values('1004','rang','1234563@163.com','6543214@163.com',
'第四个测试数据','第四个测试数据','now');
insert into email values('1005','tang','1234564@163.com','6543215@163.com',
'第五个测试数据','第五个测试数据','now');
