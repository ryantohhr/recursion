function fibs(num) {
    const result = [];
    let fibNext;
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            result.push(0);
        } else if (i === 1) {
            result.push(1);
        } else {
            fibNext = result[result.length - 2] + result[result.length - 1];
            result.push(fibNext);
        }
    }
    return result;
}

function fibsRec(num) {
    let fibNext;
    let result;
    if (num === 1) {
        result = [0];
        return result;
    } else if (num === 2) {
        result = [0, 1];
        return result;
    } else {
        result = fibsRec(num - 1);
        fibNext = result[result.length - 2] + result[result.length - 1];
        result.push(fibNext);
        return result;
    }    
}

const unsortedArray = [105, 79, 100, 110]; 

function mergeSort(array) {
    const arrLen = array.length;
    if (arrLen === 1) {
        return array;
    } else if (arrLen === 2) {
        if (array[0] > array[1]) {
            const temp = array[1];
            array[1] = array[0];
            array[0] = temp;
        }
        return array;
    } else {
        // Sort left
        const left = mergeSort(array.slice(0, Math.floor(arrLen / 2)));

        // sort right
        const right = mergeSort(array.slice(Math.floor(arrLen / 2), arrLen));

        // combine
        let i = 0, j = 0, result = [];
        while ((i < left.length) && (j < right.length)) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            }
            else { 
                result.push(right[j]);
                j++;
            }
        }
        while (left[i]) {
            result.push(left[i]);
            i++;
        }

        while (right[j]) {
            result.push(right[j]);
            j++;
        }
        return result;
    }
}

console.log(mergeSort(unsortedArray));