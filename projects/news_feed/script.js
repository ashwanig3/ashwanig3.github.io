// when page loads check for localStorage newsItems
var savedNewsItems = localStorage.getItem('newsItems');

// get that newsItems and parse it, convert it to array

// display the content of localStorage into the preview box
var arrayOfNewsItems = [];

if (savedNewsItems) {
    var parsedItems = JSON.parse(savedNewsItems);
    display(parsedItems);
    arrayOfNewsItems = parsedItems;
}


// clicking on submit button, add event listener,
// select the add button
var addBtn = document.getElementById('addBtn');

// add event listnere on the addBtn
addBtn.addEventListener('click', function(e) {
    // Get input value of heading and description
    var heading = document.getElementById('heading').value;
    var description = document.getElementById('description').value;

    // make a single item using objects having two properties i.e. heading and description
    var newsItem = {
        heading: heading,
        description: description
    };

    // add the newsItem into arrayOfNewsItems
    arrayOfNewsItems.push(newsItem);

    // save it to the localStorage
    localStorage.setItem('newsItems', JSON.stringify(arrayOfNewsItems));

    // display
    display(arrayOfNewsItems);

    document.getElementById('heading').value = "";
    document.getElementById('description').value = "";
});


// expects an array
// loops over the array 
// builds a string of headinigs
// displays it to preview box by innerHTML
function display(arrayOfNewsItems) {
    var stringOfHeading = '';

    var feed = document.getElementById('feed');

    arrayOfNewsItems.forEach(function(item, i) {
        stringOfHeading = stringOfHeading +`<h2 class="news-item-heading"><span class="news_number">${i+1}.</span><a href="/news/?id=${i}" class="news_link">${item.heading}</a></h2>`
    });

    feed.innerHTML = stringOfHeading;
}




