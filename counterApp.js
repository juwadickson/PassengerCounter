var btns = document.querySelectorAll(".btn");
var disp = document.querySelector("#display");

let count = 0;

btns.forEach(btn => {
    var dec = document.querySelector(".decBtn");
    dec.style.display = "none";
    var reset = document.querySelector(".resetBtn");
    reset.style.display = "none";

    btn.addEventListener("click", function(e){
        const btnClass = e.currentTarget.classList;

        let decBtn = btnClass.contains("decBtn");
        let incBtn = btnClass.contains("incBtn");
        let resetBtn = btnClass.contains("resetBtn");

        if(decBtn){
            if(count >= 1){
                count -= 1;
                disp.textContent = count;
            }if(count < 1){
                dec.style.display = "none";
                reset.style.display = "none";
                count = 0;
            }
        } else if(incBtn){
            count += 1;
            disp.textContent = count;
            dec.style.display = "inline";
            reset.style.display = "inline";
        }else if(resetBtn){
            count = 0;
            disp.textContent = count;
            dec.style.display = "none";
            reset.style.display = "none";
        }
    })
})




