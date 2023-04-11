function changeCharacter(arma) {
  switch (arma) {
    case 1:
      $("#one").removeClass("text-white").addClass("color-yellow");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#character-image").attr(
        "src",
        "static/img/catacombs/characters/character-1.png"
      );

      $("#arma-descripcion").text(
        ' Esta cuchilla proviene de "La Secta de la Noche", proveniente de un viejo videojuego al que el protagionista solía jugar con su hermano mayor. Es la primer arma que se otorga dentro del juego.'
      );

      break;
    case 2:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").addClass("color-purple").removeClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#character-image").attr(
        "src",
        "static/img/catacombs/characters/character-2.png"
      );

      $("#arma-descripcion").text(
        "Los dioses sol[ian guardar parte de supoder dentro de cetros mágicos, los cuales solo ciertos humanos elegidos podán ser capaces de usar su poder. Se desconoce la existencia de un humano vivo capaz de controlar alguno de estos artefactos. Es lo poco que recuerda de la última película que vió con su padre."
      );

      break;
    case 3:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").addClass("color-red").removeClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#character-image").attr(
        "src",
        "static/img/catacombs/characters/character-3.png"
      );

      $("#arma-descripcion").text(
        "Salir de caza en tiempos de invierno, beber café caliente e ir por waffles; era la actividad favorita que a nuestro personaje le gustaba realizar en compañia de su difunto abuelo. Su sueño frustrado es mostrarle a su abuelo que su puntería mejoró considerablemente desde la última vez que cazaron juntos. "
      );

      break;
    case 4:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#four").addClass("color-blue").removeClass("text-white");
      $("#character-image").attr(
        "src",
        "static/img/catacombs/characters/character-4.png"
      );

      $("#arma-descripcion").text(
        "Nuestro protagonista es amante de las armas de combate cuerpo contra cuerpo, alguna de sus mayores habilidades es el desenfunde, así como en el manejo de espadas y katanas. Esto debido a que guarda una pasión por los sables desde que era pequeño."
      );
      break;
    default:
      console.log(`Sorry, we are out of ${arma}.`);
  }
}

function changeVillian(villian) {
  switch (villian) {
    case 1:
      $("#one").removeClass("text-white").addClass("color-yellow");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#villian-image").attr(
        "src",
        "static/img/catacombs/villians/villian-1.png"
      );

      $("#villian-descripcion").text(
        ' Esta cuchilla proviene de "La Secta de la Noche", proveniente de un viejo videojuego al que el protagionista solía jugar con su hermano mayor. Es la primer arma que se otorga dentro del juego.'
      );

      break;
    case 2:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").addClass("color-purple").removeClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#villian-image").attr(
        "src",
        "static/img/catacombs/villians/villian-2.png"
      );

      $("#arma-descripcion").text(
        "Los dioses sol[ian guardar parte de supoder dentro de cetros mágicos, los cuales solo ciertos humanos elegidos podán ser capaces de usar su poder. Se desconoce la existencia de un humano vivo capaz de controlar alguno de estos artefactos. Es lo poco que recuerda de la última película que vió con su padre."
      );

      break;
    case 3:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").addClass("color-red").removeClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#villian-image").attr(
        "src",
        "static/img/catacombs/villians/villian-3.png"
      );

      $("#arma-descripcion").text(
        "Salir de caza en tiempos de invierno, beber café caliente e ir por waffles; era la actividad favorita que a nuestro personaje le gustaba realizar en compañia de su difunto abuelo. Su sueño frustrado es mostrarle a su abuelo que su puntería mejoró considerablemente desde la última vez que cazaron juntos. "
      );

      break;
    case 4:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#four").addClass("color-blue").removeClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#villian-image").attr(
        "src",
        "static/img/catacombs/villians/villian-4.png"
      );

      $("#arma-descripcion").text(
        "Nuestro protagonista es amante de las armas de combate cuerpo contra cuerpo, alguna de sus mayores habilidades es el desenfunde, así como en el manejo de espadas y katanas. Esto debido a que guarda una pasión por los sables desde que era pequeño."
      );
      break;
    case 5:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#four").addClass("color-blue").removeClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#villian-image").attr(
        "src",
        "static/img/catacombs/villians/villian-5.png"
      );

      $("#arma-descripcion").text(
        "Nuestro protagonista es amante de las armas de combate cuerpo contra cuerpo, alguna de sus mayores habilidades es el desenfunde, así como en el manejo de espadas y katanas. Esto debido a que guarda una pasión por los sables desde que era pequeño."
      );
      break;
    case 6:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#four").addClass("color-blue").removeClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#villian-image").attr(
        "src",
        "static/img/catacombs/villians/villian-6.png"
      );

      $("#arma-descripcion").text(
        "Nuestro protagonista es amante de las armas de combate cuerpo contra cuerpo, alguna de sus mayores habilidades es el desenfunde, así como en el manejo de espadas y katanas. Esto debido a que guarda una pasión por los sables desde que era pequeño."
      );
      break;
    default:
      console.log(`Sorry, we are out of ${arma}.`);
  }
}
