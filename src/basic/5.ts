enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

type isWeekend = (day: DayOfWeek) => boolean;

const isWorkDay: isWeekend = (day: DayOfWeek) => {
    return day >= DayOfWeek.Monday && day <= DayOfWeek.Friday;
}

console.log(isWorkDay(DayOfWeek.Monday));
console.log(isWorkDay(DayOfWeek.Saturday));
console.log(isWorkDay(DayOfWeek.Sunday));