const mdLinks = require("../mdLinks.js");
const processPath = "carpetadeprueba/archivomd.md";
const arrayData = [
  {
    file: "Prueba/prueba1.md",
    href: "https://medium.com/netscape/a--create-a-nodejs-command-line-package-c2166",
    result: "no tengo idea",
    status: 503,
    text: "Linea de comando CLI",
  },
  {
    file: "Prueba/prueba1.md",
    href: "https://nodejs.org/api/path.html",
    result: "OK",
    status: 200,
    text: "Path",
  },
];

describe("mdLinks", () => {
  it("debe ser una funcion", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("debe retornar una promesa", (done) => {
    expect(mdLinks(processPath, {}) instanceof Promise).toBeTruthy();
  });
  it("debe retornar una promesa 6", (done) => {
    mdLinks(processPath, {}).then((result) => {
      expect(result).toEqual(arrayData);
      done();
    });
  });
});
