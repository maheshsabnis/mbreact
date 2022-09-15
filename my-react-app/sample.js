let obj = {
    id:101, // literal properties
    name:'Mahesh',
    // property function
    display:function(){
        console.log(`${this.id} ${this.name}`);
    }
};

var x = function(){};

function fn1(p){

}
 

let arr = [100,200,300];

 arr = [...arr, 400,400,500];

 console.log(arr);

 let o1 = {x:10,y:20};
 console.log(JSON.stringify(o1));
 o1 = {...o1, z:30};
 console.log(JSON.stringify(o1));

 console.log(Object.keys(o1))

 
 