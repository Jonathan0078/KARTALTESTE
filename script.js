// Base de dados de produtos
let produtos = [
    // Apple iPhone
    { id: 1, marca: 'APPLE', nome: 'IPHONE 5S SE', preco: 50.00, categoria: 'iPhone' },
    { id: 2, marca: 'APPLE', nome: 'IPHONE 5S SE BRANCO', preco: 50.00, categoria: 'iPhone' },
    { id: 3, marca: 'APPLE', nome: 'IPHONE 6G', preco: 60.00, categoria: 'iPhone' },
    { id: 4, marca: 'APPLE', nome: 'IPHONE 6G BRANCO', preco: 54.00, categoria: 'iPhone' },
    { id: 5, marca: 'APPLE', nome: 'IPHONE 6G PLUS', preco: 65.00, categoria: 'iPhone' },
    { id: 6, marca: 'APPLE', nome: 'IPHONE 6G PLUS BRANCO', preco: 65.00, categoria: 'iPhone' },
    { id: 7, marca: 'APPLE', nome: 'IPHONE 6S', preco: 60.00, categoria: 'iPhone' },
    { id: 8, marca: 'APPLE', nome: 'IPHONE 6S BRANCO', preco: 60.00, categoria: 'iPhone' },
    { id: 9, marca: 'APPLE', nome: 'IPHONE 6S PLUS', preco: 65.00, categoria: 'iPhone' },
    { id: 10, marca: 'APPLE', nome: 'IPHONE 6S PLUS BRANCO', preco: 65.00, categoria: 'iPhone' },
    { id: 11, marca: 'APPLE', nome: 'IPHONE 7G', preco: 65.00, categoria: 'iPhone' },
    { id: 12, marca: 'APPLE', nome: 'IPHONE 7G BRANCO', preco: 60.00, categoria: 'iPhone' },
    { id: 13, marca: 'APPLE', nome: 'IPHONE 7G GOLD EDITION', preco: 95.00, categoria: 'iPhone' },
    { id: 14, marca: 'APPLE', nome: 'IPHONE 7G GOLD EDITION BRANCO', preco: 70.00, categoria: 'iPhone' },
    { id: 15, marca: 'APPLE', nome: 'IPHONE 7G PLUS', preco: 65.00, categoria: 'iPhone' },
    { id: 16, marca: 'APPLE', nome: 'IPHONE 8G / SE 2020', preco: 62.00, categoria: 'iPhone' },
    { id: 17, marca: 'APPLE', nome: 'IPHONE 8G / SE 2020 BRANCO', preco: 60.00, categoria: 'iPhone' },
    { id: 18, marca: 'APPLE', nome: 'IPHONE X OLED', preco: 209.00, categoria: 'iPhone' },
    { id: 19, marca: 'APPLE', nome: 'IPHONE XR GOLD EDITION', preco: 185.00, categoria: 'iPhone' },
    { id: 20, marca: 'APPLE', nome: 'IPHONE XS GOLD EDITION', preco: 225.00, categoria: 'iPhone' },
    { id: 21, marca: 'APPLE', nome: 'IPHONE 11 GOLD EDITION', preco: 180.00, categoria: 'iPhone' },
    { id: 22, marca: 'APPLE', nome: 'IPHONE 11 PRO GOLD EDITION', preco: 290.00, categoria: 'iPhone' },
    { id: 23, marca: 'APPLE', nome: 'IPHONE 12 / 12 PRO GOLD EDITION', preco: 365.00, categoria: 'iPhone' },
    { id: 24, marca: 'APPLE', nome: 'IPHONE 12 PRO MAX GOLD EDITION', preco: 640.00, categoria: 'iPhone' },
    { id: 25, marca: 'APPLE', nome: 'IPHONE 13 GOLD EDITION', preco: 370.00, categoria: 'iPhone' },
    { id: 26, marca: 'APPLE', nome: 'IPHONE 13 PRO MAX OLED', preco: 492.00, categoria: 'iPhone' },
    { id: 27, marca: 'APPLE', nome: 'IPHONE 14 OLED', preco: 350.00, categoria: 'iPhone' },
    { id: 28, marca: 'APPLE', nome: 'IPHONE 15 OLED', preco: 665.00, categoria: 'iPhone' },

    // Samsung
    { id: 29, marca: 'SAMSUNG', nome: 'A01 A015 M C/ ARO', preco: 62.00, categoria: 'Galaxy A' },
    { id: 30, marca: 'SAMSUNG', nome: 'A01 CORE A013 C/ ARO', preco: 70.00, categoria: 'Galaxy A' },
    { id: 31, marca: 'SAMSUNG', nome: 'A02 A022 / A12 A125 / A32 5G S/ ARO', preco: 60.00, categoria: 'Galaxy A' },
    { id: 32, marca: 'SAMSUNG', nome: 'A03 C/ ARO', preco: 76.00, categoria: 'Galaxy A' },
    { id: 33, marca: 'SAMSUNG', nome: 'A04 S/ ARO', preco: 60.00, categoria: 'Galaxy A' },
    { id: 34, marca: 'SAMSUNG', nome: 'A05 A055 4G C/ ARO', preco: 82.00, categoria: 'Galaxy A' },
    { id: 35, marca: 'SAMSUNG', nome: 'A06 C/ ARO', preco: 87.00, categoria: 'Galaxy A' },
    { id: 36, marca: 'SAMSUNG', nome: 'A10 A105 / M10 M105 C/ ARO', preco: 66.00, categoria: 'Galaxy A' },
    { id: 37, marca: 'SAMSUNG', nome: 'A11 A115 C/ ARO', preco: 80.00, categoria: 'Galaxy A' },
    { id: 38, marca: 'SAMSUNG', nome: 'A12 C/ ARO', preco: 72.00, categoria: 'Galaxy A' },
    { id: 39, marca: 'SAMSUNG', nome: 'A13 4G A135 C/ ARO', preco: 72.00, categoria: 'Galaxy A' },
    { id: 40, marca: 'SAMSUNG', nome: 'A14 5G C/ ARO', preco: 85.00, categoria: 'Galaxy A' },
    { id: 41, marca: 'SAMSUNG', nome: 'A15 C/ ARO OLED', preco: 222.00, categoria: 'Galaxy A' },
    { id: 42, marca: 'SAMSUNG', nome: 'A16 C/ ARO OLED', preco: 262.00, categoria: 'Galaxy A' },
    { id: 43, marca: 'SAMSUNG', nome: 'A20 A205 C/ ARO OLED', preco: 170.00, categoria: 'Galaxy A' },
    { id: 44, marca: 'SAMSUNG', nome: 'A22 5G C/ ARO', preco: 95.00, categoria: 'Galaxy A' },
    { id: 45, marca: 'SAMSUNG', nome: 'A23 4G C/ ARO', preco: 84.00, categoria: 'Galaxy A' },
    { id: 46, marca: 'SAMSUNG', nome: 'A50 / A30 C/ ARO OLED', preco: 175.00, categoria: 'Galaxy A' },
    { id: 47, marca: 'SAMSUNG', nome: 'A51 A515 C/ ARO OLED', preco: 189.00, categoria: 'Galaxy A' },
    { id: 48, marca: 'SAMSUNG', nome: 'S20 C/ ARO OLED', preco: 800.00, categoria: 'Galaxy S' },
    { id: 49, marca: 'SAMSUNG', nome: 'S20 FE C/ ARO OLED', preco: 254.00, categoria: 'Galaxy S' },
    { id: 50, marca: 'SAMSUNG', nome: 'S21 C/ ARO OLED', preco: 755.00, categoria: 'Galaxy S' },
    { id: 51, marca: 'SAMSUNG', nome: 'S22 C/ARO OLED', preco: 1130.00, categoria: 'Galaxy S' },
    { id: 52, marca: 'SAMSUNG', nome: 'S23 C/ ARO NACIONAL', preco: 1105.00, categoria: 'Galaxy S' },

    // Xiaomi
    { id: 53, marca: 'XIAOMI', nome: 'REDMI 9 C/ ARO', preco: 85.00, categoria: 'Redmi' },
    { id: 54, marca: 'XIAOMI', nome: 'REDMI 10 C/ ARO', preco: 95.00, categoria: 'Redmi' },
    { id: 55, marca: 'XIAOMI', nome: 'REDMI 10C / C40 C/ ARO', preco: 95.00, categoria: 'Redmi' },
    { id: 56, marca: 'XIAOMI', nome: 'REDMI 12C C/ ARO', preco: 87.00, categoria: 'Redmi' },
    { id: 57, marca: 'XIAOMI', nome: 'REDMI 13C C/ ARO', preco: 80.00, categoria: 'Redmi' },
    { id: 58, marca: 'XIAOMI', nome: 'REDMI 14C C/ ARO', preco: 102.00, categoria: 'Redmi' },
    { id: 59, marca: 'XIAOMI', nome: 'REDMI A3 C/ ARO OLED', preco: 255.00, categoria: 'Redmi' },
    { id: 60, marca: 'XIAOMI', nome: 'NOTE 8 C/ ARO', preco: 90.00, categoria: 'Redmi Note' },
    { id: 61, marca: 'XIAOMI', nome: 'NOTE 10 4G C/ ARO OLED', preco: 220.00, categoria: 'Redmi Note' },
    { id: 62, marca: 'XIAOMI', nome: 'NOTE 11 4G C/ ARO OLED', preco: 225.00, categoria: 'Redmi Note' },
    { id: 63, marca: 'XIAOMI', nome: 'NOTE 12 4G / POCO X5 C/ARO OLED', preco: 242.00, categoria: 'Redmi Note' },
    { id: 64, marca: 'XIAOMI', nome: 'NOTE 13 4G C/ ARO OLED', preco: 265.00, categoria: 'Redmi Note' },
    { id: 65, marca: 'XIAOMI', nome: 'MI 9 S/ ARO OLED', preco: 185.00, categoria: 'Mi' },
    { id: 66, marca: 'XIAOMI', nome: 'MI 10 LITE S/ ARO OLED', preco: 230.00, categoria: 'Mi' },
    { id: 67, marca: 'XIAOMI', nome: 'MI 11 LITE S/ ARO OLED', preco: 302.00, categoria: 'Mi' },
    { id: 68, marca: 'XIAOMI', nome: 'POCO X7 PRO C/ ARO WEFIX', preco: 335.00, categoria: 'Poco' },

    // Motorola
    { id: 69, marca: 'MOTOROLA', nome: 'MOTO G5', preco: 75.00, categoria: 'Moto G' },
    { id: 70, marca: 'MOTOROLA', nome: 'MOTO G5 PLUS', preco: 75.00, categoria: 'Moto G' },
    { id: 71, marca: 'MOTOROLA', nome: 'MOTO G6 PLAY / E5', preco: 60.00, categoria: 'Moto G' },
    { id: 72, marca: 'MOTOROLA', nome: 'MOTO G7 / G7 PLUS S/ ARO', preco: 75.00, categoria: 'Moto G' },
    { id: 73, marca: 'MOTOROLA', nome: 'MOTO G8 C/ ARO', preco: 85.00, categoria: 'Moto G' },
    { id: 74, marca: 'MOTOROLA', nome: 'MOTO G9 PLAY C/ ARO', preco: 75.00, categoria: 'Moto G' },
    { id: 75, marca: 'MOTOROLA', nome: 'MOTO G10 / G30 C/ ARO', preco: 75.00, categoria: 'Moto G' },
    { id: 76, marca: 'MOTOROLA', nome: 'MOTO G13 / G23 C/ ARO', preco: 82.00, categoria: 'Moto G' },
    { id: 77, marca: 'MOTOROLA', nome: 'MOTO G14 / G54 / G55 / G64 S/ ARO', preco: 75.00, categoria: 'Moto G' },
    { id: 78, marca: 'MOTOROLA', nome: 'MOTO G20 C/ ARO', preco: 72.00, categoria: 'Moto G' },
    { id: 79, marca: 'MOTOROLA', nome: 'MOTO E13 C/ ARO', preco: 77.00, categoria: 'Moto E' },
    { id: 80, marca: 'MOTOROLA', nome: 'MOTO E20 C/ ARO', preco: 75.00, categoria: 'Moto E' },
    { id: 81, marca: 'MOTOROLA', nome: 'MOTO E22 C/ ARO', preco: 74.00, categoria: 'Moto E' },
    { id: 82, marca: 'MOTOROLA', nome: 'MOTO EDGE 20 C/ ARO NACIONAL', preco: 455.00, categoria: 'Moto Edge' },
    { id: 83, marca: 'MOTOROLA', nome: 'MOTO EDGE 30 C/ ARO NACIONAL', preco: 420.00, categoria: 'Moto Edge' },

    // Infinix
    { id: 84, marca: 'INFINIX', nome: 'HOT 10 LITE / SMART 5 / SPARK 6 GO S/ ARO', preco: 95.00, categoria: 'Hot' },
    { id: 85, marca: 'INFINIX', nome: 'HOT 10S / HOT 10 PLAY / HOT 11 / HOT 11 PLAY S/ ARO', preco: 82.00, categoria: 'Hot' },
    { id: 86, marca: 'INFINIX', nome: 'HOT 20 S/ ARO', preco: 95.00, categoria: 'Hot' },
    { id: 87, marca: 'INFINIX', nome: 'NOTE 10 PRO S/ ARO', preco: 94.00, categoria: 'Note' },

    // Realme
    { id: 88, marca: 'REALME', nome: 'C11 2020 / C12 / C15 S/ARO', preco: 82.00, categoria: 'C Series' },
    { id: 89, marca: 'REALME', nome: 'C3 S/ ARO', preco: 70.00, categoria: 'C Series' },
    { id: 90, marca: 'REALME', nome: 'C30 / C30S / C33 C/ ARO', preco: 95.00, categoria: 'C Series' },
    { id: 91, marca: 'REALME', nome: 'C51 / C53 / C36 / C60 / NOTE 50 S/ ARO', preco: 70.00, categoria: 'C Series' },

    // LG
    { id: 92, marca: 'LG', nome: 'K4 2017 C/ ARO', preco: 80.00, categoria: 'K Series' },
    { id: 93, marca: 'LG', nome: 'K10 2016 K430 COM TV', preco: 75.00, categoria: 'K Series' },
    { id: 94, marca: 'LG', nome: 'K12 / K12 PLUS / K40 C/ ARO', preco: 75.00, categoria: 'K Series' },
];

// Categorias de Acessórios
const acessoriosCategories = [
    { id: 'baterias', nome: 'Baterias', icon: 'fa-battery-full', cor: '#e74c3c' },
    { id: 'flex', nome: 'Flex', icon: 'fa-random', cor: '#9b59b6' },
    { id: 'tampas', nome: 'Tampas', icon: 'fa-shield', cor: '#3498db' },
    { id: 'lentes', nome: 'Lentes e Câmeras', icon: 'fa-camera', cor: '#f39c12' },
    { id: 'conectores', nome: 'Conectores', icon: 'fa-plug', cor: '#1abc9c' },
    { id: 'altofalan', nome: 'Alto Falantes', icon: 'fa-volume-up', cor: '#e67e22' },
    { id: 'gavetas', nome: 'Gavetas de Chip', icon: 'fa-microchip', cor: '#34495e' },
    { id: 'cabos', nome: 'Cabos e Carregadores', icon: 'fa-charging-station', cor: '#27ae60' },
    { id: 'peliculas', nome: 'Películas', icon: 'fa-film', cor: '#c0392b' },
    { id: 'ferramentas', nome: 'Ferramentas', icon: 'fa-wrench', cor: '#2980b9' }
];

// Produtos de Acessórios (exemplos)
let acessorios = [
    { id: 95, categoria_acessorio: 'baterias', nome: 'Bateria Samsung A10/A20', preco: 45.00 },
    { id: 96, categoria_acessorio: 'baterias', nome: 'Bateria iPhone 11', preco: 65.00 },
    { id: 97, categoria_acessorio: 'flex', nome: 'Flex Câmera Samsung A12', preco: 35.00 },
    { id: 98, categoria_acessorio: 'tampas', nome: 'Tampa Traseira Samsung S21', preco: 55.00 },
    { id: 99, categoria_acessorio: 'lentes', nome: 'Lente Câmera iPhone 13', preco: 85.00 },
    { id: 100, categoria_acessorio: 'conectores', nome: 'Conector de Carga iPhone', preco: 30.00 },
    { id: 101, categoria_acessorio: 'altofalan', nome: 'Alto Falante Samsung A51', preco: 40.00 },
    { id: 102, categoria_acessorio: 'gavetas', nome: 'Gaveta de Chip Xiaomi', preco: 25.00 },
    { id: 103, categoria_acessorio: 'cabos', nome: 'Cabo USB-C Carregador Rápido', preco: 35.00 },
    { id: 104, categoria_acessorio: 'peliculas', nome: 'Película Vidro Temperado (10 un)', preco: 50.00 },
    { id: 105, categoria_acessorio: 'ferramentas', nome: 'Kit Ferramentas Reparo Celular', preco: 95.00 }
];

// Logos das marcas
const logosMarcas = {
    'APPLE': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png',
    'SAMSUNG': 'https://www.samsung.com/etc/designs/samsung/logo.png',
    'XIAOMI': 'https://www.mi.com/favicon.ico',
    'MOTOROLA': 'https://www.motorola.com/favicon.ico',
    'LG': 'https://www.lg.com/favicon.ico',
    'INFINIX': 'https://www.infinixmobility.com/favicon.ico',
    'REALME': 'https://www.realme.com/favicon.ico'
};

// Carrinho
let carrinho = [];

// Função para renderizar produtos
function renderizarProdutos(listaProdutos = produtos) {
    const grid = document.getElementById('produtosGrid');
    grid.innerHTML = '';

    if (listaProdutos.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">Nenhum produto encontrado</p>';
        return;
    }

    listaProdutos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        if (produto.marca === 'SAMSUNG') {
            card.classList.add('samsung-card');
        }
        const logoUrl = logosMarcas[produto.marca];
        const imagemHTML = logoUrl ? 
            `<img src="${logoUrl}" alt="${produto.marca}" style="max-width: 80%; max-height: 80%; object-fit: contain; filter: brightness(0.9) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));">` :
            `<i class="fas fa-mobile-alt"></i>`;
        
        card.innerHTML = `
            <div class="produto-imagem">
                ${imagemHTML}
            </div>
            <div class="produto-info">
                <span class="produto-marca">${produto.marca}</span>
                <h3 class="produto-nome">${produto.nome}</h3>
                <p class="produto-descricao">Display LCD Premium</p>
                <div class="produto-preco">${formatarPreco(produto.preco)}</div>
                <div class="produto-quantidade">
                    <button class="quantidade-btn" onclick="alterarQuantidade(${produto.id}, -1)">−</button>
                    <input type="number" class="quantidade-input" id="qty-${produto.id}" value="1" min="1">
                    <button class="quantidade-btn" onclick="alterarQuantidade(${produto.id}, 1)">+</button>
                </div>
                <button class="produto-btn" onclick="adicionarAoCarrinho(${produto.id})">
                    <i class="fas fa-shopping-cart"></i> Adicionar
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Função para alterar quantidade
function alterarQuantidade(produtoId, delta) {
    const input = document.getElementById(`qty-${produtoId}`);
    let valor = parseInt(input.value) + delta;
    if (valor < 1) valor = 1;
    input.value = valor;
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const quantidade = parseInt(document.getElementById(`qty-${produtoId}`).value);

    if (!produto) return;

    // Verificar se o produto já está no carrinho
    const itemCarrinho = carrinho.find(item => item.id === produtoId);
    
    if (itemCarrinho) {
        itemCarrinho.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produtoId,
            nome: produto.nome,
            marca: produto.marca,
            preco: produto.preco,
            quantidade: quantidade
        });
    }

    // Resetar quantidade
    document.getElementById(`qty-${produtoId}`).value = 1;

    // Atualizar carrinho
    atualizarCarrinho();
    
    // Mostrar mensagem de sucesso
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cartTotal');

    // Atualizar contador
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    cartCount.textContent = totalItens;

    // Atualizar lista de itens
    if (carrinho.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Carrinho vazio</p>';
        cartTotal.textContent = 'R$ 0,00';
        return;
    }

    cartItems.innerHTML = carrinho.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-price">${formatarPreco(item.preco)} × ${item.quantidade}</div>
                <div class="cart-item-qty">Subtotal: ${formatarPreco(item.preco * item.quantidade)}</div>
            </div>
            <button class="cart-item-remove" onclick="removerDoCarrinho(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Calcular total
    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    cartTotal.textContent = formatarPreco(total);
}

// Função para remover do carrinho
function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

// Função para limpar carrinho
function clearCart() {
    if (carrinho.length === 0) {
        mostrarNotificacao('Carrinho já está vazio!');
        return;
    }
    
    if (confirm('Tem certeza que deseja limpar o carrinho?')) {
        carrinho = [];
        atualizarCarrinho();
        mostrarNotificacao('Carrinho limpo com sucesso!');
    }
}

// Função para checkout
function checkout() {
    if (carrinho.length === 0) {
        mostrarNotificacao('Seu carrinho está vazio!', 'aviso');
        return;
    }

    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    
    // Montar a mensagem para WhatsApp
    let mensagem = `KARTAL DISTRIBUIDORA - NOVO PEDIDO\n\n`;
    mensagem += `Itens do Pedido:\n`;
    
    carrinho.forEach(item => {
        mensagem += `• ${item.nome}\n`;
        mensagem += `  Quantidade: ${item.quantidade}x\n`;
        mensagem += `  Subtotal: ${formatarPreco(item.preco * item.quantidade)}\n\n`;
    });
    
    mensagem += `TOTAL: ${formatarPreco(total)}\n\n`;
    mensagem += `Por favor, confirme este pedido.`;

    // Codificar a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Link do WhatsApp
    const numeroWhatsapp = '5551996706619';
    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;
    
    // Redirecionar para WhatsApp
    mostrarNotificacao('Redirecionando para WhatsApp...', 'sucesso');
    setTimeout(() => {
        window.open(linkWhatsapp, '_blank');
        carrinho = [];
        atualizarCarrinho();
        toggleCart();
    }, 500);
}

// Função para alternar carrinho
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Função para filtrar por marca
function filterByBrand(marca) {
    // Atualizar botões de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filtrar e renderizar
    if (marca === 'todos') {
        renderizarProdutos(produtos);
    } else {
        const filtrados = produtos.filter(p => p.marca === marca);
        renderizarProdutos(filtrados);
    }
}

// Função para pesquisar produtos
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm === '') {
        renderizarProdutos(produtos);
        return;
    }

    const filtrados = produtos.filter(p => 
        p.nome.toLowerCase().includes(searchTerm) ||
        p.marca.toLowerCase().includes(searchTerm) ||
        p.categoria.toLowerCase().includes(searchTerm)
    );

    renderizarProdutos(filtrados);
}

// Função para formatar preço
function formatarPreco(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

// Função para mostrar notificação
function mostrarNotificacao(mensagem, tipo = 'info') {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${tipo === 'sucesso' ? '#27ae60' : tipo === 'aviso' ? '#f39c12' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    notif.textContent = mensagem;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// Função para alternar entre abas (Displays e Acessórios)
function switchTab(tab) {
    // Atualizar botões de abas
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    event.target.closest('.tab-btn').classList.add('active');

    // Mostrar/ocultar seções
    const filtrosDisplays = document.getElementById('filtrosDisplays');
    const acessoriosShowcase = document.getElementById('acessoriosShowcase');
    const produtosSection = document.getElementById('produtosSection');

    if (tab === 'displays') {
        filtrosDisplays.style.display = 'block';
        acessoriosShowcase.style.display = 'none';
        produtosSection.style.display = 'block';
        renderizarProdutos();
    } else if (tab === 'acessorios') {
        filtrosDisplays.style.display = 'none';
        acessoriosShowcase.style.display = 'block';
        produtosSection.style.display = 'block';
        renderizarAcessorios();
    }
}

// Função para renderizar categorias de acessórios
function renderizarAcessorios() {
    const grid = document.getElementById('acessoriosGrid');
    grid.innerHTML = '';

    acessoriosCategories.forEach(categoria => {
        const acessoriosNaCategoria = acessorios.filter(a => a.categoria_acessorio === categoria.id);
        const card = document.createElement('div');
        card.className = 'acessorio-categoria-card';
        card.style.borderTopColor = categoria.cor;
        
        card.innerHTML = `
            <div class="acessorio-icon" style="color: ${categoria.cor};">
                <i class="fas ${categoria.icon}"></i>
            </div>
            <h3>${categoria.nome}</h3>
            <p class="acessorio-count">${acessoriosNaCategoria.length} produto(s)</p>
            <button class="acessorio-btn" onclick="filtrarAcessorioPorCategoria('${categoria.id}')">
                Ver Produtos
            </button>
        `;
        grid.appendChild(card);
    });
}

// Função para filtrar acessórios por categoria
function filtrarAcessorioPorCategoria(categoriaId) {
    const grid = document.getElementById('produtosGrid');
    const acessoriosFiltrados = acessorios.filter(a => a.categoria_acessorio === categoriaId);
    
    // Encontrar a categoria para obter informações
    const categoria = acessoriosCategories.find(c => c.id === categoriaId);
    
    grid.innerHTML = '';
    
    if (acessoriosFiltrados.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">Nenhum produto encontrado nesta categoria</p>';
        return;
    }

    acessoriosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card acessorio-card';
        
        card.innerHTML = `
            <div class="produto-imagem" style="background: linear-gradient(135deg, ${categoria.cor}, ${categoria.cor}dd);">
                <i class="fas ${categoria.icon}" style="font-size: 3em; color: white;"></i>
            </div>
            <div class="produto-info">
                <span class="produto-marca" style="color: ${categoria.cor};">${categoria.nome}</span>
                <h3 class="produto-nome">${produto.nome}</h3>
                <p class="produto-descricao">Qualidade Premium</p>
                <div class="produto-preco">${formatarPreco(produto.preco)}</div>
                <div class="produto-quantidade">
                    <button class="quantidade-btn" onclick="alterarQuantidade(${produto.id}, -1)">−</button>
                    <input type="number" class="quantidade-input" id="qty-${produto.id}" value="1" min="1">
                    <button class="quantidade-btn" onclick="alterarQuantidade(${produto.id}, 1)">+</button>
                </div>
                <button class="produto-btn" onclick="adicionarAcessorioAoCarrinho(${produto.id})">
                    <i class="fas fa-shopping-cart"></i> Adicionar
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Função para adicionar acessório ao carrinho
function adicionarAcessorioAoCarrinho(produtoId) {
    const produto = acessorios.find(p => p.id === produtoId);
    const quantidade = parseInt(document.getElementById(`qty-${produtoId}`).value);

    if (!produto) return;

    const itemCarrinho = carrinho.find(item => item.id === produtoId);
    
    if (itemCarrinho) {
        itemCarrinho.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produtoId,
            nome: produto.nome,
            marca: 'ACESSÓRIO',
            preco: produto.preco,
            quantidade: quantidade
        });
    }

    document.getElementById(`qty-${produtoId}`).value = 1;
    atualizarCarrinho();
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
}

// Animações CSS para notificações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    renderizarAcessorios();
});

// Permitir Enter para pesquisar
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') filterProducts();
        });
    }

    // Scroll handler para hide/show do header completo (com valores, pesquisa e tabs)
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const tabsSection = document.querySelector('.tabs-section');
    const bodyElement = document.body;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 100) {
            // Rolar para baixo - esconde header e tabs
            if (currentScroll > lastScrollTop) {
                header.classList.add('hide');
                tabsSection.classList.add('hide');
                bodyElement.classList.add('header-hidden');
            }
            // Rolar para cima - mostra header e tabs
            else {
                header.classList.remove('hide');
                tabsSection.classList.remove('hide');
                bodyElement.classList.remove('header-hidden');
            }
        } else {
            // Topo da página - sempre mostra
            header.classList.remove('hide');
            tabsSection.classList.remove('hide');
            bodyElement.classList.remove('header-hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para Safari
    }, false);
});
