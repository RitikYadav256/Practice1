const express = require("express");
const path = require("path");
const app = express();
const frontendPath = path.join(__dirname, "../form/dist");
app.use(express.static(frontendPath));
app.get("*", (req, res) => {
  console.log(`Requested URL: ${req.url}`);
  res.sendFile(path.join(frontendPath, "index.html"));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
