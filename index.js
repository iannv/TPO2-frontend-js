// 1. CALCULAR EL ÁREA DE UN RECTÁNGULO
// Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
function calcularArea(longitud, ancho) {
  return longitud * ancho;
}
console.log(calcularArea(5, 3));

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

// 4. ENCONTRAR EL PALÍNDROMO
// Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo.
function esPalindromo(string) {
  let palabra = string.toLowerCase().split("").reverse().join("");
  if (string.toLowerCase() === palabra) return true;
  else return false;
}
console.log(esPalindromo("Neuquen"));

// 5. CREAR UN PROGRAMA PARA CONVERTIR LA EDAD DE UN PERRO A AÑOS HUMANOS.
// Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina,
// que equivale a 7 veces la edad humana.
function edadCanina(edad) {
  edad = prompt("Ingrese la edad de su perro: ");
  let edadHumana = edad * 7;
  console.log(`Su perro tiene ${edadHumana} años humanos.`);
}
// edadCanina(7);

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

// 8. LISTA DE PRODUCTOS
const productos = [
{ id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
{ id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
{ id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
{ id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
{ id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];
// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio.
let mostrarProductos = productos.forEach((p) => {
  console.log(`Producto: ${p.nombre} - $${p.precio}`)
})
// 2. Usando map: Crear un array con solo los nombres de los productos.
let nombresProductos = productos.map(function(p){
  return p.nombre;
})
console.log(nombresProductos);
// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20.
let filtarXStock = productos.filter(p => p.stock > 20 && p.categoria === 'electrónica');
console.log(filtarXStock);
// 4. Usando find: Encontrar el producto con id 3.
let findProducto = productos.find(p => p.id === 3);
console.log(findProducto);
// 5. Usando reduce: Calcular el valor total del inventario (precio * stock).
let total = productos.reduce((acum, producto) => acum + producto.precio * producto.stock, 0);
console.log(`Total: $${total}`);