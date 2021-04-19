import { useEffect } from "react"
import { useDispatch } from 'react-redux'

import { fetchPeople, addNewPerson } from "../services/actions.js"

import Table from "../components/Table.js"

export default function ReduxWithMiddleware() {
  useEffect(() => {
    document.title = `Adding middleware in Redux`
  }, [])

  // const people = useSelector(state => state.people)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPeople())
  }, [dispatch])

  return (<>
    <Table
      tableState="people"
      tableHeaders={[ 'firstname', 'lastname', 'email', 'phone', 'birthdate', 'gender', 'address', 'website', 'avatar' ]}
      tableDispatchHandler={ addNewPerson }
    />
  </>)
}