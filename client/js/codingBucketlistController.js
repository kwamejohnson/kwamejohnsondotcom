app.controller('codingBucketlistController', ['$scope', function($scope){

console.log("in codingBucketlistController");

$scope.read = [
                { "title" : "Clean Code by Robert C. Martin","status" : "images/inprog.png"},
                { "title" : "Programming Pearls by Jon Bentley", "status": "images/future.png"},
                { "title" : "The Innovators by Walter Isaacson", "status": "images/check3.png"},
                { "title" : "Cracking the Coding Interview by Gayle Laakmann McDowell" ,"status" : "images/inprog.png"},
                { "title" : "Soft Skills by John Sonmez","status" : "images/inprog.png"},
                { "title" : "Zero Bugs and Program Faster by Kate Thompson","status" : "images/future.png"},
                { "title" : "Code Complete by Steve McConnell","status" : "images/future.png"},
                { "title" : "The Pragmatic Programmer by Hunt & Thomas","status" : "images/future.png"},
                { "title" : "Refactoring/xUnit Test Patterns by Gerard Meszaros","status" : "images/future.png"}
              ]

$scope.learn = [
                {"title": "Full-Stack JavaScript", "status": "images/check3.png"},
                {"title": "Python", "status": "images/check3.png"},
                {"title": "Swift/iOS Development", "status": "images/check3.png"},
                {"title": "Ruby Fundamentals", "status": "images/check3.png"},
                {"title": "C#", "status": "images/check3.png"},
                {"title": "Perl", "status": "images/future.png"},
                {"title": "Machine Learning", "status": "images/inprog.png"},
                {"title": "D3", "status": "images/check3.png"},
                ]

$scope.go = [
                {"title": "TechCrunch Disrupt", "status": "images/future.png"},
                {"title": "Apple Worldwide Developers Conference", "status": "images/future.png"},
                {"title": "Geekwire Summit", "status": "images/future.png"},
                {"title": "Web Summit", "status": "images/future.png"},
                {"title": "TED Conference", "status": "images/future.png"},
                {"title": "Microsoft Build", "status": "images/future.png"},
                {"title": "WSJ Digital Live", "status": "images/future.png"},
            ]

$scope.meet = [
                {"title": "Elon Musk", "status": "images/future.png"},
                {"title": "Bill Gates", "status": "images/future.png"},
                {"title": "Satya Nadella", "status": "images/future.png"},
                {"title": "Tristan Walker", "status": "images/future.png"},
                {"title": "Jeff Bezos", "status": "images/future.png"},
                {"title": "Gayle Laakmann McDowell", "status": "images/future.png"},
                {"title": "Paul Graham", "status": "images/future.png"},
              ]

}])
