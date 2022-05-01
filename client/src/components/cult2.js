// < !DOCTYPE >
   
import react from 'react'  
const cult =(props)=>{ 
   return(
   <>
   <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>Get Fitness, Workouts, Gyms, Health Care, & Healthy food in India by Cult.fit</title>


            <link rel="stylesheet" href="cult.css" />

            <link rel="icon" href="fav_icon.jpg" type="image/jpeg" />

            <script src="https://kit.fontawesome.com/d9f627bb81.js" crossorigin="anonymous"></script>

        </head>
        <body>
            <div className="navBar">
                <div className="logo">
                    <img src="logo_1.png" />
                </div>{/* <!-- LEFT SIDE --> */}

                <ul className="menu">
                    {/* <!-- CENTER --> */}
                    <li><a id="menu_items" href="#a">CULT</a></li>
                    <li><a id="menu_items" href="#b">LIVE</a></li>
                    <li><a id="menu_items" href="#c">SPORT</a></li>
                    <li><a id="menu_items" href="#d">MIND</a></li>
                    <li><a id="menu_items" href="#e">CARE</a></li>
                    {/* <!-- <li><a id="menu_items"href="#f">STORE</a></li> --> */}
                </ul>

                <div className="icons_right">
                    {/* <!-- RIGHT SIDE --> */}
                    <ul/>
                            <li><i className="fa-solid fa-location-dot"></i></li>
                            <li><a href="../MERN">LOG IN /SIGN UP</a></li>
                            <li><i className="fa-solid fa-user"></i></li>
                            <li><i className="fa-solid fa-cart-shopping"></i></li>
                    <ul/>
                            {/* <!-- <a  id="get_app" href="#">GET APP</a> --> */}
                </div>
            </div>


                <div className="home">
                    <div className="main_content">
                        <div className="written">
                            <h1>For the <span>love</span>
                                <br />of fit.</h1>
                            <h3>At cult.fit, we strive to keep you fit & healthy through a range of holistic offerings that include fitness and yoga, healthy meals, mental wellbeing and primary care. Now anyone can now stay healthy from the safety of their homes with just a single app that helps you to<br /> #BeBetterEveryDay</h3>
                        </div>
                        <div className="other">
                            <video className="other_video" src="main_content.mp4" muted autoplay loop no-repeat></video>
                        </div>
                    </div>



                    <div className="cult" id="a">
                        <img src="https://static.cure.fit/assets/images/cult-brand.svg" alt="title-img" loding="lazy" width="90" height="50" />

                        <div className="mid">
                            <h3 className="utility_h3">Makes fitness fun and easy</h3>
                            <h3 className="utility_h3"><a>Explore</a><span><img src="https://static.cure.fit/assets/images/back-arrow-pink.svg" alt="Go back" /> </span></h3>
                        </div>
                        <h4 className="utility_h4">Try our fun group classNamees at our cult centers or work out at best-in-className gyms</h4>
                        <div className="bgimage">
                            <div className="first">
                                <img className="first_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/6285c073-5e3d-4abf-9189-21403628a1f4.png" alt="" />
                                {/* <!-- <h3>Find a cult center near you</h3>
                    <p>
                        Work out at our world className cult centers with the safest measures. From ample workout space to ensure social distancing to frequent sanitisation, cult is playing it safe so you don't have to.
                    </p> --> */}

                            </div>

                            <img className="second_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/f66c717a-bcb9-4d64-b227-115d1010b610.jpeg" alt="" />
                            <img className="third_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/aedcb538-777e-4564-b422-30eb8dc220d2.png"
                                alt="" />
                        </div>
                    </div>



                    <div className="live" id="b">
                        <img src="https://static.cure.fit/assets/images/live-brand.svg" alt="title-img" loding="lazy" width="80.5" height="50" />

                        <div className="mid">
                            <h3 className="utiliti_h3">At-home health & fitness made easy</h3>
                            <h3 className="utility_h3"><a>Explore</a><span><img src="https://static.cure.fit/assets/images/back-arrow-pink.svg" alt="Go back" /> </span></h3>
                        </div>
                        <h4 className="utility_h4">Get fit and stay healthy from the comfort of your home with live workouts</h4>

                        <div className="bgimage">
                            <img className="first_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/d2ceda2f-0362-43f6-9a5a-d1c57f54e7f9.png" alt="" />
                            <img className="second_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/0fedd809-8ebf-4c79-8306-0207522155fe.png" alt="" />
                            <img className="third_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/4041957e-947a-4cba-b9ac-940316910888.png"
                                alt="" />
                        </div>
                    </div>



                    <div className="cultsport" id="c">
                        <img src="https://static.cure.fit/assets/images/cult-sports.svg" alt="title-img" loding="lazy" width="197.5" height="80" />

                        <div className="mid">
                            <h3 className="utiliti_h3">At-home health & fitness made easy</h3>
                            <h3 className="utility_h3"><a>Explore</a><span><img src="https://static.cure.fit/assets/images/back-arrow-pink.svg" alt="Go back" /> </span></h3>
                        </div>
                        <h4 className="utility_h4">Get fit and stay healthy from the comfort of your home with live workouts</h4>
                        <div className="bgimage">
                            <img className="first_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/5c333536-cc72-4e5a-8648-9dcb8006f7c0.png"
                                alt="" />
                            <img className="second_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/631e1299-7ad1-4e06-b410-f77671c2c540.png" alt="" />

                            <img className="third_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/dec83eee-b999-4058-ac0f-6d346b8d071a.png" alt="" />
                        </div>
                    </div>



                    <div className="mind_fit" id="d">
                        <img src="https://static.cure.fit/assets/images/mind-title.svg" alt="title-img" loding="lazy" width="202" height="50" />

                        <div className="mid">
                            <h3 className="utility_h3">Makes fitness fun and easy</h3>
                            <h3 className="utility_h3"><a>Explore</a><span><img src="https://static.cure.fit/assets/images/back-arrow-pink.svg" alt="Go back" /> </span></h3>
                        </div>
                        <h4 className="utility_h4">Try our fun group classNamees at our cult centers or work out at best-in-className gyms</h4>
                        <div className="bgimage">
                            <img className="first_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/9f1b091f-b0ee-4920-8172-fb095c2d7a0b.png"
                                alt="" />
                            <img className="second_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/83ea52e7-666f-4f60-8027-4f03e5bf9605.png" alt="" />

                            <img className="third_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/6f98a852-e6ea-463c-8372-49dc8991b952.png" alt="" />
                        </div>
                    </div>



                    <div classNamename="care_fit" id="e">
                        <img src="https://static.cure.fit/assets/images/care-title.svg" alt="title-img" loding="lazy" width="181" height="50" />

                        <div className="mid">
                            <h3 className="utility_h3">Makes fitness fun and easy</h3>
                            <h3 className="utility_h3"><a>Explore</a><span><img src="https://static.cure.fit/assets/images/back-arrow-pink.svg" alt="Go back" /> </span></h3>
                        </div>
                        <h4 className="utility_h4">Try our fun group class at our cult centers or work out at best-in-class gyms</h4>
                        <div className="bgimage">
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/0f4c194a-3d2c-453c-8a3a-fdf20bd03699.png"
                                alt="" />
                            <img className="second_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/a319056a-2fbb-4d0f-a12d-6b47bf79deef.png" alt="" />

                            <img className="third_img" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/0f4c194a-3d2c-453c-8a3a-fdf20bd03699.png" alt="" />
                        </div>
                    </div>

                    <div className="footer_1">
                        <div className="foot">
                            <h2>Get the cult.fit app for your mobile <br />device</h2>
                            <h4>Be better everyday with cult.fit app</h4>
                            <div className="image">
                                <img id="img_1" src="https://static.cure.fit/assets/images/app-store.svg" alt="" />
                                <img id="img_2" src="https://static.cure.fit/assets/images/play-store.svg" alt="" />
                            </div>
                        </div>
                        <div className="mobile">
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,h_350,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/364bf400-9855-4345-a63e-63c31432a6b8.png" alt="Download Curefit app" className=" style-prefix-2jfr04 efaomd31" loading="lazy" width="300" />
                        </div>
                    </div>

                    <div className="footer_2">
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/clp/business-cult.png" alt="" width="1620" />
                    </div>
                    <div className="footer_3">
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/clp/careers-cult.png" alt="" width="1530" />
                    </div>
                </div>
        </body>
    </html>
    </>
    )
                }
    export default cult;