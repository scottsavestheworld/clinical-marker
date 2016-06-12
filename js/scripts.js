
var subject;
document.addEventListener("DOMContentLoaded", function () {
    $$.addDocumentEvents();
    $$.createSubjects();
});

var $$ = {};

$$.addDocumentEvents = function () {
    document.onkeydown = function (e) {
        if (e.keyCode === 8) {
            var markerMenu = document.querySelector("#marker-menu");
            if (markerMenu) {
                var subjectModel = markerMenu.model;
                subjectModel.removeMarker(markerMenu.marker);
                subjectModel.save();
                e.preventDefault();
            }
        };
    };

    document.getElementById("previous-subject").onclick = function () { $$.nextSubject("previous"); };
    document.getElementById("next-subject").onclick = function () { $$.nextSubject() };
};

$$.createSubjects = function () {
    var subjectData = $$.subjectData, subject;
    for (subject in subjectData) {
        session.subjects.push(new Subject(subjectData[subject]));
    }
    session.subjects[0].loadSubject();
};

$$.nextSubject = function (direction) {
    var next = session.loadedSubject + 1, reset = 0;
    if (direction === "previous") { next = session.loadedSubject - 1; reset = session.subjects.length - 1};
    if (!session.subjects[next]) {
        next = reset;
    }
    session.loadedSubject = next;
    session.subjects[next].loadSubject();
};

$$.removeMarkerMenu = function () {
    var markerMenu = document.getElementById("marker-menu");
    if (markerMenu) { markerMenu.parentElement.removeChild(markerMenu); }  
};

$$.subjectData = [
    {
        id: "subject1",
        name: "Tony Stark",
        markers: {"1465707308280":{"id":1465707308280,"type":"inflammatory","top":"54.18263372596112%","left":"48.531619192258105%"},"1465707309848":{"id":1465707309848,"type":"inflammatory","top":"51.357126459109615%","left":"48.98370035495435%"},"1465707311048":{"id":1465707311048,"type":"inflammatory","top":"48.87068006428029%","left":"49.209740936302474%"},"1465707318696":{"id":1465707318696,"type":"inflammatory","top":"55.31283663270171%","left":"31.80461617249722%"},"1465707320144":{"id":1465707320144,"type":"inflammatory","top":"57.91230331820509%","left":"34.06502198597842%"},"1465707327623":{"id":1465707327623,"type":"inflammatory","top":"58.59042506224945%","left":"36.32542779945962%"},"1465707329304":{"id":1465707329304,"type":"inflammatory","top":"58.364384480901336%","left":"39.15093506631112%"}}
    },
    {
        id: "subject2",
        name: "Bruce Banner"
    },
    {
        id: "subject3",
        name: "Natasha Romanova",
        markers: {"1465708785980":{"id":1465708785980,"type":"noninflammatory","top":"62.32009465449344%","left":"40.394158263725785%"}}
    }
    
]