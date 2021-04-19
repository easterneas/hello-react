// Session 6: Stateful vs Stateless components

import { useEffect } from "react"

// Component bisa menerima props yang "dilempar"
// dari Component di atasnya

// Namun, props ini tidak membuat sebuah Component
// menjadi stateful, karena Component hanya
// menerima data dari Component luar, menjadikan
// props "sumber data" untuk Component ini.

// Kita bisa menggunakan attribute (selayaknya
// kita menggunakan attribute HTML umumnya) untuk
// "melempar" props ke dalam sebuah Component.

// Kemudian, kita bisa "pecah" props dengan dua cara:
// 1 -- kita pecah di level function
//                     seperti ini contohnya
//                               v
// export default function Props({ prop1, prop2, propDlsb }) {
//   isi Component di sini
// }
export default function Props(props) {
  useEffect(() => {
    document.title = `Props`
  }, [])

  // atau...
  // 2 -- kita pecah menjadi variable seperti berikut
  const { nama, email, phone } = props

  // kemudian kita perlakukan selayaknya variable biasa
  // Note: tidak seperti State, jika ada perubahan nilai
  //       yang ditimbulkan dari Component di atasnya,
  //       nilai yang dilemparkan ke Props tidak berubah.

  return (<>
    <h2>Props in Component</h2>

    <h4>Halo! Nama saya { nama }, Anda bisa mengontak saya melalui email di { email }, atau di nomor { phone }.</h4>
    <h5>Note: Props ini diberikan di file <pre>App.js</pre></h5>

    {
      /*
        Karena variable seperti nama, email, dan phone didapat dari component di atas,
        maka component ini juga disebut dengan stateless component.
      */
    }
  </>)
}