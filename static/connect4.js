$(window).on('load', function() {
    $('.col0_red').show();
});

var prev_shown_piece = '.col0_red';

var cur_color = 'red';

var has_won = false;

var board_arr = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

function check_win(row, col, win_color) {
    let piece_count = 1;
    let start_row = row;
    let start_col = col;

    //check up for same color pieces
    while (row > 0 && piece_count != 4) {
        if (board_arr[--row][col] == cur_color) {
            ++piece_count;
        }
        else {
            break;
        }
    }
    //reset row
    row = start_row;
    //check down for same color pieces
    while (row < 5 && piece_count != 4) {
        if (board_arr[++row][col] == cur_color) {
            ++piece_count;
        }
        else {
            break;
        }
    }
    //check if up down wins
    if (piece_count == 4) {
        setTimeout(function() {
            alert(win_color + ' wins!!');
        }, 100);
        setTimeout(function() {
            $('body').css('background', win_color);
        }, 100);
        has_won = true;
        return;
    }
    else {
        piece_count = 1;
    }
    //reset
    row = start_row;
    //check right
    while (col < 6 && piece_count != 4) {
        if (board_arr[row][++col] == cur_color) {
            ++piece_count;
        }
        else {
            break;
        }
    }
    col = start_col;
    //check left
    while (col > 0 && piece_count != 4) {
        if (board_arr[row][--col] == cur_color) {
            ++piece_count;
        }
        else {
            break;
        }
    }
    if (piece_count == 4) {
        setTimeout(function() {
            alert(win_color + ' wins!!');
        }, 100);
        setTimeout(function() {
            $('body').css('background', win_color);
        }, 100);
        has_won = true;
        return;
    }
    else {
        piece_count = 1;
    }
    col = start_col
    //check upper left diagonal
    while (row > 0 && col > 0) {
        if (board_arr[--row][--col] == cur_color) {
            ++piece_count;
        }
        else {
            break;
        }
    }
    row = start_row
    col = start_col
    //check lower right diagonal
    while (row < 5 && col < 6) {
        if (board_arr[++row][++col] == cur_color) {
            ++piece_count;
        }
        else {
            break;
        }
    }
    row = start_row
    col = start_col
    if (piece_count == 4) {
        setTimeout(function() {
            alert(win_color + ' wins!!');
        }, 100);
        setTimeout(function() {
            $('body').css('background', win_color);
        }, 100);
        has_won = true;
        return;
    }
    else {
        piece_count = 1;
    }
    //check upper right diagonal
    while (row > 0 && col < 6) {
        if (board_arr[--row][++col] == cur_color) {
            ++piece_count;
        }
        else {
            break;
        }
    }
    row = start_row
    col = start_col
    //check lower left diagonal
    while (row < 5 && col > 0) {
        if (board_arr[++row][--col] == cur_color) {
            ++piece_count;
        }
        else {
            break;
        }
    }
    if (piece_count == 4) {
        setTimeout(function() {
            alert(win_color + ' wins!!');
        }, 100)
        setTimeout(function() {
            $('body').css('background', win_color);
        }, 100);
        has_won = true;
    }
}

function reset_board() {
    $('.top_piece_red').hide();
    $('.top_piece_yellow').hide();
    $('.board_piece').show();
    $('body').css('background-color', 'rgb(82, 175, 82)');
    for (let i = 0; i < board_arr.length; ++i) {
        for (let j = 0; j < board_arr[i].length; ++j) {
            board_arr[i][j] = ' ';
        }
    }
    has_won = false;
}

$('.col0').click(function() {
    if (!has_won) {
        let cur_row = 5;
        while (cur_row >= 0) {
            if (board_arr[cur_row][0] !== ' ') {
                --cur_row;
            }
            else {
                break;
            }
        }
        if (cur_row != -1) {
            let piece_position = '.' + cur_row.toString() + '0_' + cur_color;
            let board_position = '.' + cur_row.toString() + '0_board';
            $(board_position).hide();
            $(piece_position).show();
            board_arr[cur_row][0] = cur_color;
            
            check_win(cur_row, 0, cur_color);

            $('.col0_' + cur_color).hide();
            cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
            $('.col0_' + cur_color).show();
        }
    }
})

$('.col1').click(function() {
    if (!has_won) {
        let cur_row = 5;
        while (cur_row >= 0) {
            if (board_arr[cur_row][1] !== ' ') {
                --cur_row;
            }
            else {
                break;
            }
        }
        if (cur_row != -1) {
            let piece_position = '.' + cur_row.toString() + '1_' + cur_color;
            let board_position = '.' + cur_row.toString() + '1_board';
            $(board_position).hide();
            $(piece_position).show();
            board_arr[cur_row][1] = cur_color;
            
            check_win(cur_row, 1, cur_color);

            $('.col1_' + cur_color).hide();
            cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
            $('.col1_' + cur_color).show();
        }
    }
})

$('.col2').click(function() {
    if (!has_won) {
        let cur_row = 5;
        while (cur_row >= 0) {
            if (board_arr[cur_row][2] !== ' ') {
                --cur_row;
            }
            else {
                break;
            }
        }
        if (cur_row != -1) {
            let piece_position = '.' + cur_row.toString() + '2_' + cur_color;
            let board_position = '.' + cur_row.toString() + '2_board';
            $(board_position).hide();
            $(piece_position).show();
            board_arr[cur_row][2] = cur_color;
            
            check_win(cur_row, 2, cur_color);

            $('.col2_' + cur_color).hide();
            cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
            $('.col2_' + cur_color).show();
        }
    }
})

$('.col3').click(function() {
    if (!has_won) {
        let cur_row = 5;
        while (cur_row >= 0) {
            if (board_arr[cur_row][3] !== ' ') {
                --cur_row;
            }
            else {
                break;
            }
        }
        if (cur_row != -1) {
            let piece_position = '.' + cur_row.toString() + '3_' + cur_color;
            let board_position = '.' + cur_row.toString() + '3_board';
            $(board_position).hide();
            $(piece_position).show();
            board_arr[cur_row][3] = cur_color;

            check_win(cur_row, 3, cur_color);

            $('.col3_' + cur_color).hide();
            cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
            $('.col3_' + cur_color).show();
        }
    }
})

$('.col4').click(function() {
    if (!has_won) {
        let cur_row = 5;
        while (cur_row >= 0) {
            if (board_arr[cur_row][4] !== ' ') {
                --cur_row;
            }
            else {
                break;
            }
        }
        if (cur_row != -1) {
            let piece_position = '.' + cur_row.toString() + '4_' + cur_color;
            let board_position = '.' + cur_row.toString() + '4_board';
            $(board_position).hide();
            $(piece_position).show();
            board_arr[cur_row][4] = cur_color;
            
            check_win(cur_row, 4, cur_color);

            $('.col4_' + cur_color).hide();
            cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
            $('.col4_' + cur_color).show();
        }
    }
})

$('.col5').click(function() {
    if (!has_won) {
        let cur_row = 5;
        while (cur_row >= 0) {
            if (board_arr[cur_row][5] !== ' ') {
                --cur_row;
            }
            else {
                break;
            }
        }
        if (cur_row != -1) {
            let piece_position = '.' + cur_row.toString() + '5_' + cur_color;
            let board_position = '.' + cur_row.toString() + '5_board';
            $(board_position).hide();
            $(piece_position).show();
            board_arr[cur_row][5] = cur_color;
            
            check_win(cur_row, 5, cur_color);

            $('.col5_' + cur_color).hide();
            cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
            $('.col5_' + cur_color).show();
        }
    }
})

$('.col6').click(function() {
    if (!has_won) {
        let cur_row = 5;
        while (cur_row >= 0) {
            if (board_arr[cur_row][6] !== ' ') {
                --cur_row;
            }
            else {
                break;
            }
        }
        if (cur_row != -1) {
            let piece_position = '.' + cur_row.toString() + '6_' + cur_color;
            let board_position = '.' + cur_row.toString() + '6_board';
            $(board_position).hide();
            $(piece_position).show();
            board_arr[cur_row][6] = cur_color;
            
            check_win(cur_row, 6, cur_color);

            $('.col6_' + cur_color).hide();
            cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
            $('.col6_' + cur_color).show();
        }
    }
})

$('.col0').hover(function() {
    $(prev_shown_piece).hide();
    $('.col0_' + cur_color).show();
    prev_shown_piece = '.col0_' + cur_color;
})

$('.col1').hover(function() {
    $(prev_shown_piece).hide();
    $('.col1_' + cur_color).show();
    prev_shown_piece = '.col1_' + cur_color;
})

$('.col2').hover(function() {
    $(prev_shown_piece).hide();
    $('.col2_' + cur_color).show();
    prev_shown_piece = '.col2_' + cur_color;
})

$('.col3').hover(function() {
    $(prev_shown_piece).hide();
    $('.col3_' + cur_color).show();
    prev_shown_piece = '.col3_' + cur_color;
})

$('.col4').hover(function() {
    $(prev_shown_piece).hide();
    $('.col4_' + cur_color).show();
    prev_shown_piece = '.col4_' + cur_color;
})

$('.col5').hover(function() {
    $(prev_shown_piece).hide();
    $('.col5_' + cur_color).show();
    prev_shown_piece = '.col5_' + cur_color;
})
$('.col6').hover(function() {
    $(prev_shown_piece).hide();
    $('.col6_' + cur_color).show();
    prev_shown_piece = '.col6_' + cur_color;
})