
<script src="./modal-notificator.js"></script>

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
