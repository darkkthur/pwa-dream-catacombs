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

      $("#character-descripcion").text(
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

      $("#character-descripcion").text(
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

      $("#character-descripcion").text(
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

      $("#character-descripcion").text(
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

      $("#character-descripcion").text(
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

      $("#character-descripcion").text(
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
      $("#villano-descripcion").text("El Brebaje Andante, una criatura mágica e impredecible, vagaba por el mundo con su poción mágica en constante cambio. Su apariencia cambiaba a medida que bebía su propio brebaje, otorgándole poderes y habilidades sorprendentes.");

      break;
    case 2:
        $("#one").removeClass("color-yellow").addClass("text-white");
        $("#three").removeClass("color-red").addClass("text-white");
        $("#two").addClass("color-purple").removeClass("text-white");
        $("#four").removeClass("color-blue").addClass("text-white");
        $("#five").removeClass("color-blue").addClass("text-white");
        $("#six").removeClass("color-blue").addClass("text-white");
      $("#villian-image").attr(
        "src",
        "static/img/catacombs/villians/villian-2.png"
      );
      $("#villano-descripcion").text("El Ser de Grava, una criatura ancestral hecha de piedra y misterio, habitaba en lo profundo de las montañas. Su cuerpo era duro como la roca y su existencia estaba envuelta en secretos ancestrales.");

      break;
    case 3:
        $("#one").removeClass("color-yellow").addClass("text-white");
        $("#three").addClass("color-red").removeClass("text-white");
        $("#two").removeClass("color-purple").addClass("text-white");
        $("#four").removeClass("color-blue").addClass("text-white");
        $("#five").removeClass("color-blue").addClass("text-white");
        $("#six").removeClass("color-blue").addClass("text-white");
      $("#villian-image").attr(
        "src",
        "static/img/catacombs/villians/villian-3.png"
      );
      $("#villano-descripcion").text("El Ogro Berserk, una criatura colosal con un poder descomunal, se sumía en una furia incontrolable. Su tamaño imponente y su brutalidad eran temidos por todas las criaturas de la tierra.");

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
      $("#villano-descripcion").text("La Momia Maldita, un antiguo ser envuelto en vendas y con un oscuro poder, despertaba de su eterno descanso. Sus ojos brillaban con una luz siniestra y su presencia emanaba una maldición ancestral.");
      break;
    case 5:
        $("#one").removeClass("color-yellow").addClass("text-white");
        $("#two").removeClass("color-red").addClass("text-white");
        $("#three").removeClass("color-purple").addClass("text-white");
        $("#five").addClass("color-purple").removeClass("text-white");
        $("#four").removeClass("color-blue").addClass("text-white");
        $("#six").removeClass("color-blue").addClass("text-white");
      $("#villian-image").attr(
        "src",
        "static/img/catacombs/villians/villian-5.png"
      );
      $("#villano-descripcion").text("Medusa, la temible Gorgona de la mitología griega, una vez fue una hermosa mujer, pero fue maldecida por los dioses y se convirtió en una criatura monstruosa. Con su cabello de serpientes venenosas y su mirada petrificante, Medusa era una entidad terrorífica.");
      break;
    case 6:
        $("#one").removeClass("color-yellow").addClass("text-white");
        $("#two").removeClass("color-red").addClass("text-white");
        $("#three").removeClass("color-purple").addClass("text-white");
        $("#six").addClass("color-red").removeClass("text-white");
        $("#five").removeClass("color-blue").addClass("text-white");
        $("#four").removeClass("color-blue").addClass("text-white");
      $("#villian-image").attr(
        "src",
        "static/img/catacombs/villians/villian-6.png"
      );

      $("#villano-descripcion").text("El Espectro de Sombra, una figura enigmática y misteriosa, se movía entre las sombras con astucia y habilidad. Su presencia era inquietante y su poder oscuro era temido por todos. Nadie sabía realmente de dónde venía ni qué motivaciones lo impulsaban.");
      break;
    default:
      console.log(`Sorry, we are out of ${arma}.`);
  }
}




function changeWeapon(weapon) {
    switch (weapon) {
      case 1:
          $("#one").removeClass("text-white").addClass("color-yellow");
          $("#two").removeClass("color-red").addClass("text-white");
          $("#three").removeClass("color-purple").addClass("text-white");
          $("#four").removeClass("color-blue").addClass("text-white");
          $("#five").removeClass("color-blue").addClass("text-white");
          $("#six").removeClass("color-blue").addClass("text-white");
        $("#weapon-image").attr(
          "src",
          "static/img/catacombs/weapons/weapon-1.png"
        );
  
        $("#weapon-descripcion").text(
          'El Rifle Semiautomático, una maravilla de la ingeniería moderna, era la perfecta combinación de velocidad y potencia. Con su mecanismo de carga automática, permitía a los tiradores disparar rápidamente sin tener que volver a cargar manualmente después de cada disparo. '
        );
  
        break;
      case 2:
          $("#one").removeClass("color-yellow").addClass("text-white");
          $("#three").removeClass("color-red").addClass("text-white");
          $("#two").addClass("color-purple").removeClass("text-white");
          $("#four").removeClass("color-blue").addClass("text-white");
          $("#five").removeClass("color-blue").addClass("text-white");
          $("#six").removeClass("color-blue").addClass("text-white");
        $("#weapon-image").attr(
          "src",
          "static/img/catacombs/weapons/weapon-2.png"
        );
  
        $("#weapon-descripcion").text(
          "El Lanzamisiles, un arma de destrucción masiva, era la encarnación de la devastación. Con su imponente tamaño y su capacidad para disparar proyectiles explosivos de gran alcance, era capaz de arrasar con todo a su paso. "
        );
  
        break;
      case 3:
          $("#one").removeClass("color-yellow").addClass("text-white");
          $("#three").addClass("color-red").removeClass("text-white");
          $("#two").removeClass("color-purple").addClass("text-white");
          $("#four").removeClass("color-blue").addClass("text-white");
          $("#five").removeClass("color-blue").addClass("text-white");
          $("#six").removeClass("color-blue").addClass("text-white");
        $("#weapon-image").attr(
          "src",
          "static/img/catacombs/weapons/weapon-3.png"
        );
  
        $("#weapon-descripcion").text(
          "El Rifle de Asalto, la herramienta de los soldados en el campo de batalla, era la perfecta combinación de velocidad, precisión y versatilidad. Con su capacidad para disparar ráfagas de proyectiles con rapidez y eficiencia, se convirtió en el arma de elección para enfrentamientos cercanos y a larga distancia."
        );
  
        break;
      case 4:
          $("#one").removeClass("color-yellow").addClass("text-white");
          $("#two").removeClass("color-red").addClass("text-white");
          $("#three").removeClass("color-purple").addClass("text-white");
          $("#four").addClass("color-blue").removeClass("text-white");
          $("#five").removeClass("color-blue").addClass("text-white");
          $("#six").removeClass("color-blue").addClass("text-white");
        $("#weapon-image").attr(
          "src",
          "static/img/catacombs/weapons/weapon-4.png"
        );
  
        $("#weapon-descripcion").text(
          "El 40mm, una bestia de la artillería, conocido por su impresionante poder de fuego y su capacidad para destruir objetivos con precisión milimétrica. Este arma de gran calibre era el sueño de cualquier experto en armas, capaz de disparar proyectiles explosivos con un alcance impresionante."
        );
        break;
      case 5:
          $("#one").removeClass("color-yellow").addClass("text-white");
          $("#two").removeClass("color-red").addClass("text-white");
          $("#three").removeClass("color-purple").addClass("text-white");
          $("#five").addClass("color-purple").removeClass("text-white");
          $("#four").removeClass("color-blue").addClass("text-white");
          $("#six").removeClass("color-blue").addClass("text-white");
        $("#weapon-image").attr(
          "src",
          "static/img/catacombs/weapons/weapon-5.png"
        );
  
        $("#weapon-descripcion").text(
          "La Metralladora Ligera, una fuerza imparable en el campo de batalla. Con su increíble cadencia de fuego y su capacidad para mantener una lluvia constante de proyectiles, era el arma perfecta para el caos del combate."
        );
        break;
      case 6:
          $("#one").removeClass("color-yellow").addClass("text-white");
          $("#two").removeClass("color-red").addClass("text-white");
          $("#three").removeClass("color-purple").addClass("text-white");
          $("#six").addClass("color-red").removeClass("text-white");
          $("#five").removeClass("color-blue").addClass("text-white");
          $("#four").removeClass("color-blue").addClass("text-white");
        $("#weapon-image").attr(
          "src",
          "static/img/catacombs/weapons/weapon-6.png"
        );
  
        $("#weapon-descripcion").text(
          "El Revólver, un arma icónica de la era del Salvaje Oeste, era rápida, precisa y mortal. Su cilindro giratorio y su cañón reluciente eran la envidia de los pistoleros más hábiles."
        );
        break;
      default:
        console.log(`Sorry, we are out of ${arma}.`);
    }
  }
  