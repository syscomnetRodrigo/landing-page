function retornarFecha()
{
  var fecha
  fecha=new Date();
  var cadena=fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear();
  return cadena;
}

function retornarHora()
{
  var fecha
  fecha=new Date();
  var cadena=fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();
  return cadena; 
}

function validacion() {
Var_nombres = document.getElementById("nombres").value;
Var_apellido = document.getElementById("apellido").value;
Var_email = document.getElementById("email").value;
Var_pass = document.getElementById("message").value;
expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
if( Var_nombres == null || Var_nombres.length == 0 || /^\s+$/.test(Var_nombres) ) {
	//Validacion Nombre
	alert('[Ingrese el Nombre] ');
	document.getElementById("nombres").focus();
	return false;
	}
  
	else if (Var_apellido == null || Var_apellido.length == 0 || /^\s+$/.test(Var_apellido) ){
		//validacion Apellido
		alert('Ingrese el Apellido');
		document.getElementById("apellido").focus();
		return false;
	}
  
	else if( !expresion.test(Var_email) ) {
		//Validar Correo
		alert('El correo es incorrecto');
		document.getElementById("email").focus();
		return false;
		}

	  document.getElementById("nombres").value="";
    document.getElementById("apellido").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";

  alert('Se envió Exitosamente');

  return true;
}





