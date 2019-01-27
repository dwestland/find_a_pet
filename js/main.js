import fetchJsonp from  'fetch-jsonp'
import apiConfig from './apiKeys';

const petfinderApiKey = apiConfig.PETFINDER_API_KEY

const petForm = document.querySelector('#pet-form')

petForm.addEventListener('submit', fetchAnimals)

// Fetch Animals From API
function fetchAnimals(e) {
  e.preventDefault()

  // Get User Input
  const animal = document.querySelector('#animal').value
  const zip = document.querySelector('#zip').value

  // Fetch Pets
  fetchJsonp(
    `http://api.petfinder.com/pet.find?format=json&key=${petfinderApiKey}&animl=${animal}&location=${zip}&callback=callback`,
    {
      jsonpCallbackFunction: 'callback'
    }
  )
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}
