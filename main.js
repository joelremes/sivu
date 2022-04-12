const textInput = document.getElementById("word");

const consonants = "bcdfghjklmnpqrstvwxz";

const checkInput = () => {
    let characters = textInput.value.split("");

    characters.reverse();

    for (let i = 1; i < characters.length - 1; i++) {
        if (consonants.includes(characters[i])) {
            characters[i] = "-" + characters[i];
            i++;
        } 
    }

    characters.reverse();

    document.getElementById("teksti").innerHTML = characters.join("");
}