import DateItem from "./DateItem"

function NameItem({ user }) {
  return (
    <>
      <div className="item-row">
        <div className="number">{user.no}</div>
        <div className="name">{user.name}</div>
        <div className="position">{user.position}</div>
      </div>
    </>
  )
}

export default NameItem
