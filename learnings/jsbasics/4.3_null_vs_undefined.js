
// undefined (System-Level Absence)
//  A: undefined is a primitive value automatically assigned to variables that have just been declared but have not yet been initialized.
//  B: undefined is the value returned by a function that does not have an explicit return statement.
//  C: undefined is the value returned when accessing a non-existent object property.
//  D: The typeof operator, when used on an undefined value, returns the string "undefined".


// null (Intentional Absence)
//  E: null is a primitive value that represents the intentional absence of any object value. It is an assignment value.
//  F: null must be explicitly assigned by the programmer. The system never assigns null on its own.
//  G (The Historical Anomaly): The typeof operator, when used on a null value, returns the string "object". This is a well-known, long-standing bug in the language specification.


// Comparison (The Relationship)
// H: null and undefined are loosely equal to each other (null == undefined is true).
// I: null and undefined are not strictly equal to each other (null === undefined is false)