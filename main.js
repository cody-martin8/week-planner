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
// time, description, day of the week,

var $addEntryButton = document.querySelector('.button.add-entry');

var $submitButton = document.querySelector('.button.submit');

var $modal = document.getElementById('modal');

$addEntryButton.addEventListener('click', function addEntry() {
  $modal.className = 'row';
});

$submitButton.addEventListener('click', function submitEntry() {
  $modal.className = 'row hidden';
});

var $entryForm = document.getElementById('entry-form');
console.log($entryForm);
$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var plannerEntry = {};
  plannerEntry.time =
  plannerEntry.day =
  plannerEntry.description =
});
