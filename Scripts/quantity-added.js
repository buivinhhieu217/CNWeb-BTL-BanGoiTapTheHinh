if (localStorage.getItem('listAdded') != null) {
    var listAddedString = localStorage.getItem('listAdded');
    listAdded = JSON.parse(listAddedString);
    var quantityAdded = Object.keys(listAdded).length;
    $('#added-quantity').html(quantityAdded);
}