import { Schema, model, Document } from "mongoose";

// Define TypeScript interface
export interface IUserAction extends Document {
  userId: string;
  page: string;
  action: string;
  timestamp: Date;
}

// Define Mongoose schema
const UserActionSchema = new Schema<IUserAction>({
  userId: { type: String, required: true },
  page: { type: String, required: true },
  action: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Export Mongoose model
const UserAction = model<IUserAction>("UserAction", UserActionSchema);
export default UserAction;  // ✅ Only one default export
