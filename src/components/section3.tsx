"use client"
import { useState, useEffect, useRef } from 'react';

const imagens = [
    '/IMG_20200716_091206787.webp',
    '/IMG_20201223_165230399.webp',
    '/IMG_20201223_165239127.webp',
    '/IMG_20201223_165316915.webp',
    '/unnamed.webp',
    '/unnamed (1).webp',
];

export const Section3 = () => {
    const [atual, setAtual] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const proxima = () => setAtual((prev) => (prev + 1) % imagens.length);
    const anterior = () => setAtual((prev) => (prev - 1 + imagens.length) % imagens.length);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(proxima, 3500);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [atual]);

    return (
        <section className="w-full py-12 bg-gray-100">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">Imagens da Loja</h2>
                <div className="relative w-full h-96 flex items-center justify-center bg-white rounded-lg shadow overflow-hidden">
                    <button onClick={anterior} className="absolute left-2 z-10 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition">
                        &#8592;
                    </button>
                    <img
                        src={imagens[atual]}
                        alt={`Foto da loja ${atual + 1}`}
                        className="w-full h-full object-contain"
                        style={{ maxHeight: 350 }}
                    />
                    <button onClick={proxima} className="absolute right-2 z-10 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition">
                        &#8594;
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {imagens.map((_, idx) => (
                            <span
                                key={idx}
                                className={`w-3 h-3 rounded-full ${idx === atual ? 'bg-blue-500' : 'bg-gray-300'} inline-block`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}