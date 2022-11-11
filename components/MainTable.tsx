import { useState } from "react"
import NameItem from "./MainTable/NameItem"
import { month } from "../data/month"
import DateItem from "./MainTable/DateItem"
import SummaryItem from "./MainTable/SummaryItem"

function MainTable() {
  const [users, setUsers] = useState(month)
  users.sort((a, b) => (a.no > b.no) ? 1 : -1)
  const dategroup = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div className="main-table">
      <div className="list-group">
        <div className="info-column">
          <div className="item-row header">
            <div className="number">ที่</div>
            <div className="name">ชื่อ - สกุล</div>
            <div className="position">ตำแหน่ง</div>
          </div>
          {users.map((user) => 
            <NameItem user={ user } key={ user.id } />
          )}
        </div>
        <div className="date-column">
          <div className="scroll-view">  
            <div className="date-row header">
              {dategroup.map((date) => (
                <div>{date}</div>
              ))}
            </div>
            {users.map((user) => 
              <DateItem user={ user } key={ user.id } />
            )}
          </div>
        </div>
        <div className="summary-column">
          <div className="summary-row header">
            <div className="day">เวร</div>
            <div className="ot">OT</div>
            <div className="refer">Refer</div>
          </div>
          {users.map((user) => 
            <SummaryItem user={ user } key={ user.id } />
          )}
        </div>
      </div>
    </div>
  )
}

export default MainTable
