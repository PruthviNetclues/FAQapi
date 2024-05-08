const express = require('express');
const faqRoutes = require('./routes/faqRoutes');
const paginationRoutes = require('./routes/paginationRoutes');
const logger = require('./middlewares/logger');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(logger);

app.use('/api/faqs', faqRoutes);
app.use('/api/pagination', paginationRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
