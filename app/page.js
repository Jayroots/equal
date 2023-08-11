import Geoloc from "./[components]/Geoloc"
import GetTopCitiesNquality from "./[components]/GetTopCitiesNquality"

export default function Home() {

  return (
    <main className="">
     
     <header className='relative'> 


          <img className='h-1/2' src='fond-texture-eau.jpg' alt='image d acceuil E qual'></img>


          <div className='flex justify-start content-center absolute top-10 left-10'> 
            <img className='w-2/5 hover:scale-105 ' src='gif-eau.png' alt='gif eau robinet geant'/>
          </div>


          <div className=" opacity-80 w-2/5 absolute top-10 right-10 bg-sky-400 rounded-lg shadow-md hover:bg-sky-300 text-white p-5"> 
            <h1 className="text-center text-3xl">Hey l'eau !</h1>
            <br/>
            <p className="text-2xl text-center ">Bienvenue sur le site national analysant la qualité de l'eau 
              de votre ville 😊
              <br/>
              Par un simple clic, retrouvez les résultats de la conformité des
              prélèvements 
              <br/>sur les dernières années.
            </p>
          </div>
        </header>

<Geoloc/>
<GetTopCitiesNquality/>

    </main>
  )
}
