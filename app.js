new Vue({ //new vue instance, its created by passiing in an object
  el: '#app', //element property will connect to the div with id app
  data: {//pass in the data 
    contacts: [],
    isFavorite: false
  },
  methods: {
  toggleStar: function (){
    let star = document.querySelector('#star')

    if(!this.isFavorite){
      this.isFavorite = true
      star.classList.replace( "text-white", "text-gray-400")
      star.classList.replace( "bg-yellow-400","hover:bg-yellow-100")
      star.classList.add( "hover:text-yellow-500")
    } else if (this.isFavorite){
      this.isFavorite = false
      star.classList.replace( "hover:bg-yellow-100","bg-yellow-400")
      star.classList.replace( "text-gray-400","text-white")

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
