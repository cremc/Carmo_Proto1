(function() {
    // console.log("Click function here12");
    const showHideLink = document.getElementById("show-hide");
    const hideableElements = Array.from(document.getElementsByClassName("hideable"));
    let isHidden = true;
    showHideLink.addEventListener('click', function(){
        // console.log("Clicked!");
        hideableElements.forEach(hideableElement =>  {
            hideableElement.classList.toggle("hide");
            isHidden = !isHidden;
            if (isHidden) showHideLink.innerHTML = "Show";
            else showHideLink.innerHTML = "Hide";
        });
    });
})();