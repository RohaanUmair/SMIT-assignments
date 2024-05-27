// A method named calculateRating() calculates average rating
var object = {
    id: 1,
    title: "Title",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    rating: [2, 4, 1, 0, 5, 3],
    calculateRating: function(){
        let addedRatings = this.rating.reduce((sum, currentValue) => {
            return (sum + currentValue);
        }, 0);
        
        return addedRatings / this.rating.length;
    }
};

console.log(object.calculateRating());   // This logs average rating(2.5) to the console




// The method isTodayOff() inside an object checks if today is off or not based on provided off days
var employee = {
    id: 101,
    name: "Ali",
    position: "Software Engineer",
    department: "IT",
    daysOff: ["Monday", "Friday"],
    isTodayOff: function(){
        let todayIndex = new Date().getDay();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let today = days[todayIndex];

        return this.daysOff.includes(today);
    }
};

console.log(employee.isTodayOff());




// The method isIncrementEligible() inside an object checks weather an employee is eligible for increment
// If experience is greater than or equal to 3 years and performance rating is equal to or greater than 4, the employee is eligible for increment
var employee2 = {
    id: 102,
    name: "Haris",
    position: "Project Manager",
    department: "Management",
    experience: 5, // years of experience
    performance: 4.5, // performance rating out of 5
    isIncrementEligible: function(){
        return this.experience >= 3 && this.performance >= 4;
    }    
};

console.log(employee2.isIncrementEligible());