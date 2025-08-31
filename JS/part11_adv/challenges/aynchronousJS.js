/*
Asynchronous JavaScript with Event Loop

Task 1: Simulating Asynchronous Behavior

- Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

- Use setTimeout to simulate this behaviour.


Task 2: Simulate Multiple Async Tasks with Different Delays

- Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).

- Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.


Task 3: Async Task with Callback Function

- Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).

- Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.
*/

function simulateAsyncTask() {
    console.log("Task started");
    setTimeout(function() {}, 2000);
    console.log("Task finished");
}

function simulateMultipleTasks() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function() {}, i * 1000);
        console.log(`Task ${i} finished`)
    }
}

function fetchDataWithCallback(callback) {
    setTimeout(function() {},2000);
    callback("Fetched data");
}