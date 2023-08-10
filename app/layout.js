import './globals.css'
import Link from 'next/link'


export const metadata = {
  title: 'E Qual, service pour la qualité de l eau en France',
  description: 'E Qual, service pour la qualité de l eau en France',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >



        <nav className='flex flex-row justify-between py-10 '>

<section className='flex flex-row px-10'>
  <img className='w-9' src='goutte.jpg' alt='logo E Qual'></img>
  <Link href="/"> <h1 className='text-4xl px-5' style={{fontFamily:"Ysabeau Office, sans-serif"}} >E Qual</h1> </Link>
</section>




          <ul className='flex flex-row px-5 '>
           <Link href="/" > <li className=' px-5 rounded-lg hover:bg-sky-300 hover:text-white'>Accueil</li> </Link> 
           <Link href="/resultats" > <li className=' px-5 rounded-lg hover:bg-sky-300 hover:text-white'>Résultats</li> </Link>
           <Link href="/partenaires" > <li className=' px-5 rounded-lg hover:bg-sky-300 hover:text-white'>Partenaires</li> </Link> 
           <Link href="/contact" ><li className=' px-5 rounded-lg hover:bg-sky-300 hover:text-white'>Contact</li> </Link> 
          </ul>
        </nav>





        {children}
        </body>
    </html>
  )
}
