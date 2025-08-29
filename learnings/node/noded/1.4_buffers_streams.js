// Concept: Buffer
//  A (The Nature of Buffers): Buffers are instances of the Buffer class, designed to handle raw binary data.
//  B (The Reason for Buffers): Buffers exist because traditional JavaScript strings are UTF-8 encoded and are not suitable for handling raw byte streams, such as those from files or network packets.
//  C (Memory Allocation): Buffers represent a fixed-size chunk of memory allocated outside the V8 JavaScript engine heap. Once allocated, a Buffer's size cannot be changed.
//  D (Buffer Creation): Buffers can be created from strings, arrays of integers, or by allocating a specific size using methods like Buffer.from() and Buffer.alloc().
//  E (Interaction): A Buffer's contents can be perceived as human-readable text by calling its .toString() method with a specified encoding (e.g., 'utf8').

//ADE Buffers are raw data containers that can be created from strings and converted back.
const oreCrate = Buffer.from("Hello World");
console.log("The Raw Ore Crate (Buffer):", oreCrate);

console.log("The Assay Report (.toString()):", oreCrate.toString());

// [string]{Hello World
// }----(Buffer.from)---->[hexadecimal numbers]{ <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>}


// Concept: Stream
//  F (The Nature of Streams): Streams are an abstract interface for working with flowing data. They are built upon the EventEmitter class.
//  G (The Purpose of Streams): Streams enable the processing of large amounts of data in manageable chunks, without needing to load the entire data set into memory.
//Streams process data in chunks to avoid high memory usage.
const fs = require("fs");

fs.writeFileSync(
  "iron_ore_mine.txt",
  `
Iron Ore Batch Report
----------------------
- Hematite content: 72%
- Magnetite content: 25%
- Silica impurities: 3%

End of Report
`
);

console.log("iron_ore_mine.txt created successfully!");
// Step 2: Set up the pipeline (Mining → Smelting)
const miningExcavator = fs.createReadStream("iron_ore_mine.txt");
const smeltingFurnace = fs.createWriteStream("furnace_output_efficient.txt");
miningExcavator.pipe(smeltingFurnace);
smeltingFurnace.on("finish", () => {
  console.log("Pipeline operation complete. Ore has been processed.");
});


//  H (Core Stream Types): There are four fundamental stream types: Readable (a source of data), Writable (a destination for data), Duplex (both readable and writable), and Transform (a duplex stream that modifies data as it passes through).
//  I (The Pipe ): The .pipe() method is the primary mechanism for connecting a Readable stream's output directly to a Writable stream's input, managing the data flow and backpressure automatically.
//  J (Event-Driven Nature): Streams emit events (e.g., data, end, error) that can be listened to in order to handle the data flow manually.


// [buffer]{single object that holds a chunk of raw data in memory.}
// every piece of text data in Node.js, there is an underlying raw binary representation that a Buffer can hold
// [buffer]{helps to interact with files , network}

// [ String]{: 'Text'} ↔ [: Buffer]{: Raw Bytes}
// [JavaScript String] {Human Text} ↔ [Buffer] {Raw Binary Bytes}

// (Create) [String] --(Buffer.from)--> [Buffer]
// (Use) [Buffer] --(.toString())--> [String]

// [String] --(Buffer.from())→ [Buffer] --(.toString())→ [String]

// [Buffer] ⊂ {Fixed-Size Collection of Bytes}
// [Buffer] ⊂ {A Fixed-Size Chunk of Memory Outside V8}


// (stream){ process that moves many chunks of data (Buffers) over time without holding them all in memory at once}

// [Large Data Source] --(fs.readFileSync())→ [Giant Buffer] ⇒ {Memory Overload → CRASH}
// [Huge File] --(fs.readFileSync)--> [Giant Buffer] ⇒ {CRASH: Memory Overload}

// [Huge File] --(createReadStream)--> [Process] ⇒ (emits) [Buffer1], [Buffer2], [Buffer3], ..

// [Readable Stream] --( .pipe())--> [Writable Stream]




// [Source] --(Stream Process)--> [Chunk] → [Chunk] → [Chunk] --(Stream Process)--> [Destination]