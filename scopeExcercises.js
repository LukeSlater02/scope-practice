const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let i = 0; i < cookies.length; i++) {
    const currentCookie = cookies[i]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord}${secondWord}`
    return conjoinedWord
}


console.log(conjunction("Master", "Card"))
    
const modSquad = {
        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", 
        "Capt. Adam Greer", "Chief Barney Metcalf"],
        
        series: {
            "start": "1968",
            "end": "1973"
        }
        
    }
    
    
let HTMLRepresentation = `<h1>The Mod Squad</h1>`
    
    modSquad.members.forEach(member => {
        
        HTMLRepresentation += `<div>${member}</div>`
        
        
        
    })
    console.log(HTMLRepresentation)

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]


for (const location of locations) {
    let invalidLocation = false
    if (location[0] > 2) {
        invalidLocation = true
    }

    if (invalidLocation === true) {
        console.log("This location is invalid")
    }
}

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    let suffix = ""
    let name = ""
    const namer = function () {
        suffix = " the Llama"
        name = possibleNames[randomizer]
    }
    namer()
    let fullName = name + suffix
    return fullName
}

nameMaker = llamaNamer()
console.log(nameMaker)