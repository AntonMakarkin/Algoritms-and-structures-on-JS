'use strict';

//logarithmic computational complexity: O(n^2);

let arrayForSortingFirst = [10, 5, 7, 8, 4, 3, 6, 2, 1, 9];

// 1) first version
function CocktailSort(array) {

    let arrayForSorting = array; //put an array in the variable

    function swap(arr, i, j) { //this function swap 2 neighbor items
        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
    }

    function Sort(arr) { //this is a main function, which sorts an array
        let left = 0, //left point (begining of array)
            right = arr.length - 1; //right point

        while (left < right) { //until we sorted the array 
            for (let i = left; i < right; i++) { //starting from the left point and moving to the right point
                if (arr[i] > arr[i + 1]) { //if the item is bigger then the next item 
                    swap(arr, i, i + 1); //swap them
                }
            }

            right--; //moving the right point to the center

            for (let i = right; i > left; i--) { //starting from the right point and moving to the left point
                if (arr[i] < arr[i - 1]) { //if the item is bigger then the next item 
                    swap(arr, i, i - 1); //swap them
                }
            }

            left++; //moving the left point to the center
        }
        return arr;
    }
    return Sort(arrayForSorting);
}

console.log(CocktailSort(arrayForSortingFirst));


/* 2) Optimized algoritm (It incorporates random intervals of already ordered elements, 
    remebering the place of the last swap)*/

let arrayForSortingSecond = [1, 2, 7, 8, 4, 3, 6, 5, 10, 9];

function CocktailSort(array) {

    let arrayForSorting = array; //put an array in the variable

    function swap(arr, i, j) { //this function swap 2 neighbor items
        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
    }

    function Sort(arr) { //this is a main function, which sorts an array
        let left, //left point (begining of array)
            right,//right point
            firstSwap,
            lastSwap;
        left = firstSwap = 0;
        right = lastSwap = arr.length - 1; 

        while (left < right) { //until we sorted the array 
            for (let i = left; i < right; i++) { //starting from the left point and moving to the right point
                if (arr[i] > arr[i + 1]) { //if the item is bigger then the next item 
                    swap(arr, i, i + 1); //swap them
                    lastSwap = i;
                }
            }

            right--; //moving the right point to the center

            for (let i = right; i > left; i--) { //starting from the right point and moving to the left point
                if (arr[i] < arr[i - 1]) { //if the item is bigger then the next item 
                    swap(arr, i, i - 1); //swap them
                    firstSwap = i;
                }
            }

            left++; //moving the left point to the center
        }
        return arr;
    }
    return Sort(arrayForSorting);
}

console.log(CocktailSort(arrayForSortingSecond));


//On ES6

let arrayForSortingThird = [1, 2, 7, 8, 4, 3, 6, 5, 10, 9];

const cocktailSort = arr => {
    let left,
        firstSwap,
        right,
        lastSwap;
    left = firstSwap = 0;
    right = lastSwap = arr.length - 1;
    while (left < right) {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                lastSwap = i;
            }
        }
        right = lastSwap;
        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                firstSwap = i;
            }
        }
        left = firstSwap;
    }
    return arr;
};

console.log(cocktailSort(arrayForSortingThird));


