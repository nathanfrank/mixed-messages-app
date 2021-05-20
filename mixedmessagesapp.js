// Daily motivation generator
// Want to function similar to "I Am Sober" app's quote generator
// Random background image + today's date + random motivational quote
// Built with JavaScript (likely some HTML/CSS)
// 1st step -> generate random quote
// 2nd step -> display today's date above quote
// 3rd step -> generate random background image
// 4th step -> style with CSS

// Store quotes 
let quotes = ["Remember this: not everyone has the courage to do what you're doing!", "Even if today goes rough, just keep going. Your streak is building up!", "Change is tough, but you're getting stronger. Take things one day at a time.", "Don't worry about the future, all we have is today!", "You don't need to be clever or strong, just keep making the committment every day. You got this.", "Don't be upset if you're making mistakes. It means you're trying. Just keep going!"];
// Generate random quote via random index
let quoteGenerator = Math.floor(Math.random()*(quotes.length));
// Generate today's date
let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthsOfTheYear = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let dayOfTheMonth = today.getDate();
// Today's date
let completeToday = "Today is " daysOfTheWeek[day] + ", " + monthsOfTheYear[month] + " " + dayOfTheMonth + ".";


console.log(completeToday);
console.log(quotes[quoteGenerator]);
