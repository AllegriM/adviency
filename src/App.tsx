import { useState } from "react"

function App() {

  const [gifts, setGifts] = useState<string[]>(["Fernet", "Birra", "Coca"])

  const [newGift, setNewGift] = useState<string>("")

  const handleSubmitGift = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if(newGift) setGifts([...gifts, newGift])
    setNewGift("")
  }

  return (
    <div className="App bg-gradient-to-tr from-red-500 to-green-500 min-h-screen grid">
      <div className="max-w-sm m-auto bg-red-600 p-8 rounded-md text-left">
        <form action="" className="mb-4 gap-1">
          <label htmlFor="gift" className="font-bold">Agrega un regalo</label>
          <input 
            onChange={(e) => setNewGift(e.target.value)} 
            value={newGift}
            type="text" 
            name="gift" 
            id="gift" 
            placeholder="New gift" 
            className="bg-white p-1 px-2 rounded-md text-black"/>
          <button 
            onClick={(e) => handleSubmitGift(e)} 
            className="ml-2 text-rose-500 font-bold bg-white p-1 px-2 rounded-md">
            Agregalo!
          </button>
        </form>
        <h2 className="text-left font-bold text-2xl">Tus regalos:</h2>
        <ul>
          {
            gifts.map(gift => {
              return(
                <li key={gift} className="text-left flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 13.0002H5C4.44803 13.0006 4.00031 12.5534 4 12.0014C4 12.001 4 12.0006 4 12.0002V11.0002C4.00181 9.34413 5.34389 8.00205 7 8.00024H19C20.6561 8.00205 21.9982 9.34413 22 11.0002V12.0002C22.0003 12.5522 21.5531 12.9999 21.0011 13.0002C21.0008 13.0002 21.0004 13.0002 21 13.0002Z" fill="#E9F8FE"></path>
                    <path d="M6 13.0004V19.0004C6.00183 20.6565 7.34387 21.9985 9 22.0004H17C18.6561 21.9985 19.9982 20.6565 20 19.0004V13.0004H6Z" fill="#B0E8FD"></path>
                    <path d="M15.5 2.00024C14.5579 2.00064 13.656 2.38242 13 3.05859C11.6503 1.67662 9.43577 1.6505 8.05381 3.00024C6.67185 4.34998 6.64572 6.56447 7.99546 7.94643C8.65417 8.62087 9.55725 9.00085 10.5 9.00024H12V22.0002H14V9.00024H15.5C17.433 9.00024 19 7.43324 19 5.50024C19 3.56724 17.433 2.00024 15.5 2.00024ZM9 5.50024C9 4.67181 9.67157 4.00024 10.5 4.00024C11.3284 4.00024 12 4.67181 12 5.50024V7.00024H10.5C9.67195 6.99934 9.0009 6.32829 9 5.50024ZM15.5 7.00024H14V5.50024C14 4.67181 14.6716 4.00024 15.5 4.00024C16.3284 4.00024 17 4.67181 17 5.50024C17 6.32867 16.3284 7.00024 15.5 7.00024Z" fill="#00C6FF"></path>
                  </svg> 
                  <p className="mt-[3px]">{gift}</p>                 
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
