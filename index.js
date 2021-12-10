// The purpose of this game is to showcase my abilities in front end web development. Specifically, I show my understanding of APIs and capacity to call one in order to make a simple game. Here I am calling the renowned dictionary Merriam Webster's API.

async function getWord() {
    let response = await fetch("https://www.dictionaryapi.com/api/v3/references/medical/json/doctor?key=mykey")
    let data = await response.json()
    console.log(data)
}

getWord()