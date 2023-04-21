const { Template } = require("nunjucks")

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",

]
const weekdays = [
    "Domingo",
    "segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades
function getSubject(subjectNumber){
      const position = +subjectNumber - 1
      return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minutos] = time.split(":")
    return Number ((hour * 60) + minutos)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}