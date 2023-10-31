const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Importa cors

const app = express();

app.use(express.urlencoded({ extended: false }));

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Habilita CORS para todas las rutas
app.use(cors());

// Define tus rutas
app.use("/api", require('./routes/auth.routes'));
app.use("/api", require('./routes/tasks.routes.js'));
app.use("/api", require('./routes/projects.routes.js'));
app.use("/api", require('./routes/dependent_tasks.routes.js'));
app.use("/api", require('./routes/guests.routes.js'));
app.use("/api", require('./routes/notifications.routes.js'));
app.use("/api", require('./routes/users.routes.js'));

app.use((req, res) => {
    res.status(404).end('404 not found');
});

module.exports = app;
