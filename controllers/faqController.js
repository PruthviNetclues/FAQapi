const faqModel = require('../models/faqModel');

exports.getAllFaqs = (req, res) => {
    const faqs = faqModel.getAll();
    res.json(faqs);
};

exports.getFaqById = (req, res) => {
    const id = parseInt(req.params.id);
    const faq = faqModel.getById(id);
    if (!faq) {
        res.status(404).json({ message: "FAQ not found" });
    } else {
        res.json(faq);
    }
};

exports.createFaq = (req, res) => {
    const newFaq = req.body;
    const faq = faqModel.create(newFaq);
    res.status(201).json(faq);
};

exports.updateFaq = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedFaq = req.body;
    const faq = faqModel.update(id, updatedFaq);
    if (!faq) {
        res.status(404).json({ message: "FAQ not found" });
    } else {
        res.json(faq);
    }
};

exports.softDeleteFaq = (req, res) => {
    const id = parseInt(req.params.id);
    const result = faqModel.softDelete(id);
    if (!result) {
        res.status(404).json({ message: "FAQ not found" });
    } else {
        res.json(result);
    }
};
