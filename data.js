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
    ]
  }
  return data
}
