var jsQuiz = [
    {
        quest: 1,
        answers: ["A", "B", "C", "D"],
        right: ["B"],
    },
    {
        quest: 2,
        answers: ["A", "B", "C", "D"],
        right: ["B"],
    },
    {
        quest: 3,
        answers: ["A", "B", "C", "D"],
        right: ["B"],
    },
    {
        quest: 4,
        answers: ["A", "B", "C", "D"],
        right: ["B"],
    },
    {   quest: 5,
        answers: ["A", "B", "C", "D"],
        right: ["B"],
    },]

    for (var i = 0; i < jsQuiz.length; i++) {
            document.write(jsQuiz[i].quest + "<br />");
      
            for (var j = 0; j < jsQuiz[i].answers.length; j++) {
              document.write("<input type=radio id=myRadio name=radAnswer>" + jsQuiz[i].answers[j] + "<br />");
    }
}
