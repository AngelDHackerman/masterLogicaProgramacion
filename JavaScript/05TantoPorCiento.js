console.group('Mi respuesta:');

const tantoPorCiento = (porcentaje, numero) => { 
  let res = porcentaje * numero / 100;

  console.log(`El ${porcentaje}% de ${numero} es: ${res} `)
}

tantoPorCiento(43, 897); 
tantoPorCiento(40, 200); 

console.groupEnd();


