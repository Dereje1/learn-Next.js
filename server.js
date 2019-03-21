const express = require('express');
const nextjs = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  // eslint-disable-next-line no-unused-vars
  server.post('/api/guestbook', (req, res) => {
    // A POSTED REQUEST HERE
  });

  server.get('/api/guestbook', (req, res) => {
    res.json({
      posts: [],
    });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
