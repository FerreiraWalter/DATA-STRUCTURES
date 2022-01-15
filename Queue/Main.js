const Queue = require("./Queue");

const queue = new Queue();

queue.enqueue("Walter");
queue.enqueue("Joao");
queue.enqueue("Maria");
queue.enqueue("Carla");

console.log(queue);

queue.dequeue();

queue.enqueue("Carla renovada");

console.log(queue);
