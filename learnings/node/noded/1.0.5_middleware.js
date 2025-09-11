// [Middleware],[The next Function],[The Middleware Chain]
//  (Middleware Processing)(res.send())
//  [[The Middleware Chain]]


// [Middleware]
// [❖ Middleware  ([req], [res], [next])]

// [[Function]] ⊃ *[Middleware]
// [Middleware] ⇔ {Signature: (req, res, next)}


// (Middleware Processing)
// 3 ()
// 1)(change)@[req], [res] and (pass)@[new Middleware]
// 2)(send)@[res]  - end cycle
// 3)(specialized error-handling middleware)
// {no next, no res}---> {hanging}

// [Middleware] → (Modify req/res) + (next())
// [Middleware] → (send | json) @ [res]
// [Middleware] → (next){error}

// [Middleware] ⇔ {[? next()], [? res.send()]} → [Hanging Request Cycle]


// [next]
// [❖ Middleware  ([req], [res], [next]3rd)]

// [next]3rd argument
// [❖ Middleware 1 (req, res, next)] → next() ⇒ [❖ Middleware 2 (req, res, next)] → next() ... 

// U: [next] → (Invocation) → [Control Transfer]

// [next] ⇔ {The Potential to Continue the Chain}
// (next()) ⇒ [Execution of Next Middleware in Chain]




// [[The Middleware Chain]]

// [[Middleware Chain]] ⇔ {[MW1] ↔ [MW2] ↔ [MW3]...}


// (Processing) @ [The Chain]


// (Middleware Processing)
// [Request] → [❖ Middleware 1 (req, res, next)] → next() ⇒ [❖ Middleware 2 (req, res, next)] → next() ... → [Response]
// [❖ MW 1] → next() ⇒ [❖ MW 2]

// [Request] → [MW1] → (next()) ⇒ [MW2] → (next()) ⇒ [MW3] ... → [Response]



// The Middleware's Identity: A middleware is not just an action; it is a substance defined by its potential for action, given by its signature.
// [Middleware] ⇔ {Signature: (req, res, next)}
// The next Function's Sole Purpose: The next Dravya has only one Karma. To invoke it is to pass control.
// (next()) ⇒ [Execute Next Link]
// The Law of the Chain: An Express application's logic is an ordered, inseparable chain of middleware. It is not a collection of features; it is a single pipeline.
// [[App Logic]] ⇔ {[MW1] ↔ [MW2] ↔ [MW3]...}
// The Law of Flow (The Most Critical Insight): For any given link in the chain, control MUST be explicitly moved forward (next()) or terminated (res.send()). There is no other state. The absence of this Karma breaks the universe.
// [Middleware] → (next() | res.send())

//server terminal
//curl terminal

//(require) @ ['express'{core}] → [express Module Object]
const express = require("express");
// (express()) → [app]
const app = express();
//[express]{[port]}
const PORT = 3000;


// [Middleware] ⇔ {Signature: (req, res, next)}
//[requestLogger] middleware

const requestLogger = (req, res, next) => {
  // [req] ⊃ {[requestTime], ...

  req.requestTime = new Date().toISOString();
  console.log("Link 1: Logger Middleware - Time stamped.");
  //(next()) ⇒ [Next Middleware in Chain]
  next();
};


//(use){[Handler]} @ [app] ⇒ [General Rule] ⊂ [app]
//(use){[requestLogger]} @ [app] ⇒ [General Rule] ⊂ [app]
app.use(requestLogger);

//[Middleware] ⇔ {Signature: (req, res, next)}
//[authChecker] middleware

const authChecker = (req, res, next) => {
  console.log("Link 2: Auth Checker Middleware - Verifying credentials...");
  // For now, we assume auth is okay and pass control.
  next();
};

//[Request] → [Logger] → [Checker] → [Handler] sequential execution order

//[Middleware] ⇔ {Signature: (req, res, next)}
//[brokenMiddleware] middleware
const brokenMiddleware = (req, res, next) => {
  console.log(
    "BROKEN LINK: This middleware was called, but will not call next() or send a response."
  );
  // absence: The intentional absence of next() or res.send(). 
};

app.get("/broken", brokenMiddleware, (req, res) => {
  // This handler will NEVER be reached.
  console.log("This will never appear.");
  res.send("You will never see this.");
});


//*(get){'/', [Handler-function]} @ [app] ⇒ [New Routing Rule] ⊂ [app]
app.get("/", (req, res) => {
  //(send){"responseText"} @ [res] → [HTTP Response]

  let responseText = `Perception confirmed. This is the final handler.`;
  responseText += ` Request was time-stamped at: ${req.requestTime}`;
  res.send(responseText);
});





//(listen){3000,[function]} @ [app] ⇒ [Server Process]{Listening}-->[app]listening
app.listen(PORT, () => console.log(`Assembly line active on port ${PORT}`));


