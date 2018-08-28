// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.pageAction.show(sender.tab.id);
        sendResponse();
    });

var quarantineRelease = "Scanned and released email quarantine. You will receive the requested email shortly.";


window.addEventListener('load', function load(event) {
    document.getElementById('quarantineReleaseText').innerText = quarantineRelease;
    document.getElementById('quarantineReleaseButton').onclick = function () {
        copyToClipboard(quarantineRelease);
    };
});

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
