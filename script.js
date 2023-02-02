let myForm = document.forms.myForm;
let elements = myForm.elements;
let result = document.querySelector('.result');
let btn = elements.btn;
let str = elements.str;

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    let masString = str.value.split('');
    result.append(masString);
    console.log(masString)

    let masNum = []
    length = masString.length
    for (let i = 0; i < length; i++)
    masNum.push(parseInt(masString[i]));
    console.log(masNum)
})
