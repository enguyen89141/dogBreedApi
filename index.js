'use strict'

function getDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(responseJson => 
        populateBreedsList(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }

  function displayResults() {
    fetch('https://dog.ceo/api/breed/' + $('.breed').val() + '/images/random')
      .then(response => response.json())
      .then(responseJson => 
        $('.results').append('<img src="' + responseJson.message + '" class = "results-img">'))
      .catch(error => alert('Something went wrong. Try again later.'));
      $('.results').removeClass('hidden');
        
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('.results').empty();
    displayResults();
})}
function populateBreedsList(responseJson) {
  let breedsList = responseJson.message
  for (let breed in breedsList) {
    $('.breed').append('<option value="' + breed + '">' + breed +'</option>')
    console.log(breed)
  }
}
watchForm();
getDogBreeds();