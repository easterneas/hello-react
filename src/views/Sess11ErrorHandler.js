import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { submitNewName, emptyFormError } from '../services/actions';

export default function FormErrorHandler() {
  const formError = useSelector(state => state.formError)

  const [ name, setName ] = useState("")

  // dispatch, function submitHandler, etc...
  const dispatch = useDispatch()

  function submitHandler(e) {
    e.preventDefault()
    dispatch(emptyFormError())

    setTimeout(() => {
      dispatch(submitNewName(name))
    }, 1000)
  }

  return (
    <form>
      {
        (formError && formError.name) ?
        (<span style={{ fontSize: '1em', color: 'red' }}>{ formError.name.message }</span>) :
        (<></>)
      }
      <input type="text" value={ name } onChange={event => setName(event.target.value)} />

      <input type="submit" onClick={event => submitHandler(event)} value="Kirim" />
    </form>
  )
}