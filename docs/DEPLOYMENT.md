# Guia de Deploy - TechVagas

Este guia explica como fazer o deploy da aplicação TechVagas em diferentes plataformas.

## 🚀 Deploy na Vercel (Recomendado)

### 1. Preparação
```bash
# Build da aplicação
npm run build

# Teste local da build
npm run start
```

### 2. Deploy na Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub
3. Importe o repositório
4. Configure as variáveis de ambiente (se necessário)
5. Deploy automático!

### 3. Configurações da Vercel
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 🌐 Deploy no Netlify

### 1. Build Settings
```bash
# Build command
npm run build

# Publish directory
.next
```

### 2. Configurações
- **Node Version**: 18.x ou superior
- **Build Command**: `npm run build && npm run export`
- **Publish Directory**: `out`

## 🐳 Deploy com Docker

### 1. Dockerfile
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

### 2. Build e Run
```bash
# Build da imagem
docker build -t techvagas .

# Executar container
docker run -p 3000:3000 techvagas
```

## ☁️ Deploy na AWS

### 1. AWS Amplify
1. Conecte o repositório GitHub
2. Configure o build:
   - **Build Command**: `npm run build`
   - **Base Directory**: `/`
   - **Output Directory**: `.next`

### 2. AWS EC2
```bash
# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clonar repositório
git clone <repository-url>
cd whatsapp-jobs-next-ts-frontend-backend

# Instalar dependências
npm install

# Build
npm run build

# Instalar PM2
npm install -g pm2

# Executar com PM2
pm2 start npm --name "techvagas" -- start
pm2 save
pm2 startup
```

## 🔧 Variáveis de Ambiente

### Produção
```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Desenvolvimento
```env
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📊 Monitoramento

### 1. Analytics
- Google Analytics
- PostHog
- Vercel Analytics

### 2. Performance
- Lighthouse CI
- Web Vitals
- Bundle Analyzer

## 🔒 Segurança

### 1. Headers de Segurança
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]
```

### 2. HTTPS
- Certificado SSL automático (Vercel/Netlify)
- Configurar HTTPS em servidores próprios

## 🚀 Otimizações

### 1. Performance
- Image optimization
- Code splitting
- Lazy loading
- CDN

### 2. SEO
- Meta tags
- Sitemap
- Robots.txt
- Schema markup

## 📝 Checklist de Deploy

- [ ] Build local funcionando
- [ ] Testes passando
- [ ] Variáveis de ambiente configuradas
- [ ] Domínio configurado
- [ ] SSL/HTTPS ativo
- [ ] Analytics configurado
- [ ] Monitoramento ativo
- [ ] Backup configurado
- [ ] Documentação atualizada

## 🆘 Troubleshooting

### Build Errors
```bash
# Limpar cache
rm -rf .next
npm run build
```

### Runtime Errors
```bash
# Verificar logs
npm run dev
# ou
pm2 logs techvagas
```

### Performance Issues
```bash
# Analisar bundle
npm run build
npm run analyze
```
