import { model, Schema } from "mongoose";
import { taskSchema } from "./task.models";

const teamTaskSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Main task title
    title: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    // Main task divided into sub-tasks
    tasks: [taskSchema],
    collaborators: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const TeamTask = model("TeamTask", teamTaskSchema);
