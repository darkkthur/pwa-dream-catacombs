

function preview(arma) {
    switch (arma) {
        case 1:
            $("#knife").removeClass( "text-white" ).addClass( "color-yellow" );
            $("#arch").removeClass( "color-red" ).addClass( "text-white" );
            $("#stick").removeClass( "color-purple" ).addClass( "text-white" );
            $("#sword").removeClass( "color-blue" ).addClass( "text-white" );
            $("#preview-image-uno").attr("src","static/img/catacombs/Prota_0_idle.gif");
            $("#preview-image-dos").attr("src","static/img/catacombs/Prota_1_run.gif");
            $("#preview-image-tres").attr("src", "static/img/catacombs/Prota_2_Attack_Normal.gif");
            $("#arma-descripcion").text(' Esta cuchilla proviene de "La Secta de la Noche", proveniente de un viejo videojuego al que el protagionista solía jugar con su hermano mayor. Es la primer arma que se otorga dentro del juego.');

            break;
        case 2:
            $("#knife").removeClass( "color-yellow" ).addClass( "text-white" );
            $("#arch").removeClass( "color-red" ).addClass( "text-white" );
            $("#stick").addClass( "color-purple" ).removeClass( "text-white" );
            $("#sword").removeClass( "color-blue" ).addClass( "text-white" );
            $("#preview-image-uno").attr("src","static/img/catacombs/Unit005_0_idle.gif");
            $("#preview-image-dos").attr("src","static/img/catacombs/Unit005_1_run.gif");
            $("#preview-image-tres").attr("src","static/img/catacombs/Unit005_2_Attack_Magic.gif");
            $("#arma-descripcion").text('Los dioses sol[ian guardar parte de supoder dentro de cetros mágicos, los cuales solo ciertos humanos elegidos podán ser capaces de usar su poder. Se desconoce la existencia de un humano vivo capaz de controlar alguno de estos artefactos. Es lo poco que recuerda de la última película que vió con su padre.');

            break;
        case 3:
            $("#knife").removeClass( "color-yellow" ).addClass( "text-white" );
            $("#arch").addClass( "color-red" ).removeClass( "text-white" );
            $("#stick").removeClass( "color-purple" ).addClass( "text-white" );
            $("#sword").removeClass( "color-blue" ).addClass( "text-white" );
            $("#preview-image-uno").attr("src","static/img/catacombs/Unit013_0_idle.gif");
            $("#preview-image-dos").attr("src","static/img/catacombs/Unit013_1_run.gif");
            $("#preview-image-tres").attr("src","static/img/catacombs/Unit013_2_Attack_Bow.gif");
            $("#arma-descripcion").text('Salir de caza en tiempos de invierno, beber café caliente e ir por waffles; era la actividad favorita que a nuestro personaje le gustaba realizar en compañia de su difunto abuelo. Su sueño frustrado es mostrarle a su abuelo que su puntería mejoró considerablemente desde la última vez que cazaron juntos. ');

            break;
        case 4:
            $("#knife").removeClass( "color-yellow" ).addClass( "text-white" );
            $("#arch").removeClass( "color-red" ).addClass( "text-white" );
            $("#stick").removeClass( "color-purple" ).addClass( "text-white" );
            $("#sword").addClass( "color-blue" ).removeClass( "text-white" );
            $("#preview-image-uno").attr("src","static/img/catacombs/Unit006_0_idle.gif");
            $("#preview-image-dos").attr("src","static/img/catacombs/Unit006_1_run.gif");
            $("#preview-image-tres").attr("src","static/img/catacombs/Unit006_2_Attack_Normal.gif");
            $("#arma-descripcion").text('Nuestro protagonista es amante de las armas de combate cuerpo contra cuerpo, alguna de sus mayores habilidades es el desenfunde, así como en el manejo de espadas y katanas. Esto debido a que guarda una pasión por los sables desde que era pequeño.');
            break;
        default:
            console.log(`Sorry, we are out of ${arma}.`);
    }

}