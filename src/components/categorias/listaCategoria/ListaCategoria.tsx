import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';

import Categoria from '../../../models/Categoria';
import CardCategorias from '../cardCategoria/CardCategoria';

function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
            })
        } catch (error: any) {
                alert('Erro ao buscar categoria.')
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
            {categorias.length === 0 && (
                <div className='flex justify-center w-full absolute top-1/2'>
                <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}             
              />
              </div>
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {categorias.map((categoria) => (
                            <>
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            </>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategorias