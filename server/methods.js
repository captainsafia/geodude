Meteor.methods({
    addConference: function(code) {
        return Conferences.insert({
            code: code,
            created: new Date()
        });
    }
});
