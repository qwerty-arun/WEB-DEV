// Write a function that implements a simple event emitter (`on`, `off`, `emit`).

/*
📌 What’s an Event Emitter?

An event emitter is an object that allows you to:
- Register event listeners (on)
- Remove event listeners (off)
- Trigger events (emit)
*/

/*
📖 Requirements

1. on(event, listener)
- Register a callback for a given event.
- Example: emitter.on("data", fn)

2. off(event, listener)
- Remove a previously registered callback.

3. emit(event, ...args)
- Trigger all callbacks for that event, passing in arguments.
*/

/*
🔍 Why This Question Is Asked?

Because it tests:
- Objects / maps (to store listeners)
- Arrays & higher-order functions (filter, forEach)
- Understanding of callbacks
- Custom design similar to Node.js EventEmitter
*/

class EventEmitter {
  constructor() {
    this.events = {}; // store event -> listeners
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(...args));
  }
}

const emitter = new EventEmitter();

function handler(data) {
  console.log("Data received:", data);
}

emitter.on("data", handler);

emitter.emit("data", { id: 1 }); 
// → "Data received: { id: 1 }"

emitter.off("data", handler);

emitter.emit("data", { id: 2 }); 
// → (nothing happens, handler removed)
