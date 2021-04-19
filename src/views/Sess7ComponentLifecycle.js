// Component Lifecycle

import { useEffect, useState } from "react"

// Umumnya, Component di React memiliki 4 kategori lifecycle:
// - Mounting
// - Updating
// - Unmounting
// - Error-Handling

// ! -- Tahapan ini akan menjelaskan method yang ada pada Class Component,
// ! -- dan untuk Functional Component, ada di bagian setelah ini.

// 1 -- Mounting
// Mounting akan terjadi ketika sebuah component sedang dibuat.
// Handler seperti seperti constructor(), render(), dan componentDidMount()
// akan menangani proses Mounting ini.

// Tahapannya:
// constructor() -> render() -> componentDidMount()

// 2 -- Updating
// Tahap Updating akan terjadi ketika sebuah component mengalami perubahan.
// Handler seperti componentWillReceiveProps(), shouldComponentUpdate(),
// componentWillUpdate(), dan componentDidUpdate() akan menangani proses ini.

// Urutannya seperti ini:
// componentWillReceiveProps() -> shouldComponentUpdate() --...
// ...--> componentWillUpdate() -> componentDidUpdate()

// 3 -- Unmounting
// Tahap ini akan terjadi ketika kita berpindah dari satu halaman ke halaman lain.
// Ketika berpindah, component yang ada di halaman ini akan dihapus/di-destroy.
// Handler componentWillUnmount() akan menangani proses ini.

// 4 -- Error-Handling
// Nah, ketika sebuah component mengalami error/gagal menjalankan fungsinya,
// event lifecycle ini akan menangani error pada component tersebut.
// Anda bisa gunakan componentDidCatch() untuk menangani error ini.

// ? -- Nah, bagaimana dengan Functional Component?

// Functional component memiliki lifecycle yang sedikit berbeda
// dengan Class Component.

// Untuk itu, React memiliki hooks untuk Functional component
// yang bernama useEffect().

// * -- Dokumentasi lengkap mengenai useEffect()
// * -- https://reactjs.org/docs/hooks-effect.html

// useEffect() ini akan meng-handle beberapa event sekaligus,
// bergantung dari cara kita mengisi parameter yang diminta.

export default function ComponentLifecycle() {
  useEffect(() => {
    // Function dalam useEffect ini akan meng-handle dua event sekaligus:
    // componentDidMount dan componentDidUpdate
    document.title = `Component Lifecycle`

    // Ketika kita tambahkan return setelahnya, maka kita akan meng-handle
    // event lifecycle componentWillUnmount()
    
    // ? -- return ini akan berguna ketika kita menjalankan subscription
    // ? -- atau menggunakan real-time notification.
    // return () => { doSomething() }
  }, []) // parameter kedua ini akan meng-handle kondisinya.

  // Saya contohkan useEffect untuk meng-handle klik, yang melibatkan
  // useState() sebagai wadah untuk value yang akan diubah.

  const [ count, setCount ] = useState(0)
  const [ message, setMessage ] = useState("")

  // Kemudian, saya tambahkan useEffect hook:

  useEffect(() => {
    setMessage(`Anda sudah klik ini sebanyak ${count} kali.`)
  }, [count])

  return (<>
    <h3>{ message }</h3>

    <button onClick={() => setCount(count + 1)}>Klik aku!</button>

    <h4>Perhatikan perubahan yang dilakukan useEffect ketika kita klik tombol di atas.</h4>
  </>)
}