Conferences = new Mongo.Collection("conferences");
Posts = new Mongo.Collection("posts");

Meteor.publish("conferences", function() {
    return Conferences.find();
});

Meteor.publish("posts", function() {
    return Posts.find();
});
