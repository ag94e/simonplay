const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = {crossDomain:true};

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(URL, OPTS, data => {resolve(data);})
        .fail(() => reject(id));
    })
}
var onError = (id) => console.log(`Sucedió un error con ${id}`);

async function obtenerPersonajes(){
    const ids = [1,2,3,4,5,6,7];
    var promesas = ids.map(id => obtenerPersonaje(id));
    try {
        var personaje = await Promise.all(promesas);
        personaje.map(persona => console.log(persona.name));
    } catch (id) {
        onError(id);
    }
}

obtenerPersonajes();