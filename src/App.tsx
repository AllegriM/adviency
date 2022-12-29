import React, { useEffect, useState } from "react"

interface Gift {
  name: string
  amount: number
  image: string
}

function App() {

  const defaultGifts : Gift[] = [{name: "Fernet", amount: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Fernetbranca.jpg/399px-Fernetbranca.jpg"}, {name: "Coca", amount: 4, image: "https://thumbs.dreamstime.com/b/frasco-de-coca-cola-con-gotas-agua-aisladas-sobre-fondo-blanco-mosc%C3%BA-rusia-noviembre-165678471.jpg"}, {name: "Hielo" , amount: 1, image: "https://media.istockphoto.com/id/177131518/es/foto/cubos-de-hielo.jpg?s=612x612&w=0&k=20&c=71wDtnaGnZJVXV9NFsU2wl9H6AGbzICa2uiufEUv8nY="}]

  const [gifts, setGifts] = useState<Gift[]>(() => JSON.parse(localStorage.getItem("gifts")!) || defaultGifts)

  const [newGift, setNewGift] = useState<Gift>({name: "", amount: 1, image: ""})

  const addGift = (e: React.FormEvent) => {
    e.preventDefault()
    if(!newGift.name || gifts.some(gift => gift.name === newGift.name)){
      console.log("Write a name or gift already added")
      return
    }
    setGifts([...gifts, newGift])
    setNewGift({
      name: "",
      amount: 1,
      image: ""
    })
  }
  
  const handleGiftData = (e: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget
    setNewGift({
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
          <div className="flex items-baseline mb-2">
            <div>
              <label className="block" htmlFor="giftName">Nombre del regalo</label>
              <input onChange={handleGiftData} value={newGift.name} type="text" name="name" id="giftName" className="px-2 rounded-md" />
            </div>
            <div className="ml-4">
              <label className="block" htmlFor="amount">Amount</label>
              <input onChange={handleGiftData} value={newGift.amount} type="number" id="amount" name="amount" min={1} className="w-28 pl-3 rounded-md" />            
            </div>            
          </div>
          <label htmlFor="image">Imagen</label>
          <input onChange={handleGiftData} value={newGift.image} type="text" id="image" name="image" className="mb-2 w-full px-2 rounded-md" />
          <button className="w-full bg-red-900 py-1 rounded-md">Agregar regalo🎁</button>
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
                  <img src={gift.image} alt={gift.name} className="object-contain w-[100px] h-[100px]" />
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
