// Session 4 - Intro to React
// Functional Component

import { useEffect } from "react"

// Note: kita menggunakan ini di sesi-sesi berikutnya

// Kita bisa membuat sebuah Component dengan
// konsep/pendekatan pemrograman functional.

// Bedanya dengan Class Component,
// Functional Component akan mengandalkan event handler
// seperti useEffect dan useState untuk meng-update
// state pada Component tersebut.

// Penggunaan useEffect dan useState dijelaskan pada
// Session 5 (State) dan Session 7 (Component Lifecycle)

export default function Component() {
  useEffect(() => {
    document.title = `Functional Component`
  }, [])

  return (<>
    <h2>Ini adalah Functional Component</h2>
    <h5>Struktur aku bisa dilihat di file <pre>views/Sess4Component.js</pre></h5>
  </>)
}