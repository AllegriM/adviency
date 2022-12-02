import { useState } from "react"
import ChristmasIcon from "./ChristmasIcon"

function App() {

  const [gifts, setGifts] = useState<string[]>(["Coca Cola", "Fernet", "Birra"])
  const [giftName, setGiftName] = useState<string>("")

  const handleSubmitGift = (e: React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()
    if(giftName){
      setGifts([...gifts, giftName])
      setGiftName("")
    }
  }

  const deleteGift = (giftSelected: string) => {
    setGifts(gifts.filter(gift => gift !== giftSelected))
  }

  return (
    <div className="App min-h-screen grid place-items-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
      <div className="p-8 text-left max-w-sm rounded-lg bg-orange-100 text-red-700 font-bold">
        <form 
          onSubmit={(e) => handleSubmitGift(e)} 
          className="my-4"
        >
          <label htmlFor="new-gift">Inserte su nuevo regalo!</label>
          <input 
            onChange={(e) => setGiftName(e.target.value)} 
            value={giftName}
            type="text" 
            id="new-gift" 
            className="text-red-700 bg-white p-1 rounded-md"
          />
          <input 
            type={"submit"} 
            value={"Agregalo!"} 
            className="text-red-700 bg-white ml-3 p-1 rounded-md cursor-pointer"
          />
        
        </form>
        <h2 className="text-3xl">Tus Regalos!</h2>
        <ul>
          {
            gifts.map(gift => {
              return(
                <li key={gift} className="flex gap-6 items-center">
                  <ChristmasIcon />
                  <p className="whitespace-nowrap">{gift}</p>
                  <button 
                    onClick={() => deleteGift(gift)} 
                    className="ml-auto text-red-600 hover:text-red-800">X</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
