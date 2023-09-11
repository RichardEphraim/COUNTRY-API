const cards = document.querySelector("#cards");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((all) => {
    console.log(all);
    const displayAy = all.map(all =>{
      return `
      <div class="box">

        <div class="box-img">
            <img width="300" src=${all.flags.png} alt="image">
        </div>

        <div class="phone-content">
             <h1>COUNTRY</h1>
            <p> ${all.name.common}<p>

            <H1>CAPITAL</H1>
            <p>${all.capital}</p>

            <h1>CONTINENT</h1>
            <p>${all.continents}</p>
         </div>
         
      </div>`
    })
    cards.innerHTML = displayAy
  })


