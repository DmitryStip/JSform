'use strict';
const body = document.body;
const mainDivContainer = document.createElement('div');
mainDivContainer.className = 'main-container';
// header
const headerContainer = document.createElement('header');
const h1 = document.createElement('h1');
const h5 = document.createElement('h5');
h1.textContent = 'CREATE AN ACCOUNT';
h5.innerText = 'We always keep your name and email address private.';

body.append(mainDivContainer);
mainDivContainer.append(headerContainer);
headerContainer.append(h1, h5);
// main
const mainContainer = document.createElement('main');
const mainForm = document.createElement('form');
const form1 = document.createElement('div');
form1.id = 'form-container';
const outerInput = document.createElement('div');
outerInput.id = 'outer-input-container';
const innerForm1 = document.createElement('div');
innerForm1.id = 'inner-input-container';
const inputName = document.createElement('input');
inputName.type = 'text';
inputName.placeholder = 'First name';
const inputLastName = document.createElement('input');
inputLastName.type = 'text';
inputLastName.placeholder = 'Last name';

const innerForm2 = document.createElement('div');
innerForm2.id = 'inner-input-container';
const InputDisplayName = document.createElement('input');
InputDisplayName.type = 'text';
InputDisplayName.placeholder = 'Display Name';
const inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.placeholder = 'Email Address';

const innerForm3 = document.createElement('div');
innerForm3.id = 'inner-input-container';
const inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
const inputPassconf = document.createElement('input');
inputPassconf.type = 'password';
inputPassconf.placeholder = 'password confirmation';

mainDivContainer.append(mainContainer);
mainContainer.append(mainForm);
mainForm.append(form1);
form1.append(outerInput);
outerInput.append(innerForm1, innerForm2, innerForm3);
innerForm1.append(inputName, inputLastName);
innerForm2.append(InputDisplayName, inputEmail);
innerForm3.append(inputPassword, inputPassconf);

// main radio button

const radioContainer = document.createElement('div');
radioContainer.id = 'radio-container';
const radioWrapper1 = document.createElement('div');
radioWrapper1.className = 'radio-wrapper';
const radioInner1 = document.createElement('div');
radioInner1.className = 'radio-inner';
const InputRadio1 = document.createElement ('input');
InputRadio1.type = 'radio';
InputRadio1.id = 'buyer';
InputRadio1.name = 'visitor';
const label1Element = document.createElement('label');
label1Element.textContent = 'Join As a Buyer';
label1Element.setAttribute('for', 'buyer');
const radioInner11 = document.getElementById('buyer');

const radioDiv1 = document.createElement('div');
const par1 = document.createElement('p');
par1.innerText = 'I am looking for a Name, Logo for my business, brand or product ';

const radioWrapper2 = document.createElement('div');
radioWrapper2.className = 'radio-wrapper';
const radioInner2 = document.createElement('div');
radioInner2.className = 'radio-inner';
const InputRadio2 = document.createElement('input');
InputRadio2.type = 'radio';
InputRadio2.id = 'seller';
InputRadio2.name = 'visitor';
const label2Element = document.createElement('label');
label2Element.textContent = 'Join As a Creative or Marketplace Seller';
label2Element.setAttribute('for', 'seller');
const radioInner22 = document.getElementById('seller');

const radioDiv2 = document.createElement('div');
const par2 = document.createElement('p');
par2.innerHTML = 'I plan to submit name ideas, Logodesigns or sell names in Domain Marketplace';

mainForm.append(radioContainer);
radioContainer.append(radioWrapper1, radioWrapper2);
radioWrapper1.append(radioInner1, radioDiv1);
radioInner1.append(InputRadio1, label1Element);
radioDiv1.append(par1);
radioWrapper2.append(radioInner2, radioDiv2);
radioInner2.append(InputRadio2, label2Element);
radioDiv2.append(par2);

//check-container
const checkContainerWrap = document.createElement('div');
checkContainerWrap.id = 'check-container';
const inputCheck = document.createElement('input');
inputCheck.type = 'checkbox';
inputCheck.id = 'allow';
const labelCheck = document.createElement('label');
labelCheck.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';
labelCheck.setAttribute('for', 'allow');
const inputCheck1 = document.getElementById('allow');

mainForm.append(checkContainerWrap);
checkContainerWrap.append(inputCheck, labelCheck);

//button
const divButton = document.createElement('div');
const button = document.createElement ('button');
button.type = 'submit';
button.innerText = 'Create account';
mainForm.append(divButton);
divButton.append(button);