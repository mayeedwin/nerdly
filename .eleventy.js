const fetch = require("node-fetch");

// docs: https://www.11ty.io/docs/config/
module.exports = eleventyConfig => {
  // eleventyConfig.addFilter( "myFilter", () => {});
  eleventyConfig.addPassthroughCopy("jenga");
  // eleventyConfig.addPassthroughCopy("**/*.js");
  // eleventyConfig.addPassthroughCopy("**/*.webmanifest");
  eleventyConfig.addCollection("posts", collection => {
    return [...collection.getFilteredByGlob("./src/**/*.md")]
      .filter(p => !p.data.draft)
      .reverse();
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
