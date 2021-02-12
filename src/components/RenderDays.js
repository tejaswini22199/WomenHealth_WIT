import { format, addDays ,startOfWeek}from 'date-fns';
import React,{useState} from 'react'
const RenderDays = ({currentMonth}) => {
    const dateFormat = "dddd";
    const [days,setDays] = useState([]);
    let startDate = startOfWeek(currentMonth);
    const temp=[];
    for (let i = 0; i < 7; i++) {
      temp.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    setDays(temp);
    return (
        <div className="days row">
            {days}
            </div>
    )
}

export default RenderDays
