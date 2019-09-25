var questions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10"]
$("#dialog").hide()
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
    // console.log(profile.answers)
    $.post("/api/friends", profile).then((data) => {
        var winnerName = data.winner.name
        var winnerPhoto = data.winner.photo
        alertThis(winnerName, winnerPhoto)
        console.log(winnerName);
    })
    // CLEAR FORM
})

function alertThis(name, photoSrc) {
    var userImage = $("<img>");
    var userName = $("<p></p>")
    //changes the html element to the gif 
    userImage.attr("src", photoSrc);
    userImage.attr("alt", "tinder_pic");
    userName.text("Your match is: " + name + "!")
    //prepend the gif to the page. 
    $("#dialog").append(userName)
    $(".card-body").prepend(userImage)
    $("#dialog").show()
    $("#bigForm").hide()

}