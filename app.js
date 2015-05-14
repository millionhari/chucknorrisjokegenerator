$(document).ready(function(){
  $('.btn-click').click("click", function(){
    $.ajax({
      'url': 'http://api.icndb.com/jokes/random/',
      'type': 'GET',
      'success': function(data){
        $('.jokes').text(_.unescape(data.value.joke));
      },
      'error': function(err){
        console.log('error', err);
      }
    });
  });  
});

