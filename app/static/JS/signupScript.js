document.addEventListener("DOMContentLoaded", function () {
    let currentStep = 1;

    function showStep(step) {
        document.getElementById("step" + currentStep).style.display = "none";
        document.getElementById("step" + step).style.display = "block";
        currentStep = step;
    }

    for (let i = 2; i <= 3; i++) {
        document.getElementById("step" + i).style.display = "none";
    }

    document.getElementById("next1").addEventListener("click", function () {
        showStep(2);
    });

    document.getElementById("prev2").addEventListener("click", function () {
        showStep(1);
    });

    document.getElementById("next2").addEventListener("click", function () {
        showStep(3);
    });

    document.getElementById("prev3").addEventListener("click", function () {
        showStep(2);
    });

    
/*     document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault(); 
    }); */
});
