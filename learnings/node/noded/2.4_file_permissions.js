//  A (The Nature of Permissions): File permissions are a () (quality) managed by the underlying Operating System, not Node.js itself. Node.js's fs module provides an interface to perceive and manipulate this quality.
//  B (The Triad of Control): Permissions are defined for three distinct entities: the User (the file's owner), the Group (the owner's group), and Others (everyone else).
//  C (The Triad of Action): For each entity, there are three primary permissions: Read (perceive the content), Write (change the content), and Execute (run the file as a program).
//  D (The Octal Representation): Permissions are commonly represented as a three-digit octal (base-8) number. Each digit corresponds to User, Group, and Others, respectively. The value of the digit is the sum of the allowed actions: Read=4, Write=2, Execute=1.


// Example: 754 means:
// User: 7 (4+2+1) -> Read, Write, Execute
// Group: 5 (4+0+1) -> Read, Execute
// Others: 4 (4+0+0) -> Read only

// E (Perception of ()): The fs.stat() and fs.statSync() methods are used to perceive a file's metadata. The returned stats object contains a mode property, which is a number that encodes the file's permissions.
// F (Modification of ()): The fs.chmod() and fs.chmodSync() methods are the Karma (actions) used to change a file's permission (), using the octal notation.

