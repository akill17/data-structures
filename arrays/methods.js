// reference : https://www.geeksforgeeks.org/javascript-array-reference/


// Common methods of arrays in js


// Array.isArray() will check whether if its an array ; same as isinstanceof opearator

// Array.from(any iterable object) forms an array

// Array.of() does the same thing as new Array(args)


// ************** DOES NOT Modify the orginal array **************** 

// arr1.concat(arr2,arr3) --> it doesnt modify the original array
// arr.flat(depth) --> for nested arrays (arrays with in arrays, you can merge all of them in a single array, you can specify the depth. default is one) like the method concat, it doesn't modify the original array

// splice method (start, number of elemnts to be deleted (deafault is zero), additinal arguments (additional things that can be addeed from the start pos we specified)) this will modify the array and this returns the deleted elements
// [ 'amit', 'sumit', 'anil', 'prateek' ]
// > string_arr.splice(1,2,45,521,43434)
// [ 'sumit', 'anil' ]
// > string_arr
// [ 'amit', 45, 521, 43434, 'prateek' ]


// ************** Modifies the orginal array **************** 

// pop will pop off the last element
// shift method will remove the first element (both the pop and shift methods dont take any further arguments)
// unshift will add the elements at the start of the array (just like push takes as many arguments as needed)

// lastIndexOf(element, start = 0) ; if none returns -1 


