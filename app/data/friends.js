// var fs = require("fs")
// var allUsers = []
// var newUser = function (name, photo, a, b, c, d, e, f, g, h, i, j) {
//     this.name = name;
//     this.photo = photo;
//     this.qa = a;
//     this.qb = b;
//     this.qc = c;
//     this.qd = d;
//     this.qe = e;
//     this.qf = f;
//     this.qg = g;
//     this.qh = h;
//     this.qi = i;
//     this.qj = j;
//     this.json = JSON.stringify(this)
//     this.addMe = function () {
//         fs.appendFile("friends.txt", this.json, function (err) {
//             if (err) throw err;

//         });
//     }
// }
// var testing = new newUser("ntest", "photo", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10")

// // testing.addMe()
module.exports = [{
        "name": "John",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [3, 2, 5, 1, 4, 3, 2, 4, 5, 1]
    }, {
        "name": "Suzie",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [5, 3, 2, 4, 1, 3, 2, 5, 2, 2]
    }, {
        "name": "Sammy",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [1, 5, 5, 3, 4, 4, 2, 3, 4, 5]
    },
    {
        "name": "Alex",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [4, 4, 2, 1, 3, 3, 5, 2, 3, 2]
    }
]