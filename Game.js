
let title = document.getElementsByTagName("h1")[0]

// ----------------------------------------------------

// Variable Declaration
let winning_rules = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];

let list_of_moves_x = [];
let list_of_moves_o = [];
let current_sign = "x";
let function_stop=0;

// ----------------------------------------------------

// Accessing Input function

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', function () {
    input(this);
}));


// ----------------------------------------------------

function Check_win_or_not(arr, target) {
    return target.every(element => arr.includes(element));
}

// ----------------------------------------------------

function input(tag) {
    let move = parseInt(tag.getAttribute("data-index"));
    if (function_stop == 0) {
        if (tag.textContent !== "") {
            // Cell is already occupied
            return;
        }

        if (current_sign === "x") {
            tag.textContent = "x";
            list_of_moves_x.push(move);

            let found = winning_rules.some(rule => Check_win_or_not(list_of_moves_x, rule));
            if (found) {
                title.textContent = " 'X' WON THE GAME!!🎉"
                function_stop =1
                return;
            }
            current_sign = "o";
        } 

        // ----------------------------------------------------
        
        else {
            tag.textContent = "o";
            list_of_moves_o.push(move);

            let found = winning_rules.some(rule => Check_win_or_not(list_of_moves_o, rule));
            if (found) {
                title.textContent = " 'O' WON THE GAME!!🎉"
                function_stop =1
                return;
            }
            current_sign = "x";
        }
    }

}



// ----------------------------------------------------

function clearall() {
    div = document.getElementsByClassName("box")
    for (let i = 0; i < div.length; i++) {
        div[i].textContent = ""
        list_of_moves_x = []
        list_of_moves_o = []
        function_stop =0
        title.textContent = "TIC TAC TOE"
    }
}

// ----------------------------------------------------

