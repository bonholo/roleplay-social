export default function HomePage() {
  const roles = [
    { icon: '🍺', label: 'Bar / Boteco', color: 'from-amber-500 to-orange-500' },
    { icon: '🏃', label: 'Correr', color: 'from-green-500 to-emerald-500' },
    { icon: '🏙️', label: 'Explorar', color: 'from-blue-500 to-cyan-500' },
    { icon: '🍽️', label: 'Restaurante', color: 'from-red-500 to-rose-500' },
    { icon: '🎵', label: 'Balada', color: 'from-purple-500 to-violet-500' },
    { icon: '☕', label: 'Café', color: 'from-yellow-600 to-amber-600' },
    { icon: '🎮', label: 'Games', color: 'from-indigo-500 to-blue-500' },
    { icon: '🌿', label: 'Parque', color: 'from-teal-500 to-green-500' },
  ]

  const people = [
    { name: 'Ana', age: 25, gender: 'Mulher', status: 'Disponível', role: '🍺 Bar', avatar: '👩' },
    { name: 'Pedro', age: 28, gender: 'Homem', status: 'Online', role: '🏃 Corrida', avatar: '👨' },
    { name: 'Sam', age: 23, gender: 'Não-binário', status: 'Disponível', role: '🏙️ Explorar', avatar: '🧑' },
    { name: 'Julia', age: 30, gender: 'Mulher', status: 'Disponível', role: '🎵 Balada', avatar: '👩' },
    { name: 'Leo', age: 26, gender: 'Gay', status: 'Online', role: '☕ Café', avatar: '👨' },
    { name: 'Mari', age: 24, gender: 'Trans', status: 'Disponível', role: '🍽️ Restaurante', avatar: '👩' },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎭</span>
            <span className="text-xl font-bold gradient-text">RolePlay Social</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#roles" className="hover:text-white transition-colors">Roles</a>
            <a href="#pessoas" className="hover:text-white transition-colors">Pessoas</a>
          </nav>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
              Entrar
            </button>
            <button className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:opacity-90 transition-opacity">
              Começar grátis
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
        {/* Background blur orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            🌊 Explorando o oceano azul das conexões reais
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">Quer sair mas</span>
            <br />
            <span className="gradient-text">não tem com quem?</span>
          </h1>
          
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Crie um <strong className="text-white">role</strong> — bar, corrida, restaurante, balada — 
            e conecte-se com pessoas disponíveis agora, no mundo real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-lg font-bold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25">
              🎭 Criar meu primeiro role
            </button>
            <button className="px-8 py-4 glass rounded-2xl text-lg font-medium hover:bg-white/10 transition-colors">
              👀 Ver roles próximos
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 mt-16 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">2.4k+</div>
              <div className="text-white/50 text-sm mt-1">Pessoas disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">847</div>
              <div className="text-white/50 text-sm mt-1">Roles abertos hoje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">98%</div>
              <div className="text-white/50 text-sm mt-1">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Como <span className="gradient-text">funciona?</span></h2>
            <p className="text-white/50 text-lg">Simples e direto ao ponto</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', icon: '👤', title: 'Crie seu perfil', desc: 'Foto, nome, idade e identidade de gênero. Simples e rápido.' },
              { step: '02', icon: '🎭', title: 'Poste um Role', desc: 'Bar, corrida, restaurante... Defina se é público ou privado.' },
              { step: '03', icon: '🤝', title: 'Conecte', desc: 'Pessoas pedem pra entrar. Você aprova. Ou mande um convite.' },
              { step: '04', icon: '💬', title: 'Chat e combinam', desc: 'Sala de chat em grupo. Match para conversa privada.' },
            ].map((item) => (
              <div key={item.step} className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-xs text-purple-400 font-bold mb-2">PASSO {item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIAS DE ROLES */}
      <section id="roles" className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Que <span className="gradient-text">role</span> você quer?</h2>
            <p className="text-white/50 text-lg">8 categorias para todo estilo de programa</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((role) => (
              <div
                key={role.label}
                className="relative group cursor-pointer rounded-2xl p-6 glass hover:scale-105 transition-transform text-center overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="text-5xl mb-3">{role.icon}</div>
                <div className="font-semibold text-sm">{role.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PESSOAS DISPONÍVEIS */}
      <section id="pessoas" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Pessoas <span className="gradient-text">disponíveis</span> agora</h2>
            <p className="text-white/50 text-lg">Mande um convite e veja se há match</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {people.map((person) => (
              <div key={person.name} className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                      {person.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{person.name}, {person.age}</div>
                      <div className="text-white/40 text-sm">{person.gender}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs text-green-400">{person.status}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs glass px-3 py-1 rounded-full text-white/70">{person.role}</span>
                </div>
                <button className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                  💌 Enviar convite
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALAS / ROOMS */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">
                Salas de <span className="gradient-text">chat em grupo</span>
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                Cada role tem sua própria sala. Pública — qualquer um pede pra entrar e o criador aprova. 
                Privada — acesso só com link exclusivo.
              </p>
              <ul className="space-y-3">
                {[
                  '💬 Chat em tempo real dentro da sala',
                  '✅ Aprovação de novos participantes',
                  '🔗 Link privado gerado automaticamente',
                  '📋 Lista de quem está no role',
                  '❤️ Match para conversa 1-a-1',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mock de sala de chat */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                <span className="text-2xl">🍺</span>
                <div>
                  <div className="font-bold">Boteco do Beto — Sábado 21h</div>
                  <div className="text-xs text-white/40">4 participantes</div>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                {[
                  { user: 'Ana', msg: 'Oi pessoal! Alguém já confirmou?', time: '20:45' },
                  { user: 'Pedro', msg: 'Eu tô indo sim! Chego às 21h30', time: '20:47' },
                  { user: 'Sam', msg: 'Contém comigo 🙋', time: '20:48' },
                  { user: 'Julia', msg: 'Adorei a ideia! Vou também 🍻', time: '20:50' },
                ].map((msg, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs shrink-0">
                      {msg.user[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium">{msg.user}</span>
                        <span className="text-xs text-white/30">{msg.time}</span>
                      </div>
                      <p className="text-sm text-white/70">{msg.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  className="flex-1 bg-white/5 rounded-xl px-4 py-2.5 text-sm text-white/70 border border-white/10 focus:outline-none focus:border-purple-500/50"
                  placeholder="Digite uma mensagem..."
                  readOnly
                />
                <button className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm">
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl font-black mb-6">
            Pronto para <span className="gradient-text">sair do sofá?</span>
          </h2>
          <p className="text-white/60 text-xl mb-10">
            Junte-se a milhares de pessoas que já encontraram seu role perfeito.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-xl font-bold hover:opacity-90 transition-opacity shadow-xl shadow-purple-500/30">
            🎭 Criar minha conta grátis
          </button>
          <p className="text-white/30 text-sm mt-4">Sem cartão de crédito. Começa grátis.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎭</span>
            <span className="font-bold gradient-text">RolePlay Social</span>
          </div>
          <p className="text-white/30 text-sm">
            © 2026 RolePlay Social. Feito com ❤️ para conectar pessoas no mundo real.
          </p>
          <div className="flex gap-4 text-white/30 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="https://github.com/bonholo/roleplay-social" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
