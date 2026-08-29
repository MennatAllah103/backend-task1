const appdata = require("./appdata.js")
const yargs = require("yargs")


yargs.command({
    command: "add",
    describe: "to add a person",
    builder: {
        id: {
            describe: "person id",
            demandOption: true,
            type: "number"
        },
        fname: {
            describe: "first name",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "last name",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "person age",
            demandOption: true,
            type: "number"
        },
        city: {
            describe: "person city",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        appdata.addPerson(
            x.id,
            x.fname,
            x.lname,
            x.age,
            x.city
        )
    }
})

yargs.command({
    command: "viewAll",
    describe: "view all people",
    handler: () => {
        appdata.viewAll()
    }
})

yargs.command({
    command: "view",
    describe: "view one person",
    builder: {
        id: {
            describe: "person id",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) => {
        appdata.viewPerson(x.id)
    }
})

yargs.command({
    command: "delete",
    describe: "delete one person",
    builder: {
        id: {
            describe: "person id",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) => {
        appdata.deletePerson(x.id)
    }
})

yargs.command({
    command: "deleteAll",
    describe: "delete all people",
    handler: () => {
        appdata.deleteAll()
    }
})


yargs.command({
    command: "fullName",
    describe: "view full name and city",
    handler: () => {
        appdata.fullName()
    }
})

yargs.parse()