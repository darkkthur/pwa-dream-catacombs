function changeCharacter(arma) {
  switch (arma) {
    case 1:
      $("#one").removeClass("text-white").addClass("color-yellow");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#character-image").attr(
        "src",
        "static/img/catacombs/characters/character-1.png"
      );

      $("#arma-descripcion").text(
        'Ponny, el travieso y molesto personaje, siempre causaba caos y alboroto donde quiera que fuera. Sus travesuras y trucos hacían que todos lo notaran, aunque su presencia no siempre fuera bienvenida.'
      );

      break;
    case 2:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#three").removeClass("color-red").addClass("text-white");
      $("#two").addClass("color-purple").removeClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#character-image").attr(
        "src",
        "static/img/catacombs/characters/character-2.png"
      );

      $("#arma-descripcion").text(
        "El duende sabio, conocido por su sabiduría ancestral, guiaba a los viajeros con su consejo. Su astucia y magia eran legendarias, ayudando a los necesitados con su sabiduría."
      );

      break;
    case 3:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#three").addClass("color-red").removeClass("text-white");
      $("#two").removeClass("color-purple").addClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#character-image").attr(
        "src",
        "static/img/catacombs/characters/character-3.png"
      );

      $("#arma-descripcion").text(
        "Roger, el audaz doble de acción, desafiaba los límites con su valentía en cada escena. Sin embargo, fuera del set, su vida privada era un enigma, sin revelar su verdadera identidad."
      );

      break;
    case 4:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#four").addClass("color-blue").removeClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#character-image").attr(
        "src",
        "static/img/catacombs/characters/character-4.png"
      );

      $("#arma-descripcion").text(
        "Lucas el esqueleto, antes de su destino fatal, era el alma de las fiestas con su humor contagioso. Ahora, en su forma esquelética, sigue haciéndonos reír con sus travesuras eternas."
      );
      break;
    case 5:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#five").addClass("color-purple").removeClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#six").removeClass("color-blue").addClass("text-white");
      $("#character-image").attr(
        "src",
        "static/img/catacombs/characters/character-5.png"
      );

      $("#arma-descripcion").text(
        "El misterioso bardo, silencioso y enigmático, oculta su origen tras un velo de misterio. Sus canciones son su única forma de comunicarse, cautivando a todos con su música y dejando a todos preguntándose quién es realmente."
      );
      break;
    case 6:
      $("#one").removeClass("color-yellow").addClass("text-white");
      $("#two").removeClass("color-red").addClass("text-white");
      $("#three").removeClass("color-purple").addClass("text-white");
      $("#six").addClass("color-red").removeClass("text-white");
      $("#five").removeClass("color-blue").addClass("text-white");
      $("#four").removeClass("color-blue").addClass("text-white");
      $("#character-image").attr(
        "src",
        "static/img/catacombs/characters/character-6.png"
      );

      $("#arma-descripcion").text(
        "Kenny, el genial portador de armas, dominaba el arte de la batalla. Su habilidad y destreza eran asombrosas, convirtiéndolo en un temible adversario. Con su arma a su lado, desafiaba a todos con su valentía y destreza."
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
        "Roger, el audaz doble de acción, desafiaba los límites con su valentía en cada escena. Sin embargo, fuera del set, su vida privada era un enigma, sin revelar su verdadera identidad."
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
