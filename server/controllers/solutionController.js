const Solution = require("../models/Solution");

// SAFE PARSE
const parseSafe = (data) => {
  try {
    return typeof data === "string" ? JSON.parse(data) : data || [];
  } catch {
    return [];
  }
};

// GET
const getSolutions = async (req, res) => {
  const data = await Solution.find();
  res.json(data);
};

// CREATE
const createSolution = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const newSolution = new Solution({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      problem: req.body.problem,
      solution: req.body.solution,
      image: req.file ? req.file.filename : "",
      features: parseSafe(req.body.features),
      sdgs: parseSafe(req.body.sdgs),
      status: req.body.status || "ongoing",
    });

    await newSolution.save();
    res.json(newSolution);
  } catch (err) {
    console.error("CREATE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateSolution = async (req, res) => {
  try {
    const updatedData = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      problem: req.body.problem,
      solution: req.body.solution,
      features: parseSafe(req.body.features),
      sdgs: parseSafe(req.body.sdgs),
      status: req.body.status,
    };

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updated = await Solution.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true },
    );

    res.json(updated);
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteSolution = async (req, res) => {
  await Solution.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// 👍 LIKE
const likeSolution = async (req, res) => {
  try {
    const updated = await Solution.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true },
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👎 DISLIKE
const dislikeSolution = async (req, res) => {
  try {
    const updated = await Solution.findByIdAndUpdate(
      req.params.id,
      { $inc: { dislikes: 1 } },
      { new: true },
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔄 SWITCH LIKE → DISLIKE
const switchToDislike = async (req, res) => {
  try {
    const solution = await Solution.findById(req.params.id);

    const updated = await Solution.findByIdAndUpdate(
      req.params.id,
      {
        likes: Math.max(0, solution.likes - 1),
        dislikes: solution.dislikes + 1,
      },
      { new: true },
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔄 SWITCH DISLIKE → LIKE
const switchToLike = async (req, res) => {
  try {
    const solution = await Solution.findById(req.params.id);

    const updated = await Solution.findByIdAndUpdate(
      req.params.id,
      {
        dislikes: Math.max(0, solution.dislikes - 1),
        likes: solution.likes + 1,
      },
      { new: true },
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// RESET
const resetLikes = async (req, res) => {
  const solution = await Solution.findByIdAndUpdate(
    req.params.id,
    { likes: 0, dislikes: 0 },
    { new: true },
  );
  res.json(solution);
};

const getStats = async (req, res) => {
  try {
    const solutions = await Solution.find();

    const total = solutions.length;

    const completed = solutions.filter((s) => s.status === "completed").length;

    const categories = new Set(solutions.map((s) => s.category)).size;

    const sdgSet = new Set();
    solutions.forEach((s) => {
      s.sdgs?.forEach((sdg) => sdgSet.add(sdg));
    });

    const sdgs = sdgSet.size;

    res.json({ total, completed, categories, sdgs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getSolutions,
  createSolution,
  updateSolution,
  getStats,
  deleteSolution,
  likeSolution,
  dislikeSolution,
  resetLikes,
  switchToLike,
  switchToDislike,
};
