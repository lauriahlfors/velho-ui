import DatePickerDay from './DatePickerDay';

import {
  getUnix,
  getDaysInMonth,
  getFirstDayOfMonth,
  setToStartUTC,
} from './dateFunctions';
import { useEffect, useState } from 'react';

export default function DatePickerCalendar() {
  const [dp, setDp] = useState();
  const calendarDays: any[] = [];
  // console.log(getUnix(setToStartUTC(new Date())));
  // console.log(getDaysInMonth(new Date()));
  // console.log(getFirstDayOfMonth(new Date()));

  for (let i = getFirstDayOfMonth(new Date()) - 1; i >= 1; i--) {
    calendarDays.push({ number: getDaysInMonth(new Date()) - i + 1 });
  }

  return (
    <div>
      <div className="datepicker-calendar">
        {calendarDays.map((day, key) => {
          return <DatePickerDay day={day} key={key} />;
        })}
      </div>
    </div>
  );
}
