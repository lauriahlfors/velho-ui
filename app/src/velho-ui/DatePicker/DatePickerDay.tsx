import React from 'react';

interface IDay {
  number: number;
}

export default function DatePickerDay({ day }: { day: IDay }) {
  return <div className="datepicker-day">{day.number}</div>;
}
