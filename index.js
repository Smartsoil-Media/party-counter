let ct = document.getElementById("changing-title")

function swap() {
    ct.textContent = "Wow such cool, u can click"
}

function swaps() {
    ct.textContent = "Clam down big rig"
}


let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1 
    countEl.textContent = count
}


let subtractEl = document.getElementById("count-el")

function subtract() {
    count += - 1
    subtractEl.textContent = count 

}

let dEl = document.getElementById("count-el")
function multiply() {
    count = count * 2
    dEl.textContent = count
}


let saveEl = document.getElementById("save-el")
function save() {
    countStr = count + " - " 
    saveEl.textContent += countStr
}

let resetEl = document.getElementById("count-el", "save-el")

function reset() {
    count = 0
    resetEl.textContent = count
    saveEl.textContent = "Fresh Start:"

}


console.log(countEl)

let welcomeEl = document.getElementById("welcome-el") 


let name = "Gun Clayton"
let greeting = "You sexy beast, ready to rip up the sea bacon?"

let myGreeting = name + "! " + greeting 

console.log(myGreeting)

// 9 - 24 - 51 - 100100


console.log(welcomeEl)


(function($) {
    var count = 0;
    $.fn.nodoubletapzoom = function() {
        $(this).bind('touchstart', function preventZoom(e){
            var t2 = e.timeStamp;
            var t1 = $(this).data('lastTouch') || t2;
            var dt = t2 - t1;
            var fingers = e.originalEvent.touches.length;
            $(this).data('lastTouch', t2);
            if (!dt || dt > 500 || fingers > 1){
                return; // not double-tap
            }
            e.preventDefault(); // double tap - prevent the zoom
            // also synthesize click events we just swallowed up
            $(e.target).trigger('click');
        });
    };
    })(jQuery);
    
    $(document).on('pageinit',"#status_page", function(){
                $("body").nodoubletapzoom();
                $(".content").on("click", "#but", function() {
                    var curr_val = parseInt($("#val").text());
                    $("#val").text(curr_val + 1);
                });
    });
    