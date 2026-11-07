# Free Online Tools Widgets

Embed free, useful tools on any website or blog with **one line of code** – word counter, QR code generator, password generator, calculators, PDF tools and more.

Powered by **[PDF SEO Tools](https://pdfseotools.com)** – 150+ free online tools, no sign-up, available in 16 languages.

- ✅ Free for personal and commercial sites
- ✅ No sign-up, no API key
- ✅ No ads inside the widget
- ✅ Responsive – works on phones and desktops
- ✅ Works on Blogger, WordPress, Wix, Webflow, plain HTML

👉 **Browse all widgets and copy the code:** https://pdfseotools.com/widgets

---

## Quick start

Paste this where you want the tool to appear:

```html
<iframe src="https://pdfseotools.com/word-counter?embed=1"
        title="Word Counter – PDF SEO Tools"
        loading="lazy"
        style="width:100%;height:620px;border:2px solid #e2e8f0;border-radius:10px"></iframe>
<p style="text-align:right;font-size:12px;margin:4px 0">Powered by <a href="https://pdfseotools.com/word-counter" target="_blank" rel="nofollow">PDF SEO Tools</a></p>
```

Change `word-counter` to any tool from the list below. Change `height` and the border colour in `style` to match your site.

### Option 2 – the small loader script

```html
<div class="pst-widget" data-tool="qr-code-generator" data-height="640" data-border="#2563eb"></div>
<script src="https://cdn.jsdelivr.net/gh/YOUR-USERNAME/free-online-tools-widgets@main/widget.js" defer></script>
```

You can place several `<div class="pst-widget">` boxes on one page; the script loads once.

| Attribute | Default | Meaning |
|---|---|---|
| `data-tool` | `word-counter` | tool name from the list below |
| `data-height` | `620` | height in pixels |
| `data-border` | `#e2e8f0` | border colour |

---

## Available widgets

| Tool | `data-tool` / URL | Good for |
|---|---|---|
| [Word Counter](https://pdfseotools.com/word-counter) | `word-counter` | writing, education blogs |
| [Case Converter](https://pdfseotools.com/case-converter) | `case-converter` | writers, students |
| [Password Generator](https://pdfseotools.com/password-generator) | `password-generator` | tech & security blogs |
| [QR Code Generator](https://pdfseotools.com/qr-code-generator) | `qr-code-generator` | business, marketing |
| [Age Calculator](https://pdfseotools.com/age-calculator) | `age-calculator` | general, forms |
| [Percentage Calculator](https://pdfseotools.com/percentage-calculator) | `percentage-calculator` | maths, education |
| [Discount Calculator](https://pdfseotools.com/discount-calculator) | `discount-calculator` | shopping, deals blogs |
| [Reverse Text Generator](https://pdfseotools.com/reverse-text-generator) | `reverse-text-generator` | fun, social media |
| [Lorem Ipsum Generator](https://pdfseotools.com/lorem-ipsum-generator) | `lorem-ipsum-generator` | design, web dev |
| [MD5 Generator](https://pdfseotools.com/md5-generator) | `md5-generator` | developers |
| [UUID Generator](https://pdfseotools.com/uuid-generator) | `uuid-generator` | developers |
| [JSON Formatter](https://pdfseotools.com/json-formatter) | `json-formatter` | developers |
| [Image Compressor](https://pdfseotools.com/image-compressor) | `image-compressor` | photography, web |
| [Merge PDF](https://pdfseotools.com/merge-pdf) | `merge-pdf` | office, education |
| [Facebook Video Downloader](https://pdfseotools.com/facebook-video-downloader) | `facebook-video-downloader` | social media |

More tools: https://pdfseotools.com

---

## How to add a widget

**Blogger:** open a post → switch to **HTML view** → paste the code → Publish.

**WordPress:** add a **Custom HTML** block → paste the code → Update.

**Wix / Webflow / Squarespace:** use the **Embed code / HTML** element → paste the code.

See a live demo in [`examples/index.html`](examples/index.html).

---

## FAQ

**Is it really free?** Yes. The widgets are free on personal and business sites.

**Will ads show on my site?** No. Embedded widgets show only the tool and a small “Powered by PDF SEO Tools” credit.

**Is my visitors’ data stored?** Files processed by the tools are deleted automatically. See the [privacy policy](https://pdfseotools.com).

**Can I request a new widget?** Open an issue in this repository.

---

## License

The code in this repository (README examples and `widget.js`) is released under the [MIT License](LICENSE). The tools themselves are a free service of [pdfseotools.com](https://pdfseotools.com).
