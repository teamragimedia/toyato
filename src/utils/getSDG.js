const getSDG = (num) => {
  try {
    return new URL(`../assets/sdgs/${num}.jpg`, import.meta.url).href;
  } catch {
    return "";
  }
};

export default getSDG;
