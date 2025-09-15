import './App.css'

function App() {

  return (
    <>
      <section className="corner">
        <div className="background"></div>
        <p className="name">iSpotify ®</p>
        <button className="artists" id="button"><img src="src/images/artists-icon.png" id="icon" alt="radio" width="16" height="16" />Artistas</button> <br />
        <button className="liked-songs" id="button"><img src="src/images/favorite-icon.svg" id="icon" alt="heart" width="16" height="16" />Músicas Curtidas</button> <br />
        <button className="mine-account" id="button"><img src="src/images/account.png" id="icon" alt="door" width="16" height="16" />Minha conta</button> <br />
        <button className="logout" id="button"><img src="src/images/logout-icon.svg" id="icon" alt="door" width="16" height="16" />Logout</button> <br />
      </section>

      <section id="main-container">
        <div className="artist-image"></div>
        <p className="artist-type">ARTISTA</p>
        <p className="artist-name">Beatles</p>
        <button className="play-button"></button>
        <img src="src/images/play-button.png" className="playicon"></img>
        <img src="src/images/heart.png" alt="Coração" className="heart"></img>
        <img src="src/images/download.png" alt="Download" className="download"></img>
        <div className="options">...</div>
        <p className="title">#TITULO</p>
        <p className="genero">#GÊNERO</p>
        <img className="relogio" src="src/images/clock.png" alt="Duração"></img>
        <hr className="line"></hr>

        <section className="songs-list">
          <div className="1st-song">
          <p className="number1">1.</p>
          <p className="song1">Hey Jude</p>
          <p className="singer1">Beatles</p>
          <p className="gender1">Rock</p>
          <img src="src/images/heart.png" className="heart1"></img>
          <img className="trash1" src="src/images/trash.png"></img>
          </div>

          <div>
          <p className="number2">2.</p>
          <p className="song2">Let It Be</p>
          <p className="singer2">Beatles</p>
          <p className="gender2">Rock</p>
          <img src="src/images/heart.png" className="heart2"></img>
          <img className="trash2" src="src/images/trash.png"></img>
          
          </div>

        </section>

      </section>
    </>
  )
}

export default App
