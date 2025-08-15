#!/usr/bin/env node
import isWeekendToday from "./index.js";

// ANSI color codes
const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
};

// Get optional date argument
const dateArg = process?.argv?.[2];
let isConsiderSaturdayAsWeekend = true; // default is Sat+Sun
if (process?.argv?.[3]) {
    isConsiderSaturdayAsWeekend = (process?.argv?.[3]?.toLowerCase() === `true`);
};
let dateToCheck = new Date();

if (dateArg) {
    dateToCheck = new Date(dateArg);

    if (isNaN(dateToCheck)) {
        console.error(`${colors?.red}❌ Invalid date format. Use YYYY-MM-DD.${colors?.reset}`);
        process.exit(1);
    };
};

try {
    const result = isWeekendToday(dateToCheck, isConsiderSaturdayAsWeekend);
    if (result) {
        console.log(
            `${colors?.green}🎉 Woohoo!${colors?.reset} It's a ${colors?.magenta}${colors?.bright}WEEKEND${colors?.reset} 🏖️  Time to relax!`
        );
    }
    else {
        console.log(
            `${colors?.yellow}⏳ Not yet...${colors?.reset} It's a ${colors?.cyan}${colors?.bright}WEEKDAY${colors?.reset} 💪 Keep going!`
        );
    };
}
catch (error) {
    console.error(`${colors?.red}❌ Error:${colors?.reset} ${error.message}`);
    process.exit(1);
};