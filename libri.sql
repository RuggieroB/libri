Drop table if exists autori;

create table autori
(
    id integer primary key,
    cognome text not null,
    nome text,
    nascita date,
    morte date,
    sesso integer(1)
);

Insert into autori (cognome, nome, nascita, sesso) values ("d'Annunzio", "Gabriele", date("1863-03-12"), "1");
Insert into autori (cognome) values ("Verga");

.header on 
.mode column 

Select * from autori;

drop table if exists libri;

create table libri
(
    id integer primary key,
    titolo text not null, 
    id_autore integer
);

insert into libri (titolo) values ("il fuoco");
insert into libri (titolo, id_autore) values ("il piacere", 1);
insert into libri (titolo, id_autore) values ("malavoglia" , 2);

select * from libri;