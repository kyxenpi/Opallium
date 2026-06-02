<div align="center">

<img src="https://raw.githubusercontent.com/kyxenpi/Opallium/main/logo.png" alt="Opallium Logo" width="80" style="margin-bottom: 10px;"/>

# OPALLIUM
### *Script Core • Workspace Minimalista • IDE CSS Viva*

[![Licença](https://img.shields.io/github/license/kyxenpi/Opallium?color=000000&labelColor=0b0b0b&style=for-the-badge)](LICENSE)
[![Versão](https://img.shields.io/github/v/release/kyxenpi/Opallium?color=000000&labelColor=0b0b0b&style=for-the-badge)](https://github.com/)

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-arquitetura">Arquitetura</a> •
  <a href="#-configurações">Configurações</a> •
  <a href="#-tecnologias">Tecnologias</a>
</p>

---

**Opallium** é um ecossistema de produtividade em tela cheia projetado sob a filosofia *OLED-Black*. Ele combina um gerenciador pragmático de widgets flutuantes com inércia física a uma IDE CSS embutida e responsiva, permitindo customização de interface em tempo real sem quebras de escopo.

</div>

<br>

## Funcionalidades Core

O sistema foi construído sobre os princípios **DRY** (*Don't Repeat Yourself*) e **Ortogonalidade**, garantindo que cada componente opere de forma isolada e previsível:

* **Fábrica Dinâmica de Widgets (`WidgetFactory`):** Criação e inicialização desacoplada de instâncias exclusivas via `crypto.randomUUID()`.
    * *Notas:* Campo de escrita persistente e reativo.
    * *Relógio:* Renderização de tempo precisa e otimizada por loop.
    * *Contador:* Manipulação de estado simples e direta no DOM.
* **Animação Baseada em Inércia:** Movimentação fluida de janelas utilizando vetores de aproximação suave executados através de `requestAnimationFrame`.
* **IDE CSS Embutida:** Um painel de desenvolvimento lateral completo com:
    * Injeção viva de estilos via escopo global (`userStyles`).
    * Suporte nativo ao `Tab` (indentação de 2 espaços).
    * Auto-fechamento e quebra de linha inteligente para blocos de chaves `{}` e parenteses `()`.
    * Gerenciador de arquivos integrado com o `localStorage`.

---

## O Visual (Design System)

A interface segue uma paleta purista de alto contraste focada em reduzir a fadiga visual e priorizar o conteúdo:

| Elemento | Hex | Aplicação |
| :--- | :--- | :--- |
| `Background` | `#000000` | Fundo absoluto (OLED) |
| `Surface` | `#050505` | Contêiner primário e cartões |
| `Surface 2` | `#0b0b0b` | Inputs, sub-painéis e barras de ação |
| `Border` | `#1a1a1a` | Divisores e bordas padrão |
| `Text` | `#ffffff` | Tipografia principal |

---

## Configurações Avançadas

A central de preferências permite moldar o comportamento do motor gráfico em tempo real, gravando as escolhas instantaneamente no navegador:

> **Estilo do Background:** Alternância dinâmica entre Preto Oled, Cinza Deep e Grafite.
>
> **Sensibilidade do Arraste:** Ajuste fino do multiplicador elástico da física dos widgets (Ultra Suave, Equilibrado ou Instantâneo).
>
> **Cursor Customizado:** Ativação global do ponteiro flutuante acelerado por hardware (`translate3d`) com ocultação forçada do cursor nativo do sistema.
>
> **Grid Snapping:** Trava de grade magnética baseada em múltiplos de `10px` para alinhamento simétrico instantâneo.
