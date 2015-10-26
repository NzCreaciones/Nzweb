/*
function fondocirculo(nombreimagen)
         {

             rutaimagen= '"' + 'url(./images/' + nombreimagen + ')' + '"';

          // alert(x)

				//Establezco las propiedades CSS
            document.getElementById("circulo").style.backgroundImage = rutaimagen;
            }



*/

//Logo en el título, cambiarlo por su reverso
function cambiarlogo() {
	document.getElementById("logoimg").src = "../images/logo_dos.png"
}

function cambiarlogoOFF() {
	document.getElementById("logoimg").src = "../images/logo.png"
}

//Desplegar menú de la Derecha
function menuderecha() {
	var cajaderecha = document.getElementById("cajaderecha").style

	if (cajaderecha.right != "0px") {
		cajaderecha.right = "0px";

	/*
		cajaderecha.transition
	-moz-transition-duration: 1s;
	-webkit-transition-duration: 1s;
	-o-transition-duration: 1s;
	-ms-transition-duration: 1s;
	*/

	} else if (cajaderecha.right == "0px") {
		cajaderecha.right = "-280px";
	}
}
