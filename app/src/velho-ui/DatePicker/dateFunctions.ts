interface IDay {
  date: Date;
  unix: number;
  day?: string;
}

//
// Helper functions
//
export const setToStartUTC = (inputDate: Date): Date => {
  return new Date(inputDate.setUTCHours(0, 0, 0, 0));
};

export const getUnix = (inputDate: Date): number => {
  return inputDate.getTime();
};

//
// Day functions
//
export const getDayFrom = (days: number): Date => {
  const date = new Date(getToday());
  date.setDate(date.getDate() + days);
  return date;
};

//
// Month functions
//
// WORKS
export const getDaysInMonth = (inputDate: Date): number => {
  return new Date(
    inputDate.getFullYear(),
    inputDate.getMonth() + 1,
    0
  ).getDate();
};

// IN PRODUCTION
export const getFirstDayOfMonth = (inputDate: Date): number => {
  return new Date(inputDate.getFullYear(), inputDate.getMonth(), 1).getDay() ===
    1
    ? 7
    : new Date(inputDate.getFullYear(), inputDate.getMonth(), 1).getDay();
};

export const setMonth = (date: Date, month: number): Date => {
  console.log(
    new Date(date.getFullYear(), date.getMonth() + month, date.getDate())
  );
  const resultDate = new Date(
    date.getFullYear(),
    date.getMonth() + month,
    date.getDate()
  );
  return resultDate;
};

//
//
//

// returns current day as a UTC unix number
export const getToday = (): number => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return Math.floor(today.getTime());
};

//
export const getTomorrow = (): number => {
  // get today
  const today = new Date(getToday());
  // add 1 day to today
  const tomorrow = today.setDate(today.getUTCDate() + 1);
  return tomorrow;
};
