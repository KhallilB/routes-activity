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

app.get("/", (request, response) => { // Send all venues.
	response.send(Venue)
});

app.get("/:id", (req, res) => { // Send a venue that matches a specific id.
	res.send(Venue[req.params.id])
})

app.listen(3000, () => {
	console.log("listening on port 3000")
});

module.exports = app // Export Router