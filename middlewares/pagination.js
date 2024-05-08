const paginate = (model) => {
    return (req, res, next) => {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const results = {};

        if (endIndex < model.length) {
            results.next = {
                page: page + 1,
                pageSize: pageSize
            };
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                pageSize: pageSize
            };
        }

        results.results = model.slice(startIndex, endIndex);
        res.paginatedResults = results;
        next();
    };
};

module.exports = paginate;
