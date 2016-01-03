Template.posts.helpers({
    posts: function() {
        if (Session.get("activeConference")) {
            var code = Session.get("activeConference");
            return Posts.find({
                code: code,
                votes: {$gt: -5}
            });
        } else {
            return false;
        }
    }
});

Template.posts.events({
    "click .upvote": function(event) {
        event.preventDefault();
        var postId = event.target.id;
        Meteor.call("upvote", postId);
    },
    "click .downvote": function(event) {
        event.preventDefault();
        var postId = event.target.id;
        Meteor.call("downvote", postId);
    }
});

Template.registerHelper('formatDate', function(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "Posted On: ".concat(month, "/", day, "/", year);
});
