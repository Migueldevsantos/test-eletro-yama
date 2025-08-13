"use client"
import Image from 'next/image';

const marcas = [
    { nome: 'Adelbras', logo: '/marcas/adelbras.jpg' },
    { nome: 'Cortag', logo: '/marcas/cortag.jpg' },
    { nome: 'Deca', logo: '/marcas/deca.jpg' },
    { nome: 'Drayko', logo: '/marcas/drayko.jpg' },
    { nome: 'Foxlux', logo: '/marcas/foxlux.jpg' },
    { nome: 'Gerdau', logo: '/marcas/gerdau.jpg' },
    { nome: 'Jomarca', logo: '/marcas/jomarca.jpg' },
    { nome: 'Kian', logo: '/marcas/kian.jpg' },
    { nome: 'Lixas Tatu', logo: '/marcas/lixas-tatu.jpg' },
    { nome: 'Megatron', logo: '/marcas/megatron.jpg' },
    { nome: 'SIL', logo: '/marcas/sil.png' },
    { nome: 'Starret', logo: '/marcas/starret.jpg' },
    { nome: 'Steck', logo: '/marcas/steck.jpg' },
    { nome: 'Tekbond', logo: '/marcas/tekbond.jpg' },
    { nome: 'Tramontina', logo: '/marcas/tramontina.jpg' },
    { nome: 'Wago', logo: '/marcas/wago.jpg' },
    { nome: 'WD-40', logo: '/marcas/wd-40.jpg' },
];

export const Section2 = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">Marcas que trabalhamos</h2>
                <div className="overflow-hidden relative w-full min-h-[180px] flex items-center rounded-lg">
                    <div
                        className="flex slide-logos gap-16 overflow-x-hidden overflow-y-hidden"
                        style={{ minWidth: '400%' }}
                    >
                        {marcas.map((marca, idx) => (
                            <div key={idx} className="flex items-center justify-center w-48 h-32 bg-white rounded shadow border">
                                <img
                                    src={marca.logo}
                                    alt={marca.nome}
                                    className="w-36 h-36 object-contain"
                                    style={{ display: 'block' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
