window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

//Modal

$("[data-modal=consult]").on("click", function () {
    $(".overlay, #consult").fadeIn("slow");
});
$(".modal__close").on("click", function () {
    $(".overlay, #consult, #thanks").fadeOut("slow");
});

//Sender

$("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "sendform.php",
        data: $(this).serialize(),
    }).done(function () {
        $(this).find("input").val("");
        $("#consult").fadeOut();
        $(".overlay, #thanks").fadeIn("slow");

        $("form").trigger("reset");
    });
    return false;
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
        },
    });
}

validateForms("#consult-form");
validateForms("#consult form");

$("input[name=phone]").mask("8 (999) 999-99-99");