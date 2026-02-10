app.get('/', (req, res) => {
  res.json({
    message: 'Hello from AUTOMATED CI/CD Pipeline! 🚀',
    version: '2.0.0',
    timestamp: new Date().toISOString()
  });
});