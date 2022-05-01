import styles from "./styles.module.css";

const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <div className={styles.main_container}>
            

            <nav id={styles.navbar}>
            <nav className={styles.navbar}>
                <h1>FOODY</h1>
                
                
            </nav>
                <div id={styles.logo}>
                    {/* <img src="pizza_logo.png" alt="Foody.com" /> */}
                </div>

                <ul>
                    <li className={styles.item}><a href="#">HOME</a></li>
                    <li className={styles.item}><a href="#">SERVICES</a></li>
                    <li className={styles.item}><a href="#">CATEGORIES</a></li>
                    <li className={styles.item}><a href="#">ABOUT US</a></li>
                    <li className={styles.item}><a href="../Personal_Protfolio/code.html">CONACT US</a></li>
                </ul>
                <button className={styles.btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>

            {/* <!-- home section --> */}
            <section id={styles.home}>
                <h1 className={styles.hprimary}>WELCOME TO FOOD VILLA</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita mollitia aperiam
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <button className={styles.btn} onClick={handleLogout}>ORDER NOW</button>
            </section>

            {/* <!-- Services Section--> */}

            <section className={styles.servicescontainer}>
                <h1 className={styles.hprimary}>OUR SERVICES </h1>
                <div id={styles.services}>

                    <div className={styles.box}>
                        <img src="./img/food_plate.png" alt="pizza" />
                        <h2 className={styles.hsecondary.center}>BULK ODERING</h2>
                        <p className={styles.center}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere corrupti magni
                            quae numquam laboriosam a voluptatem dolorum, nisi incidunt id! Placeat itaque amet optio, ut ipsam
                            dignissimos unde ullam deleniti nemo animi harum.lorem20</p>
                    </div>

                    <div className={styles.box}>
                        <img src="./img/take_away.png" alt="pizza" />
                        <h2 className={styles.hsecondary.center}>TAKE AWAY</h2>
                        <p className={styles.center}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere corrupti magni
                            quae numquam laboriosam a voluptatem dolorum, nisi incidunt id! Placeat itaque amet optio, ut ipsam
                            dignissimos unde ullam deleniti nemo animi harum.</p>
                    </div>

                    <div className={styles.box}>
                        <img src="./img/delivery_boy1.png" alt="pizza" />
                        <h2 className={styles.hsecondary.center}>FOOD ODERING</h2>
                        <p className={styles.center}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere corrupti magni
                            quae numquam laboriosam a voluptatem dolorum, nisi incidunt id! Placeat itaque amet optio, ut ipsam
                            dignissimos unde ullam deleniti nemo animi harum.</p>
                    </div>

                </div>
            </section>
            {/* <!-- clients section --> */}
            {/* <section id="client-section">
                <h1 className={styles.hprimary.center}>OUR CLIENTS</h1>
                <div className="clients">
                    <div className={styles.classitem}>
                        <img src="/" alt="OUR CLIENTS" />
                    </div>
                    <div className={styles.classitem}>
                        <img src="./img/hp.png" alt="OUR CLIENTS" />
                    </div>
                    <div className={styles.classitem}>
                        <img src="./img/apple.png" alt="OUR CLIENTS" />
                    </div> */}
                    {/* <!-- <div className="className-item" id="skype">
                <img src="./img/skype.png" alt="OUR CLIENTS">
            </div> --> */}

                {/* </div> */}
            {/* </section> */}
            <section className={styles.contact}>
                <h1 className={styles.hprimary.center}>CONTACT US</h1>
                <div id={styles.contactbox}>
                    <form action="">
                        <div classNames={styles.formgroup}>
                            <lable for={styles.name}>NAME:</lable>
                            <input type="text" name="name" id="name" placeholder="NAME" />
                        </div>
                        <div classNames={styles.formgroup}>
                            <lable for="phone">PHONE:</lable>
                            <input type="phone" phone="phone" id="phone" placeholder="PHONE NUMBER" />
                        </div>
                        <div classNames={styles.formgroup}>
                            <lable for="e-mail">e-mail:</lable>
                            <input type="e-mail" e-mail="e-mail" id="e-mail" placeholder="e-mail" />
                        </div>
                        <div classNames={styles.formgroup}>
                            <lable for="ADDRESS">ADDRESS:</lable>
                            <input type="ADDRESS" ADDRESS="ADDRESS" id="ADDRESS" placeholder="ADDRESS" />
                        </div>
                        <div classNames={styles.formgroup}>
                            <lable for="message">MESSAGE:</lable>
                            <textarea name="message" id="message" rows="6" cols="20" placeholder="MESSAGE"></textarea>
                        </div>
                        <button id={styles.contactbtn} width="10px">SUBMIT</button>
                        {/* <!-- <div>
                    Clear the form: 
                    <button className="btn" width="10px" type="resetzX">RESET</button>
                </div> --> */}

                    </form>
                </div>
            </section>
            <footer>
                <div className={styles.center}>
                    COPYRIGHT &copy; www.foody.com ALL RIGHTS RESERVED!
                </div>
            </footer>

        </div>
    );
};

export default Main;