function removeElementByClass(classname) {
    var element = document.getElementsByClassName(classname)[0];
    if (element != null) {
        element.parentNode.removeChild(element);
    }
}

function exists(classname) {
    return document.getElementsByClassName(classname)[0] != null;
}

var count = 0;

// create an observer instance
var observer = new MutationObserver(function(mutations, observer) {
    mutations.forEach(function(mutation) {
        console.log("hohoho");
        switch (mutation.type) {
            case "childList":
                // Remove the modal windows
                if (exists("tp-backdrop tp-active")) {
                    removeElementByClass("tp-backdrop tp-active")
                    count += 1
                } else if (exists("tp-modal")) {
                    removeElementByClass("tp-modal")
                    count += 1
                }
                break;
            default:
                break;
        }
        if (count == 2) {
            // Restore the scrollbar
            document.getElementsByTagName("body")[0].classList.remove("tp-modal-open")
            // you can stop observing
            observer.disconnect();
        }
    });
});
 
// select the target node
var target = document.getElementsByTagName('body')[0];

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true }
 
// pass in the target node, as well as the observer options
observer.observe(target, config);
