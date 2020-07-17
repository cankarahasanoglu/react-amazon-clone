import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1231254"
          title="Kurk Mantolu Madonna"
          price={11.96}
          rating={5}
          image="https://www.kitapambari.com/u/kitapambari/img/c/k/u/kurk-mantolu-madonnae7b3cdc4e4dcd4a204c18fc6e8191f14.jpg"
        />
        <Product
          id="1231254"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Chorcoal Fabric"
          price={98.99}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
      </div>
      <div className="home__row">
        <Product
          id="6345323"
          title="Fitbit Charge 4 | Take your goals further with built-in GPS, personalized heaart rate features and more"
          price={198.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="34325"
          title="WD 2TB Elements Portable External Hard Drive - USB 3.0 - WDBU6Y0020BBK"
          price={79.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/31pLxnRHbsL._AC_US320_FMwebp_QL65_.jpg"
        />
        <Product
          id="63123235"
          title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
          price={111.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL._AC_US320_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="245375"
          title="ASUS ROG Strix XG43VQ 43.4 inch LED 1ms Gaming Curved Monitor - 3840 x 1200 Resolution, 1ms Response, Speakers, HDMI"
          price={782.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61sAdNVgpZL._AC_UY436_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
