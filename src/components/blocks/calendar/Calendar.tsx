'use client'
import { Calendar, momentLocalizer } from 'react-big-calendar'

import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'

const localizer = momentLocalizer(moment)

const calendarEvents = [
  {
    title: "101009:00 - 18:00 미니 008 궤도 브레이크 전남 고흥군 시흥리",
    allDay: false,
    start: new Date(2024, 11, 16, 8, 0),  // Month is 0-indexed (December is 11)
    end: new Date(2024, 11, 16, 8, 45),
  },
  {
    title: "09:00 - 18:00 미니 008 궤도 브레이크 전남 고흥군 시흥리",
    allDay: false,
    start: new Date(2024, 11, 21, 9, 0),
    end: new Date(2024, 11, 21, 9, 45),
  },
  // Add other events here...
];

const MyCalendar = () => (
  
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={['month']} // Only show month view
      style={{ height: 1400,width:'100% '}}
      defaultView="month"  // Make sure the default view is month
    />
 
)

export default MyCalendar
