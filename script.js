// function coba(...a){
//     let c = 0;

//     for(let b = 0;b < a.length;b++){

//         c += a[b];


//     }

//     c /= a.length;
//     console.log(c)
// }

const a = prompt('masukan yang ingin di check')
let b = []
let tum = 1;
for (let j = 0; j < a.length; j++) {
    b.push(a.slice(j, tum))
    tum++
}
let tampung = []
function retrn(e,s,c,tam){
    const bol = []
     bol.push(tam.map((e,i) => {
        if(e === b[s]){
            return 'true'
        }
    }).join(''))
    if(bol[0] === 'true'){
        return
    }
    for(e ;e < b.length;e++){  //'jhkjhgj'
        if(b[s] === b[e]){
            c++
        }
    } 
    if( c >= 2) {
        tampung.push((`${b[s]} ada ${c}`))
        tam.push(b[s]);
    
        
    }
       
}
const tam = [];
let dam;
for(let s = 0;s< b.length;s++){ 
    let c = 0;
    let e = s
    retrn(e,s,c,tam) 
       
}
alert(tampung.join(' '))
