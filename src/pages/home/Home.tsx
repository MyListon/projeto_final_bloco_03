function Home() {
    return (
        <>
            <div className="bg-green-300 flex justify-center min-h-screen">
                <div className="container grid grid-cols-2 text-white">
                    
                    {/* Texto e botão */}
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">
                            Seja Bem Vinde!
                        </h2>
                        <p className="text-xl">
                            Aqui você encontra serviços de saúde e bem-estar!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="rounded text-white border-white border-solid border-2 py-2 px-4">
                                Cadastrar Produto
                            </div>
                        </div>
                    </div>

                    {/* Imagem */}
                    <div className="flex justify-center items-center">
                        <img
                            src="https://ik.imagekit.io/chtshgvyu/produtos_farmacia/farmacia.png"
                            alt="Imagem Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
