//Push Front
/* Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

Examples:

pushFront([5,7,2,3], 8) => [8,5,7,2,3]
pushFront([99], 7) => [7,99] 
*/

    //let arr = [5,7,2,3];
    //let num = 8;

    let pushFront = function(arr, num) {
        for(let i=arr.length-1; i>=0; i--){
            arr[i+1] = arr[i];
        };
        arr[0] = num;
        console.log(arr);
    };

pushFront([5, 7, 2, 3], 8);
pushFront([99], 7);


/*
Pop Front
Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

Examples:

popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
*/
    let num = 0;
    let popFront = function(arr) {
        num = arr[0];
        new_arr=[];

        for(let i = 1; i<arr.length; i++){
            new_arr[i-1] = arr[i];
        }
        console.log(num);
        console.log(new_arr);
    };

popFront([0,5,10,15]);
popFront([4,5,7,9]);

/*
Insert At
Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

Examples:

insertAt([100,200,5], 2, 311) => [100,200,311,5]
insertAt([9,33,7], 1, 42) => [9,42,33,7]
*/

    let insertAt= function(arr,num,val) {
        for(let i = arr.length-1; i >= num; i--){
            arr[i+1] = arr[i];
        }
        arr[num] = val;
        console.log(arr);

    };

insertAt([100, 200,5], 2, 311);
insertAt([9,33,7], 1, 42);