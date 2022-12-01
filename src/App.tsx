import { useState } from "react"

function App() {

  const [gifts, setGifts] = useState<string[]>(["Medias", "Botines", "Copa"])

  return (
    <div className="App min-h-screen flex items-center bg-gradient-to-b from-rose-500 via-rose-800 to-green-900 ">
      <div className="bg-white text-neutral-800 min-w-[300px] h-72 m-auto p-6 rounded-md border-dotted border-amber-400 border-8">
        <h2 className="text-4xl font-bold mb-3">Regalos:</h2>
        <ul>
          {
            gifts.map(gift => {
              return(
                <li key={gift}>
                  {gift}
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
