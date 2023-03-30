import { toast } from 'react-toastify'

export default function getLocation(setPosition: (position: any) => void) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, showError)
  } else {
    toast.error('Geolocation is not supported by this browser.')
  }

  function showError(error: any) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        toast.warn('User denied the request for Geolocation.')
        break
      case error.POSITION_UNAVAILABLE:
        toast.warn('Location information is unavailable.')
        break
      case error.TIMEOUT:
        toast.warn('The request to get user location timed out.')
        break
      case error.UNKNOWN_ERROR:
        toast.warn('An unknown error occurred.')
        break
    }
  }
}
