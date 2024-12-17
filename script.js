function sendEmail() {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    let params = {
        to_name: "Turayog Owner", // Recipient name
        from_name: document.querySelector(".name").value, // User's name
        from_email: document.querySelector(".email").value, // User's email
        subject: "New Booking Inquiry", // Subject line
        message: `
            Number of Rooms: ${document.querySelector("#number1").value}, 
            Number of Guests: ${document.querySelector("#number2").value}, 
            Visiting Dates: ${document.querySelector(".range").value}
        `,
    };
    

    // Send the email using EmailJS
    emailjs.send("service_5b3w39s", "template_kcsgazo", params)
        .then(function(response) {
            alert("Email sent successfully!");
            console.log("EmailJS Success:", response);
        })
        .catch(function(error) {
            alert("Failed to send email. Please try again.");
            console.log("EmailJS Error:", error);
        });
}

// Attach the function to the submit button
document.querySelector("form").addEventListener("submit", sendEmail);
