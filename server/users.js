/**
 * Created by namita on 9/17/15.
 */

Meteor.publish("users", function () {
    return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});
