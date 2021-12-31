import { createElement } from 'react';
import DatePickerNavigation from './DatePickerNavigation';
import './datepicker.scss';

export default function DatePicker() {
  return createElement(
    'DatePicker',
    { className: 'datepicker' },
    <DatePickerNavigation />
  );
}
