//required

const fs = require('fs');
const { colors } = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            return reject(`El valor introducido '${base}' no es un número.`);
        } else if (!Number(limite)) {
            return reject(`El valor introducido '${limite}' en el límite, no es un número.`);
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        console.log('=================='.green);
        console.log(`Tabla de ${base}`.green);
        console.log('=================='.green);

        if (!Number(base)) {
            return reject(`El valor introducido '${base}' en la base, no es un número.`);
        } else if (!Number(limite)) {
            return reject(`El valor introducido '${limite}' en el límite, no es un número.`);
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }

        return resolve('Se ha listado la tabla');
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}