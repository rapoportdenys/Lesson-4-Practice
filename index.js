function q() {
    let answer = "";
    do {
        answer = prompt("Enter any word");
        if (answer !== "break") {
            console.log(answer);
        } else {
            break;
        }
    } while (true);
}

q();

function q0() {
    let answer = "";
    do {
        answer = prompt("Enter any word");
        if (answer === "break") {
            return
        }
        console.log(answer)
    } while (true);
}

function a() {

    let askWord = "";
    let result = "";

    while (askWord !== "break") {
        askWord = prompt("Enter your word");
        if (askWord !== "break") {
            result = result + askWord;
            console.log(result)
        } else {
            
            break;
        }

    }
    console.log(result)
}

a();


function b() {
    let input = "";
    while (input !== "break") {
        input = prompt("Enter your number");
        if (input === "break") {
            break;
        }

        input = Number(input);
        if (input === 0) {
            alert("this is null");
        } else if (input > 0) {
            alert("this is positive number");
        } else if (input < 0) {
            alert("this is negative number")
        } else if (input !== input) {
            alert("Incorrect. Enter a number")
        }
    }
}
b();