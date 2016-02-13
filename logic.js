// A $( document ).ready() block.
$( document ).ready(function() {
    $('#songframe').attr('src','https://open.spotify.com/embed?uri=spotify:track:4th1RQAelzqgY7wL53UGQt');
    $('#songframe').on('load',function () {
        //play the song after load
        $('#songframe')[0].contentWindow.$('#play-button').click();
    });
});
