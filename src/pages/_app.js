import NavLater from 'components/NavLater'
import '../styles/style.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className='containerApp'>
      <NavLater />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}