CREATE DATABASE videogames

CREATE TABLE videogames (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Plataformas VARCHAR(100),
    Imagen VARCHAR(200),
    Fecha VARCHAR(100),
    Rating VARCHAR(100)
);

CREATE TABLE genres (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL
);

CREATE TABLE videogame_genre (
    videogame_id INTEGER REFERENCES videogames(ID),
    genre_id INTEGER REFERENCES genres(ID),
    PRIMARY KEY (videogame_id, genre_id)
);
