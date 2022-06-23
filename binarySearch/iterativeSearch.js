//note: binary search only works when the list is sorted

let nums = [2, 3, 5, 6, 8, 9, 15];

//function will find the target item index
//search function takes in 2 arguments: the array and the target item
function search (arr, item) {
    let low = 0;
    //setting high to be index of last element 
    let high = arr.length -1

    //using less than or equal in case there is only one number in the array 
    while(low <= high) {
        //math.floor in case it returns a decimal it will round down. cant have half an element 
        let mid = Math.floor((low + high) /2);
        if (item === arr[mid]) {
            //if item matches mid element, return mid(the index of item)
            return mid;
        } else if  (item < arr[mid]){
            //because mid is higher than item we dont need to check everything to the right of mid, set high to mid -1 
             high = mid - 1;
        } else {
            //if item is greater than mid add 1 to low
            low = mid + 1 ;
        }
    }
    //if its not in the array 
    return "This number does not exist in the array"
}

console.log(search(nums, 3));
console.log(search(nums, 8));
console.log(search(nums, 10));