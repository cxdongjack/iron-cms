// Homepage
FlowRouter.route('/', {
  action() {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/posts/:postId', {
    name: "postItem",
    action(params) {
      BlazeLayout.render('postItem');
    }
});
