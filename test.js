import isWeekendToday from './index.js';

console.log(isWeekendToday()); // depends on today
console.log(isWeekendToday(new Date('2025-08-16'))); // true (Saturday)
console.log(isWeekendToday(new Date('2025-08-18'))); // false (Monday)
console.log(isWeekendToday(new Date('2025-08-16'), false)); // false (Monday, Sat not weekend)