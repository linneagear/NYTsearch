
var searchTerm
var records = 5;
var startYear;
var endYear;


$("#submitBtn").on("click", function(e) {
    e.preventDefault();
    searchTerm = $("#search").val();
    console.log(searchTerm);
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=B3frs3oK6APJnKvG2AppRBN4RAmA2JwA";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })
})



var results = response.docs
// get results to display
for (var i = 0; i < results.length; i++) {
    // for each search, create a div in top Articles div
    var topResultsDiv = $("<div>")
    var p = $("<p>").text(results[i].abstract);
    topResultsDiv.append(p);
    $(".top-Articles").append(topResultsDiv)
}
