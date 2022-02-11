// The purpose of this game is to showcase my abilities in front end web development. Specifically, I show my understanding of APIs and capacity to call one in order to make a simple game. Here I am calling the renowned dictionary Merriam Webster's API.

const accessContainer = document.getElementById("access-container")
const btnEnter = document.getElementById("btn-enter")
btnEnter.addEventListener("click", enter)
const keyBox = document.getElementById("key-box")
const errorMessage = document.getElementById("error-message")
const keyHolder = document.getElementById("key-holder")
// const title = document.getElementById("title")
const wordContainer = document.getElementById("word-container")
const wordBox = document.getElementById("word-box")
const btnGetWord = document.getElementById("btn-get-word")
btnGetWord.addEventListener("click", getWord)
const btnCheckAudio = document.getElementById("btn-check-audio")
btnCheckAudio.addEventListener("click", checkAudio)
const scoreContainer = document.getElementById("score-container")
const btnIncreaseScore = document.getElementById("btn-increase-score")
btnIncreaseScore.addEventListener("click", increaseScore)
const playerScore = document.getElementById("player-score")
let score = 0

words = ["abacavir", "abatacept", "abciximab", "Acanthocheilonema", "accoucheuse", "acetabuloplasty", "acrocephalosyndactyly", "amaurosis", "androstenedione", "anoesis", "antifluoridationist", "antileishmanial", "antiricin", "arytenoepiglottic", "babesiasis", "balanopreputial", "bevacizumab", "bitrochanteric", "brodifacoum", "bronchomoniliasis"]

keyHolder.style.display = "none"

const gameElements = [wordContainer, btnCheckAudio, scoreContainer]

gameElements.forEach(element => element.style.display = "none")


function enter() {
    let key = keyBox.value
    fetch(`https://www.dictionaryapi.com/api/v3/references/medical/json/$abacavir?key=${key}`)
        .then(res => res.json())
        .then(data => {
            if (data) {
                gameElements.forEach(element => element.style.display = "initial")
                wordContainer.style.display = "grid"
                accessContainer.style.display = "none"
                keyHolder.textContent = key
            }
        })
        .catch(error => {
            console.log(`
            No valid key, so:
            ${error}
            `)
            errorMessage.textContent = "Sorry, not a valid key."
        })
}


function getWord() {
    const randomNum = Math.floor(Math.random() * words.length)
    let randomWord = words[randomNum]
    if (typeof(randomWord) === "undefined") {
        randomWord = "End of Game"
    }
    wordBox.innerHTML = `
    <p id="random-word">${randomWord}</p>
    `
    let randomIndex = words.indexOf(randomWord)
    words.splice(randomIndex, 1)
}

async function checkAudio() {
    const randomWord = document.getElementById("random-word")
    let response = await fetch(`https://www.dictionaryapi.com/api/v3/references/medical/json/${randomWord.textContent}?key=${keyHolder.textContent}`)
    let data = await response.json()
    const baseFilename = data[0].hwi.prs[0].sound.audio
    console.log(baseFilename)

    let sound = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${baseFilename[0]}/${baseFilename}.mp3`)
    sound.play()
}

function increaseScore() {
    score++
    playerScore.textContent = `Score: ${score}`
}



