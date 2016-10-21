
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


var nytimesURL='http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+city+'&sort=newest&api-key=8af86f8919484763b710244cc768bcd1'
$.getJSON(nytimesURL,function(data){

$nytHeaderElem.text('NEW YORK TIMES ARTICLE'+city);
articles=data.response.docs;
for(var i=0;i<articles.length;i++){
var article=articles[i];
$nytElem.append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>'+article.snippet+'</p>'+'</li>');

};



});



    return false;
};

$('#form-container').submit(loadData);
