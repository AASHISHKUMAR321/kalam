import mongoose, { ConnectOptions } from "mongoose";
class Database {
  private readonly URI: string;
  private readonly options: ConnectOptions = {
    autoIndex: true,
    autoCreate: true,
  };

  constructor(uri: string) {
    this.URI = uri;
  }
  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.URI, this.options);
      console.log(`Connected to ${this.URI}`);
    } catch (err) {
      console.log(`error connecting to database${err}`);
    }
  }
  disconnect(): void {
    mongoose.disconnect();
    console.log(`Disconnected from database`);
  }
}

export default Database;
