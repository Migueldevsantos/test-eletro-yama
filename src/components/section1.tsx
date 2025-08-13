import Image from 'next/image';

const produtos = [
    {
        nome: 'Cabos',
        descricao: 'Cabos elétricos de alta qualidade para instalações seguras e eficientes.',
        imagem: '/produtos/cabos.webp',
    },
    {
        nome: 'Caixa de Lux',
        descricao: 'Caixa de lux para proteção e organização de circuitos elétricos.',
        imagem: '/produtos/cx-lux.webp',
    },
    {
        nome: 'Caixa Sabesp',
        descricao: 'Caixa padrão Sabesp para instalações de água e energia.',
        imagem: '/produtos/cx-sabesp.webp',
    },
    {
        nome: 'Lâmpadas Kian',
        descricao: 'Lâmpadas LED da marca Kian, econômicas e de longa duração.',
        imagem: '/produtos/lampadas-kian.jpg',
    },
    {
        nome: 'Reparos de Registro Chuveiro e torneiras',
        descricao: 'Reparo para registro de chuveiro, compatível com diversos modelos.',
        imagem: '/produtos/reparo-reg-chuveiro.webp',
    },
    {
        nome: 'Tomadas Tramontina',
        descricao: 'Tomadas de alta resistência para uso residencial e comercial.',
        imagem: '/produtos/tomada.jpg',
    },
];

export const Section1 = () => {
    return (
        <section className="w-full py-12 bg-gray-100">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">Produtos que trabalhamos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {produtos.map((produto, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                            <Image src={produto.imagem} alt={produto.nome} width={120} height={120} className="mb-4 object-contain rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-center">{produto.nome}</h3>
                            <p className="text-gray-700 text-center">{produto.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};