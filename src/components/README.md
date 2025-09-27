# Componentes do Projeto

Este diretório contém todos os componentes React organizados para o projeto WhatsApp Jobs.

## Estrutura dos Componentes

### 1. **OpenSourceBanner**
- Banner no topo da página promovendo o projeto open source
- Inclui link para o GitHub

### 2. **Header**
- Seção hero principal da página
- Título, descrição e call-to-action principal
- Imagem ilustrativa

### 3. **Features**
- Seção com 3 características principais do projeto
- Cards com ícones e descrições

### 4. **CTA (Call to Action)**
- Seção de motivação para os usuários
- Design com gradiente e ícone de foguete

### 5. **Groups**
- Componente principal com lista de grupos WhatsApp
- Filtros por categoria (Frontend, Backend, Mobile, etc.)
- Gerenciamento de estado para categoria ativa
- Carregamento de dados do arquivo `groups.json`

### 6. **Newsletter**
- Formulário de cadastro para receber novidades
- Gerenciamento de estado do formulário
- Validação de campos

### 7. **OpenSource**
- Seção informativa sobre o projeto open source
- Cards com benefícios e links para contribuição

### 8. **Contact**
- Formulário de contato para reportar problemas ou sugerir grupos
- Múltiplos tipos de contato (link quebrado, sugestão)
- Gerenciamento de estado do formulário

### 9. **Footer**
- Rodapé da página com informações do projeto
- Links para redes sociais

## Como Usar

Todos os componentes podem ser importados individualmente ou através do arquivo de índice:

```typescript
// Importação individual
import Header from '@/components/Header';

// Importação através do índice
import { Header, Features, Groups } from '@/components';
```

## Benefícios da Organização

1. **Manutenibilidade**: Cada componente tem uma responsabilidade específica
2. **Reutilização**: Componentes podem ser reutilizados em outras páginas
3. **Testabilidade**: Cada componente pode ser testado isoladamente
4. **Legibilidade**: Código mais limpo e organizado
5. **Escalabilidade**: Fácil adicionar novos componentes ou modificar existentes
