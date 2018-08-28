// var text = "RYAN";
//
// getElementById("myButton")..addEventListener("click", copyToClipboard);
//
function copyToClipboard(text) {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
};


function myAlert() {
    alert('hello world');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myButton').addEventListener('click', myAlert);
});


// document.addEventListener('DOMContentLoaded', function() {
//     var link = document.getElementById("myButton");
//     // onClick's logic below:
//     link.addEventListener('click', function() {
//         const input = document.createElement('input');
//         input.style.position = 'fixed';
//         input.style.opacity = 0;
//         input.value = 'hello';
//         document.body.appendChild(input);
//         input.select();
//         document.execCommand('Copy');
//         document.body.removeChild(input);
//     });
// });