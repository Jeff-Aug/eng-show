import artistas from "../data/items.json"
import './home.css'



export function Home() {
  return (
    <>
      <div className="container">
        <div className="lista-filmes">
          {artistas.map((artista) => {
            return (

              <article key={artista.id} >
                <strong> {artista.name} </strong>
                <img className="image" src={artista.imgUrl} alt={artista.name} />
              </article>
            )
          })}
        </div>
      </div>

    </>
  )
}
