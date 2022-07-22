var usuarios = [
    {
        codigo: 'U-1',
        nombre: 'Juan',
        usuario: 'juan123',
        password: '1234',
        tipo: 'A'
    },
    {
        codigo: 'U-2',
        nombre: 'Pedro',
        usuario: 'pedro123',
        password: '1234',
        tipo: 'A'
    },
    {
        codigo: 'U-3',
        nombre: 'Carlos',
        usuario: 'carlos123',
        password: '1234',
        tipo: 'B',
        aprobado: true,
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        codigo: 'U-4',
        nombre: 'María',
        usuario: 'maria123',
        password: '1234',
        tipo: 'B',
        aprobado: false,
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        codigo: 'U-5',
        nombre: 'Alberto',
        usuario: 'alberto123',
        password: '1234',
        tipo: 'B',
        aprobado: null,
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        codigo: 'U-6',
        nombre: 'Alex',
        usuario: 'alex123',
        password: '1234',
        tipo: 'C'
    },
    {
        codigo: 'U-7',
        nombre: 'Matusalen',
        usuario: 'matusalen123',
        password: '1234',
        tipo: 'C'
    },
    {
        codigo: 'U-8',
        nombre: 'Francisco',
        usuario: 'francisco123',
        password: '1234',
        tipo: 'C'
    },
    {
        codigo: 'U-9',
        nombre: 'Paola',
        usuario: 'paola123',
        password: '1234',
        tipo: 'C'
    }
];

localStorage.setItem('usuarios', JSON.stringify(usuarios));

function obtenerLocalStorage() {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    categorias = JSON.parse(localStorage.getItem('categorias'));
}

sectionLogin = document.getElementById('section-login');
modalBodySesion = document.getElementById('modal-body-sesion');

function validarFormulario() {
    let txtusuario = document.getElementById('txtusuario-login').value;
    let txtpassword = document.getElementById('txtpassword-login').value;
    let filtro = [];
    if (txtusuario == '' || txtpassword == '') {
        alert("Por favor, llene todos los campos.");
    } else {
        filtro = usuarios.filter(usuario => usuario.usuario == txtusuario && usuario.password == txtpassword && usuario.tipo == 'A');
        if (filtro.length == 0) {
            modalBodySesion.innerHTML =
            `<h5 class="titulo-modal my-4">¡Administrador no registrado!</h5>
            <div class="error my-3">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <button class="boton boton-blanco borde-rojo my-4" onclick="cerrarModal();">Aceptar</button>`;
            abrirModal();
        } else {
            window.open('administradores.html', '_self');
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

function guardarLocalStorage() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

guardarLocalStorage();
obtenerLocalStorage();