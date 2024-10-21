import React from "react";
import Mainbodyitems from "./Mainbodyitems";

const Mainbody=()=>{

    const cards=[
        {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawcgOtbdJeI61xZ7GjQdLnL8EamXPPegAmQ&s",movieName:"Apurva"},
        {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEvTlUaQks_024Tis69F6sdARqhVubiq9Kw&s",movieName:"Govinda mere naam"},
        {imageUrl:"https://m.media-amazon.com/images/M/MV5BNTNhOWJiYTgtMTM5Ny00NGJhLTk0OWItZGQ5ZWVmMGZlY2NiXkEyXkFqcGdeQXVyMjQwOTczMzE@._V1_FMjpg_UX1000_.jpg",movieName:"The Freelancer"},
        {imageUrl:"https://m.media-amazon.com/images/I/71FlIOW3lCL._AC_UF1000,1000_QL80_.jpg",movieName:"Brahmastra"},
        {imageUrl:"https://i.pinimg.com/736x/21/af/2c/21af2cc84e93970e5c272e222d0b9570.jpg",movieName:"Sita Ramam"},
        {imageUrl:"https://static2.showtimes.com/poster/660x980/the-family-star-177241.jpg",movieName:"The Family Star"},
        {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MFMv21g5FAqxkjm9lvR4-CgTlA0kCsDR-w&s",movieName:"housefull 4"},
        {imageUrl:"https://upload.wikimedia.org/wikipedia/en/2/24/Liger_film_poster.jpg",movieName:"Liger"},
        {imageUrl:"https://upload.wikimedia.org/wikipedia/en/5/5e/Shiddat_poster.jpg",movieName:"siddat"},
        {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMe0FFQjGyiPSm0dK6EdBEM9dFpV_Ln9BG2w&s",movieName:"Chhichhore"},
        {imageUrl:"https://upload.wikimedia.org/wikipedia/en/3/3f/Tanaji_film_poster.jpg",movieName:"Tanhaji"},
        {imageUrl:"https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/10/273e787ba809e725948334340c658e68_original.jpg",movieName:"vikram"},
        // {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7757/1721653237757-v",movieName:"kingdom of the planet of the apes"},
        {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4622/1534622-v-49ee55ea1cae",movieName:"Avatar"},
        // {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/110/1710936760110-v",movieName:"Bhoot Police"},
        {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/1777/1000071777/1000071777-v",movieName:"Bajrangi Bhaijaan"},
        {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5403/1770015403/1770015403-v",movieName:"joly llb 2"},
        {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7309/177309-v",movieName:"badhai ho"},
        // {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9147/1609147-v-9ad493e842f2",movieName:"titanic"},
        {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/325/1720634660325-v",movieName:"the legend of hanuman"},
        {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/749/1708280220749-v",movieName:"criminal justice"},
        {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9296/1369296-i-9c4de25be85b",movieName:"Sangchi"},
        {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7416/957416-v",movieName:"BABY"},
        {imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7989/1637989-i-68bafcfb1139",movieName:"IB 71"},
    ]


    return(
        <div className="card">
            {cards.map((ele)=>{return(<Mainbodyitems movies={ele}/>)})}
        </div>
    )
}

export default Mainbody