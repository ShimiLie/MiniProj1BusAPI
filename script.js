function getApiData() {
  

    fetch(`https://arrivelah2.busrouter.sg/?id=83139`)
      .then(response => response.json())
      .then((json) => console.log(json)
      )
      .catch((err)=> {
        console.log("ID  not found", err);
      })
};

getApiData();