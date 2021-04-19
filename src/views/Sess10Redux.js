

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
      // ^
      // useDispatch --> untuk menjalankan action

import Table from '../components/Table.js'

// Jangan lupa import action yang ingin dijalankan di sini
import { fetchUsers, addNewUser } from '../services/actions.js'

export default function Redux() {
  useEffect(() => {
    document.title = `Let's learn Redux!`
  }, [])

  // State untuk menampilkan kolom table
  const [ tableHeaders ] = useState([ "Nama", "Nomor Induk", "Alamat", "Email" ])
  // State ini disesuaikan dengan nama kolom di database,
  // atau disesuaikan dengan kompleksitas project
  const [ tableInputs ] = useState(["nama", "nomorInduk", "alamat", "email"])

  // Menggunakan useDispatch
  // Note: Jika tanpa middleware, harus kita return sebuah object,
  //       untuk mencegah error.
  // Step 1 - invoke useDispatch(), lalu simpan ke variable dispatch
  const dispatch = useDispatch()

  // useDispatch()() --> currying function


  // Step 2 - jalankan di function atau di useEffect
  // 2a -- menjalankan di useEffect()
  // useEffect(() => {
  //   // Jalankan function action yang di-import
  //   // sebagai parameter di dispatch()
  //   dispatch(fetchUsers())
  // }, [dispatch])
  // ? Note: harus gunakan [dispatch] sebagai parameter kedua untuk memenuhi
  // ?       permintaan ESLint. Hal ini dikarenakan dispatch merupakan bagian
  // ?       dari scope component, jadi ESLint meminta dispatch untuk dimasukkan
  // ?       ke dalam array dependency di parameter kedua, meski kita tahu
  // ?       dispatch ini tidak akan berubah.

  // ?       Lengkapnya bisa dilihat di sini:
  // ?       https://stackoverflow.com/questions/56972415/useeffect-dependency-array-and-eslint-exhaustive-deps-rule

  // 2b -- Alternatifnya, kita bisa menjalankan dispatch secara langsung
  dispatch(fetchUsers())

  // 2c -- menjalankan dispatch di function
  //    -- umumnya digunakan ketika meng-handle submit form
  //    -- ini sudah dicontohkan di component Table

  // Render
  return (<>
    {/* Untuk debug, bisa gunakan JSON.stringify seperti ini */}
    {/* <pre>{ JSON.stringify(users, null, 2) }</pre> */}

    {/* Kita akan gunakan component Table untuk mendemonstrasikannya */}
    <Table
      tableState="users"
      tableHeaders={ tableHeaders }
      tableInputs={ tableInputs }
      tableDispatchHandler={ addNewUser }
    />
  </>)
}

// redux       -> state manager
// react-redux -> perantara antara react dan redux