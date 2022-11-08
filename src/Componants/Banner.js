function Banner(props) {
    return (
        <>

            <div class="card bg-dark text-dark ">
                <div className="opacity-75">
                    <img src={props.img} class="card-img " alt="..." />

                </div>
                <div class="card-img-overlay d- justify-content-center ">
                    <h3 class="card-title align-self-center">{props.head}</h3>
                    <h1 class="card-title align-self-center">{props.title}</h1>
                </div>
            </div>



        </>
    )

}

export default Banner