export const config = {
  dir: {
    input: "content/_pages",
    data: "../_data",
    includes: "../../_includes",
  }
};

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"content/_images": "_images"});
}
