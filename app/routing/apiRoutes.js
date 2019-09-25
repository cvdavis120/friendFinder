var allPeople = require("../data/friends")
console.log(allPeople);
var questions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10"]
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        allPeople.forEach(function (data) {

        })
    })


    app.post("/api/friends", function (req, res) {

    });
};


$("#submit").on('click', (event) => {
    event.preventDefault();
    var profile = {
        name: $("#userName").val().trim(),
        photo: $("#userPhoto").val().trim(),
        answers: []
    }
    questions.forEach(function (res) {
        var answ = $('#' + res).val()
        profile.answers.push(answ)

    })
    console.log(profile.answers)
})