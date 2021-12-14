// The purpose of this game is to showcase my abilities in front end web development. Specifically, I show my understanding of APIs and capacity to call one in order to make a simple game. Here I am calling the renowned dictionary Merriam Webster's API.

const wordBox = document.getElementById("word-box")
const btnGetWord = document.getElementById("btn-get-word")
btnGetWord.addEventListener("click", getWord)
const btnCheckAudio = document.getElementById("btn-check-audio")
btnCheckAudio.addEventListener("click", checkAudio)

words = ["abacavir", "abatacept"]

function getWord() {
    const randomNum = Math.floor(Math.random() * words.length)
    let randomWord = words[randomNum]
    wordBox.textContent = randomWord
    let randomIndex = words.indexOf(randomWord)
    words.splice(randomIndex, 1)
    
    if (words.length === 0) {
        // End of Game
    }
}

async function checkAudio() {
    let response = await fetch(`https://www.dictionaryapi.com/api/v3/references/medical/json/${wordBox.textContent}?key=mykey`)
    let data = await response.json()
    console.log(data[0].hwi.prs[0].sound.audio)
    const abacavirBaseFilename = data[0].hwi.prs[0].sound.audio

    let sound = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/a/${abacavirBaseFilename}.mp3`)
    console.log(sound.src)
    sound.play()

}



