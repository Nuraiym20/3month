const getData = document.querySelector('.Get')
const wrapper  = document.querySelector(".wrapper")

getData.addEventListener('click' , () => {
    // const request = new XMLHttpRequest
    // console.log(request)
    // request.open('GET','data.json')
    // request.setRequestHeader('Content-type','application/json')
    // request.send()

    // request.addEventListener('load', () => {
    //     const data = JSON.parse(request.response)

//         data.map((item) => {
//             const block = document.createElement('div')
//             const div = document.createElement('span')
//             const img = document.createElement('img')
//             block.innerHTML = item.title
//             div.innerHTML = item.price
//             img.src = item.img

//             wrapper.append(div)
//             wrapper.append(block)
//             wrapper.append(img)
        

//         })
//     })
// })

fetch("data.json")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.map((item) => {
            const block = document.createElement('div')
            const div = document.createElement('span')
            const img = document.createElement('img')
            block.innerHTML = item.title
            div.innerHTML = item.price
            img.src = item.img

            wrapper.append(div)
            wrapper.append(block)
            wrapper.append(img)
        })
    })
})
