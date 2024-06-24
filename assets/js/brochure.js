document.addEventListener('DOMContentLoaded', function() {
    // Function to validate form fields
    jQuery.validator.addMethod("lettersOnly", function (value, element) {
        return /^[a-zA-Z\s]*$/.test(value);
    }, "Please enter alphabets only");

    jQuery.validator.addMethod("nowhitespace", function (value, element) {
        return !/^\s/.test(value);
    }, "White space not allowed");

    jQuery.validator.addMethod("numbersOnly", function (value, element) {
        return /^[0-9]{10}$/.test(value);
    }, "Please enter 10 numbers only");

    jQuery.validator.addMethod("emailvalidate", function (value, element) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    }, "Please enter correct format");

    jQuery.validator.addMethod("messagevalidate", function (value, element) {
        return /^[a-zA-Z0-9.,-\s]*$/.test(value);
    }, "Special characters are not allowed");

    $("#enquiryForm").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        
        rules: {
            modalname: {
                required: true,
                nowhitespace: true
            },
            modalmobile: {
                required: true,
                nowhitespace: true,
                numbersOnly: true
            },
            modalemail: {
                required: true,
                nowhitespace: true,
                emailvalidate: true
            }
        },
        messages: {
            modalname: {
                required: "Name is required"
            },
            modalmobile: {
                required: "Mobile number is required"
            },
            modalemail: {
                required: "Email is required",
                emailvalidate: "The email should be in the correct format"
            }
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        
        submitHandler: function (form) {
            // Disable the submit button
            $("#submitBtn").prop("disabled", true);
            
            // Use AJAX to submit the form
            var formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success && data.show_download_link) {
                    // Show the download link
                    document.getElementById('download-readMore').style.display = 'block';
                } else {
                    // Handle errors
                    console.error(data.error);
                }
                // Re-enable the submit button
                $("#submitBtn").prop("disabled", false);
            })
            .catch(error => {
                console.error('Error:', error);
                // Re-enable the submit button
                $("#submitBtn").prop("disabled", false);
            });
        }
    });
    
    var form = document.getElementById('enquiryForm');
    var inputIds = ['modalname', 'modalmobile', 'modalemail'];  // IDs of the input elements
    var submitButton = form.querySelector('button[type="submit"]');

    inputIds.forEach(function (id) {
        var input = form.querySelector(`#${id}`);
        input.addEventListener('input', function () {
            var isAnyEmpty = inputIds.some(function (id) {
                return form.querySelector(`#${id}`).value.trim() === '';
            });

            submitButton.disabled = isAnyEmpty;
        });
    });
});
