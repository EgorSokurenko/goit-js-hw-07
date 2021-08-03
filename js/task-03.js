const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

const imagesEl = images.map(image => {
  const string = `<li><img class='image'src=${image.url} alt=${image.alt}></li>`;
  console.log(string);

  return string;
});
console.log(imagesEl);
gallery.insertAdjacentHTML('beforeend', imagesEl);

// const imagesEl = images.map(image => {
//   const element = document.createElement('li');

//   const imageEl = document.createElement('img');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 300;
//   imageEl.height = 300;
//   element.append(imageEl);
//   console.log(element);
//   return element;
// });
// gallery.append(...imagesEl);
