Install Dependencies
```
npm install
```

CREATE DATABASE & TABLES
```
create database ircite_db;

create table if not exists employees (id bigint unsigned auto_increment, firstName varchar(255) not null, lastName varchar(255) not null, position varchar(255) not null, sickLeaveCredits INT not null, vacationLeaveCredits DOUBLE not null, hourlyRate DOUBLE not null, primary key (id));
```

Run Development Server
```
npm run start
```