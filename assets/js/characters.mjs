import { loadCharacter } from "./fetchApi.mjs";

export async function* generateCharacters(ids, seccion, color_class){
    for(let id of ids){
        const character = await loadCharacter(id);
        yield showCharacter(character, seccion, color_class);
    }
}


const showCharacter = (character, seccion, color_class) =>{

    let element = `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                <div class="timeline-icon ${color_class}">
                </div>
                <div class="timeline-text">
                    <h6>${character.name}</h6>
                    <p>Estatura: ${character.height} cm.</p>
                    <p> Peso: ${character.mass} kg.</p>
                </div>
            </div>
        </div>
    `;

    seccion.innerHTML += element;
}