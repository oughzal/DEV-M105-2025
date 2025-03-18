let patern = /This is the data./;
let patern2 = /There was an error./;
let patern3 = /new Promise/;
let str = "function getData(completed) { return new Promise((resolve, reject) => { setTimeout(() => { if (completed) { resolve('This is the data.'); } else { reject('There was an error.'); } }, 6000); }); } let data = getData(false); data.then((response) => { console.log(response); }).catch((error) => { console.log(error); });";
let result = patern.test(str);
let result2 = patern2.test(str);
let result3 = patern3.test(str);
console.log(result);
console.log(result2);
console.log(result3);

let p1 ="(\\d{2})-(\\d{2})-(\\d{4})";
let dates = "12-25-1995";
let reverseDate = dates.replace(new RegExp(p1), "$3-$1-$2");
let matches = dates.match(new RegExp(p1));
// afficher groupe 1, 2 et 3
// créer une liste avec les groupes et vide sinon
let groups = [];
if (matches) {
    for (let i = 1; i < matches.length; i++) {
        groups.push(matches[i]);
    }
}
console.log(groups);
console.log(reverseDate);