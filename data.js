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
    tipo: [
      {
        id:1,
        tipo: "Habitación individual",
        descripcion: "Tamaño de la habitación 10 m² \nEsta habitación individual dispone de TV por cable y baño privado \nPolítica de humo: no se puede fumar   ",
      },
      {
        id:2,
        tipo: "Habitación doble",
        descripcion: "Tamaño de la habitación 15 m² \nEsta habitación doble cuenta con baño privado y TV por cable \nPolítica de humo: no se puede fumar",
      },
      {
        id:3,
        tipo: "Suite",
        descripcion: "Tamaño de la habitación 30 m² \n Esta suite cuenta con baño privado, TV por cable y minibar \n Politica de humo: no se puede fumar",
      },
      {
        id:4,
        tipo: "Habitación Doble Superior 2 camas",
        descripcion: "Tamaño de la habitación 25 m² \n Esta habitación con 2 camas individuales tiene balcón, TV de pantalla plana y sofá \n Vistas a: Vistas a la ciudad \nPolítica de humo: no se puede fumar",
      }
    ],
    estudiante: [
      {
        id:1,
        nombre: "Carlos espinoza",
	      correo_institucional: "u20201a154@upc.edu.pe",
        fecha_nacimiento: "2002-12-14",
        telefono:"985642365",
      },
      {
        id:2,
        nombre: "Camila Ramos",
	      correo_institucional: "u20184194@ucv.edu.pe",
        fecha_nacimiento: "1997-04-25",
        telefono:"956897562",
      },
      {
        id:3,
        nombre: "Paul Torres",
	      correo_institucional: "u2022h112@utp.edu.pe",
        fecha_nacimiento: "2003-01-06",
        telefono:"995697532",
      },
      {
        id:4,
        nombre: "Pamela Asensio",
	      correo_institucional: "u20159562@uni.edu.pe",
        fecha_nacimiento: "1993-08-26",
        telefono:"935625412",
      }
    ],

    universidad: [
      {
        id:1,
        nombre: "Universidad Peruana de Ciencias Aplicadas - UPC",
        sede: "Monterrico",
        ubicacion:"Prol. Primavera",
      },
      {
        id:2,
        nombre: "Universidad Tecnológica del Perú - UTP",
        sede: "Lima Centro",
        ubicacion:"Av. Arequipa 265, Lima",
      },
      {
        id:3,
        nombre: "Universidad Privada del Norte - UPN",
        sede: "Chorrillos",
        ubicacion:"Av. Guardia Peruana 890, Chorrillos",
      },
      {
        id:4,
        nombre: "Universidad Científica del Sur",
        sede: "Ate",
        ubicacion:"Av. Nicolás Ayllón 7208",
      }
    ],

    publicacion: [
      {
        id:1,
        contenido: "no hay",
        fecha_publicacion: "2023-01-01",
        num_reacciones:1,
        num_comentarios:2,
        num_compartidos:0,
        habitacion:1,
      },
      {
        id:2,
        contenido: "no hay",
        fecha_publicacion: "2023-01-01",
        num_reacciones:1,
        num_comentarios:2,
        num_compartidos:0,
        habitacion:1,
      },
      {
        id:3,
        contenido: "no hay",
        fecha_publicacion: "2023-01-01",
        num_reacciones:1,
        num_comentarios:2,
        num_compartidos:0,
        habitacion:1,
      },
      {
        id:4,
        contenido: "no hay",
        fecha_publicacion: "2023-01-01",
        num_reacciones:1,
        num_comentarios:2,
        num_compartidos:0,
        habitacion:1,
      }
    ],

  }
  return data
}
