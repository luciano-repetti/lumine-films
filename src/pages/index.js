import Head from 'next/head'
import { useEffect, useState } from 'react'
import CardsPagination from '../../components/CardsPagination'


export default function Home({results}) {
  const data = results.results

  const [movies, setMovies] = useState(data)
  const [page, setPage] = useState(1)

  const changePage = (boolean, num) => {
    if(boolean){
      setPage(page + num)
    }else{
      setPage(page - num)
    }
    
  }

  useEffect(() =>{
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "597de7cc5d76799b861b35385e56a10a";
  
    const fetchData = async () => {
      const results = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=es&page=${page}`).then(res => res.json())
      setMovies(results.results)
    }
  
    fetchData()
    console.log(movies)
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  
  }, [page])

  return (
    <>
      <Head>
        <title>Lumine Films | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CardsPagination data={movies} />

      <div className='pagination'>
        {page > 1 ? <button onClick={() => changePage(false, 1)}>Previus</button> : <button>Previus</button>}
        <div>
          {page > 10 ? <button onClick={() => changePage(false, 10)}>{page - 10}</button> : ""}
          {page > 2 ? <button onClick={() => changePage(false, 2)}>{page - 2}</button> : ""}
          {page > 1 ? <button onClick={() => changePage(false, 1)}>{page - 1}</button> : ""}
          <button className='active'>{page}</button>
          {page < 98 ? <button onClick={() => changePage(true, 1)}>{page + 1}</button> : ""}
          {page < 99 ? <button onClick={() => changePage(true, 2)}>{page + 2}</button> : ""}
          {page < 91 ? <button onClick={() => changePage(true, 10)}>{page + 10}</button> : ""}
          
        </div>
        {page < 100 ? <button onClick={() => changePage(true, 1)}>Previus</button> : <button>Previus</button>}

      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "597de7cc5d76799b861b35385e56a10a";

  const results = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=es&page=1`).then(res => res.json())
  // const results = await response.json()

  return {
    props: {
      results
    }, // will be passed to the page component as props
  }
}
