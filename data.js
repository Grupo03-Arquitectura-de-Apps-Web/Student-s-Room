module.exports = function () {
  var data = {
    paises: [
      {
        id:1,
        nombrePais: "Perú",
        capitalPais: "Lima",
        monedaPais: "Nuevo Sol"
      },
      {
        id:2,
        nombrePais: "Chile",
        capitalPais: "Saniago de Chile",
        monedaPais: "Peso chileno"
      },
      {
        id:3,
        nombrePais: "Brasil",
        capitalPais: "Brasilia",
        monedaPais: "Real brasileño"
      },
      {
        id:4,
        nombrePais: "Portugal",
        capitalPais: "Lisboa",
        monedaPais: "Euro"
      },
      {
        id:5,
        nombrePais: "Francia",
        capitalPais: "París",
        monedaPais: "Euro"
      },
      {
        id:6,
        nombrePais: "Colombia",
        capitalPais: "Bogotá",
        monedaPais: "Peso colombiano"
      },

      {
        id:7,
        nombrePais: "Ecuador",
        capitalPais: "Quito",
        monedaPais: "Dolar Estadounidense"
      },
      {
        id:8,
        nombrePais: "Bolivia",
        capitalPais: "Sucre",
        monedaPais: "Boliviano"
      },
      {
        id:9,
        nombrePais: "Estados Unidos",
        capitalPais: "Washington D.C.",
        monedaPais: "Dolar Estadounidense"
      }
    ],
    ciudades:[
      {
        id: 1,
        nombreCiudad: "Lima",
        pais:
        {
          id:1,
          nombrePais: "Perú",
          capitalPais: "Lima",
          monedaPais: "Nuevo Sol"
        }
      },
      {
        id: 2,
        nombreCiudad: "Cuzco",
        pais:
        {
          id:1,
          nombrePais: "Perú",
          capitalPais: "Lima",
          monedaPais: "Nuevo Sol"
        }
      },
      {
        id:3,
        nombreCiudad: "Huancayo",
        pais:
        {
          id:1,
          nombrePais: "Perú",
          capitalPais: "Lima",
          monedaPais: "Nuevo Sol"
        }
      }
    ],
    distritos:[
        {
          id: 1,
          nombreDistrito: "Santiago de Surco",
          ciudad: {
            id: 1,
            nombreCiudad: "Lima",
            pais:
            {
              id:1,
              nombrePais: "Perú",
              capitalPais: "Lima",
              monedaPais: "Nuevo Sol"
            }
          }
        },
        {
          id: 2,
          nombreDistrito: "Chorrillos",
          ciudad: {
            id: 1,
            nombreCiudad: "Lima",
            pais:
            {
              id:1,
              nombrePais: "Perú",
              capitalPais: "Lima",
              monedaPais: "Nuevo Sol"
            }
          }
        },
        {
          id: 3,
          nombreDistrito: "Barranco",
          ciudad: {
            id: 1,
            nombreCiudad: "Lima",
            pais:
            {
              id:1,
              nombrePais: "Perú",
              capitalPais: "Lima",
              monedaPais: "Nuevo Sol"
            }
          }
        },
        {
          id: 4,
          nombreDistrito: "Comas",
          ciudad: {
            id: 1,
            nombreDistrito: "Lima",
            pais:
            {
              id:1,
              nombrePais: "Perú",
              capitalPais: "Lima",
              monedaPais: "Nuevo Sol"
            }
          }
        }
    ],
    plans: [
      {
        id: 1,
        nombre_plan: "Gratuito",
        precio: "S/. 0",
        descripcion:
          "1 anuncio en la web. 3 dias como publicacion destacada. Alcance de 100 personas.",
      },
      {
        id: 2,
        nombre_plan: "Basico",
        precio: "S/. 15",
        descripcion:
          "Hasta 5 anuncios en la web. 15 dias como publicacion destacada. Alcance de 500 personas",
      },
      {
        id: 3,
        nombre_plan: "Premium",
        precio: "S/. 25",
        descripcion:
          "Anuncios ilimitados en la web. 30 dias como publicacion destacada. Alcance de 1000 personas",
      },
    ],
  }
  return data
}
