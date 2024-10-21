import React from "react";
import "./style.css"
import Mainbody from "./components/mainbody/Mainbody";
import Sidebars from "./components/sidebar/Sidebars";

// import img from "./images/Disney+ Hotstar.png"


const App=()=>{
    return(
        <div className="app">
           
           <div className="hotstar">
                <aside className="leftbody">
                        
                        <Sidebars/>

                    </aside>

                     <main className="rightbody">
                        <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7033/1607033-i-d6f937c102ac" alt="" />
                        <div className="moviename">
                        <img src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/7032/1607032-t-73a2c8df16e9" alt="" />
                        <br /><br />
                        <p>2023 . 2Season . 4Language . <span><button>U/A 13+</button></span></p>
                        <p>The mercurial villain Loki resumes his role as the God of </p>
                        <p>Mischief in a new series that takes place after the events of</p>
                        <p> "Avengers: Endgame."</p>
                        <br />
                        <p>Action | super heroes | Science Fiction | Fantasy</p>
                        <br />
                        <p><button>Hindi</button> Tamil <span>Telgu</span> <span>English original</span></p>
                        <br />
                        <button className="subscribe">Subscribe to watch</button> <span className="add"><button>+</button></span>
                        </div>
                     </main>
           </div>

            <section >
                <h2>popular Movies</h2>
                <Mainbody/>
            </section>
       
        </div>
    )
}

export default App