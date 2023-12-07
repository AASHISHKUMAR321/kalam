import mongoose, { Document, Model, Schema } from "mongoose";

interface BlogInterface extends Document {
  title: string;
  date: Date;
}

const BlogSchema = new Schema<BlogInterface>({
  title: { type: String, required: true },
  date: { type: Date },
});

const BlogModel = mongoose.model<BlogInterface>("Blog", BlogSchema);

export default BlogModel;
