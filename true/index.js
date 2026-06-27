const input = document.getElementById("input");

        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                if (input.value === "2026") {
                    window.location.href = "level4.html";
                } else {
                    alert("Wrong answer");
                }
            }
        });