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

var categorias = [
    {
        codigo: 'C-1',
        nombre: 'Farmacias',
        imagen: 'farmacia.png',
        descripcion: 'Lorem ipsum.',
    }
];

var empresas = [
    {
        codigo: 'E-1',
        nombre: 'Farmacias Kielsa',
        descripcion: 'Ubicados en cualquier punto estratégico del país.',
        telefono: '2772-0011',
        calificacion: 5,
        direccion: 'Estamos ubicados en el boulevard Morazán.',
        correo: 'kielsahonduras@kielsa.com',
        logo: 'kielsa-logo.png',
        banner: 'kielsa-banner.png',
        codigoCategoria: 'C-1'
    },
    {
        codigo: 'E-2',
        nombre: 'Farmacias del ahorro',
        descripcion: 'Ubicados en cualquier punto estratégico del país.',
        telefono: '2772-2020',
        calificacion: 4,
        direccion: 'Estamos ubicados en el boulevard fuerzas armadas.',
        correo: 'farmaciasdelahorro@ahorro.com',
        logo: 'ahorro-logo.png',
        banner: 'ahorro-banner.png',
        codigoCategoria: 'C-1'
    }
];

var productos = [
    {
        codigo: 'P-1',
        nombre: 'Panadol ultra 104 tabletas',
        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
        cantidad: 25,
        precio: 314.95,
        imagen: 'panadol-ultra.jpg',
        codigoEmpresa: 'E-1'
    },
    {
        codigo: 'P-2',
        nombre: 'Sudagrip antigripal',
        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
        cantidad: 100,
        precio: 14.98,
        imagen: 'sudagrip-antigripal.png',
        codigoEmpresa: 'E-1'
    },
    {
        codigo: 'P-3',
        nombre: 'Panadol ultra 104 tabletas',
        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
        cantidad: 25,
        precio: 314.95,
        imagen: 'panadol-ultra.jpg',
        codigoEmpresa: 'E-2'
    },
    {
        codigo: 'P-4',
        nombre: 'Sudagrip antigripal',
        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
        cantidad: 100,
        precio: 14.98,
        imagen: 'sudagrip-antigripal.png',
        codigoEmpresa: 'E-2'
    }
]

var ordenes = [
    {
        codigo: 'O-1',
        nombre: 'Orden 1',
        estado: 'disponible',
        cliente: {
            nombre: 'Alex',
            telefono: '9199-1111',
            correo: 'alex@unah.hn'
        },
        envio: {
            productos: [
                {
                    codigo: 'P-1',
                    nombre: 'Panadol ultra 104 tabletas',
                    precio: 314.95,
                    cantidad: 3
                },
                {
                    codigo: 'P-2',
                    nombre: 'Sudagrip antigripal',
                    precio: 14.98,
                    cantidad: 2
                }
            ],
            direccion: 'lorem ipsum.',
            empresa: 'Farmacias Kielsa',
            subtotal: 974.81,
            isv: 146.22,
            comisionMotorista: 97.48,
            comisionAdministrador: 48.74,
            total: 292.44,
            estado: null,
            coordenadas: null,
            motorista: null,

        }
    }
];

//funcionalidad
var sections = document.getElementsByClassName('sections');
var sectionPrincipal = document.getElementById('section-principal');
var controles = document.getElementsByClassName('control');

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
    let codigoAgregarCategoria = document.getElementById('txtcodigo-agregarCategoria');
    let codigoAgregarEmpresa = document.getElementById('txtcodigo-agregarEmpresa');
    let codigoAgregarProducto = document.getElementById('txtcodigo-agregarProducto');

    codigoAgregarCategoria.value = 'C-' + (categorias.length + 1);
    codigoAgregarEmpresa.value = 'E-' + (empresas.length + 1);
    codigoAgregarProducto.value = 'P-' + (productos.length + 1);

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
    categoriaMostrarEmpresa.innerHTML = '<option value=""></option>';


    categorias.forEach(categoria => {
        codigoActualizarCategoria.innerHTML += `<option value="${categoria.codigo}">${categoria.codigo}</option>`;
        codigoEliminarCategoria.innerHTML += `<option value="${categoria.codigo}">${categoria.codigo} - ${categoria.nombre}</option>`;
        categoriaAgregarEmpresa.innerHTML += `<option value="${categoria.codigo}">${categoria.codigo} - ${categoria.nombre}</option>`;
        categoriaActualizarEmpresa.innerHTML += `<option value="${categoria.codigo}">${categoria.codigo} - ${categoria.nombre}</option>`;
        categoriaMostrarEmpresa.innerHTML += `<option value="${categoria.codigo}">${categoria.codigo} - ${categoria.nombre}</option>`;
    });
    empresas.forEach(empresa => {
        codigoActualizarEmpresa.innerHTML += `<option value="${empresa.codigo}">${empresa.codigo}</option>`;
        codigoEliminarEmpresa.innerHTML += `<option value="${empresa.codigo}">${empresa.codigo} - ${empresa.nombre}</option>`;
        empresaActualizarProducto.innerHTML += `<option value="${empresa.codigo}">${empresa.codigo} - ${empresa.nombre}</option>`;
        empresaAgregarProducto.innerHTML += `<option value="${empresa.codigo}">${empresa.codigo} - ${empresa.nombre}</option>`;
    });
    productos.forEach(producto => {
        codigoActualizarProducto.innerHTML += `<option value="${producto.codigo}">${producto.codigo}</option>`;
        codigoEliminarProducto.innerHTML += `<option value="${producto.codigo}">${producto.codigo} - ${producto.nombre}</option>`;
    });
}


//categorías
function agregarCategoria() {
    let codigo = document.getElementById('txtcodigo-agregarCategoria');
    let nombre = document.getElementById('txtnombre-agregarCategoria');
    let descripcion = document.getElementById('txtdescripcion-agregarCategoria');
    let imagen = document.getElementById('fileimagen-agregarCategoria');

    if (nombre.value == '' || descripcion.value == '' || imagen.value == '') {
        alert('Por favor, rellene todos los campos.');
    } else {
        categorias.push({
            codigo: codigo.value,
            nombre: nombre.value,
            descripcion: descripcion.value,
            imagen: imagen.value
        });
        alert('¡Categoría agregada!');
        cargarValores();
        nombre.value = '';
        descripcion.value = '';
        imagen.value = '';
        vaciarCampos();
    }
}

function perfilCategoria() {
    let codigo = document.getElementById('selectcodigo-actualizarCategoria');
    let nombre = document.getElementById('txtnombre-actualizarCategoria');
    let descripcion = document.getElementById('txtdescripcion-actualizarCategoria');
    let imagen = document.getElementById('fileimagen-actualizarCategoria');

    let filtro = categorias.filter(categoria => categoria.codigo == codigo.value)[0];

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
        let filtro = categorias.filter(categoria => categoria.codigo == codigo.value)[0];
        filtro.nombre = nombre.value;
        filtro.descripcion = descripcion.value;
        if (imagen != null) {
            filtro.imagen = imagen.value;
        }
        alert('¡Categoría actualizada!');
        cargarValores();
        vaciarCampos();
    }
}

function llenarTablaCategoria() {
    let cuerpo = document.getElementById('cuerpo-tablaCategorias');
    cuerpo.innerHTML = '';

    categorias.forEach(categoria => {
        if (!categoria.eliminado) {
            cuerpo.innerHTML +=
                `<tr>
                <th scope="row">${categoria.codigo}</th>
                <td>${categoria.nombre}</td>
                <td>${categoria.descripcion}</td>
            </tr>`;
        }
    });
}

function buscarCategoria(elemento) {
    filtro = categorias.filter(categoria => (categoria.codigo == elemento.value || categoria.nombre == elemento.value || categoria.descripcion == elemento.value) && !categoria.eliminado);

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaCategorias');
        cuerpo.innerHTML = '';

        filtro.forEach(categoria => {
            cuerpo.innerHTML +=
                `<tr>
                <th scope="row">${categoria.codigo}</th>
                <td>${categoria.nombre}</td>
                <td>${categoria.descripcion}</td>
            </tr>`;
        });
    } else {
        llenarTablaCategoria();
    }
}

function nombreCategoria(elemento) {
    let filtro = categorias.filter(categoria => categoria.codigo == elemento.value)[0];
    document.getElementById('txtcategoria-eliminarCategoria').value = filtro.nombre;
}

function eliminarCategoria() {
    let codigo = document.getElementById('selectcodigo-eliminarCategoria');
    let filtro = categorias.filter(categoria => categoria.codigo == codigo.value)[0];
    if (confirm("¿Está seguro que desea eliminar la categoría?")) {
        filtro.eliminado = true;
        vaciarCampos();
        cargarValores();
    }
}

//empresas
function agregarEmpresa() {
    let codigo = document.getElementById('txtcodigo-agregarEmpresa');
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
        empresas.push({
            codigo: codigo.value,
            nombre: nombre.value,
            descripcion: descripcion.value,
            direccion: direccion.value,
            telefono: telefono.value,
            correo: correo.value,
            codigoCategoria: categoria.value,
            calificacion: calificacion.value,
            imagen: imagen.value,
            banner: banner.value,
            eliminado: false
        });
        alert('Empresa agregada!');
        nombre.value = '';
        descripcion.value = '';
        direccion.value = '';
        telefono.value = '';
        categoria.value = null;
        calificacion.value = null;
        imagen.value = '';
        banner.value = '';
        vaciarCampos();
        cargarValores();
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

    let filtro = empresas.filter(empresa => empresa.codigo == codigo.value)[0];

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
        let filtro = empresas.filter(empresa => empresa.codigo == codigo.value)[0];
        filtro.nombre = nombre.value;
        filtro.descripcion = descripcion.value;
        filtro.direccion = direccion.value;
        filtro.telefono = telefono.value;
        filtro.correo = correo.value;
        filtro.calificacion = calificacion.value;
        filtro.codigoCategoria = categoria.value;
        if (imagen.value != '') {
            filtro.imagen = imagen.value;
        }
        if (banner.value != '') {
            filtro.banner = banner.value;
        }
        alert('Empresa actualizada!');
        vaciarCampos();
        cargarValores();
    }
}

function llenarTablaEmpresa() {
    let cuerpo = document.getElementById('cuerpo-tablaEmpresas');
    cuerpo.innerHTML = '';

    empresas.forEach(empresa => {
        if (!empresa.eliminado) {
            cuerpo.innerHTML +=
                `<tr>
                <th scope="row">${empresa.codigo}</th>
                <td>${empresa.nombre}</td>
                <td>${empresa.descripcion}</td>
                <td>${empresa.direccion}</td>
                <td>${empresa.telefono}</td>
                <td>${empresa.correo}</td>
        </tr>`;
        }
    });
}

function buscarEmpresa(elemento) {
    filtro = empresas.filter(empresa => (empresa.codigo == elemento.value || empresa.nombre == elemento.value || empresa.descripcion == elemento.value || empresa.telefono == elemento.value || empresa.correo == elemento.value || empresa.direccion == elemento.value) && !empresa.eliminado);

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaEmpresas');
        cuerpo.innerHTML = '';

        filtro.forEach(empresa => {
            cuerpo.innerHTML +=
                `<tr>
                <th scope="row">${empresa.codigo}</th>
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
    let filtro = empresas.filter(empresa => empresa.codigo == elemento.value)[0];
    document.getElementById('txtempresa-eliminarEmpresa').value = filtro.nombre;
}

function eliminarEmpresa() {
    let codigo = document.getElementById('selectcodigo-eliminarEmpresa');
    let filtro = empresas.filter(empresa => empresa.codigo == codigo.value)[0];
    if (confirm("¿Está seguro que desea eliminar la empresa?")) {
        filtro.eliminado = true;
        vaciarCampos();
        cargarValores();
    }
}

//Productos
function agregarProducto() {
    let codigo = document.getElementById('txtcodigo-agregarProducto');
    let nombre = document.getElementById('txtnombre-agregarProducto');
    let descripcion = document.getElementById('txtdescripcion-agregarProducto');
    let cantidad = document.getElementById('txtcantidad-agregarProducto');
    let precio = document.getElementById('txtprecio-agregarProducto');
    let empresa = document.getElementById('selectempresa-agregarProducto');
    let imagen = document.getElementById('fileimagen-agregarProducto');

    if (nombre.value == '' || descripcion.value == '' || cantidad.value == '' || precio.value == '' || empresa.value == '' || imagen.value == '') {
        alert('Por favor, rellene todos los campos.');
    } else {
        productos.push({
            codigo: codigo.value,
            nombre: nombre.value,
            descripcion: descripcion.value,
            cantidad: cantidad.value,
            precio: precio.value,
            imagen: imagen.value,
            codigoEmpresa: empresa.value
        });
        alert('Producto agregado!');
        nombre.value = '';
        descripcion.value = '';
        cantidad.value = '';
        precio.value = '';
        imagen.value = '';
        empresa.value = '';
        vaciarCampos();
        cargarValores();
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

    let filtro = productos.filter(producto => producto.codigo == codigo.value)[0];

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
        let filtro = productos.filter(producto => producto.codigo == codigo.value)[0];
        filtro.nombre = nombre.value;
        filtro.descripcion = descripcion.value;
        filtro.cantidad = cantidad.value;
        filtro.precio = precio.value;
        filtro.codigoEmpresa = empresa.value;
        if (imagen != null) {
            filtro.imagen = imagen.value;
        }
        alert('Producto actualizado!');
        vaciarCampos();
        cargarValores();
    }
}

function llenarTablaProductos() {
    let cuerpo = document.getElementById('cuerpo-tablaProductos');
    cuerpo.innerHTML = '';

    productos.forEach(producto => {
        if (!producto.eliminado) {
            let emp = empresas.filter(empresa => empresa.codigo == producto.codigoEmpresa)[0].nombre;
            cuerpo.innerHTML +=
                `<tr>
                <th scope="row">${producto.codigo}</th>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.cantidad}</td>
                <td>${emp}</td>
                <td>${producto.precio} Lps.</td>
        </tr>`;
        }
    });
}

function buscarProducto(elemento) {
    filtro = productos.filter(producto => (producto.codigo == elemento.value || producto.nombre == elemento.value || producto.descripcion == elemento.value || producto.cantidad == elemento.value || producto.empresa == elemento.value || producto.precio == elemento.value) && !producto.eliminado);;

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaProductos');
        cuerpo.innerHTML = '';

        filtro.forEach(producto => {
            let prod = empresas.filter(empresa => empresa.codigo == producto.codigoEmpresa)[0].nombre;
            cuerpo.innerHTML +=
                `<tr>
                <th scope="row">${producto.codigo}</th>
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
    let filtro = productos.filter(producto => producto.codigo == elemento.value)[0];
    document.getElementById('txtproducto-eliminarProducto').value = filtro.nombre;
}

function eliminarProducto() {
    let codigo = document.getElementById('selectcodigo-eliminarProducto');
    let filtro = productos.filter(producto => producto.codigo == codigo.value)[0];
    if (confirm("¿Está seguro que desea eliminar el producto?")) {
        filtro.eliminado = true;
        vaciarCampos();
        cargarValores();
    }
}

var orden;
function generarOrdenes() {
    let contenidoOrdenes = document.getElementById('contenido-ordenes');
    contenidoOrdenes.classList.remove('borde-naranja');
    contenidoOrdenes.innerHTML = '';
    ordenes.forEach(elem => {
        contenidoOrdenes.innerHTML +=
            `<div class="col-12 py-1">
            <div class="contenedorOrden row borde-azul p-1 radius">
                <h4 class="col-4 text-center pt-2">${elem.nombre}</h4>
                <button class="boton boton-verde col-4" onclick="abrirModal('${elem.codigo}');">Asignar</button>
                <button class="boton boton-naranja col-4" onclick="verOrden('${elem.codigo}');">Ver orden</button>
            </div>
        </div>`;
    });
}

function abrirModal(codigo) {
    let selectMotoristas = document.getElementById('selectmotorista');
    selectMotoristas.innerHTML = '';
    usuarios.forEach(usuario => {
        if (usuario.tipo == 'B' && usuario.aprobado == true) { 
            selectMotoristas.innerHTML +=
            `<option value="${usuario.codigo}">${usuario.nombre}</option>`;
        }
    });
    orden = ordenes.filter(elem => elem.codigo == codigo)[0];
    $('#modal').modal('show');
}

function asignarMotorista() {
    let codigo = document.getElementById('selectmotorista');
    let filtro = usuarios.filter(usuario => usuario.codigo == codigo.value)[0];
    filtro.ordenesTomadas.push(orden);
    ordenes = ordenes.filter(o => o.codigo != orden.codigo);
    generarOrdenes();
    $('#modal').modal('hide');
}

function verOrden(codigo) {
    let contenidoOrdenes = document.getElementById('contenido-ordenes');
    orden = ordenes.filter(o => o.codigo == codigo)[0];
    let entrega = '';
    orden.envio.productos.forEach(producto => {
        entrega += producto.nombre + '; ';
    });
    contenidoOrdenes.classList.add('borde-naranja');
    contenidoOrdenes.innerHTML =
        `<div class="titulo-detalleOrden borde-naranja radius px-1">
        Detalle de la orden: "${orden.orden}"
    </div>
    <div class="informacion-cliente borde-naranja radius p-2">
        <div class="titulo-infoCliente borde-naranja radius px-1">
            Información del cliente
        </div>
        <div class="row mt-2">
            <div class="col-6">
                <h6>Nombre:</h6>
                <h6 class="gris pl-5 pb-2">${orden.cliente.nombre}</h6>
            </div>
            <div class="col-6">
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
            <div class="col-6 row">
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
            <div class="col-6">
                <h6>Dirección:</h6>
                <h6 class="gris pl-5 pb-2">${orden.envio.direccion}</h6>
                <img src="img/${orden.envio.mapa}" class="pl-5" alt="mapa">
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
    usuarios.forEach(motorista => {
        if (motorista.aprobado == null && motorista.tipo == 'B') {
            contenedorMotoristas.innerHTML +=
                `<div class="col-12 py-1">
                <div class="row borde-azul p-1 radius">
                    <h4 class="col-lg-10 col-md-9 col-sm-8 col-xs-6 text-left pt-2">${motorista.nombre}</h4>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 acomodar">
                        <div class="text-left mx-2">
                            <i class="fa-solid fa-circle-check check botonesMotorista" onclick="aprobarMotorista('${motorista.codigo}');"></i>
                        </div>
                        <div class="text-right mx-2">
                            <i class="fa-solid fa-circle-xmark error botonesMotorista" onclick="rechazarMotorista('${motorista.codigo}');"></i>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    });
}

function aprobarMotorista(codigo) {
    let filtro = usuarios.filter(motorista => motorista.codigo == codigo)[0];
    filtro.aprobado = true;
    generarMotoristas();
}

function rechazarMotorista(codigo) {
    let filtro = usuarios.filter(motorista => motorista.codigo == codigo)[0];
    filtro.aprobado = false;
    generarMotoristas();
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
                <th scope="row">${empresa.codigo}</th>
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

cargarValores();