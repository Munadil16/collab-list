import { model, Schema } from "mongoose";

export const taskSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
    assignee: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
      required: true,
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = model("Task", taskSchema);
