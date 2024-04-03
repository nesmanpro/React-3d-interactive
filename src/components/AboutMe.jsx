import Spline from '@splinetool/react-spline';


const AboutMe = () => {
    return (
        <div className='flex justify-center align-middle bg-[#E5E9F6] min-h-screen'>
            {/* <div className=' absolute z-10'>
                <h1 className=''>Hola</h1>
                <p>Ésto es un a prueba de programacion y 3d interactiva</p>
            </div> */}

            <div className="z-0 h-full">
                <Spline scene="https://prod.spline.design/9sDDO6Wvn3jTwR5s/scene.splinecode" />
            </div>
        </div>
    )
}

export default AboutMe