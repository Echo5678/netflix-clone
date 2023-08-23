namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    SECRET: string;
    MONGODB_URI: string;
    EMAIL_SERVER: string;
    EMAIL_SERVER_USER: string;
    EMAIL_SERVER_PASSWORD: string;
    EMAIL_SERVER_PORT: number;
    EMAIL_SERVER_HOST: string;
    EMAIL_FROM: string;
  }
}
