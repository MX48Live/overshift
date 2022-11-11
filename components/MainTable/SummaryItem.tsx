function SummaryItem({ user }) {
  return (
    <div className="summary-row">
      <div className="day">{user.summary.day}</div>
      <div className="ot">{user.summary.ot}</div>
      <div className="refer">{user.summary.refer}</div>
    </div>
  )
}

export default SummaryItem
