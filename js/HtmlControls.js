
(function() {
    console.log("Clicked111, yes!");
    const showHideLink = document.getElementById("show-hide");
    const hideableElements = Array.from(document.getElementsByClassName("hideable"));

    showHideLink.addEventListener('click', function(){
        hideableElements.forEach(hideableElement =>  {
            hideableElement.classList.toggle("hide");
        });
    })();
});

// let showHideElements = function() {
//     console.log("Clicked, yes!");
//     const showHideLink = document.getElementById("show-hide");
//     const hideableElements = Array.from(document.getElementsByClassName("hideable"));
//     // const showHideLink = document.getElementsByClassName("panel-toggle");
//     hideableElements.forEach(hideableElement =>  {
//         hideableElement.classList.toggle("hide");
//     });
//     // showHideLink.addEventListener('click', function(){
        
//     // })();
// }