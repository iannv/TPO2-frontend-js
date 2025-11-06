// 1. CALCULAR EL ÁREA DE UN RECTÁNGULO
// Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
function calcularArea(longitud, ancho) {
  return longitud * ancho;
}
console.log(calcularArea(5, 3));



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. CONTAR PALABRAS DE UNA CADENA
// Escribe una función que reciba una cadena de texto (string) y devuelva la cantidad de palabras en la cadena.
function contarPalabras(string) {
  const palabras = string
    .trim()
    .split(" ")
    .filter((s) => s.length > 0).length;
  return palabras;
}
console.log(contarPalabras("Humahuaca es un lugar copado"));



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. CONTAR VOCALES DE UNA CADENA
// Escribe una función que reciba una cadena y cuente el número de vocales.
function contarVocales(string) {
  const vocales = "aeiouAEIOU";
  let contador = 0;

  string.split("").forEach((s) => {
    if (vocales.includes(s)) {
      contador++;
    }
  });
  return contador;
}
console.log(contarVocales("JavaScript"));



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. ENCONTRAR EL PALÍNDROMO
// Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo.
function esPalindromo(string) {
  let palabra = string.toLowerCase().split("").reverse().join("");
  if (string.toLowerCase() === palabra) return true;
  else return false;
}
console.log(esPalindromo("Neuquen"));



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. CREAR UN PROGRAMA PARA CONVERTIR LA EDAD DE UN PERRO A AÑOS HUMANOS.
// Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina,
// que equivale a 7 veces la edad humana.
function edadCanina(edad) {
  edad = prompt("Ingrese la edad de su perro: ");
  let edadHumana = edad * 7;
  console.log(`Su perro tiene ${edadHumana} años humanos.`);
}
edadCanina(7);



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. CONVERTIR LA PRIMERA LETRA DE CADA PALABRA EN MAYÚSCULA
// Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula.
function capitalizarPalabras(string) {
  const palabras = string.split(' ');
  const resultado = [];

  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let palabraCapitalizada = palabra[0].toUpperCase() + palabra.slice(1);
    resultado.push(palabraCapitalizada);
  }
  return resultado.join(' ');
}
console.log(capitalizarPalabras("hola mundo desde javascript"));



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. GENERAR LOS PRIMEROS N NÚMEROS DE LA SUCESIÓN DE FIBONACCI
// Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de Fibonacci.
function fibonacci(n) {
  let a = 0, b = 1;
  const serie = [];

  for (let i = 0; i < n; i++) {
    serie.push(a);
    [a, b] = [b, a + b];
  }
  return serie;
}
console.log(fibonacci(5));



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8. LISTA DE PRODUCTOS
const productos = [
{ id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
{ id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
{ id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
{ id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
{ id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio.
const mostrarProductos = productos.forEach((p) => {
  console.log(`Producto: ${p.nombre} - $${p.precio}`)
});

// 2. Usando map: Crear un array con solo los nombres de los productos.
const nombresProductos = productos.map(function(p){
  return p.nombre;
});
console.log(nombresProductos);

// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20.
const filtarXStock = productos.filter(p => p.stock > 20 && p.categoria === 'electrónica');
console.log(filtarXStock);
// 4. Usando find: Encontrar el producto con id 3.

const findProducto = productos.find(p => p.id === 3);
console.log(findProducto);

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock).
const total = productos.reduce((acum, producto) => acum + producto.precio * producto.stock, 0);
console.log(`Total: $${total}`);



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9. ESTUDIANTES Y CALIFICACIONES
const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
{ id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
{ id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
{ id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

// 1. Usando forEach: Mostrar nombre y edad de cada estudiante.
const arrEstudiantes = estudiantes.forEach((e) =>{
  console.log(`${e.nombre} tiene ${e.edad} años.`);
});

// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones.
const promediosEstudiantes = estudiantes.map(e => {
  const suma = e.calificaciones.reduce((a, b) => a + b, 0);
  const promedio = suma / e.calificaciones.length;
  return `${e.nombre} tiene un promedio de ${promedio.toFixed(2)}`;
});
console.log(promediosEstudiantes);

// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5.
const filtrarEstudiantes = estudiantes.filter(e => {
  const suma = e.calificaciones.reduce((a, b) => a + b, 0);
  const promedio = suma / e.calificaciones.length;
  return promedio > 7.5;
});
console.log(filtrarEstudiantes);

// 4. Usando find: Encontrar estudiante llamado 'María'.
const findEstudiantes = estudiantes.find(e => e.nombre === 'María');
console.log(findEstudiantes);

// 5. Usando reduce: Calcular la edad promedio de los estudiantes.
const edadPromedio = estudiantes.reduce((acum, e) => acum + e.edad / estudiantes.length, 0);
console.log(`Edad promedio de los estudiantes: ${edadPromedio} años.`);



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10. PELÍCULAS
const peliculas = [
{ id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
{ id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
{ id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
{ id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
{ id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];
// 1. Usando forEach: Mostrar título y año de cada película.
const mostrarPeliculas = peliculas.forEach(p => {
  console.log(`${p.titulo} se estrenó en ${p.año}.`);
});

// 2. Usando map: Crear array de títulos en mayúsculas.
const convertirPeliculas = peliculas.map(p => {
  return p.titulo.toUpperCase();
});
console.log(convertirPeliculas);

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5.
const filtrarPeliculas = peliculas.filter(p => p.rating > 8.5 && p.genero === 'drama');
console.log(filtrarPeliculas);

// 4. Usando find: Encontrar película estrenada en 2014.
const encontrarPelicula = peliculas.find(p => p.año === 2014);
if (encontrarPelicula) {
  console.log(`${encontrarPelicula.titulo} se estrenó en ${encontrarPelicula.año}`);
};

// 5. Usando reduce: Calcular la duración total de todas las películas.
const duracionTotal = peliculas.reduce((acum, p) => acum + p.duracion, 0);
console.log(`Duración total: ${duracionTotal} minutos.`);