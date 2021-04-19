const form = document.querySelector('form')!;

form.onsubmit = (_) => {
	// collecting data
	const data = new FormData(form);
	const entries = data.entries();

	// displaying data as key:value
	for (let entry of entries) {
		let key = entry[0];
		let val = entry[1];
		console.log(key, val);
	}
	
	return false; // prevent reload
};