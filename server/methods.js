Meteor.methods({
    addConference: function(code) {
        if (Conferences.findOne({code: code})) {
            return Conferences.findOne({
                code: code
            })["_id"];
        } else {
            return Conferences.insert({
                code: code,
                created: new Date()
            });
        }
    },

    addPost: function(post, code) {
        return Posts.insert({
            content: post,
            code: code,
            created: new Date()
        });
    }
});
