import Typography from '../Typography/Typography';
import Button from '../Button/Button';

export default function DatePickerNavigation() {
  return (
    <div className="datepicker-navigation">
      <Button size={'s'}>Prev</Button>
      <div className="center">
        <Typography variant="h4">December</Typography>
        <Typography variant="h4">2021</Typography>
      </div>
      <Button size={'s'}>Next</Button>
    </div>
  );
}
