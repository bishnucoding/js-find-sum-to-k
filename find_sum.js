var find_sum = function(input, expected_sum){
    const myMap = new Map();

    for(let i of input){
        let target_sum = expected_sum - i;

        if (myMap.has(target_sum)){
            return true;
        }else{
            myMap.set(i,true);
        }
    }
    return false;
};

input = [2,3,4,5,9,8,7,6,44,45,66,77,88,99,90];
expected_sum = 1;
const result = find_sum(input, expected_sum);
console.log(result);


//time: O(n): because we are looking only n time. Inserting and lookup of map is contant time.
//Space: O(n): as we are using additional map to store n elements at max.