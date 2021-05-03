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
}
const form = document.querySelector('#contact-us form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', contactUsFormHandler);
