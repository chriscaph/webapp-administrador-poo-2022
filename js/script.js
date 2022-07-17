var categorias = [
    {
        codigo: 'C-1',
        categoria: 'Categoría 1',
        descripcion: 'lorem ipsum.',
        imagen: 'ejemploImagen 1.png',
        eliminado: false
    },
    {
        codigo: 'C-2',
        categoria: 'Categoría 2',
        descripcion: 'lorem ipsum.',
        imagen: 'ejemploImagen 1.png',
        eliminado: false
    }
];

var empresas = [
    {
        codigo: 'E-1',
        empresa: 'Empresa 1',
        descripcion: 'lorem ipsum',
        telefono: '2771-9483',
        calificacion: 4,
        direccion: 'lorem ipsum',
        correo: 'empresa@gmail.com',
        categoria: 'Categoría 1',
        logo: 'ejemploImagen 1.png',
        banner: 'ejemploBanner 1.png',
        eliminado: false
    },
    {
        codigo: 'E-2',
        empresa: 'Empresa 2',
        descripcion: 'lorem ipsum',
        telefono: '2771-9483',
        calificacion: 4,
        direccion: 'lorem ipsum',
        correo: 'empresa@gmail.com',
        categoria: 'Categoría 1',
        logo: 'ejemploImagen 1.png',
        banner: 'ejemploBanner 1.png',
        eliminado: false
    },
    {
        codigo: 'E-3',
        empresa: 'Empresa 3',
        descripcion: 'lorem ipsum',
        telefono: '2771-9483',
        calificacion: 4,
        direccion: 'lorem ipsum',
        correo: 'empresa@gmail.com',
        categoria: 'Categoría 2',
        logo: 'ejemploImagen 1.png',
        banner: 'ejemploBanner 1.png',
        eliminado: false
    }
];

var productos = [
    {
        codigo: 'P-1',
        producto: 'Producto 1',
        descripcion: 'lorem ipsum.',
        cantidad: 10,
        precio: 99.95,
        imagen: 'ejemploImagen 1.png',
        empresa: 'Empresa 1',
        eliminado: false
    },
    {
        codigo: 'P-2',
        producto: 'Producto 2',
        descripcion: 'lorem ipsum.',
        cantidad: 10,
        precio: 99.95,
        imagen: 'ejemploImagen 1.png',
        empresa: 'Empresa 2',
        eliminado: false
    },
    {
        codigo: 'P-3',
        producto: 'Producto 3',
        descripcion: 'lorem ipsum.',
        cantidad: 10,
        precio: 99.95,
        imagen: 'ejemploImagen 1.png',
        empresa: 'Empresa 2',
        eliminado: false
    },
    {
        codigo: 'P-4',
        producto: 'Producto 4',
        descripcion: 'lorem ipsum.',
        cantidad: 10,
        precio: 99.95,
        imagen: 'ejemploImagen 1.png',
        empresa: 'Empresa 3',
        eliminado: false
    }
];

var ordenes = [
    {
        codigo: 'O-1',
        orden: 'Orden 1',
        cliente:
            {
                nombre: 'Christian Ariel Palacios Hernández',
                correo: 'christianarielph@gmail.com',
                celular: '+504 9716-0785'
            },
        envio:
            {
                productos: [
                    {
                        codigo: 'P-1',
                        producto: 'Producto 1'
                    },
                    {
                        codigo: 'P-2',
                        producto: 'Producto 2'
                    }
                    
                ],
                direccion: 'Lorem ipsum',
                empresa: 'Empresa 1',
                total: 250,
                mapa: 'mapa 1.png'
            }
    },
    {
        codigo: 'O-2',
        orden: 'Orden 2',
        cliente:
            {
                nombre: 'Christian Ariel Palacios Hernández',
                correo: 'christianarielph@gmail.com',
                celular: '+504 9716-0785'
            },
        envio:
            {
                productos: [
                    {
                        codigo: 'P-1',
                        producto: 'Producto 1'
                    },
                    {
                        codigo: 'P-2',
                        producto: 'Producto 2'
                    }
                    
                ],
                direccion: 'Lorem ipsum',
                empresa: 'Empresa 1',
                total: 250,
                mapa: 'mapa 1.png'
            }
    }
];

var motoristas = [
    {
        codigo: 'M-1',
        motorista: 'motorista 1',
        tomadas: [],
        entregadas: []
    },
    {
        codigo: 'M-2',
        motorista: 'motorista 2',
        tomadas: [],
        entregadas: []
    },
    {
        codigo: 'M-3',
        motorista: 'motorista 3',
        tomadas: [],
        entregadas: []
    }
];

var motoristasEnEspera = [
    {
        codigo: 'M-4',
        motorista: 'motorista 4',
        aprobado: false
    },
    {
        codigo: 'M-5',
        motorista: 'motorista 5',
        aprobado: null,
    },
    {
        codigo: 'M-6',
        motorista: 'motorista 6',
        aprobado: null
    },
    {
        codigo: 'M-7',
        motorista: 'motorista 7',
        aprobado: null,
    }
    
]

//funcionalidad
var sections = document.getElementsByClassName('sections');
var sectionPrincipal = document.getElementById('section-principal');
var controles = document.getElementsByClassName('control');

function cargarLocalStorage() {
    localStorage.setItem('categorias', JSON.stringify(categorias));
    localStorage.setItem('empresas', JSON.stringify(empresas));
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('motoristas', JSON.stringify(motoristas));
    localStorage.setItem('motoristasEnEspera', JSON.stringify(motoristasEnEspera));
    localStorage.setItem('ordenes', JSON.stringify(ordenes));
}

function obtenerLocalStorage() {
    categorias = JSON.parse(localStorage.getItem('categorias'));
    empresas = JSON.parse(localStorage.getItem('empresas'));
    productos = JSON.parse(localStorage.getItem('productos'));
    motoristasEnEspera = JSON.parse(localStorage.getItem('motoristasEnEspera'));
    motoristas = JSON.parse(localStorage.getItem('motoristas'));
    ordenes = JSON.parse(localStorage.getItem('ordenes'));
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
        if (!categoria.eliminado) {
            codigoActualizarCategoria.innerHTML += `<option value="${categoria.codigo}">${categoria.codigo}</option>`;
            codigoEliminarCategoria.innerHTML += `<option value="${categoria.codigo}">${categoria.codigo} - ${categoria.categoria}</option>`;
            categoriaAgregarEmpresa.innerHTML += `<option value="${categoria.categoria}">${categoria.codigo} - ${categoria.categoria}</option>`;
            categoriaActualizarEmpresa.innerHTML += `<option value="${categoria.categoria}">${categoria.codigo} - ${categoria.categoria}</option>`;
            categoriaMostrarEmpresa.innerHTML += `<option value="${categoria.categoria}">${categoria.codigo} - ${categoria.categoria}</option>`;
        }
    });
    empresas.forEach(empresa => {
        if (!empresa.eliminado) {
            codigoActualizarEmpresa.innerHTML += `<option value="${empresa.codigo}">${empresa.codigo}</option>`;
            codigoEliminarEmpresa.innerHTML += `<option value="${empresa.codigo}">${empresa.codigo} - ${empresa.empresa}</option>`;
            empresaActualizarProducto.innerHTML += `<option value="${empresa.empresa}">${empresa.codigo} - ${empresa.empresa}</option>`;
            empresaAgregarProducto.innerHTML += `<option value="${empresa.empresa}">${empresa.codigo} - ${empresa.empresa}</option>`;
        }
    });
    productos.forEach(producto => {
        if (!producto.eliminado) {
            codigoActualizarProducto.innerHTML += `<option value="${producto.codigo}">${producto.codigo}</option>`;
            codigoEliminarProducto.innerHTML += `<option value="${producto.codigo}">${producto.codigo} - ${producto.producto}</option>`;
        }
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
            categoria: nombre.value,
            descripcion: descripcion.value,
            imagen: imagen.value,
            eliminado: false
        });
        alert('¡Categoría agregada!');
        cargarValores();
        nombre.value = '';
        descripcion.value = '';
        imagen.value = '';
        localStorage.setItem('categorias', JSON.stringify(categorias));
        vaciarCampos();
    }
}

function perfilCategoria() {
    let codigo = document.getElementById('selectcodigo-actualizarCategoria');
    let nombre = document.getElementById('txtnombre-actualizarCategoria');
    let descripcion = document.getElementById('txtdescripcion-actualizarCategoria');
    let imagen = document.getElementById('fileimagen-actualizarCategoria');

    let filtro = categorias.filter(categoria => categoria.codigo == codigo.value)[0];

    nombre.value = filtro.categoria;
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
        filtro.categoria = nombre.value;
        filtro.descripcion = descripcion.value;
        if (imagen != null) {
            filtro.imagen = imagen.value;
        }
        alert('¡Categoría actualizada!');
        cargarValores();
        localStorage.setItem('categorias', JSON.stringify(categorias));
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
                <td>${categoria.categoria}</td>
                <td>${categoria.descripcion}</td>
            </tr>`;
        }
    });
}

function buscarCategoria(elemento) {
    filtro = categorias.filter(categoria => (categoria.codigo == elemento.value || categoria.categoria == elemento.value || categoria.descripcion == elemento.value) && !categoria.eliminado);

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaCategorias');
        cuerpo.innerHTML = '';

        filtro.forEach(categoria => {
            cuerpo.innerHTML += 
            `<tr>
                <th scope="row">${categoria.codigo}</th>
                <td>${categoria.categoria}</td>
                <td>${categoria.descripcion}</td>
            </tr>`;
        });
    } else {
        llenarTablaCategoria();
    }
}

function nombreCategoria(elemento) {
    let filtro = categorias.filter(categoria => categoria.codigo == elemento.value)[0];
    document.getElementById('txtcategoria-eliminarCategoria').value = filtro.categoria;
}

function eliminarCategoria() {
    let codigo = document.getElementById('selectcodigo-eliminarCategoria');
    let filtro = categorias.filter(categoria => categoria.codigo == codigo.value)[0];
    if (confirm("¿Está seguro que desea eliminar la categoría?")) {
        filtro.eliminado = true;
        localStorage.setItem('categorias', JSON.stringify(categorias));
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
            empresa: nombre.value,
            descripcion: descripcion.value,
            direccion: direccion.value,
            telefono: telefono.value,
            correo: correo.value,
            categoria: categoria.value,
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
        localStorage.setItem('empresas', JSON.stringify(empresas));
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

    nombre.value = filtro.empresa;
    descripcion.value = filtro.descripcion;
    direccion.value = filtro.direccion;
    telefono.value = filtro.telefono;
    correo.value = filtro.correo;
    categoria.value = filtro.categoria;
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
        filtro.empresa = nombre.value;
        filtro.descripcion = descripcion.value;
        filtro.direccion = direccion.value;
        filtro.telefono = telefono.value;
        filtro.correo = correo.value;
        filtro.calificacion = calificacion.value;
        if (imagen.value != '') {
            filtro.imagen = imagen.value;
        }
        if (banner.value != '') {
            filtro.banner = banner.value;
        }
        alert('Empresa actualizada!');
        localStorage.setItem('empresas', JSON.stringify(empresas));
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
                <td>${empresa.empresa}</td>
                <td>${empresa.descripcion}</td>
                <td>${empresa.direccion}</td>
                <td>${empresa.telefono}</td>
                <td>${empresa.correo}</td>
        </tr>`;
        }
    });
}

function buscarEmpresa(elemento) {
    filtro = empresas.filter(empresa => (empresa.codigo == elemento.value || empresa.empresa == elemento.value || empresa.descripcion == elemento.value || empresa.telefono == elemento.value || empresa.correo == elemento.value || empresa.direccion == elemento.value) && !empresa.eliminado);

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaEmpresas');
        cuerpo.innerHTML = '';

        filtro.forEach(empresa => {
            cuerpo.innerHTML += 
            `<tr>
                <th scope="row">${empresa.codigo}</th>
                <td>${empresa.empresa}</td>
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
    document.getElementById('txtempresa-eliminarEmpresa').value = filtro.empresa;
}

function eliminarEmpresa() {
    let codigo = document.getElementById('selectcodigo-eliminarEmpresa');
    let filtro = empresas.filter(empresa => empresa.codigo == codigo.value)[0];
    if (confirm("¿Está seguro que desea eliminar la empresa?")) {
        filtro.eliminado = true;
        localStorage.setItem('empresas', JSON.stringify(empresas));
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
            producto: nombre.value,
            descripcion: descripcion.value,
            cantidad: cantidad.value,
            precio: precio.value,
            imagen: imagen.value,
            empresa: empresa.value,
            eliminado: false
        });
        alert('Producto agregado!');
        nombre.value = '';
        descripcion.value = '';
        cantidad.value = '';
        precio.value = '';
        imagen.value = '';
        empresa.value = '';
        localStorage.setItem('productos', JSON.stringify(productos));
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

    nombre.value = filtro.producto;
    descripcion.value = filtro.descripcion;
    cantidad.value = filtro.cantidad;
    precio.value = filtro.precio;
    empresa.value = filtro.empresa;
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
        filtro.producto = nombre.value;
        filtro.descripcion = descripcion.value;
        filtro.cantidad = cantidad.value;
        filtro.precio = precio.value;
        filtro.empresa = empresa.value;
        if (imagen != null) {
            filtro.imagen = imagen.value;
        }
        alert('Producto actualizado!');
        localStorage.setItem('productos', JSON.stringify(productos));
        vaciarCampos();
        cargarValores();
    }
}

function llenarTablaProductos() {
    let cuerpo = document.getElementById('cuerpo-tablaProductos');
    cuerpo.innerHTML = '';

    productos.forEach(producto => {
        if (!producto.eliminado) {
            cuerpo.innerHTML += 
            `<tr>
                <th scope="row">${producto.codigo}</th>
                <td>${producto.producto}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.empresa}</td>
                <td>${producto.precio} Lps.</td>
        </tr>`;
        }
    });
}

function buscarProducto(elemento) {
    filtro = productos.filter(producto => (producto.codigo == elemento.value || producto.producto == elemento.value || producto.descripcion == elemento.value || producto.cantidad == elemento.value || producto.empresa == elemento.value || producto.precio == elemento.value) && !producto.eliminado);;

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaProductos');
        cuerpo.innerHTML = '';

        filtro.forEach(producto => {
            cuerpo.innerHTML += 
            `<tr>
                <th scope="row">${producto.codigo}</th>
                <td>${producto.producto}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.empresa}</td>
                <td>${producto.precio} Lps.</td>
            </tr>`;
        });
    } else {
        llenarTablaProductos();
    }
}

function nombreProducto(elemento) {
    let filtro = productos.filter(producto => producto.codigo == elemento.value)[0];
    document.getElementById('txtproducto-eliminarProducto').value = filtro.producto;
}

function eliminarProducto() {
    let codigo = document.getElementById('selectcodigo-eliminarProducto');
    let filtro = productos.filter(producto => producto.codigo == codigo.value)[0];
    if (confirm("¿Está seguro que desea eliminar el producto?")) {
        filtro.eliminado = true;
        localStorage.setItem('productos', JSON.stringify(productos));
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
                <h4 class="col-4 text-center pt-2">${elem.orden}</h4>
                <button class="boton boton-verde col-4" onclick="abrirModal('${elem.codigo}');">Asignar</button>
                <button class="boton boton-naranja col-4" onclick="verOrden('${elem.codigo}');">Ver orden</button>
            </div>
        </div>`;
    });
}

function abrirModal(codigo) {
    let selectMotoristas = document.getElementById('selectmotorista');
    selectMotoristas.innerHTML = '';
    motoristas.forEach(motorista => {
        selectMotoristas.innerHTML += 
        `<option value="${motorista.codigo}">${motorista.motorista}</option>`;
    });
    orden = ordenes.filter(elem => elem.codigo == codigo)[0];
    $('#modal').modal('show');
}

function asignarMotorista() {
    let codigo = document.getElementById('selectmotorista');
    let filtro = motoristas.filter(motorista => motorista.codigo == codigo.value)[0];
    filtro.tomadas.push(orden);
    ordenes = ordenes.filter(o => o.codigo != orden.codigo);
    generarOrdenes();
    $('#modal').modal('hide');
    localStorage.setItem('ordenes', JSON.stringify(ordenes));
    localStorage.setItem('motoristas', JSON.stringify(motoristas));
}

function verOrden(codigo) {
    let contenidoOrdenes = document.getElementById('contenido-ordenes');
    orden = ordenes.filter(o => o.codigo == codigo)[0];
    let entrega = '';
    orden.envio.productos.forEach(producto => {
        entrega += producto.producto + '; ';
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
    motoristasEnEspera.forEach(motorista => {
        if (motorista.aprobado == null) {
            contenedorMotoristas.innerHTML += 
            `<div class="col-12 py-1">
                <div class="row borde-azul p-1 radius">
                    <h4 class="col-lg-10 col-md-9 col-sm-8 col-xs-6 text-left pt-2">${motorista.motorista}</h4>
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
    localStorage.setItem('motoristasEnEspera', JSON.stringify(motoristasEnEspera));
}

function aprobarMotorista(codigo) {
    let filtro = motoristasEnEspera.filter(motorista => motorista.codigo == codigo)[0];
    motoristas.push({
        codigo: filtro.codigo,
        motorista: filtro.motorista,
        tomadas: [],
        entregadas: []
    });

    motoristasEnEspera = motoristasEnEspera.filter(motorista => motorista.codigo != codigo);
    generarMotoristas();
}

function rechazarMotorista(codigo) {
    let filtro = motoristasEnEspera.filter(motorista => motorista.codigo == codigo)[0];
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

function listarProductosCategoria(elemento) {
    filtro = empresas.filter(empresa => (empresa.categoria == elemento.value));

    if (filtro.length != 0) {
        let cuerpo = document.getElementById('cuerpo-tablaEmpresas');
        cuerpo.innerHTML = '';

        filtro.forEach(empresa => {
            cuerpo.innerHTML += 
            `<tr>
                <th scope="row">${empresa.codigo}</th>
                <td>${empresa.empresa}</td>
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

cargarLocalStorage();
obtenerLocalStorage();
cargarValores();