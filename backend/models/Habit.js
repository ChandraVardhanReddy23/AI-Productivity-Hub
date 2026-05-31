const mongoose =
  require("mongoose");

const habitSchema =
  new mongoose.Schema({

    title: {
      type: String,
      required: true
    },

    category: {
      type: String,
      default: "General"
    },

    completed: {
      type: Boolean,
      default: false
    },

    streak: {
      type: Number,
      default: 0
    },

    history: {
      type: [String],
      default: []
    },

    lastCompleted: {
      type: String,
      default: null
    },

    userId: {
      type:
        mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true
    }
    

  });
habitSchema.set(
  "toJSON",
  {
    virtuals: true
  }
);

habitSchema.virtual("id")
  .get(function () {
    return this._id.toHexString();
  });

habitSchema.set(
  "toJSON",
  {
    virtuals: true,
    versionKey: false,
    transform: function (
      doc,
      ret
    ) {
      delete ret._id;
    }
  }
);
module.exports =
  mongoose.model(
    "Habit",
    habitSchema
  );