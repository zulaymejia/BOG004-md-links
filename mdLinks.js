const {
  //absolutePath,
  getFilesDirectory,
  readArchive,
  validateObjects,
  // resulPath,
  broken,
  getStats,
} = require("./index.js");

const mdLinks = (userPath, options) => {
  const arr = [];
  return new Promise((resolve, reject) => {
    return getFilesDirectory(userPath, [])
      .then((respuesta) => {
        const arr = respuesta.map((elemento) => {
          if (options.validate === false) {
            readArchive(elemento)
              .then((res) => resolve(res))
              .catch((error) => console.log("ERROR", error));
          } else {
            readArchive(elemento)
              .then((res) => resolve(validateObjects(res)))
              .catch((error) => console.log("ERROR", error));
          }
        });
      })
      .catch((err) => reject(err));
  });
};

module.exports = mdLinks;

// mdLinks(resulPath, { validate: true })
//   .then((respuesta) => {
//     // console.log('respuesta', respuesta)
//     return respuesta;
//   })
//   .catch((err) => console.log(err));
