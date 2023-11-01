export default function getRandomElementsFromArray(arr, count) {
  if (count > arr.length) {
    throw new Error("Count should not be greater than the array size.");
  }

  const copyArray = [...arr]; // Create a copy of the original array to avoid modification
  const randomElements = [];

  while (randomElements.length < count) {
    const randomIndex = Math.floor(Math.random() * copyArray.length); // Generate a random index
    const selectedElement = copyArray.splice(randomIndex, 1)[0]; // Remove the element at the random index
    randomElements.push(selectedElement); // Add the selected element to the result array
  }

  return randomElements;
}
