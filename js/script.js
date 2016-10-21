
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
var add=$("#street").val();
var city=$("#city").val();
 $greeting.text("So,you wann a live in"+city);
$body.append('<img class="bgimg">');
$('.bgimg').attr("src","http://maps.googleapis.com/maps/api/streetview?size=600x400&location="+add+", "+city);






    return false;
};

$('#form-container').submit(loadData);
