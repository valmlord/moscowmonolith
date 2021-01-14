// HAMBURGER

window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu"),
        menuItem = document.querySelectorAll(".menu__item"),
        hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger_active");
            menu.classList.toggle("menu_active");
        });
    });
});

(function ($) {

    //Modal

    $("[data-modal=consult]").on("click", function () {
        $(".overlay, #consult").fadeIn("slow");
    });
    $("[data-modal=call").on("click", function () {
        $(".overlay, #call").fadeIn("slow");
    });
    $(".modal__close").on("click", function () {
        $(".overlay, #consult, #thanks, #call").fadeOut("slow");
    });

    //Validator

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: "required",
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!"),
                },
                phone: "Пожалуйста введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты",
                },
            },
        });
    }

    validateForms("#consult-form");
    validateForms("#consult form");
    validateForms("#call form");

    $("input[name=phone]").mask("8 (999) 999-99-99");

    //Mailer

    $("form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "sendform.php",
            data: $(this).serialize(),
        }).done(function () {
            $(this).find("input").val("");
            $("#consult, #call").fadeOut();
            $(".overlay, #thanks").fadeIn("slow");

            $("form").trigger("reset");
        });
        return false;
    });

    //Smooth Scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $(".pageup").fadeIn();
        } else {
            $(".pageup").fadeOut();
        }
    });

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px",
        });
        return false;
    });

    // Animation

    new WOW().init();
})(jQuery);