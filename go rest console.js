let consoleForm = document.getElementById('consoleForm');
let requestUrl = document.getElementById('requestUrl');
let requestUrlErrMsg = document.getElementById('requestUrlErrMsg');
let requestMethod = document.getElementById('requestMethod');
let requestBody = document.getElementById('requestBody');
let sendRequestBtn = document.getElementById('sendRequestBtn');
let responseStatus = document.getElementById('responseStatus');
let responseBody = document.getElementById('responseBody');
consoleForm.addEventListener('submit', (event) => {
    event.preventDefault();
});
let url;
let method;
let requestBodyvalue;

requestUrl.addEventListener('change', (event) => {
    if (event.target.value === '') {
        requestUrlErrMsg.textContent = 'Requried*';
    } else {
        requestUrlErrMsg.textContent = '';
        url = event.target.value;
    }
});
requestMethod.addEventListener('change', (event) => {
    method = event.target.value;
});
requestBody.addEventListener('change', (event) => {
    requestBodyvalue = event.target.value;
});
sendRequestBtn.addEventListener('click', (event) => {
    let options = {
        method: requestMethod.value,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 5b8faa3592569928a8aa07468fac524e3255d48825a42c698da9b7eb99ef1415"
        },
        body: JSON.stringify(requestBody.value),
    };
    fetch(requestUrl.value, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data, responseStatus);
            responseStatus.value = data.code;
            responseBody.textContent = JSON.stringify(data);
        });
})