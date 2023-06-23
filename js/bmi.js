const nameEl = document.querySelector("#name");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");


const getBmi = (height, weight) => {
    let bmi = weight / (height / 100) ** 2;
    return bmi.toFixed(2);
};

function calc() {
    let name = nameEl.value;
    let height = heightEl.value;
    let weight = weightEl.value;
    let bmi = getBmi(height, weight);
    if ((height == "" || weight == "")) {
        alert("輸入不能為空")
        return;
    }

    if (isNaN(bmi)) {
        alert("只能輸入數字")
        return;
    }
    document.querySelector(".bmi").innerText = bmi
}

console.log(getBmi(165, 58));