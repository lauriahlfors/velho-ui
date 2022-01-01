import { createElement } from 'react';
import DatePickerNavigation from './DatePickerNavigation';
import DatePickerCalendar from './DatePickerCalendar';
import './datepicker.scss';

export default function DatePicker() {
  // return createElement('DatePicker', { className: 'datepicker' }, [
  //   <DatePickerNavigation />,
  //   <DatePickerCalendar />,
  // ]);
  return (
    <div className="datepicker">
      <DatePickerNavigation />
      <DatePickerCalendar />
    </div>
  );
}
