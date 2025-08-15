
/**
 * Checks if a given date (or today) is a weekend.
 * @param {Date} [date=new Date()] - Date to check. Defaults to today.
 * @param {boolean} [isConsiderSaturdayAsWeekend=true] - Whether Saturday is considered weekend.
 * @returns {boolean}
 */
const isWeekendToday = (
    date = new Date(),
    isConsiderSaturdayAsWeekend = true,
) => {
    try {
        if (!(date instanceof Date) || isNaN(date)) {
            throw new Error("Invalid Date");
        };

        const day = date?.getDay(); // Sunday=0, Saturday=6

        return ((day === 0) || (isConsiderSaturdayAsWeekend ? (day === 6) : isConsiderSaturdayAsWeekend));
    }
    catch (error) {
        console.log('error in the isWeekendToday function :>> ', error);
        return error;
    };
};

export default isWeekendToday;