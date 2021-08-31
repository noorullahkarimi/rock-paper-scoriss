//variable
let userScore = '0';
let computerScore = '0';

let enumLevel = {
    win: 'win',
    lose: 'lose',
    draw: 'draw'
}
//eventListener
eventListener();
function eventListener() {
    const r_div = document.querySelector('#r').addEventListener('click', () => {
        Comparison('r', computerChoose());
    });
    const p_div = document.querySelector("#p").addEventListener('click', () => {
        Comparison("p", computerChoose());
    });
    const s_div = document.querySelector("#s").addEventListener('click', () => {
        Comparison("s", computerChoose());
    });
}

//function

let computerChoose = () => {
    const randomNumber = Math.round(Math.random() * 2);
    const array = ['r', 'p', 's'];
    return array[randomNumber];
}
let Comparison = (userChoose, computerChoose) => {
    const mix = userChoose + computerChoose;
    switch (mix) {
        case "sp":
        case "rs":
        case "pr":
            win(userChoose);
            break;
        case 'ps':
        case 'sr':
        case 'rp':
            lose(userChoose);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoose);
            break;
        default:
            break;
    }
}

let win = (userChoose) => {
    userScore++;
    ui(enumLevel.win);
    border(userChoose, 'green');
};
let lose = (userChoose) => {
    computerScore++;
    ui(enumLevel.lose)
    border(userChoose, 'red');
};
let draw = (userChoose) => {
    ui(enumLevel.draw)
    border(userChoose, 'grey');
};

let ui = (notice) => {
    const notice_div = document.querySelector('.notice');
    notice_div.innerHTML = 'you ' + notice;
    const user_div = document.querySelector('#userQuantity');
    user_div.innerHTML = userScore;
    const computer_div = document.querySelector('#computerQuantity');
    computer_div.innerHTML = computerScore;

}
let border = (char, color) => {
    console.log(char, color);
    const id ='.' + char;
    console.log(id);
    const div = document.querySelector(id);
    console.log(div);
    div.classList += ' ' + color;
    setTimeout(() => {
        div.classList.remove(color);
    }, 500);
}