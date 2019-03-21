const express = require('express');
const nextjs = require('next');
const utility = require('./utility');

const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.post('/api/guestbook', (req, res) => {
    // A POSTED REQUEST HERE
    const { name, message } = req.body;
    if (name && message) {
      utility.setMessages(req.body);
      res.json({ status: 'success' });
    } else res.json({ status: 'error' });
  });

  server.get('/api/guestbook', (req, res) => {
    res.json({
      posts: utility.getMessages(),
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
