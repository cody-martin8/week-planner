var data = {
  view: 'entry-form',
  entries: [],
  // entriesMonday: [],
  // entriesTuesday: [],
  // entriesWednesday: [],
  // entriesThursday: [],
  // entriesFriday: [],
  // entriesSaturday: [],
  // entriesSunday: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('planner-local-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function beforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('planner-local-storage', dataJSON);
});
