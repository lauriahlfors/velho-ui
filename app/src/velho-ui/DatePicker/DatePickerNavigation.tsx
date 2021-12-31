import Typography from '../Typography/Typography';
import Button from '../Button/Button';

export default function DatePickerNavigation() {
  return (
    <div className='datepicker-navigation'>
      <Button>Prev</Button>
      <div>
        <Typography variant='h3'>December</Typography>
        <Typography variant='h3'>2021</Typography>
      </div>
      <Button>Next</Button>
    </div>
  );
}
