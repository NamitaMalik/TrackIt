/**
 * Created by namita on 9/9/15.
 */

Tasks = new Mongo.Collection("tasks");

Tasks.allow({
    insert: function (userId, task) {
        return userId && task.owner === userId;
    },
    update: function (userId, task, fields, modifier) {
        return userId && task.owner === userId;
    },
    remove: function (userId, task) {
        return userId && task.owner === userId;
    }
});