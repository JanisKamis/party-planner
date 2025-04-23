let partyDetails = {
    date: null,
    description: null,
    inviteMessage: null,
};

let attendees = [];

document.getElementById("save-party-details").addEventListener("click", function() {
    const partyDate = document.getElementById("party-date").value;
    const partyDescription = document.getElementById("party-description").value;

    if (partyDate && partyDescription) {
        partyDetails.date = partyDate;
        partyDetails.description = partyDescription;
        alert("Party details saved successfully!");
    } else {
        alert("Please fill out all fields!");
    }
});

document.getElementById("save-invite").addEventListener("click", function() {
    const inviteMessage = document.getElementById("invite-message").value;

    if (inviteMessage) {
        partyDetails.inviteMessage = inviteMessage;
        alert("Invite message saved successfully!");
    } else {
        alert("Please write an invite message!");
    }
});

document.getElementById("register").addEventListener("click", function() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    if (firstName && lastName) {
        const attendee = {
            firstName: firstName,
            lastName: lastName,
        };
        attendees.push(attendee);
        displayAttendees();
        alert("You have registered for the party!");
    } else {
        alert("Please provide your full name!");
    }
});

function displayAttendees() {
    const attendeeList = document.getElementById("attendee-list");
    attendeeList.innerHTML = '';

    attendees.forEach(attendee => {
        const listItem = document.createElement("li");
        listItem.textContent = `${attendee.firstName} ${attendee.lastName}`;
        attendeeList.appendChild(listItem);
    });
}
