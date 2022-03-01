const addingInput=()=>{
  const searchInput = document.getElementById('input')
  searchText=searchInput.value;
  searchInput.value=''
  const url = `
  https://openapi.programming-hero.com/api/phones?search=${searchText}
  `
  fetch(url)
  .then(res=>res.json())
  .then(data =>loadData(data.data))
}

const loadData =(phones)=>{
  // console.log(phones);
  const showingData = document.getElementById('search-phone')
  showingData.textContent=''
  const phoneDetail = document.getElementById('phone-detail');
  phoneDetail.textContent=''
  if(phones.length==0){
    return alert('no result found')
  }
  
  const totalPhone = phones.splice(0,20)
 
  for(const phone of totalPhone){
    // console.log(phone.slug)
      const div = document.createElement('div');
      div.classList.add('card')
      div.innerHTML=`<img class="w-50" src="${phone.image}" alt="">
      <h4>Name:${phone.phone_name}</h4>
      <h4>Brand:${phone.brand}</h4>
      <button onclick="collectData('${phone.slug}')" class="btn btn-primary">Detail</button>
      `
      showingData.appendChild(div) 
  }
  const div = document.createElement('div')
  div.id="see-more"
  div.innerHTML=`
  <div id="more-btn" class="d-grid mb-10 ">
  <button class="btn btn-success" type="button">See More </button>
  </div>
  `
  showingData.appendChild(div)
  // adding see more  //
document.getElementById('see-more').addEventListener('click',function(){
  for(const phone of phones){
    // console.log(phone.slug)
      const div = document.createElement('div');
      div.classList.add('card')
      div.innerHTML=`<img class="w-50" src="${phone.image}" alt="">
      <h4>Name:${phone.phone_name}</h4>
      <h4>Brand:${phone.brand}</h4>
      <button onclick="collectData('${phone.slug}')" class="btn btn-primary">Detail</button>
      `
      showingData.appendChild(div) 
  }
})

}
  

const collectData = phoneId =>{
//  console.log(phoneId)
  const url =`https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayData(data.data))
}

const displayData =(detail)=>{
  console.log(detail);
const phoneDetail = document.getElementById('phone-detail');
phoneDetail.textContent=''
const div = document.createElement('div')
div.classList.add('phone-detail')
div.innerHTML=`
<img class="image" src="${detail.image}" alt="">
<h4>Brand:${detail.brand}</h4>
<h4>Phone name:${detail.name}</h4>
<h4>Release date:${detail.releaseDate}</h4>
<h4>Storage:${detail.mainFeatures.storage}</h4>
<h4>Chipset:${detail.mainFeatures.chipSet}</h4>
<h4>Displaysize:${detail.mainFeatures.displaySize}</h4>
<h4>Sesor:${detail.mainFeatures.sensors}</h4>
<h4>Bluetooth:${detail.others.Bluetooth}</h4>
<h4>USB:${detail.others.USB}</h4>
<h4>Gps:${detail.others.GPS}</h4>
<h4>WLAN:${detail.others.WLAN}</h4>
`
phoneDetail.appendChild(div)
}


