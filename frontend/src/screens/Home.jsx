import React,{useState} from 'react'
import Card from '../components/Card'
import Hero from '../components/Hero'
import SignIn from '../components/SignIn'
import Carosel from '../components/Carosel'
import LeaderBoard from '../components/LeaderBoard'

export default function Home() {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const toggleAccordion = (index) => {
    if (accordionOpen === index) {
      setAccordionOpen(null);
    } else {
      setAccordionOpen(index);
    }
  };
  return (
    <div className='m-4 mt-200' style={{}}>
    <Hero/>
    {/* <hr /> */}
    {/* <SignIn/> */}
    <hr /><br/>{" "}<br/>{" "}
    <LeaderBoard/>
  
    <Carosel />


{/* 
    <div class="accordion " id="accordionExample" style={{
          width: "65%",
          margin: "auto",
          padding: "10px",
          marginBottom: "10px",
        }}>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div> */}
      

<div>
      <div
        className="accordion  "
        id="accordionFlushExample"
        style={{
          width: "65%",
          margin: "auto",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <div className="accordion-item rounded">
          <h2 className="accordion-header rounded" id="flush-headingOne">
            <button
              className="accordion-button rounded"
              type="button"
              onClick={() => toggleAccordion(0)}
              style={{
                backgroundColor: accordionOpen === 0 ? "#00BC8C" : "",
                color: accordionOpen === 0 ? "white" : "",
              }}
            >
             #SwatchBharatAbhiyaan
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className={`accordion-collapse collapse ${
              accordionOpen === 0 ? "show" : ""
            }`}
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body rounded">
              <div className="container">
                <div className="row">
             
                  <div className="col">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">#SwatchBharatAbhiyaan</li>
                      <li className="list-group-item">
                      Keeping your Environment clean doesn't always mean not throwing garbage around but it also means to actually clean the mess which we created.

Cleaning your city is also not always the responsibility of the government and the NGOs but also the citizens that is we are equally responsible for cleaning our city. 

Hence,
We have created a web app called Pristine which means clean and pure, its purpose it that anyone who wants to clean his locality and need help in doing that, they can post a request with an image in this portal and anyone who is willing to help in cleaning his/her own city can then upload the clean place image as a fellow volunteer.

As soon as the person who had posted, verifies that the place is clean , the volunteer receives a certificate from the government in his/her email automatically. It works as a driving force and creates a sense of Responsibility. There will be a leaderboard which shows the number of locations one has cleaned as well which will motivate people to Clean more and more.

Dream of a clean city is still a dream of many.
Let's clean our nation!!!
                      </li>
                   
        
                    </ul>
                    <br />
              

                    <div className="card-body">
                    
            
                    </div>
                  </div>
 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
