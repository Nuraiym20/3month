const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro")


const handleConvert = (elem, target, target2, isTrue , isTrue2) => {
    elem.addEventListener("input", () => {
//         const request = new XMLHttpRequest();
//         request.open("GET", "data.json");
//         request.setRequestHeader("Content-type", "application/json");
//         request.send();
//         request.addEventListener("load", () => {
//             const response = JSON.parse(request.response);



fetch("data.json")
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            if(isTrue) {
                target.value = (+elem.value / response.euro).toFixed(2)  
                target2.value= (+elem.value / response.usd).toFixed(2);
        } else if (isTrue2) {
                target.value = (+elem.value / response.euro).toFixed(2)
                target2.value = (+elem.value * response.usd / response.euro).toFixed(2);
        } else {
                target.value = (+elem.value / response.usd).toFixed(2)
                target2.value = (+elem.value * response.euro / response.usd).toFixed(2);
        }
        elem.value === "" ? (target.value = "") : null;  
        elem.value === "" ? (target2.value = "") : null ;
    });
})}

handleConvert(som,euro,usd,true);
handleConvert(euro, som, usd,false,true);
handleConvert(usd, som, euro)



//             if(isTrue) {
//                     target.value = (+elem.value / response.euro).toFixed(2)  
//                     target2.value= (+elem.value / response.usd).toFixed(2);
//             } else if (isTrue2) {
//                     target.value = (+elem.value / response.euro).toFixed(2)
//                     target2.value = (+elem.value * response.usd / response.euro).toFixed(2);
//             } else {
//                     target.value = (+elem.value / response.usd).toFixed(2)
//                     target2.value = (+elem.value * response.euro / response.usd).toFixed(2);
//             }
//             elem.value === "" ? (target.value = "") : null;  
//             elem.value === "" ? (target2.value = "") : null ;
//         });
//     });
// };
// handleConvert(som,euro,usd,true);
// handleConvert(euro, som, usd,false,true);
// handleConvert(usd, som, euro)
