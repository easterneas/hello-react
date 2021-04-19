import axios from '../helpers/axios.js';

// Actions - People

export function fetchPeople() {
  // Untuk menjalankan secara async, kita harus return sebuah function
  // function ini harus menggunakan dispatch sebagai parameter-nya

  // Karena kita masih belum menggunakan middleware,
  // function ini akan mengeluarkan error ketika dijalankan
  return (dispatch) => {
    axios
    .get('https://fakerapi.it/api/v1/persons?_locale=en_EN')
    .then(result => {
      // console.log(data)
      const { data: people } = result.data

      people.forEach(person => {
        let addressInString = ""
        Object.keys(person.address).forEach(key => {
          addressInString += `${person.address[key]}\n`
        })
        person.address = addressInString
      })

      dispatch({
        type: "GET_PEOPLE",
        payload: people
      })
    })
    .catch(error => {
      alert("URL not found")
    })
  }
}

export function addNewPerson(payload) {
  return (dispatch) => {
    axios.delete(`https://fakerapi.it/api/v1/persons/${payload.id}`, {
      headers: {}
    })
    .then(result => {
      // jalankan result untuk menampilkan hasil
      console.log(result);
    })
    .catch(error => {
      dispatch({
        type: 'SHOW_ERROR',
        payload: {
          message: error.message,
          code: 404
        }
      })
    })
  }
}

// Actions - Names

export function submitNewName(){
  return {
    type: "SET_FORM_ERROR",
    payload: {
      name: {
        message: "Nama harus diisi!"
      }
    }
  }
}

// Actions - Error Handler

export function emptyFormError(){
  return {
    type: "SET_FORM_ERROR",
    payload: null
  }
}

// Actions - Users

// Jika tanpa middleware, Redux akan mengharapkan...
export function fetchUsers() {
  // Note: ini hanya contoh data saja
  let data = [
    { nama: "Budi", nomorInduk: "12151", alamat: "Jl. Rajawali I no. 120", email: "budi@mail.com" },
    { nama: "Raihan", nomorInduk: "15745", alamat: "Jl. Rajawali I no. 121", email: "raihan@mail.com" },
  ]
  
  // ...return berupa plain object seperti ini
  return {
    type: "GET_USER",
    payload: data
  }
}

export function addNewUser(payload) {
  return {
    type: "ADD_NEW_USER",
    payload
  }
}

// Actions - Authentication

// Jika tanpa middleware, Redux akan mengharapkan...
export function login(username, password) {
  const auth = { username, isLoggedIn: true }

  window.localStorage.setItem('userAuth', auth)

  // ...return berupa plain object seperti ini
  return {
    type: "USER_LOGIN",
    payload: auth
  }
}