// Fail fast at startup if the JWT signing secret is not provided.
// Never commit a real secret here — set JWT_SECRET in the environment
// (Render dashboard, or a local .env file which is gitignored).
if (!process.env.JWT_SECRET) {
    throw new Error(
        'Missing required environment variable: JWT_SECRET. ' +
        'Set it to a long random string, e.g. run `openssl rand -base64 64` and paste the output.'
    );
}

const config = {
    PORT: process.env.PORT || 8080,
    DB_CONNECT: process.env.DB_CONNECT || 'mongodb://localhost:27017/horror-time',
    JWT_SECRET: process.env.JWT_SECRET
}

module.exports = config;
