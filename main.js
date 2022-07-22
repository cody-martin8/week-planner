// identify button with query selector
// identify the modal div element
// identify submit button
// add event listener for add entry button
// turn off hidden className
// add event listener for submit
// turn on hidden className
// adding the entries
//   identify inputs on add entry page
//   pull data from inputs and add to data.entries as new object

var $addEntryButton = document.querySelector('.button.add-entry');
console.log($addEntryButton);
var $submitButton = document.querySelector('.button.submit');
console.log($submitButton);
var $modal = document.getElementById('modal');
console.log($modal);

$addEntryButton.addEventListener('click', function addEntry() {
  $modal.className = 'row';
});

$submitButton.addEventListener('click', function submitEntry() {
  $modal.className = 'row hidden';
});
