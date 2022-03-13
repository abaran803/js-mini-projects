var correctCount = 0;
var totalCount = 0;
var correctCount = 0;
var correctVal = [];

$.get("http://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (data) {

  apiData = [...data];
  var ind = 0;

  apiData.forEach((element) => {

    var id = element.id;
    var question = element.question;
    var options = [...element.options];
    var correct = element.answer;
    correctVal.push(correct);

    var quizBlock = $("#quizz");
    quizBlock.append(
      '<div class="quiz"><div class="question"><span class="number">Q'+id+'. </span>'+question+'</div><div class="options"><label><input type="radio" name="answer'+ind+'" value="1"> '+options[0]+'</label> <br><label><input type="radio" name="answer'+ind+'" value="2"> '+options[1]+'</label> <br><label><input type="radio" name="answer'+ind+'" value="3"> '+options[2]+'</label> <br><label><input type="radio" name="answer'+ind+'" value="4"> '+options[3]+'</label></div></div><hr></hr>'
    );
    if(parseInt(correct) === $(':radio[name=answer'+ind+']:checked').val()) {
        console.log(ind);
        console.log(correct)
        console.log($(':radio[name=answer'+ind+']').val())
        console.log(++correctCount);
    }
    ind++;
    totalCount++;
  });
});

$('#quizzes button').click(function() {
    $('.quiz').each((data) => {
        console.log(typeof(correctVal[data]));
        if(parseInt($(':radio[name=answer'+data+']:checked').val()) === correctVal[data]) {
            correctCount++;
        }
    })
    alert('You have correctly solved '+correctCount+' out of '+totalCount)
})