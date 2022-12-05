import { useState } from "react"
import ChristmasIcon from "./ChristmasIcon"
import TrashIcon from "./TrashIcon"

function App() {

  const [gifts, setGifts] = useState<string[]>(["Fernet", "Copa del Mundo", "Birra"])

  const [giftName, setGiftName] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!giftName) return
    setGifts([...gifts, giftName])
    setGiftName("")
  }

  const deleteGift = (giftName: string) => {
    setGifts(gifts.filter(gift => gift !== giftName))
  } 

  const deleteAllGifts = () => {
    setGifts([])
  }

  return (
    <div className={`App min-h-screen grid place-items-center bg-[url(./assets/christmas-bg.webp)]`}>
      <div className="bg-red-900 max-w-md p-6 text-start rounded-md">
        <form onSubmit={handleSubmit} className="flex items-end">
          <div className="font-bold text-white flex flex-col">
            <label htmlFor="new-gift">Your new gift...</label>
            <input 
              value={giftName} 
              onChange={(e) => setGiftName(e.target.value)} 
              type="text" 
              id="new-gift" 
              className="bg-green-900 rounded-md py-1 px-42"
            />
          </div>
          <input type="submit" className="bg-green-900 font-bold px-2 py-1 rounded-md ml-3" />
        </form>
        <ul className="my-6">
          {
            gifts.length ?
            <h2 className="font-bold text-3xl mb-4">My gifts:</h2>
            :
            <h2 className="font-bold text-3xl mb-4">No gifts!</h2>
          }
          {
            gifts.map(gift => {
              return(
                <li key={gift} className="flex items-center font-bold">
                  <ChristmasIcon />
                  <span className="flex-grow ml-8">{gift}</span>
                  <button onClick={() => deleteGift(gift)}>
                    <TrashIcon />
                  </button>
                </li>
              )
            })
          }
        </ul>
        <button 
          onClick={deleteAllGifts}
          className="bg-green-900 font-bold py-1 w-full rounded-md"
        >
          Delete All!
        </button>
      </div>
    </div>
  )
}

export default App
