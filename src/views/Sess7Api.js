

// Penggunaan API di React, bisa kita terapkan seperti ini
// Pertama, kita harus buatkan di direktori helper
// Penempatan di helper akan memudahkan kita ketika
// suatu Service (yang saya ajarkan pada Session 10) dan
// Component membutuhkan package yang sama, seperti Axios.

import { useEffect, useState } from 'react'

// Import axios dari helper yang sudah kita buat sebelumnya:
import axios from '../helpers/axios'

// Untuk contoh ini, kita akan memanggil (GET) dari public API

export default function Api(props) {
  useEffect(() => {
    document.title = `Fetch API with Axios and Fetch`
  }, [])

  // Kita taruh di dalam state
  const [ newsData, setNewsData ] = useState([])
  let [ status, setStatus ] = useState("loading")

  // Jika ingin menggunakan async-await,
  // kita harus bungkus ke dalam async function,
  // untuk mencegah race condition.
  // 
  // * Note: async function ini akan me-return Promise
  useEffect(() => {
    async function fetchNews(){
      // Bonus - Notifikasi jika jaringan lambat/server sibuk
      let timeoutGet = window.setTimeout(() => {
        alert("Tunggu sebentar ya... masih sedang loading.")
      }, 1000)

      // Untuk menembak API, kita bisa gunakan try-catch-finally
      // try     -> akan "mencoba" untuk menjalankan kode
      try {
        const url = 'https://test.spaceflightnewsapi.net/api/v2/articles'
        const { data } = await axios.get(url)
        
        setNewsData(data)
      // catch   -> akan "menangkap" error ketika proses try gagal
      } catch(error) {
        alert(error)
        
        console.log(error)
      // finally -> akan berjalan bagaimanapun hasilnya (berhasil/error)
      } finally {
        window.clearTimeout(timeoutGet)

        setStatus("done")
      }
    }

    // Kemudian kita panggil seperti ini
    fetchNews()
  }, [])

  // Untuk mengirimkan data ke server (misalkan untuk membuat data baru)
  // kita bisa gunakan method POST di Axios seperti ini

  // * Note: saya gunakan Promise untuk contoh ini,
  // *       dan function ini harus di-hook ke sebuah event handler,
  // *       misal onClick atau onChange

  // function handleSubmit(data){
  //   axios.post('https://endpoint.ke.com/path/apa', data, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  //   .finally(() => {
  //     alert("Fungsi selesai dijalankan")
  //   })
  // }

  return (
    <>
      {
        // Untuk dapat memberikan impresi ke user bahwa konten sedang loading,
        // kita bisa gunakan ternary operator seperti ini, lalu manfaatkan
        // State 'status' yang sudah kita buat sebelumnya.

        // Ini hanya salah satu cara kita bisa tampilkan indikator loading,
        // dan indikator loading-nya bisa disesuaikan dengan kebutuhan ketika
        // mengerjakan project nantinya.
      
        status === 'loading' ?
        (<>
          <h2 style={{ marginBottom: "1em" }}>Loading...</h2>
        </>) :
        (<>
          <h2 style={{ marginBottom: "1em" }}>Berita antariksa hari ini</h2>

          <div style={{ display: "flex", flexShrink: 0, flexWrap: "wrap", justifyContent: "center" }}>
            {
              newsData.map(news => (
                /*
                  Untuk looping seperti ini, tambahkan attribute key yang diisi
                  dengan ID dari row yang sudah kita fetch.

                  Hal ini bertujuan agar React bisa me-monitor setiap perubahan
                  yang ada.

                  Selengkapnya ada di sini:
                  https://reactjs.org/docs/lists-and-keys.html#keys
                */

                <div key={news.id} style={{ width: "calc(100% / 4)" }}>
                  <a href={ news.url }><h3>{ news.title }</h3></a>
                  <p>{ news.summary }</p>
                </div>
              ))
            }
          </div>
        </>)
      }
    </>
  )
}