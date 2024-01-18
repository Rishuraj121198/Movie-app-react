


function Moviecard(props) {
  
   // addStars = () =>{
   //    // First Form
   //    if(this.state.stars >=5){
   //       return;
   //    }
   //    this.setState({
   //       stars: this.state.stars +0.5
   //     });

      //Second Form
      // used () in the place of return statement as it is one line return
      // this.setState((prevState)=>(
      //     {
      //       stars:prevState.stars +0.5
      //    }
      // ))

     // console.log("this.state:",this.state);
   //}

   // decStars = () =>{
   //    // First Form
   //    if(this.state.stars <=0){
   //       return;
   //    }
   //    this.setState({
   //       stars: this.state.stars -0.5
   //     });

      //Second Form
      // used () in the place of return statement as it is one line return
      // this.setState((prevState)=>(
      //     {
      //       stars:prevState.stars -0.5
      //    }
      // ))

     // console.log("this.state:",this.state);
 //  }

   // handleFav = () => {
   //    this.setState({
   //       fav: !this.state.fav
   //    })
   // }
   
   // handleCart = () => {
   //    this.setState({
   //       cart: !this.state.cart
   //    })
   // }


     
      //console.log(this.props);
      // const{movies:data}=this.props;
      const{movies,addStars,decStars,toggleFav,toggleCart}=props;
      const {title,plot,price,rating,stars,fav,cart,poster} = props.movies;
        return (
         <div className="main">
            <div className="movie-card">
               <div className="left">
                  <img alt="poster" src={poster}/>
               </div>

               <div className="right">
                  <div className="title">{title}</div>
                  <div className="plot">{plot}</div>
                  <div className="price">Rs. {price}</div>

                  <div className="footer">
                     <div className="rating">{rating}</div>

                      <div className="star-dis">
                                <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                    onClick={ () => {decStars(movies)}}
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                    onClick={ () => {addStars(movies)}} 
                                />
                                <span className="starCount">{stars}</span>
                            </div> 

                     {/* {fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button>:
                     <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}  */}

                      <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={ () => {toggleFav(movies)}}>
                        {fav? "Un-Favourite":"Favourite"}</button> 
                     
                     
                     <button className={cart? "unfavourite-btn":"cart-btn" } onClick={ () => {toggleCart(movies)}}>{cart? "Remove From Cart":"Add to Cart"}</button>
                  </div>
               </div>

            </div>

         </div>
        )
     }


export default Moviecard;