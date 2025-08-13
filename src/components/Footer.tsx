"use client"
export const Footer = () => {
    const data = new Date();
  return (
    <footer className="w-full h-16 border-t-2 border-gray-200 bg-gray-100 flex items-center justify-center">
      <p className="text-gray-600">© {data.getFullYear()} Eletroyama LTDA. Todos os direitos reservados.</p>
    </footer>
  );
};
