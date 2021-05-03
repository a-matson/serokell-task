function contactUsFormHandler(event) {
    // collecting data
    let data = new FormData(this);
    let entries = data.entries();
    // displaying data as key:value
    for (let entry of entries) {
        let key = entry[0];
        let val = entry[1];
        console.log(key, val);
    }
    // prevent reload
    event.preventDefault();
    return false;
}
const form = document.getElementById('contact-us-form');
//form?.addEventListener('submit', contactUsFormHandler)
if (document.body.contains(form)) {
    // Assing handler
    form.addEventListener('submit', contactUsFormHandler);
}
