# RolePlay Social

> Conecte pessoas. Crie experiencias. Viva o momento.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## O Conceito - Oceano Azul

O RolePlay Social explora um oceano azul ainda inexplorado: a lacuna entre "querer sair" e "ter com quem".

Diferente de apps de namoro (Tinder, Bumble) ou redes sociais genericas (Instagram, Twitter), o RolePlay Social foca em atividades em comum no mundo real, no momento presente.

## Proposta de Valor

- Pessoa que quer sair mas nao tem companhia: Cria um role e recebe pedidos de entrada
- Pessoa que quer ser incluida: Ve roles abertos perto de si e pede pra entrar
- Quem quer conhecer pessoas novas: Match por atividade - o programa ja e o assunto

## Funcionalidades Principais (MVP)

### Perfil do Usuario
- Cadastro com nome, idade e foto de perfil
- Identidade de genero: Homem, Mulher, Gay, Trans, Nao-binario, Outros
- Status: Disponivel / Online / Offline

### Sistema de Roles
- Bar / Boteco
- Correr / Atividade fisica
- Explorar a cidade / Turismo
- Restaurante / Balada / Show
- Cafe / Games / Cinema / Parque
- Outros (descricao livre)

### Salas (Rooms)
- Sala Publica: qualquer um pode pedir entrada; o criador aprova ou rejeita
- Sala Privada: acesso via link exclusivo gerado automaticamente
- Chat em grupo em tempo real (WebSocket)

### Sistema de Match
- Feed de pessoas disponiveis
- Envio de convite para sair
- Match duplo: ambos precisam aceitar
- Chat 1-1 apos match

## Arquitetura Tecnica

Frontend: Next.js 14 + TypeScript + Tailwind CSS + PWA
Backend: Node.js + Socket.io + Prisma + PostgreSQL + Redis
Mobile: Capacitor.js (wrapper PWA) ou React Native

## Modelo de Negocio

### Freemium (R$ 19,90/mes Pro)
- Roles ilimitados
- Sala privada com link
- Ver quem viu seu perfil
- Destaque no feed
- Badge verificado

### Revenue adicional
- Roles Patrocinados por bares e restaurantes
- Parcerias locais com desconto para grupos
- Assinatura Business para estabelecimentos

## Roadmap

### Fase 1 - MVP Web (4-8 semanas)
- [ ] Autenticacao (email + Google OAuth)
- [ ] Perfil do usuario com foto
- [ ] CRUD de Roles
- [ ] Sistema de salas publico/privado
- [ ] Chat em tempo real
- [ ] Feed de pessoas disponiveis
- [ ] Sistema de convite/match

### Fase 2 - PWA + Mobile (2-4 semanas)
- [ ] Configuracao PWA instalavel
- [ ] Notificacoes push
- [ ] App wrapper Capacitor.js
- [ ] Publicacao Play Store e App Store

### Fase 3 - Crescimento
- [ ] Sistema Freemium
- [ ] Roles patrocinados
- [ ] Mapa de roles (geolocalizacao)
- [ ] App nativo React Native

## Licenca

MIT License
