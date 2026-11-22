    /*BubbleSort*/

function bubbleSort(arr) {
    const array = [...arr];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return array;
}

    /*SelectionSort*/

function selectionSort(arr) {
    const array = [...arr];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}
    /*InsertionSort*/
function insertionSort(arr) {
    const array = [...arr];
    const n = array.length;

    for (let i = 1; i < n; i++) {
        const current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = current;
    }

    return array;
}

    /*Сhecking*/
const unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];

console.log(bubbleSort(unsortedNumbers));
console.log(selectionSort(unsortedNumbers));
console.log(insertionSort(unsortedNumbers));