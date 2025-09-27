# WhatsApp Tech by Meu Guru Tech

Uma plataforma moderna e open source para encontrar vagas de tecnologia em grupos de WhatsApp, construída com Next.js, TypeScript e Tailwind CSS.

## 🎯 Sobre o Projeto

O WhatsApp Tech é uma plataforma que centraliza e organiza grupos de WhatsApp focados em vagas de tecnologia no Brasil. Nossa missão é facilitar o acesso a oportunidades de emprego na área de TI, conectando profissionais a comunidades relevantes e atualizadas.

## 🚀 Funcionalidades

- **Lista organizada de grupos**: Categorias separadas por área de atuação
- **Interface moderna**: Design responsivo com Tailwind CSS
- **Filtros interativos**: Navegação fácil entre categorias
- **Busca inteligente**: Encontre grupos por nome ou categoria
- **Formulários funcionais**: Newsletter e contato
- **Ícones FontAwesome**: Interface visual rica
- **Dados centralizados**: JSON estruturado para fácil manutenção

## 🛠️ Stack Tecnológica

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **FontAwesome** - Biblioteca de ícones
- **ESLint** - Linting de código
- **Turbopack** - Build tool otimizado

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/oismaelash/whatsapp-tech-next-ts-frontend-backend.git
cd whatsapp-tech-next-ts-frontend-backend

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

## 📊 Categorias Disponíveis

As categorias de grupos são geradas de forma dinâmica a partir do arquivo `public/groups.json`. Ou seja, basta adicionar ou editar categorias no JSON para que elas apareçam automaticamente na plataforma, sem necessidade de alterar o código.

Exemplo de categorias comuns (podem variar conforme o JSON):

- **Vagas de Emprego** - Grupos focados em oportunidades de trabalho
- **Frontend** - React, Vue.js, Angular, HTML/CSS/JS
- **Backend** - Node.js, Python, Java, .NET
- **Mobile** - React Native, Flutter, iOS/Android
- **DevOps** - Infraestrutura, Cloud, CI/CD
- **Comunidades Gerais** - Tecnologia em geral

*A lista acima é apenas ilustrativa. Veja o arquivo `groups.json` para as categorias reais e atualizadas.*

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento com Turbopack
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 🌟 Projeto Open Source

Este é um projeto **100% open source** criado para ajudar a comunidade de tecnologia brasileira. Qualquer pessoa pode contribuir e melhorar a plataforma!

### Como Contribuir

#### 1. Adicionando Novos Grupos

Para adicionar novos grupos de WhatsApp:

1. **Fork o repositório**
2. **Edite o arquivo** `public/groups.json`
3. **Siga a estrutura** existente:

```json
{
  "name": "Nome do Grupo",
  "whatsapp_link": "https://chat.whatsapp.com/SEU_LINK_AQUI"
}
```

4. **Crie uma branch** seguindo o padrão:
   - `feature/add-grupos-[categoria]` (ex: `feature/add-grupos-frontend`)
   - `feature/update-grupos-[categoria]` (ex: `feature/update-grupos-backend`)

5. **Abra um Pull Request** com:
   - Descrição clara das mudanças
   - Categoria do grupo adicionado
   - Link válido do WhatsApp

#### 2. Padrões de Branch

```bash
# Para adicionar novos grupos
feature/add-grupos-[categoria]
feature/add-grupos-frontend
feature/add-grupos-backend
feature/add-grupos-mobile

# Para atualizar grupos existentes
feature/update-grupos-[categoria]
feature/update-grupos-vagas

# Para correções
bugfix/fix-[descrição]
bugfix/fix-broken-links

# Para melhorias
improvement/[descrição]
improvement/update-dependencies
```

#### 3. Processo de Contribuição

1. **Fork** o repositório
2. **Clone** seu fork
3. **Crie uma branch** com o padrão correto
4. **Faça suas alterações** no `groups.json`
5. **Teste** localmente (`npm run dev`)
6. **Commit** com mensagem clara
7. **Push** para sua branch
8. **Abra um Pull Request**

#### 4. Validações

Antes de fazer PR, certifique-se:
- ✅ Link do WhatsApp é válido
- ✅ Nome do grupo está correto
- ✅ Categoria está adequada
- ✅ Projeto executa sem erros
- ✅ Não há links duplicados

## 📋 Estrutura do JSON

```json
{
  "categories": [
    {
      "key": "frontend",
      "label": "Frontend",
      "icon": "faCode",
      "groups": [
        {
          "name": "Nome do Grupo",
          "whatsapp_link": "https://chat.whatsapp.com/LINK"
        }
      ]
    }
  ]
}
```

## 🤝 Como Contribuir

Contribuições são **muito bem-vindas**! Você pode ajudar:

- ➕ **Adicionando novos grupos** de WhatsApp
- 🔧 **Corrigindo links** quebrados
- 📝 **Melhorando a documentação**
- 🐛 **Reportando bugs**
- 💡 **Sugerindo novas funcionalidades**
- 🎨 **Melhorando o design**

## 📄 Licença

Este projeto é **independente** e tem como objetivo ajudar a comunidade de tecnologia brasileira. 

**Licença**: MIT - Sinta-se livre para usar, modificar e distribuir.

## 🌐 Links Importantes

- **Site**: [WhatsApp Tech](https://whatsapp-tech.meuguru.tech)
- **Issues**: [GitHub Issues](https://github.com/oismaelash/whatsapp-tech-next-ts-frontend-backend/issues)

## 📞 Contato

Para dúvidas, sugestões ou parcerias (Ismael Ash):

- 📧 [Email](contato@ismaelnascimento.com)
- 💬 [WhatsApp](https://wa.me/5511967435133) 

---

**Feito com ❤️ pela comunidade brasileira de tecnologia**