export async function loadCharacter(id){

    try {
        let response = await fetch(`https://swapi.dev/api/people/${id}/`,{
            method: 'GET'
        });
        if(!response.ok){
            throw new Error("error al solicitar la peticion de la API");
        }

        let data = await response.json()
        return (data)
    } catch (error) {
        console.error(error)
        
    }

}




/* const showCharacter = (character) =>{
    const container = document.getElementById('container');
    const block = document.createElement('div');

    block.innerHTML = `
        <h3>${character.name}</h3>
        <p>Estatura: ${character.height}</p>
        <p>Peso: ${character.mass} kg</p>
    `;
    container.appendChild(block);

} */