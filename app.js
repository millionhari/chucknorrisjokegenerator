$(document).ready(function(){

  var getRandomInt = function(min, max){
    return Math.floor(Math.random()*(max - min)) + min;
  };

  $('.btn-get').click("click", function(){
    $.ajax({
      'url': 'http://localhost:8080/api/jokes/',
      'type': 'GET',
      'dataType': 'json',
      'success': function(data){
        $('.jokes').text(_.unescape(data[getRandomInt(0, data.length)].line));
      },
      'error': function(err){
        console.log('error', err);
      }
    });
  });


});

