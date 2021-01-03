import picture from "../images/picture.jpg"

export default function Profile () {

  return (
    
    <div class="overflow-hidden shadow-lg rounded-lg relative w-64 ">
        <img alt="profile" src={picture} class="rounded-lg"/>
        <div class="absolute bg-gradient-to-b bg-opacity-60 from-transparent to-black w-full p-4 bottom-0">
            <p class="text-white text-2xl nb-4">
                Étienne LC
            </p>
            <div class="flex justify-between">
              <p class="text-sm text-gray-300 flex items-center">
                Montréal
              </p>
            </div>
        </div>
    </div>

  )
}