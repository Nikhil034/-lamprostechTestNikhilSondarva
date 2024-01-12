let weight = [3, 1, 4];
let value = [4, 5, 7];
let weightLimit = 5, diff, j;

let obj = {}, mx = 0, ele;

for (let i = 0; i < value.length; i++) {
    ele = value[i];

    for (let k = 0; k < weight.length; k++) {
        let cal = ele + weight[k];
        if (cal > mx) {
            mx = cal;   //store maximum value base in weight 
        }
    }

    if (!obj.hasOwnProperty(ele)) {
        obj[ele] = mx;
    }
}
console.log(obj);


for (item in obj) {

    diff = obj[item] - weightLimit;  //pick the obj less differernce value from object

}

console.log(diff);  //print less difference maximum value