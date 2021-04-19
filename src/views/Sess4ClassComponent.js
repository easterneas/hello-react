// Session 4 - Intro to React
// Menggunakan Class Component

// Ada dua cara untuk membuat Class Component
// 1 -- men-destruct langsung seperti contoh berikut
import { Component } from 'react'

// kemudian kita define class seperti ini
class ClassComponent extends Component {
  // Bonus - mengubah title pada site

  // atau...
  // 2 -- import React secara langsung
  // import React from 'react'
  
  // Note: jika kita menggunakan pendekatan ini, maka
  //       kita harus meng-extend dari React.Component
  //       
  // Contoh:
  // class ClassComponent extends React.Component

  // Masih ingat constructor()?
  // dasarnya constructor() di React, itu sama seperti
  // constructor() pada OOP, di mana kita men-define
  // suatu property di sini.
  constructor(props){
    super()
    // Penggunaan state di Class Component
    // Untuk meng-update state, bisa kita gunakan this.setState()
  }

  componentDidMount(){
    document.title = "Class Component"
  }

  render(){
    return (<>
      <h2>Ini adalah Class Component</h2>
      <h5>Struktur aku bisa dilihat di file <pre>views/Sess4ClassComponent.js</pre> </h5>
    </>)
  }
}

export default ClassComponent