const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://lstd:${password}@cluster0.sxg4h.mongodb.net/phonebook?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

mongoose
  .connect(url)
  .then((result) => {
    if (process.argv.length === 3) {
      Person.find({}).then((result) => {
        console.log('phonebook:')
        result.forEach((person) => {
          console.log(person)
        })
        mongoose.connection.close()
      })
    } else {
      const person = new Person({
        id: Math.floor(Math.random() * 500),
        name: name,
        number: number,
      })

      console.log(`Added ${person.name} number ${person.number} to phonebook`)
      return person.save()
    }
  })
  .then(() => {
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))
