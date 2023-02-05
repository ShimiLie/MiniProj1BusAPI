function ApiData() {
    const id = document.querySelector("#ID").value;

  fetch(`https://arrivelah2.busrouter.sg/?id=${id}`)
      .then(response => response.json())
      .then((data) => console.log(data)
      )
      .catch((err)=> {
        console.log("ID  not found", err);
      })
};

ApiData();


function render() {
    const id = document.querySelector("#ID").value;

    fetch(`https://arrivelah2.busrouter.sg/?id=${id}`)
    .then(response => response.json())
    .then((data) => {

       for (let i=0; i < data.services.length; i++) {
        document.querySelector(".card-body").innerHTML= `
        <h5 class="card-title">Bus No:${data.services[i].no}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Operator:${data.services[i].operator}</h6>
        <p class="card-text">Next timing:${data.services[i].next.time}</p>
        <p class="card-link">Subsequent timing:${data.services[i].next2.time}</p>
        
  `;
       }
           
    })
}