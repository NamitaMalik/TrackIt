/**
 * Created by namita on 9/17/15.
 */

Meteor.publish("tasks", function () {
    return Tasks.find({
        $or:[
            {$and:[
                {"public": true},
                {"public": {$exists: true}}
            ]},
            {$and:[
                {owner: this.userId},
                {owner: {$exists: true}}
            ]}
        ]});
});
