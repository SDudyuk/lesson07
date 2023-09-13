/*task 1*/
const reverseArray = (inputArray) => {
  const lengthArray = inputArray.length;  
  const reversedArray = [];
  
  for (let i=0; i<lengthArray; i++) {
    reversedArray[i] = inputArray[lengthArray-1-i];
  }

  return reversedArray;
}

// test:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log('task1:', originalArray, ' => ', reversedArray);

/*task 2*/
const uniqueValues = (array1, array2) => {
  const uniqueArray = [];
  let isEqual;

  for (let i=0; i<array1.length; i++) {
    uniqueArray[i] = array1[i];
  }

  let uniqIndex = uniqueArray.length;

  for (let i=0; i<array2.length; i++) {
    isEqual = false;
    for (let j=0; j<array1.length; j++) {
      if (array2[i]===array1[j]) {
        isEqual = true;
      }
    }
    if (!isEqual) {
      uniqueArray[uniqIndex] = array2[i];
      uniqIndex++;
    }
  }

  return uniqueArray;
}
// test:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log('task2:', array1, array2, ' =>', uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]

/*task 3*/
const calculateAverageGrade = (students) => {
  let sumGrade = 0;
  countStudents = students.length;
  
  for (let i=0; i<countStudents; i++) {
    sumGrade += students[i].grade;
  }

  return (sumGrade/countStudents).toFixed(1);
}
//test:
const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];
console.log('task3:', students,  `average grade = ${calculateAverageGrade(students)}`); // 4.4