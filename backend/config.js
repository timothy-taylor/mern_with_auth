module.exports.config = {
  server: {
    port: process.env.PORT || 3001,
  },

  db: {
    name: process.env.DB_NAME,
    url: process.env.MONGODB_URI,
  },
};

