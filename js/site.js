function uponSubmit(event) {
    event.preventDefault(); //prevents redirection upon form submit
    var formValues = $('form').serializeArray();

    var selectedQuestion = formValues[0].value;
    var submissionName = formValues[1].value;
    var submissionFeedback = formValues[2].value;

    if (selectedQuestion == 1) {
        $(".feedback").append("<p>" + submissionName + ": " + submissionFeedback + "</p>");
    } else {
        $(".second_feedback").append("<p>" + submissionName + ": " + submissionFeedback + "</p>");
    }

    $(".submit-question").val("1");
    $(".submit-name").val("");
    $(".submit-feedback").val("");
}