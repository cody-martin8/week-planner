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

$entryForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.target);
  var plannerEntry = {};
  plannerEntry.time = $entryForm.elements.time.value;
  plannerEntry.day = $entryForm.elements.day.value;
  plannerEntry.description = $entryForm.elements.description.value;
  plannerEntry.entryId = data.nextEntryId;
  data.nextEntryId++;
  // console.log(plannerEntry)
  data.entries.unshift(plannerEntry);
  // console.log(data.entries);
});

// $mondayButton = document.querySelector('.monday');
// $tuesdayButton = document.querySelector('.tuesday');
// $wednesdayButton = document.querySelector('.wednesday');
// $thursdayButton = document.querySelector('.thursday');
// $fridayButton = document.querySelector('.friday');
// $saturdayButton = document.querySelector('.saturday');
// $sundayButton = document.querySelector('.sunday');

// function changeTable {

// }

// $mondayButton.addEventListener('click', changeTable)
