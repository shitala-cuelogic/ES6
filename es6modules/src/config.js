//Default export
//const apiKey = '3213254sada';
// export default apiKey;

//Named export
const apiKey = '3213254sada';
const url = "https://dsdads/dsadasd/sdad";

function sayHi(name) {
	console.log(`Hello there ${name}`);
}

export {apiKey, url as aliseUrl, sayHi}


/*OR
export const apiKey = '3213254sada';
export const url = "https://dsdads/dsadasd/sdad";

export  function sayHi(name) {
	console.log(`Hello there ${name}`);
}*/