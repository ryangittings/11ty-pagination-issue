const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

async function stall(stallTime = 3000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('searchFor', async (collection) => {
    await stall();
    return collection
  });
  
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {  
    name: "serverless", // The serverless function name for the permalink object 
    functionsDir: "./netlify/functions/",
    copy: [
      '.cache/eleventy-fetch/'
    ]
  }); 

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    passthroughFileCopy: true,
  };
};
