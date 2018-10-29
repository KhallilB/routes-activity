const express require('express'); // Import express
const EventRoute = express.Router(); // Set up Router


const Venue = [
	{
		id: "0",
		name: "Super Test Venue",
		location: "San Francisco"
	},
	{
		id: "1",
		name: "Amazing Venue",
		location: "San Jose"
	}
];

const Event = [
	{
		id: "0",
		name: "Pumpkin Party",
		day: "10/31/18",
		type: "Music Festival"
	},
	{
		id: "1",
		name: "New Year's Code",
		day: "01/01/19",
		type: "Hackathon"
	}
];

express.get("./venues", (request, response) => {
	response.send(Venue)
})

module.exports = EventRoute // Export Router