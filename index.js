const express = require('express'); // Import express
const app = express(); // Set up Router


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
		date: "10/31/18",
		type: "Music Festival"
	},
	{
		id: "1",
		name: "New Year's Code",
		date: "01/01/19",
		type: "Hackathon"
	}
];

app.get("/venues", (request, response) => { // Send all venues.
	response.json(Venue)
});

app.get("/venues/:id", (req, res) => { // Send a venue that matches a specific id.
	res.json(Venue[req.params.id])
})

app.get("/venues/:id/events", (req, res) => {
	res.json(Event);
})

app.post("/venues/:id/events/new", (req, res) => {
	Event.push({
	id: "3",
	name: "Birthday Event",
	date: "3/23/19",
	type: "Birthday"
});
})

app.listen(3000, () => {
	console.log("listening on port 3000")
});

module.exports = app // Export Router