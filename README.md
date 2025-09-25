# 📝 Lista de Tarefas - React TypeScript

Uma aplicação moderna de lista de tarefas desenvolvida com React, TypeScript e drag-and-drop, convertida de JavaScript para TypeScript com hooks personalizados.

## ✨ Funcionalidades

- ✅ **Adicionar tarefas** - Interface limpa para criar novas tarefas
- ✏️ **Editar tarefas** - Clique no ícone de edição para modificar tarefas existentes
- 🗑️ **Excluir tarefas** - Remove tarefas indesejadas com um clique
- 🔄 **Reordenar por drag & drop** - Arraste e solte tarefas para reorganizar
- 💾 **Persistência local** - Dados salvos automaticamente no localStorage
- 🚫 **Prevenção de duplicatas** - Impede a criação de tarefas com texto idêntico
- 🎨 **Interface moderna** - Design glassmorphic com efeito blur
- 📱 **Layout responsivo** - Funciona bem em diferentes tamanhos de tela

## �️ Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca principal para interface
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **@hello-pangea/dnd** - Funcionalidade de drag and drop
- **React Icons** - Ícones para edição e exclusão
- **CSS3** - Estilização moderna com efeitos visuais
- **Create React App** - Configuração e build do projeto

## 🏗️ Arquitetura do Projeto

```
src/
├── components/
│   ├── Main.tsx          # Componente principal da aplicação
│   ├── Main.css          # Estilos do componente principal
│   ├── Form/
│   │   ├── Index.tsx     # Formulário para adicionar/editar tarefas
│   │   └── Form.css      # Estilos do formulário
│   └── Tasks/
│       ├── Index.tsx     # Lista de tarefas com drag & drop
│       └── Tasks.css     # Estilos da lista de tarefas
├── hooks/
│   ├── useLocalStorage.ts # Hook para persistência no localStorage
│   └── useTarefas.ts     # Hook customizado para lógica das tarefas
├── types/
│   └── index.ts          # Definições de tipos TypeScript
├── App.tsx               # Componente raiz da aplicação
└── index.tsx             # Ponto de entrada da aplicação
```

## � Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd projetostreinandoreact
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm start
   ```

4. **Acesse a aplicação**
   - Acesse http://localhost:3000 no seu navegador

### Scripts Disponíveis

- `npm start` - Executa a aplicação em modo de desenvolvimento
- `npm run build` - Cria build de produção
- `npm test` - Executa os testes
- `npm run eject` - Ejeta a configuração do CRA (irreversível)

## 🔧 Funcionalidades Técnicas

### Hooks Personalizados

- **useLocalStorage**: Gerencia persistência automática no localStorage
- **useTarefas**: Encapsula toda lógica de CRUD das tarefas

### Drag & Drop

- Implementado com `@hello-pangea/dnd`
- Portal rendering para evitar conflitos com CSS
- Reordenação visual e funcional das tarefas

### TypeScript

- Tipagem completa da aplicação
- Interfaces para props e estados
- Compilação com verificação de tipos rigorosa

## 🎨 Design

- **Tema**: Glassmorphism com gradiente roxo-azul
- **Tipografia**: Sistema de fontes nativo
- **Interações**: Hover effects e transições suaves
- **Responsividade**: Design adaptativo para diferentes dispositivos

## 📝 Migração JavaScript → TypeScript

Este projeto foi migrado de JavaScript para TypeScript incluindo:

- ✅ Conversão de componentes de classe para funcionais com hooks
- ✅ Adição de tipagem completa (Props, State, Events)
- ✅ Criação de hooks personalizados
- ✅ Configuração do tsconfig.json
- ✅ Refatoração da arquitetura com melhor separação de responsabilidades

## � Resolução de Problemas

### Drag & Drop

Se as tarefas não arrastarem corretamente:
- Verifique se não há zoom no navegador (deve estar em 100%)
- Limpe o cache do navegador
- Certifique-se de que JavaScript está habilitado

### LocalStorage

Os dados são salvos automaticamente. Se não persistirem:
- Verifique se o localStorage não está desabilitado
- Tente limpar dados antigos: `localStorage.clear()`

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ durante o aprendizado de React e TypeScript.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
