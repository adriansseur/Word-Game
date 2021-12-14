// The purpose of this game is to showcase my abilities in front end web development. Specifically, I show my understanding of APIs and capacity to call one in order to make a simple game. Here I am calling the renowned dictionary Merriam Webster's API.

async function getWord() {
    let response = await fetch("https://www.dictionaryapi.com/api/v3/references/medical/json/abacavir?key=mykey")
    let data = await response.json()
    console.log(data[0].hwi.prs[0].sound.audio)
    const abacavirBaseFilename = data[0].hwi.prs[0].sound.audio
    
    // const containerGame = document.getElementById("container-game")
    // containerGame.innerHTML += `
    // <audio autoplay><source src="https://media.merriam-webster.com/audio/prons/en/us/mp3/a/${abacavirBaseFilename}.mp3"></audio>
    // `

    let sound = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/a/${abacavirBaseFilename}.mp3`)
    console.log(sound.src)
    sound.play()

}



document.getElementById("check-audio").addEventListener("click", getWord)
