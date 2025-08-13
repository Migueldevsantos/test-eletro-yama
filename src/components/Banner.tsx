export const Banner = () => {
    return (
        <div
            className="w-full h-96 text-white relative bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: 'url(/IMG_20201223_165230399.webp)'}}
        >
            {/* Camada escura de fundo */}
            <div className="absolute inset-0 bg-black opacity-60 z-10" />
            {/* Conteúdo acima do fundo escurecido */}
            <div className="relative z-20 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Bem-vindo à EletroYama</h2>
                <p className="text-lg mb-6">Sua loja completa para eletrônicos, tecnologia e inovação.</p>
                {/* Botão de contato */}
                <a href="#contato">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow-lg transition">Entrar em contato</button>
                </a>
            </div>
        </div>
    )
}