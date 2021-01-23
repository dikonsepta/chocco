$(document).ready(function () {

    const firstActive = $(".accordion__open");
    const firstWrapper = firstActive.find(".accord__value");
    const firstVisible = firstWrapper.find("p").outerWidth(true);
    const firstVisibleMin = firstWrapper.find("p").width();

    $(".menu__accordion").css("max-width", $("body").width());
    $(".accord__value p").css("min-width", String(firstVisibleMin) + "px");

    if ($("body").width() <= 768) {
        firstActive.removeClass("accordion__open");
        if ($(".menu__accordion").find(".accordion__open").length == 0) {
            $(".menu>.container").find(".menu__title").fadeIn(300);
        } else {
            $(".menu>.container").find(".menu__title").fadeOut(0);
        }
    } else {
        firstWrapper.width(String(firstVisible) + "px");
    }

    $("a.accord__name").each((i, button) => {
        $(button).on("click", event => {
            event.preventDefault();

            let clickYes = $(button).closest(".menu__accord");
            let wrapperYes = clickYes.find(".accord__value");

            if (clickYes.hasClass("accordion__open")) {
                clickYes.removeClass("accordion__open");
                wrapperYes.width("0px");
            } else {
                $(".accordion__open").each((i, clickNo) => {
                    $(clickNo).removeClass("accordion__open");
                    let wrapperNo = $(clickNo).find(".accord__value");
                    wrapperNo.width("0px");
                });
                clickYes.addClass("accordion__open");
                wrapperYes.width(String(firstVisible) + "px");
            }

            if ($("body").width() <= 768) {
                if ($(".menu__accordion").find(".accordion__open").length == 0) {
                    $(".menu>.container").find(".menu__title").fadeIn(300);
                } else {
                    $(".menu>.container").find(".menu__title").fadeOut(200);
                }
            }
        });
    });

    $(window).resize(() => {
        let firstActive = $(".accordion__open");
        let firstWrapper = firstActive.find(".accord__value");
        firstWrapper.css("width", "auto");
        let firstVisible = firstWrapper.find("p").outerWidth(true);
        let firstVisibleMin = firstWrapper.find("p").width();
        firstWrapper.width(String(firstVisible) + "px");

        if ($("body").width() <= 768) {
            if ($(".menu__accordion").find(".accordion__open").length == 0) {
                $(".menu>.container").find(".menu__title").fadeIn(300);
            } else {
                $(".menu>.container").find(".menu__title").fadeOut(0);
            }
        } else {
            $(".menu>.container").find(".menu__title").fadeIn(300);
        }

        $(".accord__value p").css("min-width", String(firstVisibleMin) + "px");
    });
});