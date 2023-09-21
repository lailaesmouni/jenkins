require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
	const connection = mongoose
		.connect("mongodb+srv://lailaes:laila@cluster0.cmz4wcu.mongodb.net/")
		.then((result) => console.log("Connected to database"))
		.catch((err) => console.log("could not connect to database"));
};
