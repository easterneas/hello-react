import { useSelector } from "react-redux"

export default function Error() {
  const error = useSelector(state => state.error)

  return error ?
    (
      <div style={{ fontSize: "2em" }}>
        { JSON.stringify(error.message) }
      </div>
    ) :
    (<></>)
}