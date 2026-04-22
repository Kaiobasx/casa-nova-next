# 🏠 Chá de Casa Nova — Kaio & Yas

Site moderno e premium para o Chá de Casa Nova, construído com **Next.js 15 (App Router)**, **React 19**, e **Tailwind CSS 3**.

---

## 🚀 Como Iniciar

### 1. Criar o projeto Next.js base
```bash
npx create-next-app@latest cha-casa-nova \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --no-eslint \
  --import-alias "@/*"
```

### 2. Substituir os arquivos gerados
Copie todos os arquivos deste repositório para dentro da pasta criada, substituindo os existentes.

### 3. Adicionar as fotos do casal
Coloque as fotos originais na pasta `public/img/`:
```
public/
  img/
    IMG_4662.JPG
    IMG_4739.jpg
    IMG_2347_VSCO.jpg
    89c5b1e0-f5f3-48c9-8568-76e212b91be5.jpg
```

### 4. Instalar dependências e rodar
```bash
npm install
npm run dev
```

O site estará disponível em `http://localhost:3000`.

---

## 🗂️ Arquitetura de Pastas

```
src/
├── app/                        # App Router (Next.js)
│   ├── layout.tsx              # Layout raiz (fontes, Header, Footer)
│   ├── page.tsx                # Página principal (home)
│   ├── globals.css             # Design system global + Tailwind
│   ├── login/
│   │   └── page.tsx            # Página de Login
│   ├── cadastro/
│   │   └── page.tsx            # Página de Cadastro
│   └── produtos/
│       └── page.tsx            # Página de Lista de Presentes
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navbar glassmorphism
│   │   └── Footer.tsx          # Rodapé com PIX rápido
│   ├── sections/
│   │   ├── Hero.tsx            # Carrossel de fotos (3 slides)
│   │   ├── Countdown.tsx       # Contagem regressiva em tempo real
│   │   ├── About.tsx           # Seção "Sobre Nós" editorial
│   │   ├── GiftGrid.tsx        # Grid responsivo de presentes
│   │   └── PixContribution.tsx # Seção PIX com botão copiar
│   └── forms/
│       ├── ConfirmationForm.tsx # ⭐ Client Component → POST /n8n webhook
│       ├── LoginForm.tsx       # Formulário de login com validação
│       └── RegisterForm.tsx    # Formulário de cadastro com validação
│
├── hooks/
│   └── useCountdown.ts         # Hook reutilizável de contagem regressiva
│
└── lib/
    └── gifts.ts                # Dados tipados dos 12 presentes
```

---

## 🎨 Design System

### Paleta de Cores
| Token | Hex | Uso |
|-------|-----|-----|
| `vinho` | `#780000` | Destaque primário, botões CTA |
| `red.accent` | `#C1121F` | Hover, acentos secundários |
| `cream` | `#FDF0D5` | Background principal |
| `navy` | `#003049` | Textos e blocos sólidos |
| `sky.accent` | `#669BBC` | Acentos suaves, destaques |

### Tipografia
- **Títulos:** `Playfair Display` (serif elegante, via Google Fonts)
- **Corpo:** `Poppins` (sans-serif moderna, via Google Fonts)

### Efeitos
- **Glassmorphism:** Navbar e cards de login/cadastro (`backdrop-filter: blur`)
- **Editorial spacing:** Paddings e margins generosos para respiro visual
- **Animações:** `fade-in`, `fade-in-up`, `count-up` (CSS puro + Tailwind keyframes)

---

## 🔌 Integração N8N (Webhook)

O `ConfirmationForm.tsx` já está preparado para enviar dados ao N8N:

```typescript
// src/components/forms/ConfirmationForm.tsx
const WEBHOOK_URL = "http://localhost:5678/webhook/contato";

// Payload enviado via POST:
{
  nome: string,
  email: string,
  telefone: string,
  confirmacao: "sim" | "nao",
  adultos: number,
  criancas: number,
  presente: string,
  mensagem: string,
  timestamp: string,   // ISO 8601
  origem: "cha-de-casa-nova"
}
```

### Para produção, altere a URL do webhook:
```typescript
// Desenvolvimento:
const WEBHOOK_URL = "http://localhost:5678/webhook/contato";

// Produção:
const WEBHOOK_URL = "https://seu-n8n.dominio.com/webhook/contato";

// Ou via variável de ambiente (recomendado):
const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!;
```

---

## 📅 Configurar Data do Evento

Edite a data em `src/components/sections/Countdown.tsx`:
```typescript
// Linha 8 — altere para a data real do Chá de Casa Nova
const EVENT_DATE = "2025-12-25T18:00:00";
```

---

## 🖼️ Configurar Imagens Externas

Domínios permitidos para `next/image` estão em `next.config.ts`:
```typescript
remotePatterns: [
  { protocol: "https", hostname: "m.media-amazon.com" },
  { protocol: "https", hostname: "static.vecteezy.com" },
]
```

---

## ✅ Checklist de Personalização

- [ ] Substituir fotos em `public/img/`
- [ ] Atualizar a data do evento em `Countdown.tsx`
- [ ] Configurar URL do webhook N8N em `ConfirmationForm.tsx`
- [ ] Atualizar chave PIX real em `PixContribution.tsx` e `Footer.tsx`
- [ ] Adicionar/remover presentes em `src/lib/gifts.ts`
- [ ] Configurar `NEXT_PUBLIC_N8N_WEBHOOK_URL` como variável de ambiente em produção

---

*Feito com ♥ para um novo lar · Kaio & Yas 2025*
