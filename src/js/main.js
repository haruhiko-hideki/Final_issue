$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 10000
    });
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});


$(function() {

    $("#js-register-form").validate({

        rules: {
            form_name: {
                required: true
            },
            form_email: {
                required: true,
                email: true
            },
            form_tel: {
                required: true,
                digits: true
            },
            form_pswd1: {
                required: true,
                minlength: 6
            }

        },
        messages: {
            form_name: {
                required: "Field is required "
            },
            form_email: {
                required: "Field is required",
                email: "Your imail is incorrect"
            }
        },
        submitHandler: function () {
            toastr.success('We got your order');
            $('#js-register-form').get(0).reset();
            return false;
        }

    });

});
$(function() {

    $("#Subscribe").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Field is required",
                email: "Your imail is incorrect"
            }
        },

        submitHandler: function () {
            toastr.success('We got your order');
            $('#Subscribe').get(0).reset();
            return false;
        }
    });
});

    $(document).ready(function () {
        $('#table__people').DataTable({
            "ajax": {
                "url": "data/data.json",
                "dataSrc": ""
            },
            "columns": [
                {"data": "Name"},
                {"data": "Street Address"},
                {"data": "City"},
                {"data": "Postal / Zip"}
            ]
        });

    });


