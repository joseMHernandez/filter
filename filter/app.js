 const searchInput = document.querySelector('#search')
const rows = document.querySelectorAll('tbody tr')
console.log(rows)

searchInput.addEventListener('input', (e)=>{

let data  = e.target.value.toLowerCase()

rows.forEach(row=>{
    row.querySelector('td').textContent.toLowerCase().includes(data) ? row.style.display = 'table-row' : row.style.display = 'none'

})

}) 

