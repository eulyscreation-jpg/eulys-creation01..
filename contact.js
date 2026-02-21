<!DOCTYPE html>
<html lang="en">
<head>
  <title>Contact — Euly's Creation01</title>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">

</head>
<body>

  <div class="topbar">
    <div class="container topbar-inner">
      <div class="left">
        <span>📞 <strong>(876) 892-9581</strong></span>
        <span class="slogan">Expressing yourself through us.</span>
      </div>
      <div class="right">
        <a href="https://www.instagram.com/eulyscreation01" target="_blank" rel="noopener">Instagram: @eulyscreation01</a>
        <a href="https://www.tiktok.com/@eulyscreation01" target="_blank" rel="noopener">TikTok: @eulyscreation01</a>
      </div>
    </div>
  </div>


  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="brand">
        <img src="assets/logo.jpg" alt="Euly's Creation01 logo" class="logo" />
        <div class="brand-text">
          <div class="brand-title">Euly's Creation01</div>
          <div class="brand-sub">Personalized Gifts • Prints • Apparel</div>
        </div>
      </a>
      <nav class="nav">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="shop.html">Shop</a>
        <a href="contact.html">Contact</a>
        <button id="cartButton" class="cart-button" aria-label="Open cart">🛒 <span id="cartCount">0</span></button>
      </nav>
    </div>
  </header>

  <main class="container section">
    <h2>Contact</h2>
    <p>Phone: <strong>(876) 892-9581</strong> • Instagram/TikTok: <strong>@eulyscreation01</strong></p>
    <form id="contactForm" class="form-grid" style="max-width:720px">
      <label>Name<input type="text" name="name" required></label>
      <label>Email<input type="email" name="email" required></label>
      <label>Phone<input type="tel" name="phone"></label>
      <label class="full">Message<textarea name="message" rows="4" required></textarea></label>
      <div class="modal-actions"><button type="submit" class="btn-primary">Email message</button></div>
    </form>
    <div id="contactStatus" class="status" hidden></div>
  </main>
  <footer class="site-footer"><div class="container footer-inner"><small>© <span id="year"></span> Euly's Creation01</small></div></footer>
  <script>document.getElementById('year').textContent=new Date().getFullYear()</script>
  <script src="contact.js"></script>
</body>
</html>