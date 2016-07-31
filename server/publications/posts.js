Meteor.publish("postsList", function() {
	return Posts.find({}, {sort: {createdAt: -1}, limit: 10, fields: {body: 0}});
});

Meteor.publish("postById", function(postId) {
	check(postId, String);
	return Posts.find({_id: postId});
});

