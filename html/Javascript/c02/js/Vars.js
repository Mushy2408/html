let price = 5 , quantity = 14;
let total = price * quantity;

let el = document.getElementById('cost');
el.textContent = "$" + total;

let user = "Hi Mushy2408";
let discount = " coupon of 25% untill 11:59 on March 18!"
let message = user + "'s" + discount

el = document.getElementById('note');
el.textContent = message;