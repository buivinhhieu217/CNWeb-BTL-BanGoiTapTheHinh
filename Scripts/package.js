$('.btn-add').click(function () {
    var id = $(this).parent().parent().find('.package-id').text();
    var thumbnail = $(this).parent().parent().find('.package-img img').attr("src");
    var price = $(this).parent().parent().find('.package-price').text();
    var name = $(this).parent().parent().find('.package-name').text();
    var package = {
        'id': id,
        'thumbnail': thumbnail,
        'price': price,
        'name': name,
        'count': 1
    }
    var listAdded = {};
    if (localStorage.getItem('listAdded') != null) {
        var listAddedString = localStorage.getItem('listAdded');
        listAdded = JSON.parse(listAddedString);
        var currentAdd = listAdded[id];
        if (currentAdd != null) {
            package.count += currentAdd.count;
        }
    }
    if (package.count > 0) {
        // đưa message vào lại trong map
        listAdded[package.id] = package;
    } else {
        delete listAdded[package.id];
    }
    localStorage.setItem('listAdded', JSON.stringify(listAdded));
    alert("Đã thêm vào giỏ hàng!");
    location.reload();
});
