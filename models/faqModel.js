let faqs = [
    { id: 1, question: "What is Node.js?", answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.", status: "active" },
    { id: 2, question: "What is Express.js?", answer: "Express.js is a web application framework for Node.js.", status: "active" }
];

const getAll = () => faqs.filter(faq => faq.status !== 'deleted');

const getById = (id) => {
    const faq = faqs.find(f => f.id === id && f.status !== 'deleted');
    return faq ? { ...faq } : null;
};

const create = (newFaq) => {
    const id = faqs.length + 1;
    const faq = { id, ...newFaq, status: 'active' };
    faqs.push(faq);
    return { ...faq };
};

const update = (id, updatedFaq) => {
    const index = faqs.findIndex(f => f.id === id && f.status !== 'deleted');
    if (index !== -1) {
        faqs[index] = { ...faqs[index], ...updatedFaq };
        return { ...faqs[index] };
    }
    return null;
};

const softDelete = (id) => {
    const index = faqs.findIndex(f => f.id === id && f.status !== 'deleted');
    if (index !== -1) {
        faqs[index].status = 'deleted';
        return { message: 'FAQ deleted successfully' };
    }
    return null;
};

module.exports = { getAll, getById, create, update, softDelete };
