export function Footer() {
  const links = [
    { title: "Sobre", items: ["História", "Carreiras", "Blog"] },
    { title: "Mercados", items: ["Tudo", "Cripto", "Esportes", "Política"] },
    { title: "Ajuda", items: ["Suporte", "Termos", "Privacidade"] },
    { title: "Redes", items: ["Twitter", "Telegram", "Discord"] },
  ];

  return (
    <footer className="bg-[#0d1421] border-t border-[#242d40] mt-20 py-16 px-10 text-gray-500 font-nunito">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-10">
        
        <div className="lg:col-span-1">
          <div className="text-white font-bold text-lg font-fredoka mb-4">
            SatoshiMKT
          </div>
          <p className="text-xs leading-relaxed max-w-[200px]">
            A maior plataforma de mercados preditivos descentralizados do mundo.
          </p>
        </div>

        {links.map((section) => (
          <div key={section.title}>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2 text-xs">
              {section.items.map((item) => (
                <li key={item} className="hover:text-primary transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#242d40] flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
        <span>© 2026 SatoshiMKT Clone — All rights reserved</span>
        <span className="text-gray-400">Desenvolvido com precisão por Antigravity</span>
      </div>
    </footer>
  );
}
