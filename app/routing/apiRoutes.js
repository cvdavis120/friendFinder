var allPeople = require("../data/friends")

var questions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10"]
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        allPeople.forEach(function (data) {

        })
    })


    app.post("/api/friends", function (req, res) {
        console.log("GOGO");
        var bestScore = 50
        var myScore = 0
        var winner = "joe"
        for (i = 0; i < allPeople.length; i++) {
            var person = allPeople[i]
            for (i = 0; i < 10; i++) {
                // console.log(req.body);
                var num = person.scores[i] - req.body.answers[i]
                num = Math.abs(num)
                myScore += num
            }
            if (myScore < bestScore) {
                bestScore = myScore
                winner = person
                myScore = 0
            } else {
                myScore = 0
            }

        }
        console.log(winner);
        res.json({
            winner
        })
    });


};


// $("#submit").on('click', (event) => {
//     event.preventDefault();
//     var profile = {
//         name: $("#userName").val().trim(),
//         photo: $("#userPhoto").val().trim(),
//         answers: []
//     }
//     questions.forEach(function (res) {
//         var answ = $('#' + res).val()
//         profile.answers.push(answ)

//     })
//     console.log(profile.answers)
//     $.post("/api/friends", profile)
// })