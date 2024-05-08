const paginate = require('../middlewares/pagination');
const faqModel = require('../models/faqModel');

exports.getFaqsByPage = (req, res) => {
    res.json(res.paginatedResults);
};
