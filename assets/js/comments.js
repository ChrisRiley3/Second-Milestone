// https://www.youtube.com/watch?v=ws6yQ4yKNG0&t=515s this code came from this source 
function render(data) {
  var html ='<div class="comment-box"><div class="comment-panel"><span>'+data.name+'</span><div class="date">'+data.date +'</div><p>'+data.body+'</p></div></div>';
  $('#myContainer').append(html);
}

$(document).ready(function() {

    var comment = [];

    if(!localStorage.commentData) {
        localStorage.commentData = [];
    } else {
        comment = JSON.parse(localStorage.commentData);
    }

    for (var i = 0; i < comment.length; i++) {
        render(comment[i]);
  }

  $('#addComment').click(function(){
    var addObj = {
        'name': $('#name').val(),
        'date': $('#date').val(),
        'body': $('#bodyText').val()
    };
    comment.push(addObj);
    localStorage.commentData = JSON.stringify(comment);
    render(addObj);
    $('#name').val('');
    $('#date').val('dd/mm/yyyy');
    $('#bodyText').val('');
  });
});
