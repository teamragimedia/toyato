const getImage = (name) => {
  if (!name) {
    return "https://via.placeholder.com/300x180?text=No+Image";
  }

  // ✅ If image is uploaded (from backend)
  if (!name.includes(".")) {
    // means it's old format name → fallback to assets
    const formats = ["jpg", "png", "jpeg"];

    for (let format of formats) {
      try {
        return new URL(`../assets/images/${name}.${format}`, import.meta.url)
          .href;
      } catch {
        continue;
      }
    }
  }

  // ✅ NEW: backend uploaded image
  return `http://localhost:5000/uploads/${name}`;
};

export default getImage;
