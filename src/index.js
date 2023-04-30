const express = require('express')
const app = express()
const port = 8080

const onePageArticleCount = 10


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/newFeeds', async (req, res) => {
    // Get limit and offset from query parameters, set default values if not provided
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
  
    try {
      // Query the database for news articles with pagination
      const newsArticles = await newsArticleModel.find({})
        .skip(offset)
        .limit(limit)
        .lean()
        .exec();
  
      res.json(newsArticles);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to get news articles' });
    }
  });

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;