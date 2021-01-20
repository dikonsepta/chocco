for (let firstActive of document.querySelectorAll("#accordion__active")) {
    let firstWrapper = firstActive.querySelector(".accordion__wrapper");
    let firstInvisible = firstWrapper.querySelector(".team__mission");
    firstWrapper.style.height = String(firstInvisible.clientHeight) + "px";
}

for (let button of document.querySelectorAll("a.accordion__button")) {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        let clickYes = event.target.parentNode;
        let wrapperYes = clickYes.querySelector(".accordion__wrapper");
        let invisibleYes = wrapperYes.querySelector(".team__mission");

        if (clickYes.id == "accordion__active") {
            clickYes.id = "";
            wrapperYes.style.height = "0px";
        } else {
            for (let clickNo of document.querySelectorAll("#accordion__active")) {
                clickNo.id = "";
                let wrapperNo = clickNo.querySelector(".accordion__wrapper");
                wrapperNo.style.height = "0px";
            }
            clickYes.id = "accordion__active";
            wrapperYes.style.height = String(invisibleYes.clientHeight) + "px";
        }
    });
}