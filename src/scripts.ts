const firstCube: HTMLElement | null = document.getElementById("firstCube");
const secondCube: HTMLElement | null = document.getElementById("secondCube");
const thirdCube: HTMLElement | null = document.getElementById("thirdCube");
const fourthCube: HTMLElement | null = document.getElementById("fourthCube");
const fifthCube: HTMLElement | null = document.getElementById("fifthCube");
const sixthCube: HTMLElement | null = document.getElementById("sixthCube");

window.onload = function () {
  const secondCubeInitialText: string = "FAIL";

  if (secondCube) {
    secondCube.textContent = secondCubeInitialText;
  }

  const initialZero: string = "0";

  if (fifthCube) {
    fifthCube.textContent = initialZero;
  }
  if (sixthCube) {
    sixthCube.textContent = initialZero;
  }
};

const buttonOne: HTMLElement | null = document.querySelector(".button_one");

let firstButtonIsYellow: boolean = false;
let firstCubeIsRed: boolean = false;

if (buttonOne) {
  buttonOne.addEventListener("click", () => {
    if (firstCube) {
      firstCube.style.backgroundColor = firstButtonIsYellow ? "" : "yellow";
      firstButtonIsYellow = !firstButtonIsYellow;
    }
  });
}

if (firstCube) {
  firstCube.addEventListener("mouseenter", () => {
    firstCube.style.backgroundColor = "red";
    firstCubeIsRed = true;
  });

  firstCube.addEventListener("mouseleave", () => {
    firstCube.style.backgroundColor = "";
    firstCubeIsRed = false;
  });
}

const buttonTwo: HTMLElement | null =
  document.querySelector<HTMLButtonElement>(".button_two");

let secondCubeDefault: string = "FAIL";

if (buttonTwo) {
  buttonTwo.addEventListener("click", () => {
    if (secondCube) {
      if (secondCube.textContent === "SUCCESS") {
        secondCube.textContent = secondCubeDefault;
      } else {
        secondCube.textContent = "SUCCESS";
      }
    }
  });
}

const buttonThree: HTMLElement | null =
  document.querySelector<HTMLButtonElement>(".button_three");

if (buttonThree) {
  buttonThree.addEventListener("click", () => {
    if (thirdCube) {
      thirdCube.style.visibility = "hidden";
    }
  });
}

const buttonFour: HTMLElement | null =
  document.querySelector<HTMLButtonElement>(".button_four");

if (buttonFour) {
  buttonFour.addEventListener("click", () => {
    if (fourthCube) {
      if (fourthCube.style.visibility === "visible") {
        fourthCube.style.visibility = "hidden";
      } else {
        fourthCube.style.visibility = "visible";
      }
    }
  });
}

const buttonFive: HTMLElement | null =
  document.querySelector<HTMLButtonElement>(".button_five");

if (buttonFive) {
  buttonFive.addEventListener("click", () => {
    if (fifthCube) {
      const colorPalate: { [key: number]: string } = {
        1: "Yellow",
        2: "Aqua",
        3: "Red",
        4: "Purple",
        5: "Green",
      };

      const randomNumber: number = getRandomColor();

      previousRandomNumber = randomNumber;

      fifthCube.style.backgroundColor = colorPalate[randomNumber];
    }
  });
}

let countingActive: boolean = false;
let intervalId: NodeJS.Timeout;
let timer: number = 1;

const countToTen = () => {

  if (countingActive) {
    return; 
  }


  intervalId = setInterval(() => {

    fifthCube.textContent = String(timer);
    timer++;

    if (timer > 10) {
      stopAndResetCount(); 
    }
  }, 500);

  countingActive = true; // Set counting as active
}

const stopAndResetCount = () => {
  clearInterval(intervalId);
  countingActive = false; 
  timer = 1;
  fifthCube.textContent = "0"
}

if (fifthCube) {

  fifthCube.addEventListener("mouseover", countToTen);
  

  fifthCube.addEventListener("mouseleave", stopAndResetCount);
}

const getRandomColor = (): number => {
  let randomNumber: number;

  do {
    randomNumber = Math.ceil(Math.random() * 5);
  } while (randomNumber === previousRandomNumber);

  return randomNumber;
};

let previousRandomNumber: number;

const buttonSix: HTMLElement | null =
  document.querySelector<HTMLButtonElement>(".button_six");

if (buttonSix) {
  buttonSix.addEventListener("click", () => {
    if (sixthCube) {
      let i: number = 1;
      const intervalId = setInterval(() => {
        sixthCube.textContent = String(i);
        i++;

        if (i > 10) {
          clearInterval(intervalId);
        }
      }, 3000);
    }
  });
}

let defaultLook: boolean = true;

const allCubes: HTMLCollectionOf<Element> =
  document.getElementsByClassName("cube");
// getElementsByClassName Nevar applyot styles jo tas ir Collection of elements nevis Array.
const background: HTMLCollectionOf<Element> =
  document.getElementsByTagName("body");

// 7. poga Anchoring piemērs kur tiek izmantos ? starp .querySelectoru un .addEventListener - Ja qurrySelectors atgriezīs null tad otrā puse nemaz nepildīsies

document
  .querySelector<HTMLButtonElement>(".button_seven")
  ?.addEventListener("click", () => {
    for (let i = 0; i < allCubes.length; i++) {
      let cube = allCubes[i] as HTMLElement;
      cube.style.backgroundColor = defaultLook ? "#18D5E1" : "";
    }

    for (let i = 0; i < background.length; i++) {
      let bodyElement = background[i] as HTMLElement;
      bodyElement.style.backgroundColor = defaultLook ? "#000000" : "";
    }

    defaultLook = !defaultLook;
  });

let inputField: HTMLInputElement | null = document.getElementById(
  "textField"
) as HTMLInputElement;
let displayText: HTMLElement | null = document.getElementById("displayText");

if (inputField && displayText) {
  inputField.addEventListener("input", () => {
    displayText.textContent = inputField.value;
    displayText.style.fontSize = "30px";
  });
}
