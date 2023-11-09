function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-cyan-500  text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Projeto final bloco 03: Farmácia | Copyright: {data}
                        </p>
                </div>
            </div>
        </>
    )
}

export default Footer