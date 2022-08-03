sectionLogin = document.getElementById('section-login');
modalBodySesion = document.getElementById('modal-body-sesion');

function validarFormulario() {
    let txtusuario = document.getElementById('txtusuario-login');
    let txtpassword = document.getElementById('txtpassword-login');
    if (txtusuario.value == '' || txtpassword.value == '') {
        alert("Por favor, llene todos los campos.");
    } else {
        usuario = {
            usuario: txtusuario.value,
            password: txtpassword.value,
            tipo: 'A'
        }

        console.log(usuario);

        axios({
            method: 'POST',
            url: 'http://localhost:4200/usuarios/login/A',
            data: usuario
        })
            .then(res => {
                console.log(res.data);
                if (res.data.codigo == 0) {
                    modalBodySesion.innerHTML =
                        `<h5 class="titulo-modal my-4">${res.data.mensaje}</h5>
                        <div class="error my-3">
                            <i class="fa-solid fa-circle-xmark"></i>
                        </div>
                        <button class="boton boton-blanco borde-rojo my-4" onclick="cerrarModal();">Aceptar</button>`;
                    abrirModal();
                } else {
                    window.open('administrador.html', '_self');
                }
                
            })
            .catch(error => console.log('error', error));
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