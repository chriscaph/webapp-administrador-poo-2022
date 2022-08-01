var categorias = [];
var empresas = [];
var productos = [];
var ordenes = [];
var usuarios = [];

var sections = document.getElementsByClassName('sections');
var sectionPrincipal = document.getElementById('section-principal');
var controles = document.getElementsByClassName('control');

function generarArregloUsuarios() {
    axios({
        method: 'GET',
        url: 'http://localhost:4200/usuarios/motoristas'
    })
        .then(res => {
            usuarios = res.data;
            generarMotoristas();
        })
        .catch(error => {
            console.log(error);
        });
}

function menu(valor) {
    let logo = document.getElementById('logo');
    let cerrar = document.getElementById('cerrar');
    let abrir = document.getElementById('abrir');
    let menu = document.getElementById('menu');
    let seccionesCabecera = document.getElementById('secciones-cabecera');
    let cabeceraMenu = document.getElementById('cabecera-menu');

    if (valor == 0) {
        logo.style.display = 'none';
        cerrar.style.display = 'none';
        abrir.style.display = 'block';
        menu.style.width = '63px';
        seccionesCabecera.style.display = 'none';
        cabeceraMenu.style.justifyContent = 'center';
    } else {
        logo.style.display = 'block';
        cerrar.style.display = 'block';
        abrir.style.display = 'none';
        menu.style.width = '230px';
        seccionesCabecera.style.display = 'block';
        cabeceraMenu.style.justifyContent = 'space-between';
    }
}


function cambioSeccion(elemento, tipo, seccion) {
    let objeto = document.getElementById(`${tipo}${seccion}`);
    sectionPrincipal.style.display = 'none';
    Array.from(sections).forEach(section => {
        section.style.display = 'none';
    });
    Array.from(controles).forEach(control => {
        control.classList.remove('fondo-azul');
    });
    elemento.classList.add('fondo-azul');
    objeto.style.display = 'block';
}

function cargarValores() {
    let codigoActualizarCategoria = document.getElementById('selectcodigo-actualizarCategoria');
    let codigoActualizarEmpresa = document.getElementById('selectcodigo-actualizarEmpresa');
    let codigoActualizarProducto = document.getElementById('selectcodigo-actualizarProducto');

    let categoriaAgregarEmpresa = document.getElementById('selectcategoria-agregarEmpresa');
    let empresaAgregarProducto = document.getElementById('selectempresa-agregarProducto');
    let categoriaActualizarEmpresa = document.getElementById('selectcategoria-actualizarEmpresa');
    let empresaActualizarProducto = document.getElementById('selectempresa-actualizarProducto');

    codigoActualizarCategoria.innerHTML = '';
    codigoActualizarEmpresa.innerHTML = '';
    codigoActualizarProducto.innerHTML = '';

    let codigoEliminarCategoria = document.getElementById('selectcodigo-eliminarCategoria');
    let codigoEliminarEmpresa = document.getElementById('selectcodigo-eliminarEmpresa');
    let codigoEliminarProducto = document.getElementById('selectcodigo-eliminarProducto');

    let categoriaMostrarEmpresa = document.getElementById('selectcategoria-verEmpresa');

    codigoEliminarCategoria.innerHTML = '';
    codigoEliminarEmpresa.innerHTML = '';
    codigoEliminarProducto.innerHTML = '';
    categoriaAgregarEmpresa.innerHTML = '';
    empresaAgregarProducto.innerHTML = '';
    categoriaActualizarEmpresa.innerHTML = '';
    empresaActualizarProducto.innerHTML = '';
    categoriaMostrarEmpresa.innerHTML = '';


    axios({
        method: 'GET',
        url: 'http://localhost:4200/categorias'
    })
        .then(res => {
            categorias = res.data;
            categorias.forEach(categoria => {
                codigoActualizarCategoria.innerHTML += `<option value="${categoria._id}">${categoria._id}</option>`;
                codigoEliminarCategoria.innerHTML += `<option value="${categoria._id}">${categoria._id} - ${categoria.nombre}</option>`;
                categoriaAgregarEmpresa.innerHTML += `<option value="${categoria._id}">${categoria._id} - ${categoria.nombre}</option>`;
                categoriaActualizarEmpresa.innerHTML += `<option value="${categoria._id}">${categoria._id} - ${categoria.nombre}</option>`;
                categoriaMostrarEmpresa.innerHTML += `<option value="${categoria._id}">${categoria._id} - ${categoria.nombre}</option>`;
            });
        })
        .catch(error => {
            console.log(error);
        });

    axios({
        method: 'GET',
        url: 'http://localhost:4200/empresas'
    })
        .then(res => {
            empresas = res.data;
            console.log('empresas', empresas);
            empresas.forEach(empresa => {
                codigoActualizarEmpresa.innerHTML += `<option value="${empresa._id}">${empresa._id}</option>`;
                codigoEliminarEmpresa.innerHTML += `<option value="${empresa._id}">${empresa._id} - ${empresa.nombre}</option>`;
                empresaActualizarProducto.innerHTML += `<option value="${empresa._id}">${empresa._id} - ${empresa.nombre}</option>`;
                empresaAgregarProducto.innerHTML += `<option value="${empresa._id}">${empresa._id} - ${empresa.nombre}</option>`;
            });
        })
        .catch(error => {
            console.log(error);
        });

    axios({
        method: 'GET',
        url: 'http://localhost:4200/productos'
    })
        .then(res => {
            productos = res.data;
            console.log('productos', productos);
            productos.forEach(producto => {
                codigoActualizarProducto.innerHTML += `<option value="${producto._id}">${producto._id}</option>`;
                codigoEliminarProducto.innerHTML += `<option value="${producto._id}">${producto._id} - ${producto.nombre}</option>`;
            });
        })
        .catch(error => {
            console.log(error);
        });
}


//categorías
function agregarCategoria() {
    let nombre = document.getElementById('txtnombre-agregarCategoria');
    let descripcion = document.getElementById('txtdescripcion-agregarCategoria');
    let imagen = document.getElementById('fileimagen-agregarCategoria');

    if (nombre.value == '' || descripcion.value == '' || imagen.value == '') {
        alert('Por favor, rellene todos los campos.');
    } else {
        var c = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            imagen: imagen.value
        }
        axios({
            method: 'POST',
            url: 'http://localhost:4200/categorias',
            data: c,
        })
            .then(res => {
                alert(res.data.mensaje);
                cargarValores();
            })
            .catch(error => {
                console.log('error', error);
            });
    }
}

function perfilCategoria() {
    let codigo = document.getElementById('selectcodigo-actualizarCategoria');
    let nombre = document.getElementById('txtnombre-actualizarCategoria');
    let descripcion = document.getElementById('txtdescripcion-actualizarCategoria');
    let imagen = document.getElementById('fileimagen-actualizarCategoria');

    let filtro = categorias.filter(categoria => categoria._id == codigo.value)[0];

    nombre.value = filtro.nombre;
    descripcion.value = filtro.descripcion;
}

function actualizarCategoria() {
    let codigo = document.getElementById('selectcodigo-actualizarCategoria');
    let nombre = document.getElementById('txtnombre-actualizarCategoria');
    let descripcion = document.getElementById('txtdescripcion-actualizarCategoria');
    let imagen = document.getElementById('fileimagen-actualizarCategoria');

    if (nombre.value == '' || descripcion.value == '') {
        alert('Por favor, rellene todos los campos de tipo texto.');
    } else {
        let filtro = categorias.filter(categoria => categoria._id == codigo.value)[0];
        filtro.nombre = nombre.value;
        filtro.descripcion = descripcion.value;
        if (imagen.value != '') {
            filtro.imagen = imagen.value;
        }
        axios({
            method: 'PUT',
            url: `http://localhost:4200/categorias/${codigo.value}`,
            data: filtro,
        })
            .then(res => {
                alert(res.data.mensaje);
                cargarValores();
            })
            .catch(error => {
                console.log('error', error);
            });
        cargarValores();
    }
}

function llenarTablaCategoria() {
    let cuerpo = document.getElementById('cuerpo-tablaCategorias');
    cuerpo.innerHTML = '';

    categorias.forEach(categoria => {
        cuerpo.innerHTML +=
            `<tr>
                <th scope="row">${categoria._id}</th>
                <td>${categoria.nombre}</td>
                <td>${categoria.descripcion}</td>
            </tr>`;
    });
}

function buscarCategoria(elemento) {
    filtro = categorias.filter(categoria => (categoria._id == elemento.value || categoria.nombre == elemento.value || categoria.descripcion == elemento.value));

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaCategorias');
        cuerpo.innerHTML = '';

        filtro.forEach(categoria => {
            cuerpo.innerHTML +=
                `<tr>
                <th scope="row">${categoria._id}</th>
                <td>${categoria.nombre}</td>
                <td>${categoria.descripcion}</td>
            </tr>`;
        });
    } else {
        llenarTablaCategoria();
    }
}

function nombreCategoria(elemento) {
    let filtro = categorias.filter(categoria => categoria._id == elemento.value)[0];
    document.getElementById('txtcategoria-eliminarCategoria').value = filtro.nombre;
}

function eliminarCategoria() {
    let codigo = document.getElementById('selectcodigo-eliminarCategoria');
    let filtro = categorias.filter(categoria => categoria._id == codigo.value)[0];
    if (confirm("¿Está seguro que desea eliminar la categoría?")) {
        axios({
            method: 'DELETE',
            url: `http://localhost:4200/categorias/${codigo.value}`
        })
            .then(res => {
                alert(res.data.mensaje);
                cargarValores();
            })
            .catch(error => {
                console.log('error', error);
            });
    }
}

//empresas
function agregarEmpresa() {
    let nombre = document.getElementById('txtnombre-agregarEmpresa');
    let descripcion = document.getElementById('txtdescripcion-agregarEmpresa');
    let direccion = document.getElementById('txtdireccion-agregarEmpresa');
    let telefono = document.getElementById('txttelefono-agregarEmpresa');
    let correo = document.getElementById('txtcorreo-agregarEmpresa');
    let categoria = document.getElementById('selectcategoria-agregarEmpresa');
    let calificacion = document.getElementById('selectcalificacion-agregarEmpresa');
    let imagen = document.getElementById('fileimagen-agregarEmpresa');
    let banner = document.getElementById('filebanner-agregarEmpresa');

    if (nombre.value == '' || descripcion.value == '' || direccion.value == '' || telefono.value == '' || correo.value == '' || categoria.value == '' || calificacion.value == '' || imagen.value == '' || banner.value == '') {
        alert('Por favor, rellene todos los campos.');
    } else {
        var e = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            direccion: direccion.value,
            telefono: telefono.value,
            correo: correo.value,
            codigoCategoria: categoria.value,
            calificacion: calificacion.value,
            logo: imagen.value,
            banner: banner.value
        };
        axios({
            method: 'POST',
            url: 'http://localhost:4200/empresas',
            data: e,
        })
            .then(res => {
                alert(res.data.mensaje);
                cargarValores();
            })
            .catch(error => {
                console.log('error', error);
            });
    }
}

function perfilEmpresa() {
    let codigo = document.getElementById('selectcodigo-actualizarEmpresa');
    let nombre = document.getElementById('txtnombre-actualizarEmpresa');
    let descripcion = document.getElementById('txtdescripcion-actualizarEmpresa');
    let direccion = document.getElementById('txtdireccion-actualizarEmpresa');
    let telefono = document.getElementById('txttelefono-actualizarEmpresa');
    let correo = document.getElementById('txtcorreo-actualizarEmpresa');
    let categoria = document.getElementById('selectcategoria-actualizarEmpresa');
    let calificacion = document.getElementById('selectcalificacion-actualizarEmpresa');
    let imagen = document.getElementById('fileimagen-actualizarEmpresa');
    let banner = document.getElementById('filebanner-actualizarEmpresa');

    let filtro = empresas.filter(empresa => empresa._id == codigo.value)[0];

    nombre.value = filtro.nombre;
    descripcion.value = filtro.descripcion;
    direccion.value = filtro.direccion;
    telefono.value = filtro.telefono;
    correo.value = filtro.correo;
    categoria.value = filtro.codigoCategoria;
    calificacion.value = filtro.calificacion;
}

function actualizarEmpresa() {
    let codigo = document.getElementById('selectcodigo-actualizarEmpresa');
    let nombre = document.getElementById('txtnombre-actualizarEmpresa');
    let descripcion = document.getElementById('txtdescripcion-actualizarEmpresa');
    let direccion = document.getElementById('txtdireccion-actualizarEmpresa');
    let telefono = document.getElementById('txttelefono-actualizarEmpresa');
    let correo = document.getElementById('txtcorreo-actualizarEmpresa');
    let categoria = document.getElementById('selectcategoria-actualizarEmpresa');
    let calificacion = document.getElementById('selectcalificacion-actualizarEmpresa');
    let imagen = document.getElementById('fileimagen-actualizarEmpresa');
    let banner = document.getElementById('filebanner-actualizarEmpresa');

    if (nombre.value == '' || descripcion.value == '' || direccion.value == '' || telefono.value == '' || correo.value == '' || categoria.value == '' || calificacion.value == '') {
        alert('Por favor, rellene todos los campos de tipo texto.');
    } else {
        let filtro = empresas.filter(empresa => empresa._id == codigo.value)[0];
        filtro.nombre = nombre.value;
        filtro.descripcion = descripcion.value;
        filtro.direccion = direccion.value;
        filtro.telefono = telefono.value;
        filtro.correo = correo.value;
        filtro.calificacion = calificacion.value;
        filtro.codigoCategoria = categoria.value;
        if (imagen.value != '') {
            filtro.logo = imagen.value;
        }
        if (banner.value != '') {
            filtro.banner = banner.value;
        }
        axios({
            method: 'PUT',
            url: `http://localhost:4200/empresas/${codigo.value}`,
            data: filtro,
        })
            .then(res => {
                alert(res.data.mensaje);
                cargarValores();
            })
            .catch(error => {
                console.log('error', error);
            });
    }
}

function llenarTablaEmpresa() {
    let cuerpo = document.getElementById('cuerpo-tablaEmpresas');
    cuerpo.innerHTML = '';

    empresas.forEach(empresa => {
        cuerpo.innerHTML +=
            `<tr>
                <th scope="row">${empresa._id}</th>
                <td>${empresa.nombre}</td>
                <td>${empresa.descripcion}</td>
                <td>${empresa.direccion}</td>
                <td>${empresa.telefono}</td>
                <td>${empresa.correo}</td>
            </tr>`;
    });
}

function buscarEmpresa(elemento) {
    filtro = empresas.filter(empresa => (empresa._id == elemento.value || empresa.nombre == elemento.value || empresa.descripcion == elemento.value || empresa.telefono == elemento.value || empresa.correo == elemento.value || empresa.direccion == elemento.value));

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaEmpresas');
        cuerpo.innerHTML = '';

        filtro.forEach(empresa => {
            cuerpo.innerHTML +=
                `<tr>
                <th scope="row">${empresa._id}</th>
                <td>${empresa.nombre}</td>
                <td>${empresa.descripcion}</td>
                <td>${empresa.direccion}</td>
                <td>${empresa.telefono}</td>
                <td>${empresa.correo}</td>
            </tr>`;
        });
    } else {
        llenarTablaEmpresa();
    }
}

function nombreEmpresa(elemento) {
    let filtro = empresas.filter(empresa => empresa._id == elemento.value)[0];
    document.getElementById('txtempresa-eliminarEmpresa').value = filtro.nombre;
}

function eliminarEmpresa() {
    let codigo = document.getElementById('selectcodigo-eliminarEmpresa');
    let filtro = empresas.filter(empresa => empresa._id == codigo.value)[0];
    if (confirm("¿Está seguro que desea eliminar la empresa?")) {
        axios({
            method: 'DELETE',
            url: `http://localhost:4200/empresas/${codigo.value}`
        })
            .then(res => {
                alert(res.data.mensaje);
                cargarValores();
            })
            .catch(error => {
                console.log('error', error);
            });
    }
}

//Productos
function agregarProducto() {
    let nombre = document.getElementById('txtnombre-agregarProducto');
    let descripcion = document.getElementById('txtdescripcion-agregarProducto');
    let cantidad = document.getElementById('txtcantidad-agregarProducto');
    let precio = document.getElementById('txtprecio-agregarProducto');
    let empresa = document.getElementById('selectempresa-agregarProducto');
    let imagen = document.getElementById('fileimagen-agregarProducto');

    if (nombre.value == '' || descripcion.value == '' || cantidad.value == '' || precio.value == '' || empresa.value == '' || imagen.value == '') {
        alert('Por favor, rellene todos los campos.');
    } else {
        let p = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            cantidad: cantidad.value,
            precio: precio.value,
            imagen: imagen.value,
            codigoEmpresa: empresa.value
        };
        axios({
            method: 'POST',
            url: 'http://localhost:4200/productos',
            data: p,
        })
            .then(res => {
                alert(res.data.mensaje);
                cargarValores();
            })
            .catch(error => {
                console.log('error', error);
            });
    }
}

function perfilProducto() {
    let codigo = document.getElementById('selectcodigo-actualizarProducto');
    let nombre = document.getElementById('txtnombre-actualizarProducto');
    let descripcion = document.getElementById('txtdescripcion-actualizarProducto');
    let cantidad = document.getElementById('txtcantidad-actualizarProducto');
    let precio = document.getElementById('txtprecio-actualizarProducto');
    let empresa = document.getElementById('selectempresa-actualizarProducto');
    let imagen = document.getElementById('fileimagen-actualizarProducto');

    let filtro = productos.filter(producto => producto._id == codigo.value)[0];

    nombre.value = filtro.nombre;
    descripcion.value = filtro.descripcion;
    cantidad.value = filtro.cantidad;
    precio.value = filtro.precio;
    empresa.value = filtro.codigoEmpresa;
}

function actualizarProducto() {
    let codigo = document.getElementById('selectcodigo-actualizarProducto');
    let nombre = document.getElementById('txtnombre-actualizarProducto');
    let descripcion = document.getElementById('txtdescripcion-actualizarProducto');
    let cantidad = document.getElementById('txtcantidad-actualizarProducto');
    let precio = document.getElementById('txtprecio-actualizarProducto');
    let empresa = document.getElementById('selectempresa-actualizarProducto');
    let imagen = document.getElementById('fileimagen-actualizarProducto');

    if (nombre.value == '' || descripcion.value == '' || cantidad.value == '' || precio.value == '' || empresa.value == '') {
        alert('Por favor, rellene todos los campos de tipo texto.');
    } else {
        let filtro = productos.filter(producto => producto._id == codigo.value)[0];
        filtro.nombre = nombre.value;
        filtro.descripcion = descripcion.value;
        filtro.cantidad = cantidad.value;
        filtro.precio = precio.value;
        filtro.codigoEmpresa = empresa.value;
        if (imagen.value != '') {
            filtro.imagen = imagen.value;
        }
        axios({
            method: 'PUT',
            url: `http://localhost:4200/productos/${codigo.value}`,
            data: filtro,
        })
            .then(res => {
                alert(res.data.mensaje);
                cargarValores();
            })
            .catch(error => {
                console.log('error', error);
            });
    }
}

function llenarTablaProductos() {
    let cuerpo = document.getElementById('cuerpo-tablaProductos');
    cuerpo.innerHTML = '';

    productos.forEach(producto => {
        let emp = empresas.filter(empresa => empresa._id == producto.codigoEmpresa)[0].nombre;
        cuerpo.innerHTML +=
            `<tr>
                <th scope="row">${producto._id}</th>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.cantidad}</td>
                <td>${emp}</td>
                <td>${producto.precio} Lps.</td>
            </tr>`;
    });
}

function buscarProducto(elemento) {
    filtro = productos.filter(producto => (producto._id == elemento.value || producto.nombre == elemento.value || producto.descripcion == elemento.value || producto.cantidad == elemento.value || producto.empresa == elemento.value || producto.precio == elemento.value));

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaProductos');
        cuerpo.innerHTML = '';

        filtro.forEach(producto => {
            let prod = empresas.filter(empresa => empresa._id == producto.codigoEmpresa)[0].nombre;
            cuerpo.innerHTML +=
                `<tr>
                <th scope="row">${producto._id}</th>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.cantidad}</td>
                <td>${prod}</td>
                <td>${producto.precio} Lps.</td>
            </tr>`;
        });
    } else {
        llenarTablaProductos();
    }
}

function nombreProducto(elemento) {
    let filtro = productos.filter(producto => producto._id == elemento.value)[0];
    document.getElementById('txtproducto-eliminarProducto').value = filtro.nombre;
}

function eliminarProducto() {
    let codigo = document.getElementById('selectcodigo-eliminarProducto');
    let filtro = productos.filter(producto => producto._id == codigo.value)[0];
    if (confirm("¿Está seguro que desea eliminar el producto?")) {
        axios({
            method: 'DELETE',
            url: `http://localhost:4200/productos/${codigo.value}`
        })
            .then(res => {
                alert(res.data.mensaje);
                cargarValores();
            })
            .catch(error => {
                console.log('error', error);
            });
    }
}

var orden;
function generarOrdenes() {
    let contenidoOrdenes = document.getElementById('contenido-ordenes');
    contenidoOrdenes.classList.remove('borde-naranja');
    contenidoOrdenes.innerHTML = '';

    axios({
        method: 'GET',
        url: 'http://localhost:4200/ordenes/disponibles'
    })
        .then(res => {
            ordenes = res.data;
            console.log('ordenes', ordenes);
            ordenes.forEach(elem => {
                contenidoOrdenes.innerHTML +=
                    `<div class="col-12 py-1">
                    <div class="contenedorOrden row borde-azul p-1 radius">
                        <h4 class="col-4 text-center pt-2">${elem.nombre}</h4>
                        <button class="boton boton-verde col-4" onclick="abrirModal('${elem._id}');">Asignar</button>
                        <button class="boton boton-naranja col-4" onclick="verOrden('${elem._id}'); cargarMapa(${elem.envio.coordenadas.longitud}, ${elem.envio.coordenadas.latitud});">Ver orden</button>
                    </div>
                </div>`;
            });
        })
        .catch(error => {
            console.log(error);
        });
}

function abrirModal(codigo) {
    let selectMotoristas = document.getElementById('selectmotorista');
    selectMotoristas.innerHTML = '';
    usuarios.forEach(usuario => {
        if (usuario.aprobado == true) {
            selectMotoristas.innerHTML +=
                `<option value="${usuario._id}">${usuario.nombre}</option>`;
        }
    });
    orden = ordenes.filter(elem => elem._id == codigo)[0];
    $('#modal').modal('show');
}

function asignarMotorista() {
    let codigo = document.getElementById('selectmotorista');
    let filtro = usuarios.filter(usuario => usuario._id == codigo.value)[0];
    axios({
        method: 'PUT',
        url: `http://localhost:4200/usuarios/motoristas/asignarOrden/${codigo.value}`,
        data: orden
    })
        .then(res => {
            alert(res.data.mensaje);
            axios({
                method: 'PUT',
                url: `http://localhost:4200/ordenes/${orden._id}`,
                data: {nombre: filtro.nombre}
            })
                .then(res => {
                    console.log('síííí');
                    generarOrdenes();
                })
                .catch(error => {
                    console.log('Error', error);
                });
        })
        .catch(error => {
            console.log('Error', error);
        });
    $('#modal').modal('hide');
}

function verOrden(codigo) {
    let contenidoOrdenes = document.getElementById('contenido-ordenes');
    orden = ordenes.filter(o => o._id == codigo)[0];
    let entrega = '';
    orden.envio.productos.forEach(producto => {
        entrega += producto.cantidad + ' ' + producto.nombre + '; ';
    });
    contenidoOrdenes.classList.add('borde-naranja');
    contenidoOrdenes.innerHTML =
        `<div class="titulo-detalleOrden borde-naranja radius px-1">
        Detalle de la orden: "${orden.nombre}"
    </div>
    <div class="informacion-cliente borde-naranja radius p-2">
        <div class="titulo-infoCliente borde-naranja radius px-1">
            Información del cliente
        </div>
        <div class="row mt-2">
            <div class="col-12 col-md-6">
                <h6>Nombre:</h6>
                <h6 class="gris pl-5 pb-2">${orden.cliente.nombre}</h6>
            </div>
            <div class="col-12 col-md-6">
                <h6>Correo:</h6>
                <h6 class="gris pl-5 pb-2">${orden.cliente.correo}</h5>
            </div>
            <div class="col-12">
                <h6>Celular:</h6>
                <h6 class="gris pl-5 pb-2">${orden.cliente.celular}</h6>
            </div>
        </div>
    </div>
    <div class="informacion-envio borde-naranja radius p-2">
        <div class="titulo-infoEnvio borde-naranja radius px-1">
            Información del envío
        </div>
        <div class="row mt-2">
            <div class="col-12 col-md-6 row">
                <div class="col-12">
                    <h6>Productos:</h6>
                    <h6 class="gris pl-5 pb-2">${entrega}</h6>
                </div>
                <div class="col-12">
                    <h6>Empresa:</h6>
                    <h6 class="gris pl-5 pb-2">${orden.envio.empresa}</h6>
                </div>
                <div class="col-12">
                    <h6>Total a pagar:</h6>
                    <h6 class="gris pl-5 pb-2">${orden.envio.total} Lps.</h6>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <h6>Dirección:</h6>
                <h6 class="gris pl-5 pb-2">${orden.envio.direccion}</h6>
                <div id="mapa" style="width: 100%; height: 200px;" class="borde-verde"></div>
            </div>
        </div>
    </div>
    <div class="p-2">
        <button class="boton boton-naranja float-left boton-asignar" onclick="generarOrdenes();">Atras</button>
        <button class="boton boton-verde float-right boton-asignar" onclick="abrirModal('${codigo}');">Asignar</button>
    </div>`;
}

function generarMotoristas() {
    let contenedorMotoristas = document.getElementById('contenedorMotoristas');
    contenedorMotoristas.innerHTML = '';
    console.log('los motoristas', usuarios);
    usuarios.forEach(motorista => {
        if (motorista.aprobado == null) {
            contenedorMotoristas.innerHTML +=
                `<div class="col-12 py-1">
                <div class="row borde-azul p-1 radius">
                    <h4 class="col-lg-10 col-md-9 col-sm-8 col-xs-6 text-left pt-2">${motorista.nombre}</h4>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 acomodar">
                        <div class="text-left mx-2">
                            <i class="fa-solid fa-circle-check check botonesMotorista" onclick="aprobarMotorista('${motorista._id}', true);"></i>
                        </div>
                        <div class="text-right mx-2">
                            <i class="fa-solid fa-circle-xmark error botonesMotorista" onclick="aprobarMotorista('${motorista._id}', false);"></i>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    });
}

function aprobarMotorista(codigo, val) {
    let dato = {aprobado: val};
    console.log(codigo);
    axios({
        method: 'PUT',
        url: `http://localhost:4200/usuarios/motoristas/${codigo}`,
        data: dato,
    })
        .then(res => {
            console.log(res);
            generarArregloUsuarios();
            cargarValores();
        })
        .catch(error => {
            console.log('error', error);
        });
}

function vaciarCampos() {
    let inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(input => input.value = '');
    let selects = document.getElementsByTagName('select');
    Array.from(selects).forEach(select => select.value = '');
    let textareas = document.getElementsByTagName('textarea');
    Array.from(textareas).forEach(textarea => textarea.value = '');
}

function listarEmpresasCategoria(elemento) {
    filtro = empresas.filter(empresa => (empresa.codigoCategoria == elemento.value));

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaEmpresas');
        cuerpo.innerHTML = '';

        filtro.forEach(empresa => {
            cuerpo.innerHTML +=
                `<tr>
                <th scope="row">${empresa._id}</th>
                <td>${empresa.nombre}</td>
                <td>${empresa.descripcion}</td>
                <td>${empresa.direccion}</td>
                <td>${empresa.telefono}</td>
                <td>${empresa.correo}</td>
            </tr>`;
        });
    } else {
        llenarTablaEmpresa();
    }
}

generarArregloUsuarios();
cargarValores();