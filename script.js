const flashCard = document.querySelector(".flashcard-container");
const front_flash_card = document.querySelector(".front");
const back_flash_card = document.querySelector(".back");

const previous_button = document.querySelector(".previous_flashcard");
const next_button = document.querySelector(".next_flashcard");

const question = document.querySelector(".question");
const question_content = document.querySelector(".question-content");
const question_no = document.querySelector("#q-no");
const answer_no = document.querySelector("#a-no");
const answer_content = document.querySelector(".answer-content");
const solution_content = document.querySelector(".solution-content");

const go_to_question = document.querySelector(".go-to-question");

console.log(back_flash_card.style.transform);

const flipCard = () => {
  flashCard.classList.toggle("to-back");
  const flashCardStat = window.getComputedStyle(front_flash_card).display;

  if (flashCardStat === "flex") {
    front_flash_card.style.display = "none";
    back_flash_card.style.display = "flex";
  } else {
    front_flash_card.style.display = "flex";
    back_flash_card.style.display = "none";
  }
};

const clickedButton = (button) => {
  button.classList.add("clicked");
  setTimeout(() => {
    button.classList.remove("clicked");
  }, 300);
};

// Define MathJax configuration globally
window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

// Dynamically load the MathJax library
const script = document.createElement("script");
script.src =
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js";
script.async = true; // Ensure non-blocking
document.head.appendChild(script);

// flashCard.addEventListener("click", flipCard)

const questions_bank = [
  {
    id: 1,
    question: "What is the formula for converting inches to centimeters?",
    answer: "The formula is \\( \text{cm} = \text{inches} \times 2.54 \\)",
    solution:
      "To convert inches to centimeters, multiply the number of inches by 2.54.",
  },
  {
    id: 2,
    question: "What is the formula for converting ounces to grams?",
    answer:
      "The formula is \\( \text{grams} = \text{ounces} \times 28.3495 \\)",
    solution:
      "To convert ounces to grams, multiply the number of ounces by 28.3495.",
  },
  {
    id: 3,
    question: "What is the formula for converting miles to kilometers?",
    answer: "The formula is \\( \text{km} = \text{miles} \times 1.60934 \\)",
    solution:
      "To convert miles to kilometers, multiply the number of miles by 1.60934.",
  },
  {
    id: 4,
    question: "How do you convert gallons to liters?",
    answer:
      "The formula is \\( \text{liters} = \text{gallons} \times 3.78541 \\)",
    solution:
      "To convert gallons to liters, multiply the number of gallons by 3.78541.",
  },
  {
    id: 5,
    question: "What is the formula for calculating the area of a rectangle?",
    answer:
      "The area of a rectangle is \\(A = L \times W\\), where \\(L\\) is the length and \\(W\\) is the width.",
    solution:
      "Multiply the length by the width to find the area of the rectangle.",
  },
  {
    id: 6,
    question: "What is the formula for the volume of a rectangular prism?",
    answer:
      "The formula is \\(V = L \times W \times H\\), where \\(L\\) is the length, \\(W\\) is the width, and \\(H\\) is the height.",
    solution:
      "To find the volume of a rectangular prism, multiply the length, width, and height together.",
  },
  {
    id: 7,
    question: "How do you convert Celsius to Fahrenheit?",
    answer: "The formula is \\( F = (C \times 1.8) + 32 \\)",
    solution:
      "To convert Celsius to Fahrenheit, multiply the Celsius temperature by 1.8 and then add 32.",
  },
  {
    id: 8,
    question: "What is the formula for converting feet to meters?",
    answer: "The formula is \\( \text{meters} = \text{feet} \times 0.3048 \\)",
    solution:
      "To convert feet to meters, multiply the number of feet by 0.3048.",
  },
  {
    id: 9,
    question: "What is the formula for the perimeter of a square?",
    answer:
      "The perimeter of a square is \\(P = 4 \times S\\), where \\(S\\) is the length of one side.",
    solution:
      "To find the perimeter of a square, multiply the length of one side by 4.",
  },
  {
    id: 10,
    question: "What is the formula for converting pounds to kilograms?",
    answer: "The formula is \\( \text{kg} = \text{pounds} \times 0.453592 \\)",
    solution:
      "To convert pounds to kilograms, multiply the number of pounds by 0.453592.",
  },
  {
    id: 11,
    question: "What is the formula for converting kilometers to miles?",
    answer: "The formula is \\( \text{miles} = \text{km} \times 0.621371 \\)",
    solution:
      "To convert kilometers to miles, multiply the number of kilometers by 0.621371.",
  },
  {
    id: 12,
    question: "What is the formula for converting grams to ounces?",
    answer:
      "The formula is \\( \text{ounces} = \text{grams} \times 0.035274 \\)",
    solution:
      "To convert grams to ounces, multiply the number of grams by 0.035274.",
  },
  {
    id: 13,
    question: "What is the formula for the area of a circle?",
    answer:
      "The area of a circle is \\(A = pi r^2\\), where \\(r\\) is the radius.",
    solution:
      "To find the area of a circle, square the radius and then multiply by \\( pi \\).",
  },
  {
    id: 14,
    question: "What is the formula for the perimeter of a rectangle?",
    answer:
      "The perimeter of a rectangle is \\(P = 2L + 2W\\), where \\(L\\) is the length and \\(W\\) is the width.",
    solution:
      "To find the perimeter of a rectangle, multiply the length by 2 and the width by 2, then add them together.",
  },
  {
    id: 15,
    question: "What is the formula for the volume of a cylinder?",
    answer:
      "The formula is \\(V = pi r^2 h\\), where \\(r\\) is the radius and \\(h\\) is the height.",
    solution:
      "To find the volume of a cylinder, square the radius, multiply by \\( pi \\), and then multiply by the height.",
  },
  {
    id: 16,
    question: "What is the formula for converting milliliters to liters?",
    answer:
      "The formula is \\( \text{liters} = \text{milliliters} div 1000 \\)",
    solution:
      "To convert milliliters to liters, divide the number of milliliters by 1000.",
  },
  {
    id: 17,
    question: "What is the formula for the area of a parallelogram?",
    answer:
      "The area of a parallelogram is \\(A = \text{Base} \times \text{Height}\\), where \\( \text{Base} \\) is the length of the base and \\( \text{Height} \\) is the perpendicular height.",
    solution:
      "Multiply the base by the height to find the area of the parallelogram.",
  },
  {
    id: 18,
    question: "What is the formula for the surface area of a cube?",
    answer:
      "The surface area of a cube is \\(A = 6 \times s^2\\), where \\(s\\) is the length of one side.",
    solution:
      "To find the surface area of a cube, square the side length and multiply by 6.",
  },
  {
    id: 19,
    question: "What is the formula for converting feet to inches?",
    answer: "The formula is \\( \text{inches} = \text{feet} \times 12 \\)",
    solution: "To convert feet to inches, multiply the number of feet by 12.",
  },
  {
    id: 20,
    question: "What is the formula for the area of a trapezoid?",
    answer:
      "The area of a trapezoid is \\(A = \\frac{1}{2} \times (b_1 + b_2) \times h\\), where \\(b_1\\) and \\(b_2\\) are the lengths of the two parallel sides and \\(h\\) is the height.",
    solution:
      "Add the lengths of the two parallel sides, multiply by the height, and then divide by 2 to find the area.",
  },
  {
    id: 21,
    question: "What is the formula for converting miles to feet?",
    answer: "The formula is \\( \text{feet} = \text{miles} \times 5280 \\)",
    solution: "To convert miles to feet, multiply the number of miles by 5280.",
  },
  {
    id: 22,
    question: "What is the formula for converting liters to milliliters?",
    answer:
      "The formula is \\( \text{milliliters} = \text{liters} \times 1000 \\)",
    solution:
      "To convert liters to milliliters, multiply the number of liters by 1000.",
  },
  {
    id: 23,
    question: "What is the formula for converting yards to feet?",
    answer: "The formula is \\( \text{feet} = \text{yards} \times 3 \\)",
    solution: "To convert yards to feet, multiply the number of yards by 3.",
  },
  {
    id: 24,
    question: "What is the formula for converting hours to minutes?",
    answer: "The formula is \\( \text{minutes} = \text{hours} \times 60 \\)",
    solution:
      "To convert hours to minutes, multiply the number of hours by 60.",
  },
  {
    id: 25,
    question: "What is the formula for the volume of a cone?",
    answer:
      "The formula is \\(V = \\frac{1}{3} pi r^2 h\\), where \\(r\\) is the radius and \\(h\\) is the height.",
    solution:
      "To find the volume of a cone, square the radius, multiply by \\( pi \\), and then multiply by the height. Finally, divide by 3.",
  },
  {
    id: 26,
    question: "What is the formula for the circumference of a circle?",
    answer:
      "The circumference of a circle is \\(C = 2 pi r\\), where \\(r\\) is the radius.",
    solution:
      "To find the circumference of a circle, multiply 2 by \\( pi \\) and the radius.",
  },
  {
    id: 27,
    question: "What is the formula for the area of a sector of a circle?",
    answer:
      "The area of a sector is \\(A = \frac{\theta}{360} \times pi r^2\\), where \\( \theta \\) is the central angle and \\(r\\) is the radius.",
    solution:
      "To find the area of a sector, multiply the central angle by \\( pi r^2 \\), then divide by 360.",
  },
  {
    id: 28,
    question: "What is the formula for converting kilograms to grams?",
    answer:
      "The formula is \\( \text{grams} = \text{kilograms} \times 1000 \\)",
    solution:
      "To convert kilograms to grams, multiply the number of kilograms by 1000.",
  },
  {
    id: 29,
    question: "What is the formula for converting seconds to minutes?",
    answer: "The formula is \\( \text{minutes} = \frac{\text{seconds}}{60} \\)",
    solution:
      "To convert seconds to minutes, divide the number of seconds by 60.",
  },
  {
    id: 30,
    question:
      "What is the formula for calculating the surface area of a sphere?",
    answer:
      "The surface area of a sphere is \\(A = 4 pi r^2\\), where \\(r\\) is the radius.",
    solution:
      "To find the surface area of a sphere, square the radius and multiply by \\(4 pi\\).",
  },
  {
    id: 31,
    question: "What is the formula for converting inches to feet?",
    answer: "The formula is \\( \text{feet} = \text{inches} div 12 \\)",
    solution: "To convert inches to feet, divide the number of inches by 12.",
  },
  {
    id: 32,
    question: "What is the formula for converting kilograms to pounds?",
    answer:
      "The formula is \\( \text{pounds} = \text{kilograms} \times 2.20462 \\)",
    solution:
      "To convert kilograms to pounds, multiply the number of kilograms by 2.20462.",
  },
  {
    id: 33,
    question: "What is the formula for the volume of a sphere?",
    answer:
      "The formula is \\(V = \\frac{4}{3} pi r^3\\), where \\(r\\) is the radius.",
    solution:
      "To find the volume of a sphere, cube the radius, multiply by \\( pi \\), and then multiply by \\( \frac{4}{3} \\).",
  },
  {
    id: 34,
    question: "What is the formula for the perimeter of a triangle?",
    answer:
      "The perimeter of a triangle is \\(P = a + b + c\\), where \\(a\\), \\(b\\), and \\(c\\) are the lengths of the sides.",
    solution:
      "To find the perimeter of a triangle, add the lengths of all three sides.",
  },
  {
    id: 35,
    question: "What is the formula for converting grams to milligrams?",
    answer:
      "The formula is \\( \text{milligrams} = \text{grams} \times 1000 \\)",
    solution:
      "To convert grams to milligrams, multiply the number of grams by 1000.",
  },
  {
    id: 36,
    question: "What is the formula for the area of a rhombus?",
    answer:
      "The area of a rhombus is \\(A = \frac{1}{2} \times d_1 \times d_2\\), where \\(d_1\\) and \\(d_2\\) are the lengths of the diagonals.",
    solution:
      "To find the area of a rhombus, multiply the lengths of the diagonals and divide by 2.",
  },
  {
    id: 37,
    question:
      "What is the formula for converting miles per hour to feet per second?",
    answer:
      "The formula is \\( \text{feet per second} = \text{miles per hour} \times 1.46667 \\)",
    solution:
      "To convert miles per hour to feet per second, multiply the miles per hour by 1.46667.",
  },
  {
    id: 38,
    question: "What is the formula for converting gallons to quarts?",
    answer: "The formula is \\( \text{quarts} = \text{gallons} \times 4 \\)",
    solution:
      "To convert gallons to quarts, multiply the number of gallons by 4.",
  },
  {
    id: 39,
    question: "What is the formula for converting seconds to hours?",
    answer: "The formula is \\( \text{hours} = \frac{\text{seconds}}{3600} \\)",
    solution:
      "To convert seconds to hours, divide the number of seconds by 3600.",
  },
  {
    id: 40,
    question: "What is the formula for the area of a rectangle?",
    answer:
      "The area of a rectangle is \\(A = L \times W\\), where \\(L\\) is the length and \\(W\\) is the width.",
    solution:
      "To find the area of a rectangle, multiply the length by the width.",
  },
  {
    id: 41,
    question: "What is the formula for converting yards to inches?",
    answer: "The formula is \\( \text{inches} = \text{yards} \times 36 \\)",
    solution: "To convert yards to inches, multiply the number of yards by 36.",
  },
  {
    id: 42,
    question: "What is the formula for converting cups to ounces?",
    answer: "The formula is \\( \text{ounces} = \text{cups} \times 8 \\)",
    solution: "To convert cups to ounces, multiply the number of cups by 8.",
  },
  {
    id: 43,
    question: "What is the formula for the volume of a rectangular prism?",
    answer:
      "The formula is \\(V = L \times W \times H\\), where \\(L\\) is the length, \\(W\\) is the width, and \\(H\\) is the height.",
    solution:
      "To find the volume of a rectangular prism, multiply the length, width, and height.",
  },
  {
    id: 44,
    question: "What is the formula for converting pounds to ounces?",
    answer: "The formula is \\( \text{ounces} = \text{pounds} \times 16 \\)",
    solution:
      "To convert pounds to ounces, multiply the number of pounds by 16.",
  },
  {
    id: 45,
    question: "What is the formula for converting centimeters to meters?",
    answer: "The formula is \\( \text{meters} = \text{centimeters} div 100 \\)",
    solution:
      "To convert centimeters to meters, divide the number of centimeters by 100.",
  },
  {
    id: 46,
    question: "What is the formula for the area of a square?",
    answer:
      "The area of a square is \\(A = s^2\\), where \\(s\\) is the length of one side.",
    solution: "To find the area of a square, square the length of one side.",
  },
  {
    id: 47,
    question: "What is the formula for converting cubic inches to cubic feet?",
    answer:
      "The formula is \\( \text{cubic feet} = \frac{\text{cubic inches}}{1728} \\)",
    solution:
      "To convert cubic inches to cubic feet, divide the number of cubic inches by 1728.",
  },
  {
    id: 48,
    question: "What is the formula for converting liters to gallons?",
    answer:
      "The formula is \\( \text{gallons} = \text{liters} \times 0.264172 \\)",
    solution:
      "To convert liters to gallons, multiply the number of liters by 0.264172.",
  },
  {
    id: 49,
    question: "What is the formula for the volume of a rectangular pyramid?",
    answer:
      "The formula is \\(V = \frac{1}{3} \times L \times W \times H\\), where \\(L\\) is the length, \\(W\\) is the width, and \\(H\\) is the height.",
    solution:
      "To find the volume of a rectangular pyramid, multiply the length, width, and height, and then divide by 3.",
  },
  {
    id: 50,
    question: "What is the formula for converting kilometers to miles?",
    answer:
      "The formula is \\( \text{miles} = \text{kilometers} \times 0.621371 \\)",
    solution:
      "To convert kilometers to miles, multiply the number of kilometers by 0.621371.",
  },
];

let flashCard_no = 0;

next_button.addEventListener("click", function () {
  clickedButton(this);

  // this code hamdle the reflection effect
  flashCard.classList.add("flashcard-reflect");
  setTimeout(() => {
    flashCard.classList.remove("flashcard-reflect");
  }, 1000);

  if (flashCard_no < questions_bank.length - 1) {
    flashCard_no = flashCard_no + 1;
    question_no.innerHTML = questions_bank[flashCard_no].id;
    question_content.innerHTML = questions_bank[flashCard_no].question;
    answer_no.innerHTML = questions_bank[flashCard_no].id;
    answer_content.innerHTML = questions_bank[flashCard_no].answer;
    solution_content.innerHTML = questions_bank[flashCard_no].solution;

    MathJax.typeset();

    if (flashCard.classList.contains("to-back")) {
      // front_flash_card.style.display = "none";
      flipCard();
    }
  }
});

previous_button.addEventListener("click", function () {
  clickedButton(this);

  // this code hamdle the reflection effect
  flashCard.classList.add("flashcard-reflect");
  setTimeout(() => {
    flashCard.classList.remove("flashcard-reflect");
  }, 1000);

  if (flashCard_no >= 1) {
    console.log(flashCard_no);
    flashCard_no = flashCard_no - 1;
    // alert(questions_bank[flashCard_no].answer)
    question_no.innerHTML = questions_bank[flashCard_no].id;
    question_content.innerHTML = questions_bank[flashCard_no].question;
    answer_no.innerHTML = questions_bank[flashCard_no].id;
    answer_content.innerHTML = questions_bank[flashCard_no].answer;
    front_flash_card.style.display = "flex";
    solution_content.innerHTML = questions_bank[flashCard_no].solution;

    MathJax.typeset();
  }

  if (flashCard.classList.contains("to-back")) {
    front_flash_card.style.display = "none";
    flipCard();
  }
});

console.log(question_no.innerHTML);
console.log(question_content.innerHTML);

question_no.innerHTML = questions_bank[0].id;
question_content.innerHTML = questions_bank[0].question;
answer_no.innerHTML = questions_bank[0].id;
answer_content.innerHTML = questions_bank[0].answer;
solution_content.innerHTML = questions_bank[0].solution;

if (typeof MathJax !== "undefined") {
  console.log("MathJax is loaded successfully!");
} else {
  console.error("MathJax failed to load.");
}

go_to_question.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    flashCard_no = go_to_question.value - 1;
    question_no.innerHTML = questions_bank[flashCard_no].id;
    question_content.innerHTML = questions_bank[flashCard_no].question;
    answer_no.innerHTML = questions_bank[flashCard_no].id;
    answer_content.innerHTML = questions_bank[flashCard_no].answer;
    front_flash_card.style.display = "flex";
    solution_content.innerHTML = questions_bank[flashCard_no].solution;
    MathJax.typeset();
  }
});
