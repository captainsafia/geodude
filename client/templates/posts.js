Template.posts.helpers({
    posts: function() {
        if (Session.get("activeConference")) {
            var code = Session.get("activeConference");
            return Posts.find({
                code: code
            });
        } else {
            return false;
        }
    }
});

Template.registerHelper('formatDate', function(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "Posted On: ".concat(month, "/", day, "/", year);
});
