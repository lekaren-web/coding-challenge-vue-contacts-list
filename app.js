new Vue({ //new vue instance, its created by passiing in an object
  el: '#app', //element property will connect to the div with id app
  data: {//pass in the data 
    contacts: [],
    isFavorite: false,
  },
  methods: {
  toggleFavorite: function (event){
    let star = document.getElementById(`${event.currentTarget.id}`)

    if(star.classList.contains("text-gray-400")){
      this.isFavorite = true
      star.classList.replace( "hover:bg-yellow-100","bg-yellow-400")
      star.classList.replace( "text-gray-400","text-white")
    } else if (star.classList.contains("text-white")){
      this.isFavorite = false
      star.classList.replace( "text-white", "text-gray-400")
      star.classList.replace( "bg-yellow-400","hover:bg-yellow-100")
      star.classList.add( "hover:text-yellow-500")
    } 
  
  },
  removeContact: function(event){
    
    const message = window.confirm(`Would you like to remove ${this.contacts[event.currentTarget.id].name.first} ${this.contacts[event.currentTarget.id].name.last}`)
    if(message){
      console.log('delete')
      this.contacts.splice(this.contacts[event.currentTarget.id], 1)
    }
 
  }
  },
  
  mounted() {
    fetch("https://randomuser.me/api/?results=50").then((res)=> res.json()).then((data)=> {
     this.contacts = data.results
      }).catch((err)=> {
        console.log(err)
      })
  }


});
