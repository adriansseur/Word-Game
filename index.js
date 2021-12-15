// The purpose of this game is to showcase my abilities in front end web development. Specifically, I show my understanding of APIs and capacity to call one in order to make a simple game. Here I am calling the renowned dictionary Merriam Webster's API.

const wordBox = document.getElementById("word-box")
const btnGetWord = document.getElementById("btn-get-word")
btnGetWord.addEventListener("click", getWord)
const btnCheckAudio = document.getElementById("btn-check-audio")
btnCheckAudio.addEventListener("click", checkAudio)
const btnIncreaseScore = document.getElementById("btn-increase-score")
btnIncreaseScore.addEventListener("click", increaseScore)
const playerScore = document.getElementById("player-score")
let score = 0

words = ["abacavir", "abatacept", "abciximab", "Acanthocheilonema", "accoucheuse", "acetabuloplasty", "acrocephalosyndactyly", "amaurosis", "androstenedione", "anoesis", "antifluoridationist", "antileishmanial", "antiricin", "arytenoepiglottic"]

function getWord() {
    const randomNum = Math.floor(Math.random() * words.length)
    let randomWord = words[randomNum]
    if (typeof(randomWord) === "undefined") {
        randomWord = "End of Game"
        btnGetWord.style.disabled = "true"
        btnCheckAudio.style.disabled = "true"
        btnIncreaseScore.style.disabled = "true"
    }
    wordBox.innerHTML = `
    <p id="random-word">${randomWord}</p>
    `
    let randomIndex = words.indexOf(randomWord)
    words.splice(randomIndex, 1)
}

async function checkAudio() {
    const randomWord = document.getElementById("random-word")
    let response = await fetch(`https://www.dictionaryapi.com/api/v3/references/medical/json/${randomWord.textContent}?key=mykey`)
    let data = await response.json()
    console.log(data[0].hwi.prs[0].sound.audio)
    const abacavirBaseFilename = data[0].hwi.prs[0].sound.audio

    let sound = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/a/${abacavirBaseFilename}.mp3`)
    console.log(sound.src)
    sound.play()
}

function increaseScore() {
    score++
    playerScore.textContent = `Score: ${score}`
}



