var phoneBook = {
    Bobby: "805-284-5688",
    DeShaun: "707-454-8743",
    Suzie: "805-674-3333",
    Carmen: "510-544-9812",
    Chow: "805-233-8754"
};


function forIn(obj){
	for (var keys in obj){
		console.log (keys+": "+obj[keys]);
	}

}
// create a for / in loop that lists all the numbers in the 805 area code, along with who they belong to


forIn(phoneBook); 