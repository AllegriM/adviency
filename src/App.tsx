
function App() {
  const regalos : string[] = ["Medias", "Zapatillas", "Teclado"]

  return (
    <div className="App">
      <h2>Regalos</h2>
      <ul>
        {
          regalos.map(regalo => {
            return(
              <li key={regalo}>
                {regalo}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
