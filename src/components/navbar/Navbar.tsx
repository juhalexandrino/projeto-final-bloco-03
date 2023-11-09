import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full bg-cyan-500 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className='text-2xl font-bold'>Farmácia</Link>

                    <div className='flex gap-4'>
                    <Link to='/categorias' className='text-1xl'>Categorias</Link>
                    <Link to='/cadastrarCategoria' className='text-1xl'>Cadastrar categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar