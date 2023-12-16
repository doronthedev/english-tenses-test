function check_name() {
  let enter_name = document.getElementById("enter_name").value;
  document.getElementById(
    "instructions"
  ).textContent = `Hello ${enter_name}, welcome to the quiz about tenses, the following tenses will appear in the quiz: Present simple, present progressive, past simple, past progressive and future. In addition, there is practice on passive and active.`;
}

function check_answer(page, input_number, answers) {
  const input_value = document.getElementById(`input_${page}_${input_number}`).value;
  let check_element = document.getElementById(`check_${page}_${input_number}`);

  if (answers.includes(input_value)) {
    check_element.textContent = "✅";
    return true;
  } else {
    check_element.textContent = "❌";
    check_element.style.color = "red";
  }
}

function check_answer_1() {
  let correct_sum = 0;
  const num_of_questions = 9;

  correct_sum += check_answer("1", "01", ["slept"]) ? 1 : 0;
  correct_sum += check_answer("1", "02", ["didn't sleep", "did not sleep"]) ? 1 : 0;
  correct_sum += check_answer("1", "12", ["was"]) ? 1 : 0;
  correct_sum += check_answer("1", "03", ["did"]) ? 1 : 0;
  correct_sum += check_answer("1", "13", ["teach"]) ? 1 : 0;
  correct_sum += check_answer("1", "04", ["Did"]) ? 1 : 0;
  correct_sum += check_answer("1", "14", ["do"]) ? 1 : 0;
  correct_sum += check_answer("1", "05", ["did"]) ? 1 : 0;
  correct_sum += check_answer("1", "15", ["do"]) ? 1 : 0;

  document.getElementById("grade_1").textContent = `Your grade: ${((correct_sum * 100) / num_of_questions).toFixed(1)}`;
  document.getElementById("correct_1").textContent = `The number of correct answers: ${correct_sum}`;
  document.getElementById("wrong_1").textContent = `The number of wrong answers: ${num_of_questions - correct_sum}`;
}

function check_answer_2() {
  let correct_sum = 0;
  let num_of_questions = 11;

  correct_sum += check_answer("2", "01", ["was eating"]) ? 1 : 0;
  correct_sum += check_answer("2", "11", ["fell"]) ? 1 : 0;
  correct_sum += check_answer("2", "02", ["weren't eating"]) ? 1 : 0;
  correct_sum += check_answer("2", "12", ["were listening"]) ? 1 : 0;
  correct_sum += check_answer("2", "03", ["Was"]) ? 1 : 0;
  correct_sum += check_answer("2", "13", ["doing"]) ? 1 : 0;
  correct_sum += check_answer("2", "23", ["was studying"]) ? 1 : 0;
  correct_sum += check_answer("2", "04", ["was"]) ? 1 : 0;
  correct_sum += check_answer("2", "14", ["doing"]) ? 1 : 0;
  correct_sum += check_answer("2", "05", ["was"]) ? 1 : 0;
  correct_sum += check_answer("2", "15", ["interviewing"]) ? 1 : 0;

  document.getElementById("grade_2").textContent = `Your grade: ${((correct_sum * 100) / num_of_questions).toFixed(1)}`;
  document.getElementById("correct_2").textContent = `The number of correct answers: ${correct_sum}`;
  document.getElementById("wrong_2").textContent = `The number of wrong answers: ${num_of_questions - correct_sum}`;
}

function check_answer_3() {
  let correct_sum = 0;
  let num_of_questions = 9;

  correct_sum += check_answer("3", "01", ["does"]) ? 1 : 0;
  correct_sum += check_answer("3", "02", ["don't pay", "do not pay"]) ? 1 : 0;
  correct_sum += check_answer("3", "12", ["pays"]) ? 1 : 0;
  correct_sum += check_answer("3", "03", ["Do"]) ? 1 : 0;
  correct_sum += check_answer("3", "13", ["pay"]) ? 1 : 0;
  correct_sum += check_answer("3", "04", ["does"]) ? 1 : 0;
  correct_sum += check_answer("3", "14", ["visit"]) ? 1 : 0;
  correct_sum += check_answer("3", "05", ["do"]) ? 1 : 0;
  correct_sum += check_answer("3", "15", ["live"]) ? 1 : 0;

  document.getElementById("grade_3").textContent = `Your grade: ${((correct_sum * 100) / num_of_questions).toFixed(1)}`;
  document.getElementById("correct_3").textContent = `The number of correct answers: ${correct_sum}`;
  document.getElementById("wrong_3").textContent = `The number of wrong answers: ${num_of_questions - correct_sum}`;
}

function check_answer_4() {
  let correct_sum = 0;
  let num_of_questions = 8;

  correct_sum += check_answer("4", "01", ["is eating"]) ? 1 : 0;
  correct_sum += check_answer("4", "02", ["is not eating", "isn't eating"]) ? 1 : 0;
  correct_sum += check_answer("4", "03", ["Is"]) ? 1 : 0;
  correct_sum += check_answer("4", "13", ["holding"]) ? 1 : 0;
  correct_sum += check_answer("4", "04", ["is"]) ? 1 : 0;
  correct_sum += check_answer("4", "14", ["handing"]) ? 1 : 0;
  correct_sum += check_answer("4", "05", ["is"]) ? 1 : 0;
  correct_sum += check_answer("4", "15", ["wearing"]) ? 1 : 0;

  document.getElementById("grade_4").textContent = `Your grade: ${((correct_sum * 100) / num_of_questions).toFixed(1)}`;
  document.getElementById("correct_4").textContent = `The number of correct answers: ${correct_sum}`;
  document.getElementById("wrong_4").textContent = `The number of wrong answers: ${num_of_questions - correct_sum}`;
}

function check_answer_5() {
  let correct_sum = 0;
  let num_of_questions = 8;

  correct_sum += check_answer("5", "01", ["will study"]) ? 1 : 0;
  correct_sum += check_answer("5", "02", ["won't come", "will not come"]) ? 1 : 0;
  correct_sum += check_answer("5", "12", ["will be"]) ? 1 : 0;
  correct_sum += check_answer("5", "03", ["Will"]) ? 1 : 0;
  correct_sum += check_answer("5", "13", ["come"]) ? 1 : 0;
  correct_sum += check_answer("5", "04", ["will", "did"]) ? 1 : 0;
  correct_sum += check_answer("5", "14", ["take place"]) ? 1 : 0;
  correct_sum += check_answer("5", "05", ["will be", "was"]) ? 1 : 0;

  document.getElementById("grade_5").textContent = `Your grade: ${((correct_sum * 100) / num_of_questions).toFixed(1)}`;
  document.getElementById("correct_5").textContent = `The number of correct answers: ${correct_sum}`;
  document.getElementById("wrong_5").textContent = `The number of wrong answers: ${num_of_questions - correct_sum}`;
}

function check_answer_6() {
  let correct_sum = 0;
  let num_of_questions = 10;

  correct_sum += check_answer("6", "01", ["The delicious lasagna will be eaten by Dan.",
                                          "The delicious lasagna will be eaten by Dan tomorrow.", 
                                          "The delicious lasagna will be eaten by Dan tomorrow."]) ? 1 : 0;
  correct_sum += check_answer("6", "02", ["Every week, Yosi's parents are hugged by Yosi.",
                                          "Yosi's parents are hugged by Yosi every week."]) ? 1 : 0;
  correct_sum += check_answer("6", "03", ["The exams are being graded by the English teacher now."]) ? 1 : 0;
  correct_sum += check_answer("6", "04", ["Idan and his friends are eating the birthday cake."]) ? 1 : 0;
  correct_sum += check_answer("6", "05", ["The evil bee stung me yesterday."]) ? 1 : 0;
  correct_sum += check_answer("6", "06", ["Dani ate all the chocolates."]) ? 1 : 0;
  correct_sum += check_answer("6", "07", ["John was driving too fast and the policeman stopped his car."]) ? 1 : 0;
  correct_sum += check_answer("6", "08", ["We were late for the show so the people took the seats all."]) ? 1 : 0;
  correct_sum += check_answer("6", "09", ["This chef made this chocolate with only three ingredients"]) ? 1 : 0;
  correct_sum += check_answer("6", "010",["Because of covid, the government closed most of the stores.",
                                          "The government closed most of the stores, because of covid", 
                                          "Because of covid the government closed most of the stores.",
                                          "The government closed most of the stores because of covid"]) ? 1 : 0;

  document.getElementById("grade_6").textContent = `Your grade: ${((correct_sum * 100) / num_of_questions).toFixed(1)}`;
  document.getElementById("correct_6").textContent = `The number of correct answers: ${correct_sum}`;
  document.getElementById("wrong_6").textContent = `The number of wrong answers: ${num_of_questions - correct_sum}`;
}

function check_answer_7(){ 
  let correct_sum = 0;
  const num_of_questions = 27;

  correct_sum += check_answer("7", "01",  ["travel"]) ? 1 : 0;
  correct_sum += check_answer("7", "02",  ["were"]) ? 1 : 0;
  correct_sum += check_answer("7", "03",  ["was"]) ? 1 : 0;
  correct_sum += check_answer("7", "04",  ["enjoyed"]) ? 1 : 0;
  correct_sum += check_answer("7", "05",  ["rains"]) ? 1 : 0;
  correct_sum += check_answer("7", "06",  ["were walking"]) ? 1 : 0;
  correct_sum += check_answer("7", "07",  ["started"]) ? 1 : 0;
  correct_sum += check_answer("7", "08",  ["fall"]) ? 1 : 0;
  correct_sum += check_answer("7", "09",  ["ran"]) ? 1 : 0;
  correct_sum += check_answer("7", "010", ["stayed"]) ? 1 : 0;
  correct_sum += check_answer("7", "011", ["stopped"]) ? 1 : 0;
  correct_sum += check_answer("7", "012", ["had"]) ? 1 : 0;
  correct_sum += check_answer("7", "013", ["will be visiting", "will visit"]) ? 1 : 0;
  correct_sum += check_answer("7", "014", ["will be"]) ? 1 : 0;
  correct_sum += check_answer("7", "015", ["excited"]) ? 1 : 0;
  correct_sum += check_answer("7", "016", ["will start"]) ? 1 : 0;
  correct_sum += check_answer("7", "017", ["finish"]) ? 1 : 0;
  correct_sum += check_answer("7", "018", ["are"]) ? 1 : 0;
  correct_sum += check_answer("7", "019", ["will choose"]) ? 1 : 0;
  correct_sum += check_answer("7", "020", ["studied"]) ? 1 : 0;
  correct_sum += check_answer("7", "021", ["had"]) ? 1 : 0;
  correct_sum += check_answer("7", "022", ["take"]) ? 1 : 0;
  correct_sum += check_answer("7", "023", ["accepted"]) ? 1 : 0;
  correct_sum += check_answer("7", "024", ["will have"]) ? 1 : 0;
  correct_sum += check_answer("7", "025", ["study"]) ? 1 : 0;
  correct_sum += check_answer("7", "026", ["hope"]) ? 1 : 0;
  correct_sum += check_answer("7", "027", ["will be accepted"]) ? 1 : 0;

  document.getElementById("grade_7").textContent = `Your grade: ${((correct_sum * 100) / num_of_questions).toFixed(1)}`;
  document.getElementById("correct_7").textContent = `The number of correct answers: ${correct_sum}`;
  document.getElementById("wrong_7").textContent = `The number of wrong answers: ${num_of_questions - correct_sum}`;
}

const star_1 = document.getElementById("star_1")
const star_2 = document.getElementById("star_2")
const star_3 = document.getElementById("star_3")
const star_4 = document.getElementById("star_4")
const star_5 = document.getElementById("star_5")



star_1.addEventListener("click", () => {
    const color1 = getComputedStyle(star_1).color;
    const color2 = getComputedStyle(star_2).color;

    if (color1 === 'rgb(255, 204, 0)') {
        if (color2 === 'rgb(255, 204, 0)'){
            star_1.style.color = "#ffcc00";
            star_2.style.color = "#ffcc0068";
            star_3.style.color = "#ffcc0068";
            star_4.style.color = "#ffcc0068";
            star_5.style.color = "#ffcc0068";
        } else {
            star_1.style.color = "#ffcc0068";
        }
    } else {
        star_1.style.color = "#ffcc00";
    }
});

star_2.addEventListener("click", () => {
    const color2 = getComputedStyle(star_2).color;
    const color3 = getComputedStyle(star_3).color;

    if (color2 === 'rgb(255, 204, 0)') {
        if (color3 === 'rgb(255, 204, 0)'){
            star_1.style.color = "#ffcc00";
            star_2.style.color = "#ffcc00";
            star_3.style.color = "#ffcc0068";
            star_4.style.color = "#ffcc0068";
            star_5.style.color = "#ffcc0068";
        } else {
            star_1.style.color = "#ffcc0068";
            star_2.style.color = "#ffcc0068";
        }
    } else {
        star_1.style.color = "#ffcc00";
        star_2.style.color = "#ffcc00";
    }
});

star_3.addEventListener("click", () => {
    const color3 = getComputedStyle(star_3).color;
    const color4 = getComputedStyle(star_4).color;

    if (color3 === 'rgb(255, 204, 0)') {
        if (color4 === 'rgb(255, 204, 0)'){
            star_1.style.color = "#ffcc00";
            star_2.style.color = "#ffcc00";
            star_3.style.color = "#ffcc00";
            star_4.style.color = "#ffcc0068";
            star_5.style.color = "#ffcc0068";
        } else {
            star_1.style.color = "#ffcc0068";
            star_2.style.color = "#ffcc0068";
            star_3.style.color = "#ffcc0068";
        }
    } else {
        star_1.style.color = "#ffcc00";
        star_2.style.color = "#ffcc00";
        star_3.style.color = "#ffcc00";
    }
});

star_4.addEventListener("click", () => {
    const color4 = getComputedStyle(star_4).color;
    const color5 = getComputedStyle(star_5).color;

    if (color4 === 'rgb(255, 204, 0)') {
        if (color5 === 'rgb(255, 204, 0)'){
            star_1.style.color = "#ffcc00";
            star_2.style.color = "#ffcc00";
            star_3.style.color = "#ffcc00";
            star_4.style.color = "#ffcc00";
            star_5.style.color = "#ffcc0068";
        } else {
            star_1.style.color = "#ffcc0068";
            star_2.style.color = "#ffcc0068";
            star_3.style.color = "#ffcc0068";
            star_4.style.color = "#ffcc0068";
        }
    } else {
        star_1.style.color = "#ffcc00";
        star_2.style.color = "#ffcc00";
        star_3.style.color = "#ffcc00";
        star_4.style.color = "#ffcc00";
    }
});

star_5.addEventListener("click", () => {
    const color5 = getComputedStyle(star_5).color;

    if (color5 === 'rgb(255, 204, 0)') {
        star_1.style.color = "#ffcc0068";
        star_2.style.color = "#ffcc0068";
        star_3.style.color = "#ffcc0068";
        star_4.style.color = "#ffcc0068";
        star_5.style.color = "#ffcc0068";
    } else {
        star_1.style.color = "#ffcc00";
        star_2.style.color = "#ffcc00";
        star_3.style.color = "#ffcc00";
        star_4.style.color = "#ffcc00";
        star_5.style.color = "#ffcc00";
    }
});
