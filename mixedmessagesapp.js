// Daily motivation generator
// Want to function similar to "I Am Sober" app's quote generator
// Random background image + today's date + random motivational quote
// Built with JavaScript *only*
// 1st step -> generate random quote
// 2nd step -> display today's date above quote

// Store quotes 
let quotes = ["Remember this: not everyone has the courage to do what you're doing!", "Even if today goes rough, just keep going. Your streak is building up!", "Change is tough, but you're getting stronger. Take things one day at a time.", "Don't worry about the future, all we have is today!", "You don't need to be clever or strong, just keep making the committment every day. You got this.", "Don't be upset if you're making mistakes. It means you're trying. Just keep going!"];
// Generate random quote via random index
let quoteGenerator = Math.floor(Math.random()*(quotes.length));
// Generate today's date
let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let dayOfTheMonth = today.getDate();
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthsOfTheYear = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// Today's date
let completeToday = "Today is " daysOfTheWeek[day] + ", " + monthsOfTheYear[month] + " " + dayOfTheMonth + ".";

//Log the date + random quote when program is run
console.log(completeToday);
console.log(quotes[quoteGenerator]);
