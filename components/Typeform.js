import { PopupButton, Widget } from "@typeform/embed-react";
import Image from 'next/image'
import imagen from '../public/vacante.png'



const Typeform = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <PopupButton id="Z8IlcfzU" style={{ fontSize: 20 }} className="my-button bg-gray-900 text-white p-5 rounded-md">
      Aplicar para la vacante
    </PopupButton>
    </div>
  )
}
export default Typeform;