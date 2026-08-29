const fs = require("fs")

const loadData = () => {
    const data = fs.readFileSync("data.json").toString()
    return JSON.parse(data)
}

const saveData = (people) => {
    fs.writeFileSync("data.json", JSON.stringify(people))
}

const addPerson = (id, fname, lname, age, city) => {
    const people = loadData()
    const person = people.find((p) => p.id === id)
    if (person) {
        console.log("ID already exists")
    } else {
        people.push({
            id,
            fname,
            lname,
            age,
            city
        })
        saveData(people)
        console.log("Person added")
    }
}

const viewAll = () => {
    const people = loadData()
    people.forEach((person) => {
        console.log(person)
    })
}

const viewPerson = (id) => {
    const people = loadData()
    const person = people.find((p) => p.id === id)
    if (person) {
        console.log(person)

    } else {

        console.log("Person not found")
    }
}

const deletePerson = (id) => {
    const people = loadData()
    const newPeople = people.filter((p) => p.id !== id)
    saveData(newPeople)
    console.log("Person deleted")
}


const deleteAll = () => {
    saveData([])
    console.log("All people deleted")
}

const fullName = () => {
    const people = loadData()
    people.forEach((person) => {
        console.log(
            person.fname + " " + person.lname + " - " + person.city
        )
    })
}


module.exports = {
    addPerson,
    viewAll,
    viewPerson,
    deletePerson,
    deleteAll,
    fullName
}