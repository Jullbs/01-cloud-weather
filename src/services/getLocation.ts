interface GetLocationProps {
  // eslint-disable-next-line no-undef
  setPosition: (position: GeolocationPosition) => void
  // eslint-disable-next-line no-undef
  showError: (error: GeolocationPositionError) => void
  locationNotCompatibleWithBrowser: () => void
}

export default function getLocation({
  setPosition,
  showError,
  locationNotCompatibleWithBrowser,
}: GetLocationProps) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, showError)
  } else {
    locationNotCompatibleWithBrowser()
  }
}
