-- cree table auteur
create table auteur(
auteurId int auto_increment,
nom varchar(255),
primary key(auteurId)
);

-- cree table article
create table article(
articleId int auto_increment,
titre varchar(50),
image varchar(255),
auteurId int,
primary key(articleId),
description varchar(255),
foreign key(auteurId) references auteur(auteurId)
);

-- ajoute un auteur
insert into auteur(nom) value('vlad'),(' jeremy'),('karl'),('ben');


-- afficher la liste auteur
select*from auteur;

-- ajout 
insert into article (titre,image,auteurId,description)
value ('naruto','urlimage',4,'naruto le retour');

-- affiche la liste des article
select *from article;