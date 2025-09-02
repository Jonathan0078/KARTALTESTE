# Website Scraper Real - Frontend

Uma Progressive Web App (PWA) para fazer scraping completo de websites, baixando HTML, CSS, JavaScript e imagens em um arquivo ZIP.

## 🚀 Funcionalidades

- **Scraping Real**: Baixa arquivos reais de websites (HTML, CSS, JS, imagens)
- **Progressive Web App**: Instalável em dispositivos móveis e desktop
- **Interface Terminal**: Design moderno inspirado em terminal
- **Progresso em Tempo Real**: Acompanhe o download dos arquivos
- **Download ZIP**: Baixe todos os arquivos compactados
- **Responsivo**: Funciona perfeitamente em mobile e desktop

## 🛠️ Tecnologias

- HTML5, CSS3, JavaScript (ES6+)
- Tailwind CSS para estilização
- Service Worker para funcionalidade PWA
- Fetch API para comunicação com backend
- Web Manifest para instalação

## 📱 Instalação como PWA

1. Acesse o site no seu navegador
2. Clique no ícone de "Instalar" quando aparecer
3. Ou use o menu do navegador > "Instalar aplicativo"

## ⚙️ Configuração

1. Configure a URL da API backend no campo "URL da API Backend"
2. Opcionalmente, configure uma API Key se o backend requer autenticação
3. As configurações são salvas automaticamente no navegador

## 🔧 Como Usar

1. **Configure a API**: Insira a URL do backend PythonAnywhere
2. **Insira a URL**: Cole a URL do site que deseja baixar
3. **Nome da Pasta**: Defina o nome da pasta para organizar os arquivos
4. **Execute**: Clique em "Executar Scraper Real"
5. **Acompanhe**: Veja o progresso em tempo real
6. **Baixe**: Clique em "Baixar ZIP" quando concluído

## 🌐 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

### Configuração de Secrets

Para configurar automaticamente a URL da API, adicione os seguintes secrets no repositório:

- `API_BASE_URL`: URL da API backend (ex: https://seuusuario.pythonanywhere.com/api/scraper)
- `API_KEY`: Chave de API (opcional, se implementada no backend)

### Deploy Manual

1. Faça push dos arquivos para o branch `main`
2. Vá em Settings > Pages no repositório
3. Configure Source como "GitHub Actions"
4. O deploy será feito automaticamente

## 📁 Estrutura do Projeto

```
webscraper-frontend/
├── index.html          # Página principal
├── manifest.json       # Manifest da PWA
├── sw.js              # Service Worker
├── README.md          # Documentação
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions
```

## 🔒 Segurança

- Todas as comunicações são feitas via HTTPS
- Configurações sensíveis podem ser gerenciadas via GitHub Secrets
- Service Worker implementa cache seguro
- Validação de entrada no frontend

## 🐛 Solução de Problemas

### Erro de CORS
- Verifique se o backend está configurado com CORS habilitado
- Confirme que a URL da API está correta

### PWA não instala
- Verifique se está acessando via HTTPS
- Confirme que o manifest.json está acessível
- Verifique se o Service Worker está registrado

### Scraping falha
- Verifique se a URL do site é válida
- Confirme que o backend está funcionando
- Alguns sites podem bloquear scraping

## 📞 Suporte

Para problemas ou dúvidas:
1. Verifique os logs no console do navegador (F12)
2. Teste a API backend diretamente
3. Verifique a configuração do CORS

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

