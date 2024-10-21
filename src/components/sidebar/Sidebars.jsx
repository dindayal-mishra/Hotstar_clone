import React from "react";
// import Listitems from "./Listitems"
import { MdOutlineCategory } from "react-icons/md";
import { FaDribbble,FaHouse,FaMagnifyingGlass,FaWallet,FaCircleUser } from "react-icons/fa6";
import { PiTelevisionSimple } from "react-icons/pi";


const Sidebars=()=>{
    // const sideBarItems=[
    //     {imageUrl:"https://cdn-icons-png.flaticon.com/128/1144/1144760.png"},
    //     {imageUrl:"https://cdn3.iconfinder.com/data/icons/flaticons-1/24/flaticon_search-512.png"},
    //     {imageUrl:"https://static.vecteezy.com/system/resources/thumbnails/021/948/181/small/3d-home-icon-free-png.png"},
    //     {imageUrl:"https://w7.pngwing.com/pngs/516/420/png-transparent-television-show-computer-icons-television-in-russia-tv-miscellaneous-television-angle-thumbnail.png"},
    //     {imageUrl:"https://www.clipartmax.com/png/middle/8-88403_size-movie-icon.png"},
    //     {imageUrl:"https://png.pngtree.com/png-vector/20190929/ourmid/pngtree-ball-icon-isolated-on-abstract-background-png-image_1754217.jpg"}
    // ]
    return(
        <div className="sidebar">

            <div className="logo">
            
                    <img src="https://asset.brandfetch.io/idh5Jct7tV/idTJbtwCYa.png?updated=1714125034737" alt="" />
                   
                     </div>

                        <div className="sidelist">
                            <FaCircleUser  className="navlist"/>
                            <FaMagnifyingGlass/>
                            <FaHouse/>
                            <PiTelevisionSimple/>
                            <FaWallet/>
                             <FaDribbble/>
                            <MdOutlineCategory/>
                              {/* <h1>hello  </h1> */}
                            {/* {sideBarItems.map((ele)=>{return (<Listitems data={ele}/>)})} */}
                        </div>
         
            
        </div>
        
    )
}

export default Sidebars