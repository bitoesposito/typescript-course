import axios from 'axios'

const form = document.querySelector('form')
const addressInput = document.getElementById('address') as HTMLInputElement
const mapElement = document.getElementById('map') as HTMLDivElement

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
script.async = true;
document.head.appendChild(script);

type GoogleGeocodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number
        lng: number
      }
    }
  }[];
  status: 'OK' | 'ZERO_RESULTS' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'INVALID_REQUEST' | 'UNKNOWN_ERROR'
}

function searchAddressHandler(event: Event) {
  event.preventDefault()
  const enteredAddress = addressInput.value

  axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${apiKey}`)
    .then(response => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location!')
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(mapElement, {
        center: coordinates,
        zoom: 8
      })
      new google.maps.Marker({
        position: coordinates,
        map: map
      })
    })
    .catch(err => {
      alert(err.message);
      console.log(err)
    })
}

form?.addEventListener('submit', searchAddressHandler)