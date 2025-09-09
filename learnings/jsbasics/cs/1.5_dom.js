// [DOM Node] ↔ (Event Listener @ 'click') ⇒ (Execute [Callback Function] @ [Event Object]) → [DOM Manipulation]
//[Node] ↔ (addEventListener @ {Event Type}, [Callback]) ⇒ (User  triggers Callback @ [*Event Object]) → (DOM Manipulation ) → [New DOM State]
// Genesis of the DOM
// (browser)@[html text]-->[[DOM]]

// [Dom] vs document difference?
// [[DOM]] ⊃ *document
// [[The DOM]] ⇔ {The full, abstract tree structure representing the page}
// *document ⇔ {[The specific Node] which serves as the root & API entry-point for [[The DOM]]}

// [Window Global Object] ⊃ *document { Entry Point to DOM Tree}

// Nature of the document
// [*document: a specific Node] ⊂ [Entire DOM Tree]

// [Event System[( user actions),(browser events)]] --(propogates)@[DOM]
// [Event Trigger: User Click] ⇒ [*Event Object] → ( Propagation) @ [[DOM Tree]]
//(User/Browser ) ⇒ [*Event Object Created] → (Propagation ) @ [[DOM Tree]]
// [DOM-document]{node}

// (registered event occur)--->[event object]{properties,targests-specific node,preventdefault}
// [*Event Object] ⊂ { .target: [*Originating Node], .type: {"click"}, ( .preventDefault) }
//[*Event Object] ⊂ { .target: [*Originating Node], .type: {EventType}, (.preventDefault ) }


// search-query
// (document.querySelector(selector))--->match|null
// (querySelector @ {CSS Selector}) → [First Matching Node] | [?: null]

// (DOM Manipulation - Creation) -potential
// (document.createElement(tagName))-----only in memory(not in SOM)
// (createElement @ {tag}) → [*New Node {in memory}] ⊄ [document]


// (DOM Manipulation - Attachment)-Actualization
// (parentNode.appendChild(childNode))
// [Parent Node] → (appendChild @ [*Node in Memory]) → [Parent Node] ⊃ [*Node Now Visible]
// in memory ---> actual dom
//[Parent Node] → (appendChild @ [*Node {State: In-Memory}]) → [Parent Node] ⊃ [*Node {State: Visible}]

// (DOM Manipulation - Content)
// .innerHTML
// Destruction and creation
// [Node] → (.innerHTML = "{HTML String}") ⇒ (Destroy All Children) → (Parse & Create New Children)

// Event listener
// (node.addEventListener(type, listenerFunction(callback bound to node)))
// (Event Listener)<-> node, event type

// [Node] ↔ (addEventListener @ {event type}, [Callback Function])
//[Target Node] ↔ {Event Type} ↔ [Callback Function]

// [global 'document' ]-[watchtower][garrison]
//(querySelector)@ [global 'document']
//{#watchtower,garrison}
//[querySelector ] ⇔ {Locates the first [Element ] matching a given {CSS Selector}}
//[document ] ⇔ {Root [[HTML Document]] | Container for all visible web elements}
//[watchtower ] ⇔ {Specific [[HTMLElement]] | Represents the DOM node with id 'watchtower'}
//[garrison ] ⇔ {Specific [[HTMLElement]] | Represents the DOM node with id 'garrison'}
console.log("Phase 1: Locating units...");
const watchtower = document.querySelector("#watchtower");
const garrison = document.querySelector("#garrison");

//[document] → ( querySelector @ '#watchtower') → [watchtower]
// open in console to see
//variables hold correct element nodes
console.log("Watchtower Unit:", watchtower);
console.log("Garrison Unit:", garrison);

console.log('Phase 2: Issuing standing order to watchtower...');

//[watchtower]node, [(event)]
//{click}
//[watchtower] ⊃ [[Event Type]]: {click}, {[event]}

//[watchtower]---(addEventListener)@[watchtower]----->[watchtower] ↔ ('click' + function -future response action)
// watchtower.addEventListener("click", (event) => {
//     //response
//   console.log("** SIGHTING REPORT RECEIVED **");
// });

//[callback]{state of potential ,not execution}
//[Callback Function ] ⇔ { 'Potential Execution' | abscence: 'Immediate Execution'}
//[Callback Function ] ⇔ {Function passed as an argument | Invoked later by another (Event Loop)}

//The Event and Response Protocol
watchtower.addEventListener("click", (event) => {
  console.log("** SIGHTING REPORT RECEIVED **");
  console.log("Report Details (Event Object):", event);
  console.log("Report originated from:", event.target);

  //  [document] → ( createElement @ 'p') → [newUnit (in memory)]
  const newUnit = document.createElement("p");

  //[newUnit] {textContent,className}
  newUnit.textContent = `Tank Platoon dispatched at ${new Date().toLocaleTimeString()}`;
  newUnit.className = "unit";

  garrison.appendChild(newUnit);
});

//[dom]->(dynamiically modified in response to user action(create new element and append))


//[DOM] → (Callback's : createElement + appendChild) @ [garrison] ∵ [User Action (click)]