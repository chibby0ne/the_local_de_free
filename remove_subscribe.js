function removeElementByClass(classname) {
    var element = document.getElementsByClassName(classname)[0];
    if (element != null) {
        element.parentNode.removeChild(element);
    }
}

// create an observer instance
var observer = new MutationObserver(function(mutations, _) {
    mutations.forEach(function(mutation) {
        switch (mutation.type) {
            case "childList":
                // Remove the modal window
                removeElementByClass("tp-modal")
                // Remove the modal window (used in thelocal.ch)
                removeElementByClass("tp-backdrop")
                // Show the hidden content
                document.querySelectorAll('.piano-hide').forEach((elem) => elem.classList.remove('piano-hide'));
                // Used in thelocal.ch
                document.querySelectorAll('.tp-modal-open').forEach((elem) => elem.classList.remove('tp-modal-open'));
                // Adds the scrollbar back
                document.getElementsByTagName('body')[0].style.overflow = "auto";

        }
    });
});
 
// select the target node
var target = document.getElementsByTagName('body')[0];

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true }
 
// pass in the target node, as well as the observer options
observer.observe(target, config);
