import React, { useEffect, useState } from "react"

interface Gift {
  name: string
  amount: number
}

function App() {

  const defaultGifts : Gift[] = [{name: "Fernet", amount: 2}, {name: "Coca", amount: 4}, {name: "Hielo" , amount: 1}]

  const [gifts, setGifts] = useState<Gift[]>(() => JSON.parse(localStorage.getItem("gifts")!) || defaultGifts)

  const [newGift, setnewGift] = useState<Gift>({name: "", amount: 1})

  const addGift = (e: React.FormEvent) => {
    e.preventDefault()
    if(!newGift.name || gifts.some(gift => gift.name === newGift.name)){
      console.log("Write a name or gift already added")
      return
    }
    setGifts([...gifts, newGift])
  }
  
  const handleGiftData = (e: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget
    setnewGift({
      ...newGift,
      [name]: value
    })
  }

  const deleteGift = (giftName: Gift["name"]) => {  
    setGifts(gifts.filter(gift => gift.name !== giftName))
  }

  const deleteAllGifts = () => {
    setGifts([])
  }

  useEffect(() => {
    return localStorage.setItem('gifts', JSON.stringify(gifts))
  }, [gifts])

  return (
    <div className="App min-h-screen font-bold grid place-items-center bg-red-900">
      <div className="bg-green-900 p-6 rounded-md">
        <form onSubmit={addGift}>
          <div className="">
            <label className="block" htmlFor="giftName">Nombre del regalo</label>
            <input onChange={handleGiftData} type="text" name="name" id="giftName" className="px-2" />
            <input onChange={handleGiftData} type="number" name="amount" min={1} className="w-14 ml-4 pl-3" />
          </div>
          <button className="w-full bg-red-900 mt-3 py-1 rounded-md">Agregar regalo🎁</button>
        </form>
        {
          gifts.length ?
          <h2 className="text-2xl mt-4">Your Gifts ({gifts.length}): </h2> 
          :
          <h2 className="text-4xl text-center my-16">No Gifts 😖</h2>
        }
        <ul>
          {
            gifts.map(gift => {
              return(
                <li className="flex gap-4 px-4 my-4 items-center" key={gift.name}>
                  <span className="text-xl">🎄</span>
                  <p className="flex-grow">{gift.name} ({gift.amount})</p>
                  <button onClick={() => deleteGift(gift.name)} className="text-xl">🗑</button>
                </li>
              )
            })
          }
        </ul>
        <button className="w-full bg-red-900 py-2 rounded-md" onClick={deleteAllGifts}>
          Delete all gifts!😈
        </button>
      </div>
    </div>
  )
}

export default App
