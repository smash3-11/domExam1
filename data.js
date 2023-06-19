const data = [
    {
        title: 'Mac',
        img: 'mac.png'
    },
    {
        title: 'iPhone',
        img: 'iphone.png'
    },
    {
        title: 'iPad',
        img: 'ipad.png'
    },
    {
        title: 'Apple Watch',
        img: 'apple watches.png'
    },
    {
        title: 'AirPods',
        img: 'airpods.png'
    },
    {
        title: 'AirTag',
        img: 'airtag.png'
    },
    {
        title: 'Apple TV',
        img: 'apple tv.png'
    },
    {
        title: 'HomePod mini',
        img: 'homepod mini.png'
    },
    {
        title: 'Accessories',
        img: 'accessories.png'
    },
]

console.log(data);

let body = document.body
let container = document.createElement('div')
container.classList.add('container')

let h1 = document.createElement('h1')
h1.innerHTML = 'Практика'

let h2 = document.createElement('h2')
h2.innerHTML = '1. Cоздать элементы по массиву c картинкой'


reload(data)
function reload(data) {

    for (let item of data) {
        let elem = document.createElement('div')
        elem.classList.add('item')

        let p = document.createElement('p')
        p.innerHTML = item.title

        let img = document.createElement('img')
        img.src = 'img/' + item.img


        elem.append(img, p);
        container.append(elem)
    }
}
body.append(h1, h2, container,)


