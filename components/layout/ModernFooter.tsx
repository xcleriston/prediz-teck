export function ModernFooter() {
  const links = [
    { title: "Produto", items: ["Preços", "Changelog", "Documentação", "API"] },
    { title: "Use Cases", items: ["Comunidades Web3", "Corretoras", "Fã Clubes", "Creator Economy"] },
    { title: "Empresa", items: ["Sobre Nós", "Carreiras", "Blog", "Contato"] },
    { title: "Legal", items: ["Termos de Uso", "Privacidade", "Compliance", "Auditoria"] },
  ];

  return (
    <footer className="bg-[#05080f] py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-10">
        
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-gradient-primary flex items-center justify-center text-white font-black text-[10px] shadow-[0_0_10px_rgba(160,32,240,0.5)]">
              P
            </div>
            <span className="font-bold text-white text-md tracking-tight">Prediz.tech</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
            A infraestrutura SaaS líder mundial para construção e escalabilidade de mercados preditivos descentralizados e white-label.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            {/* Social icons placeholder */}
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition cursor-pointer">X</div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition cursor-pointer">In</div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition cursor-pointer">GH</div>
          </div>
        </div>

        {links.map((section) => (
          <div key={section.title} className="col-span-1">
            <h4 className="text-white font-semibold text-sm mb-4">
              {section.title}
            </h4>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-[#A020F0] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Prediz.tech. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span>Sistemas Operacionais 100% On-Chain</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00c74d] self-center animate-pulse" />
          <span className="text-[#00c74d]">All Systems Operational</span>
        </div>
      </div>
    </footer>
  );
}
