$('#register-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2,
        },
        phone: {
            required: true,
            minlength: 10,
            maxlength: 11,
            number: true
        },
        email: {
            required: true,
            email: true
        },
        address: {
            required: true,
            minlength: 5
        },
    },
    messages: {
        name: {
            required: '*Vui lòng nhập tên của bạn.',
            minlength: '*Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
        },
        phone: {
            required: '*Vui lòng nhập số điện thoại của bạn.',
            minlength: '*Số điện thoại quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: '*Số điện thoại quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        email: {
            required: '*Vui lòng nhập email của bạn.',
            email: '*Vui lòng nhập email đúng định dạng'
        },
        address: {
            required: '*Vui lòng nhập địa chỉ của bạn.',
            minlength:'*Địa chỉ của bạn quá ngắn.'
        },
    }
});

$('#register-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2,
        },
        phone: {
            required: true,
            minlength: 10,
            maxlength: 11,
            number: true
        },
        email: {
            required: true,
            email: true
        },
        address: {
            required: true,
            minlength: 5
        },
    },
    messages: {
        name: {
            required: '*Vui lòng nhập tên của bạn.',
            minlength: '*Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
        },
        phone: {
            required: '*Vui lòng nhập số điện thoại của bạn.',
            minlength: '*Số điện thoại quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: '*Số điện thoại quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        email: {
            required: '*Vui lòng nhập email của bạn.',
            email: '*Vui lòng nhập email đúng định dạng'
        },
        address: {
            required: '*Vui lòng nhập địa chỉ của bạn.',
            minlength:'*Địa chỉ của bạn quá ngắn.'
        },
    }
});


