var addressBook = {
    Bobby:["605 Carmelita Ave","Atascadero","CA"],
    DeShaun:["564 Marlow Road","Santa Rosa","CA"],
    Suzie:["123 Islay Road","San Luis Obispo","CA"],
    Carmen:["534 Palo Alto Ave","Mountain View","CA"],
    Chow:["120 Pine Street","Paso Robles","CA"]
};

// create a nested loop that lists all addresses in the following format:

// Bobby
// 605 Carmelita Ave
// Atascadero, CA

function listAddresses(obj){
	for (key in obj){
		for (let i=0; i<obj[key].length; i++){
			console.log(i==0 ? key+"\n"+obj[key][i] : obj[key][i]);
		}
	}
}

listAddresses(addressBook);