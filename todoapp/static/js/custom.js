// Select
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});




document.addEventListener("DOMContentLoaded", function () {
    var options = {
        defaultDate: new Date(2020, 02, 20),
        setDefaultDate: true,
        format: 'yyyy-mm-dd',
    };
    var elems = document.querySelector(".datepicker");
    var instance = M.Datepicker.init(elems, options);
    // instance.open();
    instance.setDate();
});