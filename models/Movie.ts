import mongoose from "mongoose";

interface IMovie {
  _id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

const movieSchema = new mongoose.Schema<IMovie>({
  description: { type: String, required: true },
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  genre: { type: String, required: true },
  duration: { type: String, required: true },
});

const Movie =
  mongoose.models?.Movie || mongoose.model<IMovie>("Movie", movieSchema);

export default Movie;
