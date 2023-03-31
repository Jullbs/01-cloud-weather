import { toast } from 'react-toastify'

export default function getLocation(setPosition: (position: any) => void) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, showError)
  } else {
    toast.error('Geolocation não é compatível com esse navegador.')
  }

  function showError(error: any) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        toast.warn(
          'O usuário recusou o pedido do Geolocation, favor ir nas configurações de seu navegador e alterar.',
        )
        break
      case error.POSITION_UNAVAILABLE:
        toast.warn('A informação sobre localização está indisponível.')
        break
      case error.TIMEOUT:
        toast.warn(
          'A solicitação para autorizar a localização expirou, favor atualizar a página.',
        )
        break
      case error.UNKNOWN_ERROR:
        toast.warn('Um erro desconhecido ocorreu.')
        break
    }
  }
}
