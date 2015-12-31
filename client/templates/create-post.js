Meteor.subscribe("posts");

Template.createPost.events({
    "submit .create-post-form": function(event) {
        event.preventDefault();
        var post = $('.create-post-form input').val();
        var code = Session.get("activeConference");

        Meteor.call("addPost", post, code);
    }
});
