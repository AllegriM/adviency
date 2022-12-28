import { useState } from "react"

interface Gifts {
  name: string
  amount: number
}

function App() {

  const [gifts, setGifts] = useState<Gifts[]>([{name: "Fernet", amount: 1}, {name: "Coca-Cola", amount: 1}, {name: "Birra", amount: 2}])
  const [giftInUse, setGiftInUse] = useState<boolean>(false)
  const [newGift, setNewGift] = useState<Gifts>({
    name: "",
    amount: 1
  })

  const handleNewGift = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setNewGift({
      ...newGift, 
      [name]: value
    })
  }

  const addGift = (e: React.FormEvent) => {
    e.preventDefault()
    if(gifts.some(gift => gift.name === newGift.name)) {
      setGiftInUse(true)
      return
    }
    if(newGift.name && newGift.amount){
      setGifts([...gifts, newGift])
    }
    setGiftInUse(false)
  }

  const deleteGift = (giftName : string) => {
    setGifts(gifts.filter(gift => gift.name !== giftName))
  }

  const deleteAllGifts = () => {
    setGifts([])
  }

  return (
    <div className="App min-h-screen grid place-items-center">
      {
        giftInUse ? 
        <span>Gift already added!</span>
        :
        null
      }
      <div className="bg-red-900 max-w-sm p-8 rounded-md">
        <form onSubmit={addGift} className="flex font-bold items-end">
          <div className="mr-2">
            <label htmlFor="new-gift" className="">Add new gift!</label>
            <input 
              placeholder="Enter gift name"
              name="name"
              onChange={handleNewGift}
              value={newGift?.name}
              type="text" 
              id="new-gift" 
              className="bg-green-900 rounded-md py-1 px-2 w-full"
            />
            <input 
              placeholder="Enter gift amount"
              name="amount"
              type="number" 
              className="bg-green-900 rounded-md mt-2 py-1 px-2"
              min={1}
              onChange={handleNewGift} 
            />
          </div>
          <input 
            type="submit" 
            value="Agregar" 
            className="cursor-pointer bg-green-900 hover:bg-green-800 transition-colors px-2 py-1 rounded-md"
          />
        </form>
        <ul className="my-6 min-h-[130px]">
          {
            gifts.length ?
            <h2 className="font-bold text-2xl">Your gifts:</h2>
            :
            <h2 className="font-bold text-2xl text-center">No gifts! Grinch!</h2>
          }
          {
            gifts.map(gift => {
              return(
                <li key={gift.name} className="flex items-baseline my-2">
                  <p className="text-xl">🎁</p>
                  <p className="font-bold flex-grow ml-4">{gift.name} ({gift.amount})</p>
                  <button 
                    onClick={() => deleteGift(gift.name)} 
                    className="text-2xl cursor-pointer text-gray-400 hover:text-gray-300 transition-colors">
                    🗑
                  </button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={deleteAllGifts} className="cursor-pointer w-full py-2 rounded-md font-bold bg-green-900 hover:bg-green-800">
          Delete all gifts!
        </button>
      </div>
    </div>
  )
}

export default App
