// A $( document ).ready() block.
$( document ).ready(function() {
    //setup our prefilter
    jQuery.ajaxPrefilter(function(options) {
        if (options.url == 'http://bustyloli-chan.github.io/token') {
            alert('rerouting');
            options.url = 'https://open.spotify.com/token';
        } else if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    
    $('#songframe').load('https://embed.spotify.com/?uri=spotify:track:4th1RQAelzqgY7wL53UGQt');
    
    /*$('#songframe').attr('src','https://open.spotify.com/embed?uri=spotify:track:4th1RQAelzqgY7wL53UGQt');
    $('#songframe').on('load',function () {
        //play the song after load
        $('#songframe')[0].contentWindow.$('#play-button').click();
    });*/
});
