export const Menu = () => {
    return (
        <div className="absolute w-full h-12 flex items-center justify-center z-50">
            <nav>
                <ul className="flex space-x-4 text-white ">
                    <li>
                        <a href="#" className=" hover:text-blue-500 hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500 hover:underline">Produtos</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500 hover:underline">Sobre</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500 hover:underline">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}