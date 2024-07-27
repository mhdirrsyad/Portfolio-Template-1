// Function Toogle
function toogleDetail(e) {
    // Variabel Finding Target
    const target = $(e.target)

    // Variable Finding and Access to get -> parent element -> child element from target/event button
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    // Toggle Animation
    $(detail).slideToggle()

    // if else for style toggle button
    if ($(target).hasClass("active")) {
        // Change HTML from target
        $(target).html("More Info").removeClass("active")
    } else {
        // Change HTML from target
        $(target).html("Less Info").addClass("active")
    }
}

// Function Form Submit
function onFormSubmit(e) {
    e.preventDefault()

    // Variable Finding -> email id, subject id, message id
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    // console.log($(subject).val())

    // if else for validation
    if (!$(email).val()) {
        alert("Email is required")
    } else if (!$(subject).val()) {
        alert("Subject is required")
    } else if (!$(message).val()) {
        alert("Message is required")
    } else {
        // set value input blank
        alert("Form Submitted")
        // set value black when form submit
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}