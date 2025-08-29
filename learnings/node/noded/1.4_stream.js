const fs = require("fs");

const { Transform } = require("stream");

const rockCrusher = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

const miningExcavator = fs.createReadStream("iron_ore_mine.txt");
const smeltingFurnace = fs.createWriteStream("processed_ore.txt");

miningExcavator.pipe(rockCrusher).pipe(smeltingFurnace);

smeltingFurnace.on("finish", () => {
  console.log(
    "Advanced pipeline complete. Ore has been crushed and processed."
  );
});


