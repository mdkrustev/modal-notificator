---
isBookIndex: true
---

---
title: ModalNotificator
description: Modal notifications with action buttons, creates a popup message in a different style as required. By using the simple function modalNotificator you get everything immovable in one single javascript file. You can apply properties to change the interface.


# Introduction: Technical Documentation for ModalNotificator

Simple example how to use it:
<button onclick="modalNotificator({
title: 'Success message',
message: 'This is a success message that was fired',
type: 'success', //types are: success, error, warning
buttons: [
    {
    title: 'No',
    onClick: () => {
         console.log('this is No button')
     },
    }
    {
    title: 'No',
    onClick: () => {
         console.log('this is Yes button')
     }
}]
})">Open success window</button>


