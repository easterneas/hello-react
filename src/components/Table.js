import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
      // ^            ^
      // |            useDispatch --> untuk menjalankan action
      // useSelector --> untuk mendapatkan data dari state

export default function Table({ tableHeaders, tableState, tableInputs, tableDispatchHandler }) {
  // Untuk mendapatkan data dari Redux, bisa kita gunakan useSelector()
  // Lalu, masukkan parameter berupa function yang akan mengembalikan
  // state yang ingin kita ambil.
  const data = useSelector(state => state[tableState])
  // Di contoh ini, hasilnya sama seperti kita memanggil function berikut
  // const data = useSelector(state => state.users)
  // karena tableState yang dilempar dari component Sess10Redux, berisikan 'users'

  // ! Jangan kita gunakan useSelector satu kali, kemudian kita destruct
  // ! hasil yang di-return.

  // ! Lengkapnya:
  // ! https://thoughtbot.com/blog/using-redux-with-react-hooks#useselector-gotchas

  const [ dataInputs, setDataInputs ] = useState({})
  const [ nameFilter, setNameFilter ] = useState("")
  const [ filteredData, setFilteredData ] = useState([])
  
  useEffect(() => {
    // Jika ada data yang di-filter, bisa ditampung di variable 
      setFilteredData(data.filter(row => {
        // Filter seluruh kolom
        // 0. Buat kondisi dari filter (jika kosong, maka return
        //    true saja)
        // 1. Sediakan flag, nilainya false
        // 2. Dapatkan property dari object, lalu looping
        // 3. Buat kondisi:
        //    - Kondisi berdasarkan string yang di-lowercase
        //    - flag akan menjadi true jika kata yang di-filter
        //      ditemukan pada string, dan keluar dari loop
    
        if(nameFilter) {
          let flag = false
          let keys = Object.keys(row)
    
          for(let i = 0; i < keys.length; i++){
            let key = keys[i]
    
            if(row[key].toLowerCase().includes(nameFilter)) {
              flag = true
              break // untuk keluar dari loop langsung
            }
          }
    
          return flag
        } else return true
      }))
  }, [nameFilter, data])
  
  // Salah satu cara untuk membuat dinamis, bisa dilakukan seperti ini...
  // Namun perhatikan, kalau kita membuat table yang dinamis seperti ini
  // akan berisiko memunculkan warning yang tidak diinginkan.

  useEffect(() => {
    if(tableInputs && tableInputs.length > 0) {
      const labels = {}
      
      tableInputs.forEach(input => labels[input] = "")

      setDataInputs(labels)
    }
  }, [tableInputs])

  function handleInput(event, key){
    const newValue = {}

    Object.keys(dataInputs).forEach(key => newValue[key] = dataInputs[key])

    newValue[key] = event ? event.target.value : ""

    return setDataInputs(newValue)
  }

  // Untuk submit data ke dalam Redux...
  // kita butuh useDispatch() untuk berkomunikasi antara React dan Redux
  const dispatch = useDispatch()

  // kemudian kita bisa jalankan di sini
  function handleSubmit(){
    dispatch(tableDispatchHandler(dataInputs))
    
    // Untuk mengosongkan nilai input...
    const emptyInputs = {}
    Object.keys(dataInputs).forEach(key => emptyInputs[key] = "")
    setDataInputs(emptyInputs)
  }
  
  return (
    <div style={{ padding: "1em 0" }}>
      {/* Tip: Component ini bisa dipecah jadi Filter dan hanya Table */}
      Filter:
      <form>
      <input
        type="text"
        value={ nameFilter }
        required
        onChange={ event => setNameFilter(event.target.value) }
      />
      <input type="submit" /> 
      </form>

      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            { 
              tableHeaders.map(header => (
                <th key={ header }>{ header }</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            nameFilter ?
            // Jika kita mengisi apa yang mau kita filter,
            // ini akan berjalan...
            filteredData.map((row, rowIndex) => {
              return (
                <tr key={ row.nomorInduk }>
                  {
                    Object.keys(row).map((key, index) => (
                      <td key={`${rowIndex}${row.nomorInduk}${index}`}>{ row[key] }</td>
                    ))
                  }
                </tr>
              )
            }) :
            // Selebihnya... data total akan ditampilkan
            data.map((row, rowIndex) => {
              return (
                <tr key={ row.nomorInduk }>
                  {
                    Object.keys(row).map((key, index) => (
                      <td key={`${rowIndex}${row.nomorInduk}${index}`}>
                        { row[key] }
                      </td>
                    ))
                  }
                </tr>
              )
            })

            // ? Note: cara meng-output data akan berbeda bergantung dengan
            // ?       package yang kita gunakan untuk menampilkan data di table
          }
        </tbody>
        {
          dataInputs ?
          (
            <tfoot>
              <tr>
                {
                  Object.keys(dataInputs).map(key => (
                    <td key={ key }>
                      <input
                        type="text"
                        value={ dataInputs[key] }
                        placeholder={ key }
                        onChange={event => handleInput(event, key)}
                      />
                    </td>
                  ))
                }
              </tr>
            </tfoot>
          ) :
          (<></>)
        }
      </table>

      {
        dataInputs ?
        (
          <button onClick={() => handleSubmit()}>
            Tambah ke table
          </button>
        ) :
        (<></>)
      }
    </div>
  )
}