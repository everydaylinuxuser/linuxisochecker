class SiteMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: relative;
                    display: inline-flex;
                    flex: 0 0 auto;
                    vertical-align: middle;
                    font-family: inherit;
                }

                button {
                    display: grid;
                    width: 2.75rem;
                    height: 2.75rem;
                    align-content: center;
                    justify-items: center;
                    gap: 0.3rem;
                    padding: 0;
                    border: 1px solid #334155;
                    border-radius: 0.5rem;
                    background: #0f172a;
                    color: #e2e8f0;
                    cursor: pointer;
                }

                button:hover,
                button:focus-visible {
                    border-color: #34d399;
                    outline: 2px solid #34d399;
                    outline-offset: 2px;
                }

                button span {
                    width: 1.1rem;
                    height: 2px;
                    border-radius: 2px;
                    background: currentColor;
                    transition: transform 150ms ease, opacity 150ms ease;
                }

                button[aria-expanded="true"] span:first-child {
                    transform: translateY(0.4rem) rotate(45deg);
                }

                button[aria-expanded="true"] span:nth-child(2) {
                    opacity: 0;
                }

                button[aria-expanded="true"] span:last-child {
                    transform: translateY(-0.4rem) rotate(-45deg);
                }

                nav[hidden] {
                    display: none;
                }

                nav {
                    position: absolute;
                    z-index: 100;
                    top: calc(100% + 0.5rem);
                    right: 0;
                    display: grid;
                    width: min(17rem, calc(100vw - 2rem));
                    padding: 0.4rem;
                    box-sizing: border-box;
                    border: 1px solid #334155;
                    border-radius: 0.5rem;
                    background: #0f172a;
                    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
                }

                @media (max-width: 40rem) {
                    nav {
                        position: fixed;
                        top: auto;
                        right: max(1rem, env(safe-area-inset-right));
                        left: auto;
                        max-height: calc(100vh - 2rem);
                        max-height: calc(100dvh - 2rem);
                        overflow-y: auto;
                        overscroll-behavior: contain;
                    }
                }

                nav a {
                    display: block;
                    padding: 0.7rem 0.8rem;
                    border-radius: 0.3rem;
                    color: #e2e8f0;
                    font-size: 0.9rem;
                    font-weight: 500;
                    line-height: 1.35;
                    text-decoration: none;
                }

                nav a:hover,
                nav a:focus-visible,
                nav a[aria-current="page"] {
                    background: rgba(16, 185, 129, 0.12);
                    color: #6ee7b7;
                    outline: none;
                }

                @media (prefers-reduced-motion: reduce) {
                    button span {
                        transition: none;
                    }
                }
            </style>
            <button type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-navigation">
                <span></span><span></span><span></span>
            </button>
            <nav id="site-navigation" aria-label="Main navigation" hidden>
                <a href="index.html">ISO Checker</a>
                <a href="about.html">About</a>
                <a href="testedwith.html">Tested With</a>
                <a href="verify-iso.html">Why Verify an ISO?</a>
                <a href="verifycachy.html">How to verify a Cachy OS Download</a>
                <a href="verifyfedora.html">How to verify a Fedora Linux Download</a>
                <a href="verifylinuxmint.html">How to verify a Linux Mint Download</a>
                <a href="verifymxlinux.html">How to verify an MX Linux Download</a>
                <a href="verifypopos.html">How to verify a Pop!_OS Download</a>
                <a href="verifyzorinos.html">How to verify a Zorin OS Download</a>
                <a href="contact.html">Contact</a>
                <a href="privacy-policy.html">Privacy Policy</a>
                <a href="terms.html">Terms of Service</a>
            </nav>
        `;

        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    connectedCallback() {
        this.button = this.shadowRoot.querySelector("button");
        this.navigation = this.shadowRoot.querySelector("nav");
        this.button.addEventListener("click", () => this.setOpen(this.navigation.hidden));
        this.shadowRoot.addEventListener("keydown", this.onKeyDown);
        document.addEventListener("click", this.onDocumentClick);

        const currentPage = location.pathname.split("/").pop() || "index.html";
        for (const link of this.navigation.querySelectorAll("a")) {
            if (link.getAttribute("href") === currentPage) {
                link.setAttribute("aria-current", "page");
            }
        }
    }

    disconnectedCallback() {
        this.shadowRoot.removeEventListener("keydown", this.onKeyDown);
        document.removeEventListener("click", this.onDocumentClick);
    }

    setOpen(open) {
        this.navigation.hidden = !open;
        this.button.setAttribute("aria-expanded", String(open));
        this.button.setAttribute("aria-label", `${open ? "Close" : "Open"} navigation menu`);

        if (open && matchMedia("(max-width: 40rem)").matches) {
            const trigger = this.button.getBoundingClientRect();
            const menuHeight = this.navigation.getBoundingClientRect().height;
            const top = trigger.bottom + menuHeight + 16 <= window.innerHeight
                ? trigger.bottom + 8
                : Math.max(8, trigger.top - menuHeight - 8);
            this.navigation.style.top = `${top}px`;
        } else {
            this.navigation.style.removeProperty("top");
        }
    }

    onDocumentClick(event) {
        if (!event.composedPath().includes(this)) {
            this.setOpen(false);
        }
    }

    onKeyDown(event) {
        if (event.key === "Escape" && !this.navigation.hidden) {
            this.setOpen(false);
            this.button.focus();
        }
    }
}

customElements.define("site-menu", SiteMenu);