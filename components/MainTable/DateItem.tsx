function DateItem({ user }) {
  return (
    <div className="date-row">
      {user.calendar.map((date) => (
        <div>{ date.date }</div>
      ))}
    </div>
  )
}

export default DateItem
