const addingInput=()=>{
  const searchText = document.getElementById('input').value
  const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
  .then(res=>res.json())
  .then(data =>loadData(data.data[0]))
}
const loadData =(phone)=>{

  // console.log(phones.image);
  const showingData = document.getElementById('all-phone')
  const div = document.createElement('div');
  div.classList.add('card')
  div.innerHTML=`<img class="w-50" src="${phone.image}" alt="">
  <h4>Name:${phone.phone_name}</h4>
  <h4>Brand:${phone.brand}</h4>
  <button onclick="detailPhone()" class="btn btn-primary">Detail</button>
  `
  showingData.appendChild(div)
}
const detailPhone=()=>{
  
}