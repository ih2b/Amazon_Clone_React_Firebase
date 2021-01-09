import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/LeSpectacleDeLaMaturite/NORMA_SP_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_fr-FR._CB414845370_.jpg" className="home__image" />
            </div>
            <div className="home__row">
                <Product title="Montre Connectée" image="https://firebasestorage.googleapis.com/v0/b/e-clone-46848.appspot.com/o/51EiuQIKL7L._AC_SL1000_.jpg?alt=media&token=ce1aeabc-775a-4d3d-8fd1-cb895b258a5b" price={29.99} rating={4} />
                <Product title="Victure Caméra de surveillance " image="https://firebasestorage.googleapis.com/v0/b/e-clone-46848.appspot.com/o/51dkzMV9BCL._AC_SL1001_.jpg?alt=media&token=f457479a-3da7-43bb-8695-e2966d5a95c3" price={28.99} rating={5} />
                <Product title="Apple iPhone 12 " image="https://firebasestorage.googleapis.com/v0/b/e-clone-46848.appspot.com/o/71ZOtNdaZCL._AC_SL1500_.jpg?alt=media&token=e972a557-4e26-44af-8fc3-efaad716431c" price={1028.99} rating={5} />
            </div>
            <div className="home__row">
                <Product title="Nouvel Echo Dot" image="https://firebasestorage.googleapis.com/v0/b/e-clone-46848.appspot.com/o/71Q9d6N7xkL._AC_SL1000_.jpg?alt=media&token=41a8b0ff-aaf0-46d9-8e42-4de7c31756ad" price={59.99} rating={5} />

            </div>
            <div className="home__row">
                <Product title="Projecteur LED" image="https://firebasestorage.googleapis.com/v0/b/e-clone-46848.appspot.com/o/71sVyax9ctL._AC_SL1500_.jpg?alt=media&token=6d306875-2788-490b-801d-ebabae19b0d6" price={49.53} rating={2} />
                <Product title="Tour Multiprise Parasurtenseur" image="https://firebasestorage.googleapis.com/v0/b/e-clone-46848.appspot.com/o/610XvCkLVUL._AC_SL1320_.jpg?alt=media&token=763af076-8e9e-4b99-a3b7-b2b2088e6888" price={25.96} rating={3} />
                <Product title="Videoprojecteur WiFi" image="https://firebasestorage.googleapis.com/v0/b/e-clone-46848.appspot.com/o/818J5JkWVlL._AC_SL1500_.jpg?alt=media&token=8b797bff-8752-4d00-965b-942a75e5809e" price={99.55} rating={4} />
                <Product title="Coquimbo" image="https://firebasestorage.googleapis.com/v0/b/e-clone-46848.appspot.com/o/71vaqrGetGL._AC_SL1500_.jpg?alt=media&token=f6829e52-c3da-4456-ba99-478eef2dbfcd" price={22.61} rating={3} />
            </div>
            <div className="home__row">
                <Product title="Mini PC, processeur Intel Core i5-5257U" image="https://firebasestorage.googleapis.com/v0/b/e-clone-46848.appspot.com/o/61y3P5rTA%2BL._AC_SL1300_.jpg?alt=media&token=a0f97f9b-485a-4892-a551-eb69d69ad110" price={299.93} rating={5} />
                <Product title="ESR Câble USB " image="https://firebasestorage.googleapis.com/v0/b/e-clone-46848.appspot.com/o/61YSduLfteL._AC_SL1000_.jpg?alt=media&token=6a417935-3946-43b9-be1a-65361cf84e53" price={5.99} rating={3} />
            </div>
        </div>
    )
}

export default Home
