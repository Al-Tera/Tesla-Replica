
import { useMediaQuery } from 'react-responsive'
import './App.scss';
import Slide from "./Components/Slide"
import teslaS from "./images/tesla-S.jpeg"
import tesla3 from "./images/tesla-3.jpeg"
import teslaX from "./images/tesla-X.jpeg"
import teslaY from "./images/tesla-Y.jpeg"
import teslaPanel from "./images/tesla-Panel.jpeg"
import teslaRoof from "./images/tesla-Roof.jpeg"
import teslaAcc from "./images/tesla-Acc.jpeg"
import burger from "./images/burger.svg"
function App() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
 
  const scrolling = () => {

    const slidecontainer = document.getElementsByClassName("slide__container")
    const containment = document.getElementById("containment")
    const label = document.getElementsByClassName("label")
    let slideTop = slidecontainer[0].getBoundingClientRect().top

    const sideChecker = (f1,f2, i, label0, label1, label2, label3, label00, label01, label02, label03, exist0, exist1) => {
      if (f2 ? slideTop <  f1 && slideTop > f2 : slideTop >  f1) {
        containment.style.opacity = (1 + (slidecontainer[i].getBoundingClientRect().top / 250)).toFixed(2)
        label[0].innerHTML = label0
        label[1].innerHTML = label1
        label[2].innerHTML = label2
        label[3].innerHTML = label3
        if (exist0) label[3].style.display = "inline"
        else label[3].style.display = "none"
      }
      else if (f2 ? slideTop < f2 : slideTop < f1) {
        containment.style.opacity = (1 - (slidecontainer[i+1].getBoundingClientRect().top / 400)).toFixed(2)
        label[0].innerHTML = label00
        label[1].innerHTML = label01
        label[2].innerHTML = label02
        label[3].innerHTML = label03
        if (exist1) label[3].style.display = "inline"
        else label[3].style.display = "none"
      }
    }

    if (slideTop < 1 && slideTop > -700) {
      sideChecker(-300, null, 0, "MODEL S", "Order Online for <u>Touchless-Delivery</u>", "CUSTOM ORDER", "EXISTING INVENTORY",
      "MODEL 3", "Order Online for <u>Touchless-Delivery</u>", "CUSTOM ORDER","EXISTING INVENTORY", true, true)
  
    }
    if (slideTop < -700 && slideTop > -1350) {
      sideChecker(-700, -1000, 1, "MODEL 3", "Order Online for <u>Touchless-Delivery</u>", "CUSTOM ORDER", "EXISTING INVENTORY",
      "MODEL X", "Order Online for <u>Touchless-Delivery</u>", "CUSTOM ORDER","EXISTING INVENTORY", true, true)
    }
    if (slideTop < -1350 && slideTop > -2000) {
      sideChecker(-1350, -1650, 2, "MODEL X", "Order Online for <u>Touchless-Delivery</u>", "CUSTOM ORDER", "EXISTING INVENTORY",
      "MODEL Y", "Order Online for <u>Touchless-Delivery</u>", "CUSTOM ORDER","EXISTING INVENTORY", true, true)
    }
    if (slideTop < -2000 && slideTop > -2650) {
      sideChecker(-2000, -2300, 3, "MODEL Y", "Order Online for <u>Touchless-Delivery</u>", "CUSTOM ORDER", "EXISTING INVENTORY",
      "Lowest Cost Solar Panel in America", "Money-back guarantee", "ORDER NOW","LEARN MORE", true, true)
    }
    if (slideTop < -2650 && slideTop > -3300) {
      sideChecker(-2650, -2950, 4, "Lowest Cost Solar Panel in America", "Money-back guarantee", "ORDER NOW","LEARN MORE",
      "Solar for New Roofs", "Solar Roof cost Less than a New Roof Plus Solar Panels", "ORDER NOW","LEARN MORE", true, true)
    }
    if (slideTop < -3300 && slideTop > -3950) {
      // console.log((slidecontainer[6].getBoundingClientRect().top  / 250).toFixed(2))
      sideChecker(-3300, -3700, 5,   "Solar for New Roofs", "Solar Roof cost Less than a New Roof Plus Solar Panels", "ORDER NOW","LEARN MORE",
      "Accessories", "", "SHOP NOW","", true,false)
    }
  }
    
  return (
    <div className="App" onScroll={scrolling}>
      <div className="arrow"></div>

      <header>
        <h1 className="p1">TESLA</h1>
        {
          isDesktopOrLaptop ? 
          <ul className="p2">
            <li>MODEL S</li>
            <li>MODEL 3</li>
            <li>MODEL X</li>
            <li>MODEL Y</li>
            <li>SOLAR ROOF</li>
            <li>SOLAR PANELS</li>
          </ul> : ""
        }
        <ul className="p3">
          {
            isDesktopOrLaptop ? 
            <li>SHOP</li> : ""
          }
          {
            isDesktopOrLaptop ? 
             <li>TESLA ACCOUNT</li>
            : ""
          }
          <li><img src={burger} alt="artoria"/></li>
        </ul>
      </header>

      
      <div id="containment">
        <div>
          <h1 className="label">MODEL S</h1>
          <h1 className="label">Order Online for <u>Touchless-Delivery</u></h1>
        </div>
        <div>
          <button className="label bl">CUSTOM ORDER</button> 
          <button className="label br">EXISTING INVENTORY</button>
        </div>
      </div>


      <Slide image={teslaS} alt="teslaS" bg="orange"/>
      <Slide image={tesla3} alt="tesla3" bg="cyan"/>
      <Slide image={teslaX} alt="teslaX" bg="lime"/>
      <Slide image={teslaY} alt="teslaY" bg="tomato"/>
      <Slide image={teslaPanel} alt="teslaP" bg="purple"/>
      <Slide image={teslaRoof} alt="teslaR" bg="grey"/>
      <Slide image={teslaAcc} alt="teslaA" bg="yellow"/>
    </div>
  );
}

export default App;
