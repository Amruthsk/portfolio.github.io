let resources = 0;

module.exports = {
  useResource: function () {
    resources++;
    console.log("Resources used:", resources);
  },
};

//[module]{exports={function()}, require, module, __filename, and __dirname.}
