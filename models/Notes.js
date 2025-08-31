const NotesSchema = new Schema({
  title: {           // field name should be title, not name.title
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Note", NotesSchema);
