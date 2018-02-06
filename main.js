console.log("main.js loaded successfully");

const BASE_URL = "http://api.reactprototypes.com";
const API_KEY = "?key=testuser1234";

axios
	.get(BASE_URL + "/todos" + API_KEY)
	.then(response => {
		console.log("response:", response);
	})
	.catch(error => {
		console.log("Error:", error);
	});

const newItem = {
	title: "Eagles are world champions",
	details: "Dilly Dilly"
};

// axios
// 	.post(BASE_URL + "/todos" + API_KEY, newItem)
// 	.then(response => {
// 		console.log("Add response:", response);
// 	})
// 	.catch(error => {
// 		console.log("Add error:", error);
// 	});
