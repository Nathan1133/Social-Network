const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


const ReactionsSchema = new Schema(
    {
    // set custom id to avoid confusion with parent comment's _id field
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
@@ -29,7 +30,7 @@ const ReactionSchema = new Schema(
    }
);


const ThoughtsSchema = new Schema(
    {
    thoughtText: {
        type: String,
@@ -44,8 +45,9 @@ const ThoughtSchema = new Schema(
    },
    username: {
        type: String,
        required: true
    },
    // use ReactionsSchema to validate data for a reply
    reactions: [ReactionsSchema]
    },
    {
@@ -57,10 +59,12 @@ const ThoughtSchema = new Schema(
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
// get total count of reactions
ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);
// create the Thoughts model using the Thoughts Schema
const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thought; 
module.exports = Thoughts; 