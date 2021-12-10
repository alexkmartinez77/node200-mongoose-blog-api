const server = require('./app');
const PORT = 8000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server is listening on ${PORT}.`))