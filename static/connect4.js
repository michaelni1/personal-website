$(window).on('load', function() {
    $('.col0_red').show();
});

var firebaseConfig = {
    apiKey: "AIzaSyCzxqEQEUdCji0_VaJywBYQZThYNjPH1xQ",
    authDomain: "personal-website-e3d9b.firebaseapp.com",
    databaseURL: "https://personal-website-e3d9b.firebaseio.com",
    projectId: "personal-website-e3d9b",
    storageBucket: "personal-website-e3d9b.appspot.com",
    messagingSenderId: "839915221319",
    appId: "1:839915221319:web:8177488ccac17513b4dc62",
    measurementId: "G-FG7XKB2JC7"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var ref = firebase.database().ref();

ref.update({'to_hide': ''});

ref.update({'cur_position': '.col0_red'});

ref.update({'prev_shown_piece': '.col0_red'});

ref.update({'has_won': 'false'});

var cur_color = 'red';

ref.child('to_hide').on('value', function(snapshot) {
    $(snapshot.val().toString()).css('display', 'none');
})

ref.child('cur_position').on('value', function(snapshot) {
    $(snapshot.val().toString()).css('display', '');
})

ref.child('prev_shown_piece').on('value', function(snapshot) {
    $(snapshot.val().toString()).css('display', 'none');
})

ref.child('reset').on('value', function(snapshot) {
    if (snapshot.val()) {
        for (let i = 0; i < 6; ++i) {
            for (let j = 0; j < 7; ++j) {
                let combined = i.toString() + j.toString();
                ref.update({[combined]: ' '});
            }
        }
        $('.top_piece_red').hide();
        $('.top_piece_yellow').hide();
        $('.board_piece').show();
        $('body').css('background', 'rgb(82, 175, 82)');
        ref.update({'has_won': 'false'});
        cur_color = 'red';
        ref.update({'reset': 'false'});
    }
})

ref.child('has_won').on('value', function(snapshot) {
    let did_win = snapshot.val().substr(0, snapshot.val().indexOf('_'));
    if (did_win == 'true') {
        let win_color = snapshot.val().split('_').pop();
        setTimeout(function() {
            alert(win_color + ' wins!!');
        }, 100);
        setTimeout(function() {
            $('body').css('background', win_color);
        }, 100);
    }
})

ref.child('00').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.00_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('01').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.01_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('02').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.02_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('03').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.03_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('04').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.04_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('05').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.05_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('06').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.06_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('10').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.10_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('11').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.11_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('12').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.12_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('13').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.13_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('14').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.14_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('15').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.15_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('16').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.16_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('20').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.20_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('21').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.21_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('22').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.22_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('23').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.23_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('24').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.24_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('25').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.25_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('26').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.26_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('30').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.30_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('31').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.31_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('32').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.32_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('33').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.33_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('34').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.34_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('35').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.35_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('36').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.36_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('40').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.40_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('41').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.41_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('42').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.42_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('43').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.43_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('44').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.44_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('45').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.45_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('46').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.46_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('50').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.50_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('51').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.51_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('52').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.52_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('53').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.53_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('54').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.54_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('55').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.55_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

ref.child('56').on('value', function(snapshot) {
    if (snapshot.val() != ' ') {
        $('.56_board').css('display', 'none');
    }
    $(snapshot.val().toString()).css('display', '');
})

async function check_win(row, col, win_color) {
    let piece_count = 1;
    let start_row = row;
    let start_col = col;

    //check up for same color pieces
    while (row > 0 && piece_count < 4) {
        --row;
        let to_break = false;
        ref.child(row.toString() + col.toString()).once('value', function(snapshot) {
            let snap_color = snapshot.val().split('_').pop();
            if (snap_color == win_color) {
                ++piece_count;
            }
            else {
                to_break = true;
            }
        })
        if (to_break) {
            break;
        }
    }
    //reset row
    row = start_row;
    //check down for same color pieces
    while (row < 5 && piece_count < 4) {
        ++row;
        let to_break = false;
        ref.child(row.toString() + col.toString()).once('value', function(snapshot) {
            let snap_color = snapshot.val().split('_').pop();
            if (snap_color == win_color) {
                ++piece_count;
            }
            else {
                to_break = true;
            }
        })
        if (to_break) {
            break;
        }
    }
    //check if up down wins
    if (piece_count >= 4) {
        ref.update({'has_won': 'true_' + win_color});
        return;
    }
    else {
        piece_count = 1;
    }
    //reset
    row = start_row;
    //check right
    while (col < 6 && piece_count < 4) {
        ++col;
        let to_break = false;
        ref.child(row.toString() + col.toString()).once('value', function(snapshot) {
            let snap_color = snapshot.val().split('_').pop();
            if (snap_color == win_color) {
                ++piece_count;
            }
            else {
                to_break = true;
            }
        })
        if (to_break) {
            break;
        }
    }
    col = start_col;
    //check left
    while (col > 0 && piece_count < 4) {
        --col;
        let to_break = false;
        ref.child(row.toString() + col.toString()).once('value', function(snapshot) {
            let snap_color = snapshot.val().split('_').pop();
            if (snap_color == win_color) {
                ++piece_count;
            }
            else {
                to_break = true;
            }
        })
        if (to_break) {
            break;
        }
    }
    if (piece_count >= 4) {
        ref.update({'has_won': 'true_' + win_color});
        return;
    }
    else {
        piece_count = 1;
    }
    col = start_col
    //check upper left diagonal
    while (row > 0 && col > 0 && piece_count < 4) {
        --row;
        --col;
        let to_break = false;
        ref.child(row.toString() + col.toString()).once('value', function(snapshot) {
            let snap_color = snapshot.val().split('_').pop();
            if (snap_color == win_color) {
                ++piece_count;
            }
            else {
                to_break = true;
            }
        })
        if (to_break) {
            break;
        }
    }
    row = start_row
    col = start_col
    //check lower right diagonal
    while (row < 5 && col < 6 && piece_count < 4) {
        ++row;
        ++col;
        let to_break = false;
        ref.child(row.toString() + col.toString()).once('value', function(snapshot) {
            let snap_color = snapshot.val().split('_').pop();
            if (snap_color == win_color) {
                ++piece_count;
            }
            else {
                to_break = true;
            }
        })
        if (to_break) {
            break;
        }
    }
    row = start_row
    col = start_col
    if (piece_count >= 4) {
        ref.update({'has_won': 'true_' + win_color});
        return;
    }
    else {
        piece_count = 1;
    }
    //check upper right diagonal
    while (row > 0 && col < 6 && piece_count < 4) {
        --row;
        ++col;
        let to_break = false;
        ref.child(row.toString() + col.toString()).once('value', function(snapshot) {
            let snap_color = snapshot.val().split('_').pop();
            if (snap_color == win_color) {
                ++piece_count;
            }
            else {
                to_break = true;
            }
        })
        if (to_break) {
            break;
        }
    }
    row = start_row
    col = start_col
    //check lower left diagonal
    while (row < 5 && col > 0 && piece_count < 4) {
        ++row;
        --col;
        let to_break = false;
        ref.child(row.toString() + col.toString()).once('value', function(snapshot) {
            let snap_color = snapshot.val().split('_').pop();
            if (snap_color == win_color) {
                ++piece_count;
            }
            else {
                to_break = true;
            }
        })
        if (to_break) {
            break;
        }
    }
    if (piece_count >= 4) {
        setTimeout(function() {
            alert(win_color + ' wins!!');
        }, 100)
        setTimeout(function() {
            $('body').css('background', win_color);
        }, 100);
        ref.update({'has_won': 'true_' + win_color});
    }
}

function reset_board() {
    ref.update({'reset': 'true'});
}

$('.col0').click(function() {
    ref.child('has_won').once('value', async function(snapshot) {
        if (snapshot.val() == 'false') {
            let cur_row = 5;
            let to_break = false;
            while (cur_row >= 0) {
                ref.child(cur_row.toString() + '0').once('value', function(snapshot) {
                    if (snapshot.val() != ' ') {
                        --cur_row;
                    }
                    else {
                        to_break = true;
                    }
                })
                if (to_break) {
                    break;
                }
            }
            if (cur_row != -1) {
                let to_update = cur_row.toString() + '0';
                ref.update({[to_update]: '.' + to_update + '_' + cur_color});
                
                await check_win(cur_row, 0, cur_color);

                let combined = '.col0_' + cur_color;
                ref.update({'to_hide': [combined]})
                cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
                combined = '.col0_' + cur_color;
                ref.update({'cur_position': [combined]});
            }
        }
    })
})

$('.col1').click(function() {
    ref.child('has_won').once('value', async function(snapshot) {
        if (snapshot.val() == 'false') {
            let cur_row = 5;
            let to_break = false;
            while (cur_row >= 0) {
                ref.child(cur_row.toString() + '1').once('value', function(snapshot) {
                    if (snapshot.val() != ' ') {
                        --cur_row;
                    }
                    else {
                        to_break = true;
                    }
                })
                if (to_break) {
                    break;
                }
            }
            if (cur_row != -1) {
                let to_update = cur_row.toString() + '1';
                ref.update({[to_update]: '.' + to_update + '_' + cur_color});

                await check_win(cur_row, 1, cur_color);

                let combined = '.col1_' + cur_color;
                ref.update({'to_hide': [combined]})
                cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
                combined = '.col1_' + cur_color;
                ref.update({'cur_position': [combined]});
            }
        }
    })
})

$('.col2').click(function() {
    ref.child('has_won').once('value', async function(snapshot) {
        if (snapshot.val() == 'false') {
            let cur_row = 5;
            let to_break = false;
            while (cur_row >= 0) {
                ref.child(cur_row.toString() + '2').once('value', function(snapshot) {
                    if (snapshot.val() != ' ') {
                        --cur_row;
                    }
                    else {
                        to_break = true;
                    }
                })
                if (to_break) {
                    break;
                }
            }
            if (cur_row != -1) {
                let to_update = cur_row.toString() + '2';
                ref.update({[to_update]: '.' + to_update + '_' + cur_color});

                await check_win(cur_row, 2, cur_color);

                let combined = '.col2_' + cur_color;
                ref.update({'to_hide': [combined]})
                cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
                combined = '.col2_' + cur_color;
                ref.update({'cur_position': [combined]});
            }
        }
    })
})

$('.col3').click(function() {
    ref.child('has_won').once('value', async function(snapshot) {
        if (snapshot.val() == 'false') {
            let cur_row = 5;
            let to_break = false;
            while (cur_row >= 0) {
                ref.child(cur_row.toString() + '3').once('value', function(snapshot) {
                    if (snapshot.val() != ' ') {
                        --cur_row;
                    }
                    else {
                        to_break = true;
                    }
                })
                if (to_break) {
                    break;
                }
            }
            if (cur_row != -1) {
                let to_update = cur_row.toString() + '3';
                ref.update({[to_update]: '.' + to_update + '_' + cur_color});

                await check_win(cur_row, 3, cur_color);

                let combined = '.col3_' + cur_color;
                ref.update({'to_hide': [combined]})
                cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
                combined = '.col3_' + cur_color;
                ref.update({'cur_position': [combined]});
            }
        }
    })
})

$('.col4').click(function() {
    ref.child('has_won').once('value', async function(snapshot) {
        if (snapshot.val() == 'false') {
            let cur_row = 5;
            let to_break = false;
            while (cur_row >= 0) {
                ref.child(cur_row.toString() + '4').once('value', function(snapshot) {
                    if (snapshot.val() != ' ') {
                        --cur_row;
                    }
                    else {
                        to_break = true;
                    }
                })
                if (to_break) {
                    break;
                }
            }
            if (cur_row != -1) {
                let to_update = cur_row.toString() + '4';
                ref.update({[to_update]: '.' + to_update + '_' + cur_color});

                await check_win(cur_row, 4, cur_color);

                let combined = '.col4_' + cur_color;
                ref.update({'to_hide': [combined]})
                cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
                combined = '.col4_' + cur_color;
                ref.update({'cur_position': [combined]});
            }
        }
    })
})

$('.col5').click(function() {
    ref.child('has_won').once('value', async function(snapshot) {
        if (snapshot.val() == 'false') {
            let cur_row = 5;
            let to_break = false;
            while (cur_row >= 0) {
                ref.child(cur_row.toString() + '5').once('value', function(snapshot) {
                    if (snapshot.val() != ' ') {
                        --cur_row;
                    }
                    else {
                        to_break = true;
                    }
                })
                if (to_break) {
                    break;
                }
            }
            if (cur_row != -1) {
                let to_update = cur_row.toString() + '5';
                ref.update({[to_update]: '.' + to_update + '_' + cur_color});

                await check_win(cur_row, 5, cur_color);

                let combined = '.col5_' + cur_color;
                ref.update({'to_hide': [combined]})
                cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
                combined = '.col5_' + cur_color;
                ref.update({'cur_position': [combined]});
            }
        }
    })
})

$('.col6').click(function() {
    ref.child('has_won').once('value', async function(snapshot) {
        if (snapshot.val() == 'false') {
            let cur_row = 5;
            let to_break = false;
            while (cur_row >= 0) {
                ref.child(cur_row.toString() + '6').once('value', function(snapshot) {
                    if (snapshot.val() != ' ') {
                        --cur_row;
                    }
                    else {
                        to_break = true;
                    }
                })
                if (to_break) {
                    break;
                }
            }
            if (cur_row != -1) {
                let to_update = cur_row.toString() + '6';
                ref.update({[to_update]: '.' + to_update + '_' + cur_color});

                await check_win(cur_row, 6, cur_color);

                let combined = '.col6_' + cur_color;
                ref.update({'to_hide': [combined]})
                cur_color == 'red' ? cur_color = 'yellow' : cur_color = 'red';
                combined = '.col6_' + cur_color;
                ref.update({'cur_position': [combined]});
            }
        }
    })
})

$('.col0').hover(function() {
    let combined = '.col0_' + cur_color;
    ref.child('cur_position').once('value', function(snapshot) {
        if (snapshot.val().toString() != combined) {
            ref.update({'prev_shown_piece': [snapshot.val().toString()]});
        }
    })
    ref.update({'cur_position': [combined]});
})

$('.col1').hover(function() {
    let combined = '.col1_' + cur_color;
    ref.child('cur_position').once('value', function(snapshot) {
        if (snapshot.val().toString() != combined) {
            ref.update({'prev_shown_piece': [snapshot.val().toString()]});
        }
    })
    ref.update({'cur_position': [combined]});
})

$('.col2').hover(function() {
    let combined = '.col2_' + cur_color;
    ref.child('cur_position').once('value', function(snapshot) {
        if (snapshot.val().toString() != combined) {
            ref.update({'prev_shown_piece': [snapshot.val().toString()]});
        }
    })
    ref.update({'cur_position': [combined]});
})

$('.col3').hover(function() {
    let combined = '.col3_' + cur_color;
    ref.child('cur_position').once('value', function(snapshot) {
        if (snapshot.val().toString() != combined) {
            ref.update({'prev_shown_piece': [snapshot.val().toString()]});
        }
    })
    ref.update({'cur_position': [combined]});
})

$('.col4').hover(function() {
    let combined = '.col4_' + cur_color;
    ref.child('cur_position').once('value', function(snapshot) {
        if (snapshot.val().toString() != combined) {
            ref.update({'prev_shown_piece': [snapshot.val().toString()]});
        }
    })
    ref.update({'cur_position': [combined]});
})

$('.col5').hover(function() {
    let combined = '.col5_' + cur_color;
    ref.child('cur_position').once('value', function(snapshot) {
        if (snapshot.val().toString() != combined) {
            ref.update({'prev_shown_piece': [snapshot.val().toString()]});
        }
    })
    ref.update({'cur_position': [combined]});
})

$('.col6').hover(function() {
    let combined = '.col6_' + cur_color;
    ref.child('cur_position').once('value', function(snapshot) {
        if (snapshot.val().toString() != combined) {
            ref.update({'prev_shown_piece': [snapshot.val().toString()]});
        }
    })
    ref.update({'cur_position': [combined]});
})