import { useState } from "react"
import ChristmasIcon from "./ChristmasIcon"
import TrashIcon from "./TrashIcon"

function App() {

  const [gifts, setGifts] = useState<string[]>(["Fernet", "Vitel Tone", "Coca"])
  const [giftName, setGiftName] = useState<string>("")

  const handleSubmitGift = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!giftName) return
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
    <div className="App min-h-screen grid place-items-center bg-[url('./assets/christmas-bg.webp')]">
      <div className="bg-red-800 p-8 rounded-md max-w-sm w-full">
        <form onSubmit={handleSubmitGift} className='flex items-end'>
          <div className="flex flex-col">
            <label htmlFor="next-gift" className="font-bold">Add a new gift!</label>
            <input 
              onChange={(e) => setGiftName(e.target.value)}
              value={giftName}
              type="text" 
              id="next-gift" 
              className="bg-green-900 rounded-md py-1 px-4"
            />
          </div>
          <input type="submit" className="ml-6 bg-green-900 px-3 py-1 rounded-md cursor-pointer hover:bg-green-800 transition-colors font-bold" value={"Add!"} /> 
        </form>
        <ul className="my-4 min-h-[170px]">
          {
            gifts.length ? 
            <Heading text="Your Gifts:" styles="font-bold text-2xl mt-4 mb-2" />
            :
            <Heading text="No gifts! Add a new one." styles="font-bold text-2xl mt-4 text-center" />
          }
          {
            gifts.map(gift => {
              return(
                <li key={gift} className="flex items-center font-bold">
                  <ChristmasIcon />
                  <p className="ml-10 flex-grow">{gift}</p>
                  <button onClick={() => deleteGift(gift)}>
                    <TrashIcon />
                  </button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={deleteAllGifts} className="w-full bg-green-900 hover:bg-green-800 transition-colors py-2 rounded-md font-bold text-lg">
          Delete All Gifts!
        </button>
      </div>
    </div>
  )
}

interface HeadingProps {
  text: string,
  styles?: string
}

const Heading = ({text, styles}: HeadingProps) => {
  return(
    <h2 className={styles}>{text}</h2>
  )
}

export default App
