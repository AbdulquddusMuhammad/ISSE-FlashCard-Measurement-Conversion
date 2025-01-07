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
    question: "How many inches are in 3 feet?",
    answer: "36 inches",
    solution:
      "There are 12 inches in 1 foot.<br>Multiply 3 feet by 12 inches per foot: \\(3 \\times 12 = 36\\) inches.",
  },
  {
    id: 2,
    question: "Convert 5 pounds to ounces.",
    answer: "80 ounces",
    solution:
      "There are 16 ounces in 1 pound.<br>Multiply 5 pounds by 16 ounces per pound: \\(5 \\times 16 = 80\\) ounces.",
  },
  {
    id: 3,
    question: "How many cups are in 2 quarts?",
    answer: "8 cups",
    solution:
      "There are 4 cups in 1 quart.<br>Multiply 2 quarts by 4 cups per quart: \\(2 \\times 4 = 8\\) cups.",
  },
  {
    id: 4,
    question: "Convert 120 seconds to minutes.",
    answer: "2 minutes",
    solution:
      "There are 60 seconds in 1 minute.<br>Divide 120 seconds by 60 seconds per minute: \\(120 \\div 60 = 2\\) minutes.",
  },
  {
    id: 5,
    question: "How many millimeters are in 5 centimeters?",
    answer: "50 millimeters",
    solution:
      "There are 10 millimeters in 1 centimeter.<br>Multiply 5 centimeters by 10 millimeters per centimeter: \\(5 \\times 10 = 50\\) millimeters.",
  },
  {
    id: 6,
    question: "Convert 3 kilometers to meters.",
    answer: "3000 meters",
    solution:
      "There are 1000 meters in 1 kilometer.<br>Multiply 3 kilometers by 1000 meters per kilometer: \\(3 \\times 1000 = 3000\\) meters.",
  },
  {
    id: 7,
    question: "If a gallon has 4 quarts, how many quarts are in 3 gallons?",
    answer: "12 quarts",
    solution:
      "Multiply the number of gallons by the number of quarts per gallon: \\(3 \\times 4 = 12\\) quarts.",
  },
  {
    id: 8,
    question: "How many hours are in 3 days?",
    answer: "72 hours",
    solution:
      "There are 24 hours in 1 day.<br>Multiply 3 days by 24 hours per day: \\(3 \\times 24 = 72\\) hours.",
  },
  {
    id: 9,
    question: "Convert 2500 grams to kilograms.",
    answer: "2.5 kilograms",
    solution:
      "There are 1000 grams in 1 kilogram.<br>Divide 2500 grams by 1000 grams per kilogram: \\(2500 \\div 1000 = 2.5\\) kilograms.",
  },
  {
    id: 10,
    question: "How many meters are in 1.5 kilometers?",
    answer: "1500 meters",
    solution:
      "There are 1000 meters in 1 kilometer.<br>Multiply 1.5 kilometers by 1000 meters per kilometer: \\(1.5 \\times 1000 = 1500\\) meters.",
  },
  {
    id: 11,
    question: "How many yards are in 9 feet?",
    answer: "3 yards",
    solution:
      "There are 3 feet in 1 yard.<br>Divide 9 feet by 3 feet per yard: \\(9 \\div 3 = 3\\) yards.",
  },
  {
    id: 12,
    question: "Convert 4 liters to milliliters.",
    answer: "4000 milliliters",
    solution:
      "There are 1000 milliliters in 1 liter.<br>Multiply 4 liters by 1000 milliliters per liter: \\(4 \\times 1000 = 4000\\) milliliters.",
  },
  {
    id: 13,
    question: "How many minutes are in 2.5 hours?",
    answer: "150 minutes",
    solution:
      "There are 60 minutes in 1 hour.<br>Multiply 2.5 hours by 60 minutes per hour: \\(2.5 \\times 60 = 150\\) minutes.",
  },
  {
    id: 14,
    question: "Convert 6 kilograms to grams.",
    answer: "6000 grams",
    solution:
      "There are 1000 grams in 1 kilogram.<br>Multiply 6 kilograms by 1000 grams per kilogram: \\(6 \\times 1000 = 6000\\) grams.",
  },
  {
    id: 15,
    question: "If 1 mile equals 5280 feet, how many feet are in 3 miles?",
    answer: "15,840 feet",
    solution:
      "Multiply 3 miles by 5280 feet per mile: \\(3 \\times 5280 = 15,840\\) feet.",
  },
  {
    id: 16,
    question: "How many cups are in 1.5 pints?",
    answer: "3 cups",
    solution:
      "There are 2 cups in 1 pint.<br>Multiply 1.5 pints by 2 cups per pint: \\(1.5 \\times 2 = 3\\) cups.",
  },
  {
    id: 17,
    question: "Convert 240 minutes to hours.",
    answer: "4 hours",
    solution:
      "There are 60 minutes in 1 hour.<br>Divide 240 minutes by 60 minutes per hour: \\(240 \\div 60 = 4\\) hours.",
  },
  {
    id: 18,
    question: "How many milliliters are in 2.75 liters?",
    answer: "2750 milliliters",
    solution:
      "There are 1000 milliliters in 1 liter.<br>Multiply 2.75 liters by 1000 milliliters per liter: \\(2.75 \\times 1000 = 2750\\) milliliters.",
  },
  {
    id: 19,
    question: "Convert 3600 seconds to hours.",
    answer: "1 hour",
    solution:
      "There are 3600 seconds in 1 hour.<br>Divide 3600 seconds by 3600 seconds per hour: \\(3600 \\div 3600 = 1\\) hour.",
  },
  {
    id: 20,
    question: "How many ounces are in 2.5 pounds?",
    answer: "40 ounces",
    solution:
      "There are 16 ounces in 1 pound.<br>Multiply 2.5 pounds by 16 ounces per pound: \\(2.5 \\times 16 = 40\\) ounces.",
  },
  {
    id: 21,
    question: "How many centimeters are in 4.2 meters?",
    answer: "420 centimeters",
    solution:
      "There are 100 centimeters in 1 meter.<br>Multiply 4.2 meters by 100 centimeters per meter: \\(4.2 \\times 100 = 420\\) centimeters.",
  },
  {
    id: 22,
    question: "Convert 7 gallons to quarts.",
    answer: "28 quarts",
    solution:
      "There are 4 quarts in 1 gallon.<br>Multiply 7 gallons by 4 quarts per gallon: \\(7 \\times 4 = 28\\) quarts.",
  },
  {
    id: 23,
    question: "How many days are in 5 weeks?",
    answer: "35 days",
    solution:
      "There are 7 days in 1 week.<br>Multiply 5 weeks by 7 days per week: \\(5 \\times 7 = 35\\) days.",
  },
  {
    id: 24,
    question: "Convert 0.75 kilometers to meters.",
    answer: "750 meters",
    solution:
      "There are 1000 meters in 1 kilometer.<br>Multiply 0.75 kilometers by 1000 meters per kilometer: \\(0.75 \\times 1000 = 750\\) meters.",
  },
  {
    id: 25,
    question:
      "If a rectangle's length is 5 meters and width is 300 centimeters, what is its perimeter in meters?",
    answer: "16 meters",
    solution:
      "Convert 300 centimeters to meters: \\(300 \\div 100 = 3\\) meters.<br>The perimeter of a rectangle is \\(2L + 2W\\).<br>Substitute \\(L = 5\\) and \\(W = 3\\): \\(2(5) + 2(3) = 10 + 6 = 16\\) meters.",
  },
  {
    id: 26,
    question: "How many hours are in 2.25 days?",
    answer: "54 hours",
    solution:
      "There are 24 hours in 1 day.<br>Multiply 2.25 days by 24 hours per day: \\(2.25 \\times 24 = 54\\) hours.",
  },
  {
    id: 27,
    question: "Convert 120 ounces to pounds.",
    answer: "7.5 pounds",
    solution:
      "There are 16 ounces in 1 pound.<br>Divide 120 ounces by 16 ounces per pound: \\(120 \\div 16 = 7.5\\) pounds.",
  },
  {
    id: 28,
    question: "How many seconds are in 1.5 hours?",
    answer: "5400 seconds",
    solution:
      "There are 3600 seconds in 1 hour.<br>Multiply 1.5 hours by 3600 seconds per hour: \\(1.5 \\times 3600 = 5400\\) seconds.",
  },
  {
    id: 29,
    question: "Convert 8.5 liters to milliliters.",
    answer: "8500 milliliters",
    solution:
      "There are 1000 milliliters in 1 liter.<br>Multiply 8.5 liters by 1000 milliliters per liter: \\(8.5 \\times 1000 = 8500\\) milliliters.",
  },
  {
    id: 30,
    question: "How many feet are in 2.5 yards?",
    answer: "7.5 feet",
    solution:
      "There are 3 feet in 1 yard.<br>Multiply 2.5 yards by 3 feet per yard: \\(2.5 \\times 3 = 7.5\\) feet.",
  },
  {
    id: 31,
    question: "How many millimeters are in 8.2 centimeters?",
    answer: "82 millimeters",
    solution:
      "There are 10 millimeters in 1 centimeter.<br>Multiply 8.2 centimeters by 10 millimeters per centimeter: \\(8.2 \\times 10 = 82\\) millimeters.",
  },
  {
    id: 32,
    question: "Convert 5.5 kilograms to grams.",
    answer: "5500 grams",
    solution:
      "There are 1000 grams in 1 kilogram.<br>Multiply 5.5 kilograms by 1000 grams per kilogram: \\(5.5 \\times 1000 = 5500\\) grams.",
  },
  {
    id: 33,
    question: "How many weeks are in 49 days?",
    answer: "7 weeks",
    solution:
      "There are 7 days in 1 week.<br>Divide 49 days by 7 days per week: \\(49 \\div 7 = 7\\) weeks.",
  },
  {
    id: 34,
    question: "Convert 2.5 gallons to quarts.",
    answer: "10 quarts",
    solution:
      "There are 4 quarts in 1 gallon.<br>Multiply 2.5 gallons by 4 quarts per gallon: \\(2.5 \\times 4 = 10\\) quarts.",
  },
  {
    id: 35,
    question: "How many meters are in 3.6 kilometers?",
    answer: "3600 meters",
    solution:
      "There are 1000 meters in 1 kilometer.<br>Multiply 3.6 kilometers by 1000 meters per kilometer: \\(3.6 \\times 1000 = 3600\\) meters.",
  },
  {
    id: 36,
    question: "If 1 ton equals 2000 pounds, how many pounds are in 1.5 tons?",
    answer: "3000 pounds",
    solution:
      "Multiply 1.5 tons by 2000 pounds per ton: \\(1.5 \\times 2000 = 3000\\) pounds.",
  },
  {
    id: 37,
    question: "Convert 6 pints to cups.",
    answer: "12 cups",
    solution:
      "There are 2 cups in 1 pint.<br>Multiply 6 pints by 2 cups per pint: \\(6 \\times 2 = 12\\) cups.",
  },
  {
    id: 38,
    question: "How many hours are in 5.5 days?",
    answer: "132 hours",
    solution:
      "There are 24 hours in 1 day.<br>Multiply 5.5 days by 24 hours per day: \\(5.5 \\times 24 = 132\\) hours.",
  },
  {
    id: 39,
    question: "Convert 4200 seconds to minutes.",
    answer: "70 minutes",
    solution:
      "There are 60 seconds in 1 minute.<br>Divide 4200 seconds by 60 seconds per minute: \\(4200 \\div 60 = 70\\) minutes.",
  },
  {
    id: 40,
    question: "How many inches are in 3.5 yards?",
    answer: "126 inches",
    solution:
      "There are 36 inches in 1 yard.<br>Multiply 3.5 yards by 36 inches per yard: \\(3.5 \\times 36 = 126\\) inches.",
  },
  {
    id: 41,
    question: "Convert 0.75 liters to milliliters.",
    answer: "750 milliliters",
    solution:
      "There are 1000 milliliters in 1 liter.<br>Multiply 0.75 liters by 1000 milliliters per liter: \\(0.75 \\times 1000 = 750\\) milliliters.",
  },
  {
    id: 42,
    question: "How many ounces are in 4.5 pounds?",
    answer: "72 ounces",
    solution:
      "There are 16 ounces in 1 pound.<br>Multiply 4.5 pounds by 16 ounces per pound: \\(4.5 \\times 16 = 72\\) ounces.",
  },
  {
    id: 43,
    question: "Convert 180 minutes to hours.",
    answer: "3 hours",
    solution:
      "There are 60 minutes in 1 hour.<br>Divide 180 minutes by 60 minutes per hour: \\(180 \\div 60 = 3\\) hours.",
  },
  {
    id: 44,
    question: "How many yards are in 18 feet?",
    answer: "6 yards",
    solution:
      "There are 3 feet in 1 yard.<br>Divide 18 feet by 3 feet per yard: \\(18 \\div 3 = 6\\) yards.",
  },
  {
    id: 45,
    question: "Convert 7.2 meters to centimeters.",
    answer: "720 centimeters",
    solution:
      "There are 100 centimeters in 1 meter.<br>Multiply 7.2 meters by 100 centimeters per meter: \\(7.2 \\times 100 = 720\\) centimeters.",
  },
  {
    id: 46,
    question: "How many cups are in 2.5 quarts?",
    answer: "10 cups",
    solution:
      "There are 4 cups in 1 quart.<br>Multiply 2.5 quarts by 4 cups per quart: \\(2.5 \\times 4 = 10\\) cups.",
  },
  {
    id: 47,
    question: "Convert 15 kilometers to meters.",
    answer: "15,000 meters",
    solution:
      "There are 1000 meters in 1 kilometer.<br>Multiply 15 kilometers by 1000 meters per kilometer: \\(15 \\times 1000 = 15,000\\) meters.",
  },
  {
    id: 48,
    question: "How many days are in 3 weeks?",
    answer: "21 days",
    solution:
      "There are 7 days in 1 week.<br>Multiply 3 weeks by 7 days per week: \\(3 \\times 7 = 21\\) days.",
  },
  {
    id: 49,
    question: "Convert 5 hours to seconds.",
    answer: "18,000 seconds",
    solution:
      "There are 60 seconds in 1 minute and 60 minutes in 1 hour.<br>Multiply \\(5 \\times 60 \\times 60 = 18,000\\) seconds.",
  },
  {
    id: 50,
    question: "How many feet are in 0.25 miles?",
    answer: "1320 feet",
    solution:
      "There are 5280 feet in 1 mile.<br>Multiply 0.25 miles by 5280 feet per mile: \\(0.25 \\times 5280 = 1320\\) feet.",
  },
  {
    id: 51,
    question: "Convert 9 liters to milliliters.",
    answer: "9000 milliliters",
    solution:
      "There are 1000 milliliters in 1 liter.<br>Multiply 9 liters by 1000 milliliters per liter: \\(9 \\times 1000 = 9000\\) milliliters.",
  },
  {
    id: 52,
    question: "How many inches are in 2.75 feet?",
    answer: "33 inches",
    solution:
      "There are 12 inches in 1 foot.<br>Multiply 2.75 feet by 12 inches per foot: \\(2.75 \\times 12 = 33\\) inches.",
  },
  {
    id: 53,
    question: "Convert 3600 seconds to hours.",
    answer: "1 hour",
    solution:
      "There are 60 seconds in 1 minute and 60 minutes in 1 hour.<br>Divide 3600 seconds by \\(60 \\times 60 = 3600\\) seconds per hour: \\(3600 \\div 3600 = 1\\) hour.",
  },
  {
    id: 54,
    question: "How many meters are in 2.5 kilometers?",
    answer: "2500 meters",
    solution:
      "There are 1000 meters in 1 kilometer.<br>Multiply 2.5 kilometers by 1000 meters per kilometer: \\(2.5 \\times 1000 = 2500\\) meters.",
  },
  {
    id: 55,
    question: "Convert 0.5 tons to pounds.",
    answer: "1000 pounds",
    solution:
      "There are 2000 pounds in 1 ton.<br>Multiply 0.5 tons by 2000 pounds per ton: \\(0.5 \\times 2000 = 1000\\) pounds.",
  },
  {
    id: 56,
    question: "How many quarts are in 8 gallons?",
    answer: "32 quarts",
    solution:
      "There are 4 quarts in 1 gallon.<br>Multiply 8 gallons by 4 quarts per gallon: \\(8 \\times 4 = 32\\) quarts.",
  },
  {
    id: 57,
    question: "Convert 240 minutes to hours.",
    answer: "4 hours",
    solution:
      "There are 60 minutes in 1 hour.<br>Divide 240 minutes by 60 minutes per hour: \\(240 \\div 60 = 4\\) hours.",
  },
  {
    id: 58,
    question: "How many grams are in 3.2 kilograms?",
    answer: "3200 grams",
    solution:
      "There are 1000 grams in 1 kilogram.<br>Multiply 3.2 kilograms by 1000 grams per kilogram: \\(3.2 \\times 1000 = 3200\\) grams.",
  },
  {
    id: 59,
    question: "Convert 14 days to hours.",
    answer: "336 hours",
    solution:
      "There are 24 hours in 1 day.<br>Multiply 14 days by 24 hours per day: \\(14 \\times 24 = 336\\) hours.",
  },
  {
    id: 60,
    question: "How many miles are in 5280 feet?",
    answer: "1 mile",
    solution:
      "There are 5280 feet in 1 mile.<br>Divide 5280 feet by 5280 feet per mile: \\(5280 \\div 5280 = 1\\) mile.",
  },
  {
    id: 61,
    question: "Convert 5.5 kilometers to meters.",
    answer: "5500 meters",
    solution:
      "There are 1000 meters in 1 kilometer.<br>Multiply 5.5 kilometers by 1000 meters per kilometer: \\(5.5 \\times 1000 = 5500\\) meters.",
  },
  {
    id: 62,
    question: "How many ounces are in 2.5 pounds?",
    answer: "40 ounces",
    solution:
      "There are 16 ounces in 1 pound.<br>Multiply 2.5 pounds by 16 ounces per pound: \\(2.5 \\times 16 = 40\\) ounces.",
  },
  {
    id: 63,
    question: "Convert 7 hours to minutes.",
    answer: "420 minutes",
    solution:
      "There are 60 minutes in 1 hour.<br>Multiply 7 hours by 60 minutes per hour: \\(7 \\times 60 = 420\\) minutes.",
  },
  {
    id: 64,
    question: "How many inches are in 0.5 yards?",
    answer: "18 inches",
    solution:
      "There are 36 inches in 1 yard.<br>Multiply 0.5 yards by 36 inches per yard: \\(0.5 \\times 36 = 18\\) inches.",
  },
  {
    id: 65,
    question: "Convert 1200 grams to kilograms.",
    answer: "1.2 kilograms",
    solution:
      "There are 1000 grams in 1 kilogram.<br>Divide 1200 grams by 1000 grams per kilogram: \\(1200 \\div 1000 = 1.2\\) kilograms.",
  },
  {
    id: 66,
    question: "How many pints are in 3 gallons?",
    answer: "24 pints",
    solution:
      "There are 8 pints in 1 gallon.<br>Multiply 3 gallons by 8 pints per gallon: \\(3 \\times 8 = 24\\) pints.",
  },
  {
    id: 67,
    question: "Convert 96 inches to feet.",
    answer: "8 feet",
    solution:
      "There are 12 inches in 1 foot.<br>Divide 96 inches by 12 inches per foot: \\(96 \\div 12 = 8\\) feet.",
  },
  {
    id: 68,
    question: "How many seconds are in 3.5 hours?",
    answer: "12,600 seconds",
    solution:
      "There are 60 seconds in 1 minute and 60 minutes in 1 hour.<br>Multiply \\(3.5 \\times 60 \\times 60 = 12,600\\) seconds.",
  },
  {
    id: 69,
    question: "Convert 0.25 meters to centimeters.",
    answer: "25 centimeters",
    solution:
      "There are 100 centimeters in 1 meter.<br>Multiply 0.25 meters by 100 centimeters per meter: \\(0.25 \\times 100 = 25\\) centimeters.",
  },
  {
    id: 70,
    question: "How many milliliters are in 3.2 liters?",
    answer: "3200 milliliters",
    solution:
      "There are 1000 milliliters in 1 liter.<br>Multiply 3.2 liters by 1000 milliliters per liter: \\(3.2 \\times 1000 = 3200\\) milliliters.",
  },
  {
    id: 71,
    question: "Convert 15 meters to centimeters.",
    answer: "1500 centimeters",
    solution:
      "There are 100 centimeters in 1 meter.<br>Multiply 15 meters by 100 centimeters per meter: \\(15 \\times 100 = 1500\\) centimeters.",
  },
  {
    id: 72,
    question: "How many feet are in 0.75 miles?",
    answer: "3960 feet",
    solution:
      "There are 5280 feet in 1 mile.<br>Multiply 0.75 miles by 5280 feet per mile: \\(0.75 \\times 5280 = 3960\\) feet.",
  },
  {
    id: 73,
    question: "Convert 7200 seconds to hours.",
    answer: "2 hours",
    solution:
      "There are 3600 seconds in 1 hour.<br>Divide 7200 seconds by 3600 seconds per hour: \\(7200 \\div 3600 = 2\\) hours.",
  },
  {
    id: 74,
    question: "How many yards are in 36 feet?",
    answer: "12 yards",
    solution:
      "There are 3 feet in 1 yard.<br>Divide 36 feet by 3 feet per yard: \\(36 \\div 3 = 12\\) yards.",
  },
  {
    id: 75,
    question: "Convert 0.6 kilograms to grams.",
    answer: "600 grams",
    solution:
      "There are 1000 grams in 1 kilogram.<br>Multiply 0.6 kilograms by 1000 grams per kilogram: \\(0.6 \\times 1000 = 600\\) grams.",
  },
  {
    id: 76,
    question: "How many quarts are in 6 pints?",
    answer: "3 quarts",
    solution:
      "There are 2 pints in 1 quart.<br>Divide 6 pints by 2 pints per quart: \\(6 \\div 2 = 3\\) quarts.",
  },
  {
    id: 77,
    question: "Convert 4.5 hours to minutes.",
    answer: "270 minutes",
    solution:
      "There are 60 minutes in 1 hour.<br>Multiply 4.5 hours by 60 minutes per hour: \\(4.5 \\times 60 = 270\\) minutes.",
  },
  {
    id: 78,
    question: "How many millimeters are in 0.08 meters?",
    answer: "80 millimeters",
    solution:
      "There are 1000 millimeters in 1 meter.<br>Multiply 0.08 meters by 1000 millimeters per meter: \\(0.08 \\times 1000 = 80\\) millimeters.",
  },
  {
    id: 79,
    question: "Convert 2.4 gallons to quarts.",
    answer: "9.6 quarts",
    solution:
      "There are 4 quarts in 1 gallon.<br>Multiply 2.4 gallons by 4 quarts per gallon: \\(2.4 \\times 4 = 9.6\\) quarts.",
  },
  {
    id: 80,
    question: "How many ounces are in 5 cups?",
    answer: "40 ounces",
    solution:
      "There are 8 ounces in 1 cup.<br>Multiply 5 cups by 8 ounces per cup: \\(5 \\times 8 = 40\\) ounces.",
  },
  {
    id: 81,
    question: "Convert 3.5 kilograms to grams.",
    answer: "3500 grams",
    solution:
      "There are 1000 grams in 1 kilogram.<br>Multiply 3.5 kilograms by 1000 grams per kilogram: \\(3.5 \\times 1000 = 3500\\) grams.",
  },
  {
    id: 82,
    question: "How many feet are in 1.5 yards?",
    answer: "4.5 feet",
    solution:
      "There are 3 feet in 1 yard.<br>Multiply 1.5 yards by 3 feet per yard: \\(1.5 \\times 3 = 4.5\\) feet.",
  },
  {
    id: 83,
    question: "Convert 50 milliliters to liters.",
    answer: "0.05 liters",
    solution:
      "There are 1000 milliliters in 1 liter.<br>Divide 50 milliliters by 1000 milliliters per liter: \\(50 \\div 1000 = 0.05\\) liters.",
  },
  {
    id: 84,
    question: "How many gallons are in 32 quarts?",
    answer: "8 gallons",
    solution:
      "There are 4 quarts in 1 gallon.<br>Divide 32 quarts by 4 quarts per gallon: \\(32 \\div 4 = 8\\) gallons.",
  },
  {
    id: 85,
    question: "Convert 180 minutes to hours.",
    answer: "3 hours",
    solution:
      "There are 60 minutes in 1 hour.<br>Divide 180 minutes by 60 minutes per hour: \\(180 \\div 60 = 3\\) hours.",
  },
  {
    id: 86,
    question: "How many seconds are in 2 hours?",
    answer: "7200 seconds",
    solution:
      "There are 60 seconds in 1 minute and 60 minutes in 1 hour.<br>Multiply 2 hours by 60 minutes per hour and then by 60 seconds per minute: \\(2 \times 60 \times 60 = 7200\\) seconds.",
  },
  {
    id: 87,
    question: "Convert 0.25 gallons to pints.",
    answer: "2 pints",
    solution:
      "There are 2 pints in 1 gallon.<br>Multiply 0.25 gallons by 2 pints per gallon: \\(0.25 \times 2 = 2\\) pints.",
  },
  {
    id: 88,
    question: "How many inches are in 5 feet?",
    answer: "60 inches",
    solution:
      "There are 12 inches in 1 foot.<br>Multiply 5 feet by 12 inches per foot: \\(5 \times 12 = 60\\) inches.",
  },
  {
    id: 89,
    question: "Convert 72 ounces to pounds.",
    answer: "4.5 pounds",
    solution:
      "There are 16 ounces in 1 pound.<br>Divide 72 ounces by 16 ounces per pound: \\(72 div 16 = 4.5\\) pounds.",
  },
  {
    id: 90,
    question: "How many milliliters are in 3.5 liters?",
    answer: "3500 milliliters",
    solution:
      "There are 1000 milliliters in 1 liter.<br>Multiply 3.5 liters by 1000 milliliters per liter: \\(3.5 \times 1000 = 3500\\) milliliters.",
  },
  {
    id: 91,
    question: "Convert 200 centimeters to meters.",
    answer: "2 meters",
    solution:
      "There are 100 centimeters in 1 meter.<br>Divide 200 centimeters by 100 centimeters per meter: \\(200 div 100 = 2\\) meters.",
  },
  {
    id: 92,
    question: "How many pints are in 4 gallons?",
    answer: "32 pints",
    solution:
      "There are 8 pints in 1 gallon.<br>Multiply 4 gallons by 8 pints per gallon: \\(4 \times 8 = 32\\) pints.",
  },
  {
    id: 93,
    question: "Convert 0.5 miles to feet.",
    answer: "2640 feet",
    solution:
      "There are 5280 feet in 1 mile.<br>Multiply 0.5 miles by 5280 feet per mile: \\(0.5 \times 5280 = 2640\\) feet.",
  },
  {
    id: 94,
    question: "How many milliliters are in 2.5 liters?",
    answer: "2500 milliliters",
    solution:
      "There are 1000 milliliters in 1 liter.<br>Multiply 2.5 liters by 1000 milliliters per liter: \\(2.5 \times 1000 = 2500\\) milliliters.",
  },
  {
    id: 95,
    question: "Convert 3600 seconds to minutes.",
    answer: "60 minutes",
    solution:
      "There are 60 seconds in 1 minute.<br>Divide 3600 seconds by 60 seconds per minute: \\(3600 div 60 = 60\\) minutes.",
  },
  {
    id: 96,
    question: "How many inches are in 2 yards?",
    answer: "72 inches",
    solution:
      "There are 36 inches in 1 yard.<br>Multiply 2 yards by 36 inches per yard: \\(2 \times 36 = 72\\) inches.",
  },
  {
    id: 97,
    question: "Convert 1000 grams to kilograms.",
    answer: "1 kilogram",
    solution:
      "There are 1000 grams in 1 kilogram.<br>Divide 1000 grams by 1000 grams per kilogram: \\(1000 div 1000 = 1\\) kilogram.",
  },
  {
    id: 98,
    question: "How many feet are in 0.25 miles?",
    answer: "1320 feet",
    solution:
      "There are 5280 feet in 1 mile.<br>Multiply 0.25 miles by 5280 feet per mile: \\(0.25 \times 5280 = 1320\\) feet.",
  },
  {
    id: 99,
    question: "Convert 48 ounces to cups.",
    answer: "6 cups",
    solution:
      "There are 8 ounces in 1 cup.<br>Divide 48 ounces by 8 ounces per cup: \\(48 div 8 = 6\\) cups.",
  },
  {
    id: 100,
    question: "How many milliliters are in 0.75 liters?",
    answer: "750 milliliters",
    solution:
      "There are 1000 milliliters in 1 liter.<br>Multiply 0.75 liters by 1000 milliliters per liter: \\(0.75 \times 1000 = 750\\) milliliters.",
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
