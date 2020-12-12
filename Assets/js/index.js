console.log('connected');

$(document).ready(function () {

    $("#gridCheck").click(function () {
        if($("#gridCheck").prop('checked')) {
            $('#submit-button').removeAttr('disabled');
        } else {
            $('#submit-button').prop('disabled', true);
        }
    })
});