export function Footer() {
  const links = [
    { title: "Sobre", items: ["História", "Carreiras", "Blog"] },
    { title: "Mercados", items: ["Tudo", "Cripto", "Esportes", "Política"] },
    { title: "Ajuda", items: ["Suporte", "Termos", "Privacidade"] },
    { title: "Redes", items: ["Twitter", "Telegram", "Discord"] },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-16 py-12 px-10 text-gray-500 font-nunito">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-10">
        
        <div className="lg:col-span-1">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white font-black text-sm">P</div>
            <span className="font-bold text-gray-900 text-[15px]">Prediz.teck</span>
          </div>
          <p className="text-xs leading-relaxed max-w-[200px] text-gray-400">
            A maior plataforma de mercados preditivos descentralizados do mundo.
          </p>
        </div>

        {links.map((section) => (
          <div key={section.title}>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2 text-xs">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="text-gray-500 hover:text-primary transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-100 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-gray-400">
        <span>© 2026 Prediz.teck — All rights reserved</span>
        <span>Desenvolvido com precisão por Antigravity</span>
      </div>
    </footer>
  );
}
