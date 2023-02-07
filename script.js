let text = document.querySelector("#text");
let sum = elements.sum;
let el= elements.myForm;
let addText = elements.addText;
let userName = document.querySelector("#name");
let surName = document.querySelector("#surname");
let secondName = document.querySelector("#secondName");
let myForm = document.querySelector("#myForm");
let quest = elements.quest;
let str = elements.str;
let count = elements.count;

quest.addEventListener('click', function (evt) {
    evt.preventDefault();
    let arr = str.value.split(' ');
    surName.append(arr[0])
    userName.append(arr[2])
    secondName.append(arr[3])

})

addText.addEventListener('click', function(evt) {
    evt.preventDefault();
    text.append(`${myForm.value}`)
    
})
 
count.addEventListener('click', function (evt) {
 evt.preventDefault();
    str.value('');

console.log('str')
})


