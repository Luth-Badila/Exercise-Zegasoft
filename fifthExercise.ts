function generatePassword(input: string): string {
  // Step 1: Replace specific characters
  const step1 = input.replace(/[aieuo]/g, (match) => String.fromCharCode(match.charCodeAt(0) + 1));

  // Step 2: Reverse the string
  const step2 = step1.split("").reverse().join("");

  // Step 3: Swap case
  const step3 = step2.replace(/([a-zA-Z])/g, (match) => (match === match.toLowerCase() ? match.toUpperCase() : match.toLowerCase()));

  // Step 4: Remove spaces
  const step4 = step3.replace(/\s/g, "");

  return step4;
}

// Example usage:
// const password = generatePassword("Vika Vitaloka");
// console.log(password);

function randomPassword(input: string): string {
  // Step 1: Replace specific characters
  let step1: string = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      switch (input[i]) {
        case "a":
          step1 += "b";
          break;
        case "i":
          step1 += "j";
          break;
        case "u":
          step1 += "v";
          break;
        case "e":
          step1 += "f";
          break;
        case "o":
          step1 += "p";
          break;
        default:
          step1 += input[i];
      }
    }
  }

  // Step 2: Reverse the string
  //   const step2 = step1.split(" ").reverse().join("");

  // Step 3: Swap case
  let step2: string = "";
  for (let i = 0; i < step1.length; i++) {
    step2 += step1[i] === step1[i].toLowerCase() ? step1[i].toUpperCase() : step1[i].toLowerCase();
  }

  // Step 4: Remove spaces
  const step3 = step2.split("").reverse().join("");

  return step3;
}

// Example usage:
const pass = randomPassword("Vika Vitaloka");
console.log(pass);
