// Untuk membuat sebuah state, kita bisa menggunakan useState
// useState() ini akan mengembalikan sebuah array:
// array index ke-0 akan mengembalikan variable untuk state, dan
// array index ke-1 akan mengembalikan function untuk mengubah
// state tersebut

// useState bisa kita import dari package 'react' seperti ini
import { useEffect, useState } from "react"

export default function State() {
  useEffect(() => {
    document.title = `Home`
  }, [])
  
  // Lalu, kita bisa declare variable seperti ini, dengan value hasil return dari useState()

  // Hint: gunakan set[NamaState] untuk memudahkan development
  const [ nama, setNama ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ umur, setUmur ] = useState("") // Untuk angka bisa juga gunakan string kosong ""

  // Note: kita harus mengisi nilai default-nya sebagai parameter.
  //       Hal ini bertujuan untuk mencegah warning seperti di bawah ini di console browser:

  // ! ---

  // Warning: A component is changing an uncontrolled input to be controlled.
  // This is likely caused by the value changing from undefined to a defined
  // value, which should not happen.

  // ! ---

  // Untuk meng-update sebuah state, kita bisa gunakan function
  // set[NamaState] di atas untuk mengubah state.

  // Perlu diingat, nilai dari State yang kita simpan ini akan hilang
  // ketika kita refresh ataupun pindah ke halaman lain dalam aplikasi ini

  return (<>
    <table
      border="1"
      cellPadding="4"
      style={{ margin: "0 auto", marginBottom: "2em" }}
    >
      <thead>
        <tr>
          <th>Nama</th>
          <th>Email</th>
          <th>Umur</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ nama }</td>
          <td>{ email }</td>
          <td>{ umur }</td>
        </tr>
      </tbody>
    </table>
    
    <h4>Ubah state di atas dengan input berikut</h4>

    {
      /*
        gunakan event seperti onChange dengan parameter event
        untuk memanggil set[NamaState] seperti di bawah
      */
    }

    <div style={{
      margin: "2em auto",
      display: "grid",
      gridTemplateRows: "repeat(2, 1fr)",
      gap: "1em",
      gridAutoFlow: "column"
    }}>
      <h5>Nama</h5>
      <input
        type="text"
        value={ nama }
        onChange={event => setNama(event.target.value)}
      />
      
      <h5>Email</h5>
      <input
        type="text"
        value={ email }
        onChange={event => setEmail(event.target.value)}
      />

      <h5>Umur</h5>
      <input
        type="number"
        value={ umur }
        onChange={event => setUmur(event.target.value)}
      />
    </div>

    <h4>Dan perhatikan bahwa konten di table di atas akan berubah...</h4>

    {/* inilah yang disebut dengan stateful component! */}
  </>)
}