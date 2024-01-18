
import './index.css';
//import styled from "styled-components";
import NavStyle from "./Navbar.module.css";

// const Nav =  styled.div`
//     height: 70px;
// 	background: linear-gradient(170deg, #1bc059, #0d47a1);
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	position: relative;
  
// `;

// const Title = styled.div`
//     font-size: 40px;
//     color: #fff;
//     font-weight: 700;
//     font-family: 'Times New Roman', Times, serif;
//     text-transform: uppercase;
//     margin-left: 20px ;
// `;


// const CartImg = styled.img`
//     height: 48px;
//     margin-right: 20px;
// `;

// const CartIconContainer = styled.div`
//     position: relative;
//     cursor: pointer;
// `;

// const CartCount = styled.div`
//     background: yellow;
//     border-radius: 50%;
//     padding: 4px 8px;
//     position: absolute;
//     right: 10px;
//     top: -5px;
//     font-size: 12px;
// `;



function Navbar(props) {
   

  
    
      const{cartCount}=props;  
       
      return (
      <>
      <div className={NavStyle.nav}>
        
      <div className={NavStyle.title}>MOVIE APP</div>
        
        <div className={NavStyle.cartIconContainer}>
            <div>
                <img className={NavStyle.cartImg} alt="Cart-Icon" 
                 src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                    </div>

            <div className={NavStyle.cartCount}></div>
            </div>
        
      </div>
      </>
      
      )
    }


export default Navbar;