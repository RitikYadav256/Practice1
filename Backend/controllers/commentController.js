let comments = []; // Temporary in-memory storage

// Get all comments
const getComments = (req, res) => {
    res.json(comments);
};

// Add a new comment
const addComment = (req, res) => {
    const { name, comment } = req.body;
    if (!name || !comment) {
        return res.status(400).json({ message: "Name and comment are required" });
    }

    const newComment = { name, comment };
    comments.push(newComment);

    res.json({ message: "Comment added successfully", comment: newComment });
};

module.exports = { getComments, addComment };
