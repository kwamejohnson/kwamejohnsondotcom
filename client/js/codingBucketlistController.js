app.controller('codingBucketlistController', ['$scope', function($scope){

console.log("in codingBucketlistController");

$scope.read = [
                { "name" : "Clean Code", "author": "by Robert C. Martin", "status" : "images/inprog.png", "title" : "in progress"},
                { "name" : "Programming Pearls", "author": " by Jon Bentley", "status": "images/future.png", "title" : "future" },
                { "name" : "The Innovators", "author": " by Walter Isaacson", "status": "images/check3.png", "title" : "completed" },
                { "name" : "Cracking the Coding Interview", "author": " by Gayle Laakmann McDowell" ,"status" : "images/inprog.png", "title" : "in progress" },
                { "name" : "Soft Skills", "author": " by John Sonmez","status" : "images/inprog.png", "title" : "in progress" },
                { "name" : "Zero Bugs and Program Faster", "author": " by Kate Thompson","status" : "images/future.png", "title" : "future" },
                { "name" : "Code Complete", "author": " by Steve McConnell","status" : "images/future.png", "title" : "future" },
                { "name" : "The Pragmatic Programmer", "author": " by Hunt & Thomas","status" : "images/future.png", "title" : "future" },
                { "name" : "Refactoring/Unit Test Patterns", "author": " by Gerard Meszaros","status" : "images/future.png", "title" : "future" }
              ]

$scope.learn = [
                {"name": "Full-Stack JavaScript", "status": "images/check3.png", "title" : "completed" },
                {"name": "Python", "status": "images/check3.png", "title" : "completed" },
                {"name": "Swift/iOS Development", "status": "images/check3.png", "title" : "completed" },
                {"name": "Ruby", "status": "images/inprog.png", "title" : "in progress" },
                {"name": "C#", "status": "images/inprog.png", "title" : "in progress" },
                {"name": "Machine Learning", "status": "images/inprog.png", "title" : "in progress" },
                {"name": "D3", "status": "images/check3.png", "title" : "completed" },
                {"name": "Data Science", "status": "images/inprog.png", "title" : "in progress" },
                {"name": "AWS", "status": "images/inprog.png", "title" : "in progress" }
                ]

$scope.go = [
                {"name": "TechCrunch Disrupt", "status": "images/future.png", "title" : "future" },
                {"name": "Apple Worldwide Developers Conference", "status": "images/future.png", "title" : "future" },
                {"name": "Geekwire Summit", "status": "images/future.png", "title" : "future" },
                {"name": "Web Summit", "status": "images/future.png", "title" : "future" },
                {"name": "TED Conference", "status": "images/future.png", "title" : "future" },
                {"name": "TEDMED Conference", "status": "images/future.png", "title" : "future" },
                {"name": "Microsoft Build", "status": "images/future.png", "title" : "future" },
                {"name": "WSJ Digital Live", "status": "images/future.png", "title" : "future" },
            ]

$scope.meet = [
                {"name": "Elon Musk", "status": "images/future.png", "title" : "future" },
                {"name": "Bill Gates", "status": "images/future.png", "title" : "future" },
                {"name": "Satya Nadella", "status": "images/future.png", "title" : "future" },
                {"name": "Tristan Walker", "status": "images/future.png", "title" : "future" },
                {"name": "Jeff Bezos", "status": "images/future.png", "title" : "future" },
                {"name": "Gayle Laakmann McDowell", "status": "images/future.png", "title" : "future" },
                {"name": "Paul Graham", "status": "images/future.png", "title" : "future" },
              ]

}])
