if (localStorage.getItem('listAdded') != null) {
    var listAddedString = localStorage.getItem('listAdded');
    var listAdded = JSON.parse(listAddedString);
    var htmlContent = '';
    var all = 0;
    String.prototype.splice = function (idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };
    for (key in listAdded) {
        htmlContent += '<tr>';
        htmlContent += '   <td width="100px" height="100px" class="package-img-cart">';
        htmlContent += '       <img width="100%" height="100%" src=\'' + listAdded[key].thumbnail + '\' alt="">';
        htmlContent += '   </td>';
        htmlContent += '   <td class="text-center package-name-cart">' + listAdded[key].name + '</td>';
        htmlContent += '   <td class="text-center package-price-cart">' + listAdded[key].price + '</td>';
        htmlContent += '   <td class="text-center">';
        htmlContent += '    <a class="mr-2 cart-add" style="text-decoration: none" href>+</a>';
        htmlContent += '   <span class="d-none package-id-cart">' + listAdded[key].id + '</span>'
        htmlContent += '    <input class="text-center package-quantity-cart" id="quantity" readonly autocomplete="off" type="text" size="1" name="count" value="' + listAdded[key].count + '">';
        htmlContent += '    <a class="ml-2 cart-minus" style="text-decoration: none" href="">-</a>';
        htmlContent += '   </td>';
        while (listAdded[key].price.indexOf(",") > 0) {
            listAdded[key].price = listAdded[key].price.replace(',', '');
        }
        while (listAdded[key].price.indexOf(" VND") > 0) {
            listAdded[key].price = listAdded[key].price.replace(' VND', '');
        }
        var total = (listAdded[key].count * parseInt(listAdded[key].price)).toString();
        if (total.length == 5) {
            total = total.splice(2, 0, ",");
        } else if (total.length == 6) {
            total = total.splice(3, 0, ",");
        } else if (total.length == 7) {
            total = total.splice(1, 0, ",");
            total = total.splice(5, 0, ",");
        } else if (total.length == 8) {
            total = total.splice(2, 0, ",");
            total = total.splice(6, 0, ",");
        } else if (total.length == 9) {
            total = total.splice(3, 0, ",");
            total = total.splice(7, 0, ",");
        } else if (total.length > 9) {
            alert("Đơn hàng của bạn quá lớn, hãy liên hệ với chúng tôi");
        }
        htmlContent += '   <td class="text-center ">' + total + ' VND</td>';
        htmlContent += '   <td class="text-center "><a href="" class="del-cart"><i class="fas fa-trash-alt"></i></a></td>';
        htmlContent += '</tr>';
        while (total.indexOf(",") > 0) {
            total = total.replace(',', '');
        }
        all = all + parseInt(total);

    }
    var formatAll = all.toString();
    console.log(formatAll);
    if (formatAll.length == 5) {
        formatAll = formatAll.splice(2, 0, ",");
    } else if (formatAll.length == 6) {
        formatAll = formatAll.splice(3, 0, ",");
    } else if (formatAll.length == 7) {
        formatAll = formatAll.splice(1, 0, ",");
        formatAll = formatAll.splice(5, 0, ",");
    } else if (formatAll.length == 8) {
        formatAll = formatAll.splice(2, 0, ",");
        formatAll = formatAll.splice(6, 0, ",");
    } else if (formatAll.length == 9) {
        formatAll = formatAll.splice(3, 0, ",");
        formatAll = formatAll.splice(7, 0, ",");
    } else if (formatAll.length > 9) {
        alert("Đơn hàng của bạn quá lớn, hãy liên hệ với chúng tôi");
    }
    htmlContent += '<td colspan="3">Mã giảm giá/ Quà tặng:</td>';
    htmlContent += ' <td colspan="3" class="text-center font-weight-bold"> Tổng tiền: ' + formatAll + ' VND</td>';
    $('#list-cart').html(htmlContent);
} else {
    alert('Chưa thêm gói tập nào!');
}

// $('#btn-pay').prev().click(function () {
//     location.reload();
// });

$('.cart-add').click(function () {
    var id = $(this).next().text();
    var name = $(this).parent().parent().find('.package-name-cart').text();
    var price = $(this).parent().parent().find('.package-price-cart').text();
    var thumbnail = $(this).parent().parent().find('.package-img-cart img').attr("src");
    var count = $(this).next().next().val();
    var package = {
        'id': id,
        'thumbnail': thumbnail,
        'price': price,
        'name': name,
        'count': count
    }
    var listAdded = {};
    if (localStorage.getItem('listAdded') != null) {
        var listAddedString = localStorage.getItem('listAdded');
        listAdded = JSON.parse(listAddedString);
        package.count++;
    }
    listAdded[package.id] = package;
    // đưa map vào local storage.
    localStorage.setItem('listAdded', JSON.stringify(listAdded));
});
$('.cart-minus').click(function () {
    var id = $(this).prev().prev().text();
    var name = $(this).parent().parent().find('.package-name-cart').text();
    var price = $(this).parent().parent().find('.package-price-cart').text();
    var thumbnail = $(this).parent().parent().find('.package-img-cart img').attr("src");
    var count = $(this).prev().val();
    var package = {
        'id': id,
        'thumbnail': thumbnail,
        'price': price,
        'name': name,
        'count': count
    }
    var listAdded = {};
    if (localStorage.getItem('listAdded') != null) {
        var listAddedString = localStorage.getItem('listAdded');
        listAdded = JSON.parse(listAddedString);
        if (count > 1) {
            package.count--;
        } else {
            alert("Hãy click vào biểu tượng thùng rác nếu bạn muốn xóa gói tập này!");
        }
    }
    listAdded[package.id] = package;
    localStorage.setItem('listAdded', JSON.stringify(listAdded));
});
$('.del-cart').click(function () {
    var id = $(this).parent().prev().prev().find('.package-id-cart').text();
    var name = $(this).parent().parent().find('.package-name-cart').text();
    var price = $(this).parent().parent().find('.package-price-cart').text();
    var thumbnail = $(this).parent().parent().find('.package-img-cart img').attr("src");
    var count = $(this).parent().prev().prev().find('.package-quantity-cart').val();
    var package = {
        'id': id,
        'thumbnail': thumbnail,
        'price': price,
        'name': name,
        'count': count
    }
    var listAdded = {};
    if (localStorage.getItem('listAdded') != null) {
        var listAddedString = localStorage.getItem('listAdded');
        listAdded = JSON.parse(listAddedString);
        delete listAdded[package.id];
    }

    localStorage.setItem('listAdded', JSON.stringify(listAdded));
});
$('#btn-pay').click(function () {
    var listAddedString = localStorage.getItem('listAdded');
    if (listAddedString != null) {
        var listAdded = JSON.parse(listAddedString);
        var customerName = $('#pay-name').val();
        var customerPhone = $('#pay-phone').val();
        listAdded['totalPrice'] = formatAll;
        listAdded['customerName'] = customerName;
        listAdded['customerPhone'] = customerPhone;
        if (customerName.length > 2 && customerPhone.length > 9 && customerPhone.length <= 11) {
            $.ajax({
                url: '/cart/complete',
                data: listAdded,
                method: 'POST',
                success: function (data, textStatus, jqXHR) {
                    alert("Gửi đơn hàng thành công")
                    console.log(data);
                    localStorage.clear();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert(textStatus);
                }
            });
        } else if (customerName.length == 0 && customerPhone.length == 0) {
            alert('Bạn chưa nhập tên và số điện thoại')
        } else if (customerName.length == 0) {
            alert('Bạn chưa nhập tên');
        } else if (customerPhone.length == 0) {
            alert('Bạn chưa nhập số điện thoại')
        }else if (customerName.length < 3)
        {
            alert('Tên bạn quá ngắn. Vui lòng nhập lại')
        }else if (customerPhone.length != 10 && customerPhone.length != 11)
        {
            alert('Số điện thoại của bạn không hợp lệ. Vui lòng nhập lại')
        }
    }
});