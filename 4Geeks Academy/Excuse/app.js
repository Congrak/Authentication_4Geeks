let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let random = 0;

function partWho(){
    random = Math.floor(Math.random() * 4);

    return who[random]
}
function partAction(){
    random = Math.floor(Math.random() * 4);

    return action[random]
}
function partWhat(){
    random = Math.floor(Math.random() * 4);

    return what[random]
}
function partWhen(){
    random = Math.floor(Math.random() * 5);

    return when[random]
}
document.write(partWho() + ' ' + partAction() + ' ' + partWhat() + ' ' + partWhen());