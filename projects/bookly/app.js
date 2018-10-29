var allBooks = [
	{ 
		name: 'The Lord of the Rings Trilogy'
	},
	{
		name: 'A Game of Thrones'
	},
	{
	 	name: 'To Kill a Mockingbird'
	},
	{
		name: 'The Little Prince',
	}
];

var currentBooks = allBooks;

var forHide = document.getElementById("hide");
var ulElement = document.querySelector("ul");



//for hiding the books

function hideBooks(){
	forHide.addEventListener("click" , event => {
	if(forHide.checked == true){
		ulElement.style.display = "none";
	}else{
		ulElement.style.display = "block";
	}

});
}
hideBooks();

//add events on the button of delete and remove book

let deleteBooks = function() {
	var deleteBook = document.querySelectorAll(".delete");
	
	deleteBook.forEach(function(item) {
		item.addEventListener("click" , event => {
			
			var index = event.target.dataset.index;
			allBooks.splice(index, 1);
			renderExistingBooks();
		})
	})
}

// Render all existing Books

function renderExistingBooks() {
	var	 allBooks = '';
	for(var i = 0; i < currentBooks.length; i++) {
		allBooks +=  `<li>
  			<span class="name">${currentBooks[i].name}</span>
  			<span class="delete" data-index="${i}">delete</span>
  		</li>`
	}
	ulElement.innerHTML = allBooks;
	deleteBooks();
}

renderExistingBooks();


	
//add eventlistener on the Add button


function addBook(){
var btn = document.querySelector("button");

btn.addEventListener("click" , event => {
	// console.log(event)
	event.preventDefault();
 	var bookInput = document.getElementById("bookInput");

	allBooks.push({
		name: bookInput.value
	});
	renderExistingBooks();

})

}
addBook();





//search

var searchArea = document.getElementById("searchArea");

searchArea.addEventListener('keyup', (event) => {
	event.preventDefault();
	var value = event.target.value.toLowerCase();

	var filterBooks = [];
	for(var i = 0; i < allBooks.length; i++) {
		const bookName = allBooks[i].name.toLowerCase();
		if (bookName.includes(value)) {
			filterBooks.push(allBooks[i]);
		}
	}

	currentBooks = filterBooks;
	renderExistingBooks();
})


