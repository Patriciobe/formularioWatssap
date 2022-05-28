const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const email = document.getElementById('email');
const celular = document.getElementById('celular');
const resultado = document.getElementById('resultado');
const btn = document.getElementById('btn-enviar');

btn.addEventListener('click', (evento) => {
	//evento.preventDefault();
	let error = validarCampos();
	if (error[0]) {
		resultado.innerHTML = error[1];
		resultado.classList.add('red');
		resultado.classList.remove('green');
		
	} else {
		resultado.innerHTML = 'solicitud enviada correctamente';
		resultado.classList.add('green');
		resultado.classList.remove('red');
	}
});

const validarCampos = () => {
	let error = [];
	if (nombre.value.length < 5 || nombre.value.length > 40) {
		error[0] = true;
		error[1] = 'Su nombre es incorrecto';
		return error;
	}else if (apellidos.value.length < 5 || apellidos.value.length > 40) {
		error[0] = true;
		error[1] = 'Su Apellido es incorrecto';
		return error;
	}else if (email.value.length < 5 || email.value.length > 40 || email.value.indexOf('@' || '.') == -1 ) {
		error[0] = true;
		error[1] = 'Su Email es incorrecto';
		return error;		  
	}else if (celular.value.length < 9 ||  celular.value.length > 12) {
		error[0] = true;
		error[1] = 'Numero incorrecto';
		return error;
	}
	error[0] = false;
	return error;
};





