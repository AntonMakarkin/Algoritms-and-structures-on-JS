'use strict';

//logarithmic computational complexity: O(n^2);

let arrayForSortingFirst = [10, 5, 7, 8, 4, 3, 6, 2, 1, 9];

//1) first version
function BubbleSort(array) {

    let n = array.length; //n - number of elements
    for (let i = 0, endI = n - 1; i < endI; i++) //execute for every element of array, except last
    {
        for (let j = 0, endJ = n - i; j < endJ; j++) //for all elements, which go after a current element
        {
            if (array[j] > array[j + 1]) //checking, and if a next element is smaller then a current element 
            {
                //then these elements swap places
                let swamp = array[j]; 
                array[j] = array[j + 1];
                array[j + 1] = swamp;
            }
        }
    }

    return array;
}

console.log(BubbleSort(arrayForSortingFirst));


//2) Second version. We check, is this array sorted already or not?
let arrayForSortingSecond = [10, 5, 7, 8, 4, 3, 6, 2, 1, 9];
//let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function BubbleSortWithCheck(array) {

    let n = array.length; //n - number of elements
    for (let i = 0, endI = n - 1; i < endI; i++) //execute for every element of array, except last
    {
        let wasSwap = false; //checking, was swap or not

        for (let j = 0, endJ = n - i; j < endJ; j++) //for all elements, which go after a current element
        {
            if (array[j] > array[j + 1]) //checking, and if a next element is smaller then a current element 
            {
                //then these elements swap places
                let swamp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swamp;

                wasSwap = true;
            }
        }

        if (!wasSwap) {
            break; //if there is no one swap for one full cycle - array is sorted already 
        }
    }

    return array;
}

console.log(BubbleSortWithCheck(arrayForSortingSecond));


//3) Third version. On ES6
let arrayForSortingThird = [10, 5, 7, 8, 4, 3, 6, 2, 1, 9];

const BubbleSortES6 = array => {

    let n = array.length; //n - number of elements
    for (let i = 0, endI = n - 1; i < endI; i++) //execute for every element of array, except last
    {
        let wasSwap = false; //checking, was swap or not

        for (let j = 0, endJ = n - i; j < endJ; j++) //for all elements, which go after a current element
        {
            if (array[j] > array[j + 1]) //checking, and if a next element is smaller then a current element 
            {
                //then these elements swap places
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                wasSwap = true;
            }
        }

        if (!wasSwap) {
            break; //if there is no one swap for one full cycle - array is sorted already 
        }
    }

    return array;
};

console.log(BubbleSortES6(arrayForSortingThird));