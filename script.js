
const botonAgregar = document.getElementById('idAgregarTarea');
const contenedor = document.querySelector('#contenedor-filas');

let contador = 1;

botonAgregar.addEventListener('click', () => {

    const fila = document.createElement('div');
    fila.classList.add('fila');

    // creacion de numero de tarea (autoincrementado)
    const nro = document.createElement('div');
    nro.textContent = contador++;

    // creacion de la descripcion
    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';

    // creacion de la nota
    const inputNota = document.createElement('input');
    inputNota.type = 'text';
    
    const divEstado = document.createElement('div');
    const check = document.createElement('input');
    check.type = 'checkbox';
    divEstado.appendChild(check);

    const divBasura = document.createElement('div');
    const imgBasura = document.createElement('img');
    imgBasura.src = "https://img.icons8.com/material/24/FA5252/trash--v1.png";
    imgBasura.width = 24;
    imgBasura.height = 24;
    imgBasura.classList.add('icono-basurero');
    imgBasura.style.cursor = 'pointer';

    // evento para eliminar la fila
    imgBasura.addEventListener ('click', () => {
        fila.remove();
        actualizarNumeros();
    });

    divBasura.appendChild(imgBasura);

    fila.appendChild(nro);
    fila.appendChild(inputDesc);
    fila.appendChild(inputNota);
    fila.appendChild(divEstado);
    fila.appendChild(divBasura);

    // Insertar fila al contenedor
    contenedor.appendChild(fila);

});

function actualizarNumeros() {
    const filas = contenedor.querySelectorAll('.fila');
    let i = 1;
    filas.forEach(fila => fila.children[0].textContent = i++);
    contador = i;
}
