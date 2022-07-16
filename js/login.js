var administradores = [
    {
        codigo: 1,
        nombre: 'Juan',
        usuario: 'jua123',
        password: '1234'
    },
    {
        codigo: 2,
        nombre: 'Paola',
        usuario: 'paola2000',
        password: '1234'
    }
];

sectionLogin = document.getElementById('section-login');
modalBodySesion = document.getElementById('modal-body-sesion');

function validarFormulario() {
    let txtusuario = document.getElementById('txtusuario-login').value;
    let txtpassword = document.getElementById('txtpassword-login').value;
    let filtro = [];
    if (txtusuario == '' || txtpassword == '') {
        alert("Por favor, llene todos los campos.");
    } else {
        filtro = administradores.filter(usuario => {
            return usuario.usuario == txtusuario && usuario.password == txtpassword;
        });
        if (filtro.length == 0) {
            modalBodySesion.innerHTML =
            `<h5 class="titulo-modal my-4">¡Administrador no registrado!</h5>
            <div class="error my-3">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <button class="boton boton-blanco borde-rojo my-4" onclick="cerrarModal();">Aceptar</button>`;
            abrirModal();
        } else {
            window.open('principal.html', '_self');
        }
    }
}

function abrirModal() {
    $('#modal').modal('show');
}

function cerrarModal() {
    $('#modal').modal('hide');
    modalBodySesion.parentNode.classList.remove('borde-verde');
    modalBodySesion.parentNode.classList.add('borde-rojo');
}

function obtenerLocalStorage(){
    administradores = JSON.parse(localStorage.getItem('administradores'));
}

function guardarLocalStorage() {
    localStorage.setItem('administradores', JSON.stringify(administradores));
}

guardarLocalStorage();
obtenerLocalStorage();