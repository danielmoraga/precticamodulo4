import { generateCharacters } from "./characters.mjs";

(() => {
  const seccion_1 = document.getElementById("seccion-1");
  const seccion_2 = document.getElementById("seccion-2");
  const seccion_3 = document.getElementById("seccion-3");

  const divg_1 = document.getElementById("divg-1");
  const divg_2 = document.getElementById("divg-2");
  const divg_3 = document.getElementById("divg-3");

  let done_seccion_1 = false;
  let done_seccion_2 = false;
  let done_seccion_3 = false;

  const characterGenerator = generateCharacters(
    [1, 2, 3, 4, 5],
    seccion_1,
    "color-1"
  );

  const characterGenerator2 = generateCharacters(
    [6, 7, 8, 9, 10, 11],
    seccion_2,
    "color-2"
  );

  const characterGenerator3 = generateCharacters(
    [12, 13, 14, 15, 16, 18],
    seccion_3,
    "color-3"
  );

  divg_1.addEventListener("click", async () => {
    if (!done_seccion_1) {
      let result = await characterGenerator.next();
      done_seccion_1 = result.done;
    }
  });
  divg_2.addEventListener("click", async () => {
    if (!done_seccion_2) {
      let result = await characterGenerator2.next();
      done_seccion_2 = result.done;
    }
  });
  divg_3.addEventListener("click", async () => {
    if (!done_seccion_3) {
      let result = await characterGenerator3.next();
      done_seccion_3 = result.done;
    }
  });

})();
