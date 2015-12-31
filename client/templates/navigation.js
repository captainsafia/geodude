Meteor.subscribe("conferences");

Template.header.events({
    "submit .conf-select-form": function(event) {
        event.preventDefault();
        var code = $('.conf-select-form input').val();

        Meteor.call("addConference", code, function(error, result) {
            Session.set("activeConference", result);
        });
    }
});
