import { useEffect, useState } from "react";

export const SortingAscii = () => {
  const words = [
    "BOAT",
    "Locomotive",
    "Poet",
    "Accelerate",
    "GOLF",
    "ACCIDENTAL",
    "Submarine",
  ];

  const [wordsToSort, setWordsToSort]: [string[], Function] = useState(words);

  function customSort(a: string, b: string) {
    const thirdA = a.charCodeAt(2);
    const thirdB = b.charCodeAt(2);

    if (thirdA !== thirdB) {
      return thirdA - thirdB;
    }

    const secondA = a.charCodeAt(1);
    const secondB = b.charCodeAt(1);

    if (secondA !== secondB) {
      return secondA - secondB;
    }

    const firstA = a.charCodeAt(0);
    const firstB = b.charCodeAt(0);

    return firstA - firstB;
  }
  useEffect(() => {
    setWordsToSort(wordsToSort.sort(customSort));
    console.log(wordsToSort);
  }, []);

  return <div></div>;
};
