import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import '../Styles/Photos.css'

const Photos = ()=> {

    const [ photos, setPhotos ] = useState([])
    const [ loading, setLoading ] = useState(true)
    

    useEffect(()=>{
        const getPhotos = async () =>{
            const key = "SOTesAxrhiguKjl0ZCNfeGgf7RaeBIpBQzzTZGeK"
            try {
                const promise = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${key}`)
                const data = await promise.json()
                setPhotos(data.photos)     
                console.log(data.photos)      
                setLoading(false)
        
            } catch (error) {console.log(error) }
        }
        getPhotos()
        
        
    },[])

    return(
        <React.Fragment>
            
             
            <div className="flex-content">

                <div className="container">
                {
                        
                    loading ? (<Loader/>) : (
                        photos.map(i=>(

                            
                            <div className="photo" key={i.id}>
                                <img src={i.img_src} alt="foto"/>
                                <div className="text-photo">
                                    <p>Planeta: Marte</p>
                                    <p>Robot: {i.rover.name}</p>
                                    <p>Camara: {i.camera.full_name}</p>
                                    <p>Fecha lanzamiento: {i.rover.launch_date}</p>
                                    <p>Fecha aterrizaje: {i.rover.landing_date}</p>
                                </div>
                            </div>
                                
                                
                        ))
                    )
                }    
                    </div>
            </div>

            
        </React.Fragment>
    )
    
}

export default Photos