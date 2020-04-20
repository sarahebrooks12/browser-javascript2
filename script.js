// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...
// <section id="flight" class="power disabled">
// Should then look like this.

// <section id="flight" class="power enabled">
// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements


document.querySelector("#activate-flight").addEventListener("click",
function (){
   const flightHandlerFunction = document.querySelector("#flight")
   flightHandlerFunction.classList.toggle("enabled")
})

document.querySelector("#activate-mindreading").addEventListener("click", function (){
    const mindreadingFunction = document.querySelector("#mindreading")
mindreadingFunction.classList.toggle("enabled")
})

document.querySelector("#activate-xray").addEventListener("click", function (){
    const xrayFunction = document.querySelector("#xray")
    xrayFunction.classList.toggle("enabled")
})
// Once that is complete, add two more buttons

// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.
document.querySelector("#activate-all").addEventListener("click", function (){
    const activateFunction = document.querySelectorAll(".power")
    // console.log(activateFunction)
    for (i = 0; i < activateFunction.length; i++){
        activateFunction[i].classList.add("enabled")
    }
})

document.querySelector("#deactivate-all").addEventListener("click", function (){
    const deactivateFunction = document.querySelectorAll(".power")
    for (i = 0; i < deactivateFunction.length; i++){
        deactivateFunction[i].classList.remove("enabled")
    deactivateFunction[i].classList.add("disabled")
    }
})

// Challenge: One Function to Rule Them All
// The learning objective of this challenge to write a function handler to be used for multiple events, and uses information in the event argument to perform common logic.

// You may notice that your code to enable individual powers (not all at once) is very similar. To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-") in your function)

// document.querySelector("#activate-flight").addEventListener("click", function (){
//     const clickEachButton = event.target.id.split("-") 
//     console.log(clickEachButton)
//     // document.querySelectorAll(".power")
//     // console.log(activateFunction)
//     // for (i = 0; i < activateFunction.length; i++){
//     //     activateFunction[i].classList.add("enabled")
//     // }
// })
