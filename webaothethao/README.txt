GIAHIEUSTORE - Static website (HTML/CSS/JS)
-------------------------------------------

Files generated:
- index.html, products.html, about.html, contact.html
- product_1.html ... product_15.html (product detail pages)
- css/style.css
- js/script.js (handles reviews in localStorage)
- assets/images/*.svg (placeholder images)
- robots.txt, sitemap.xml, json-ld.json

HOW TO USE / EDIT:
1) Open the folder in Visual Studio Code.
2) Install Live Server extension (Ritwick Dey) and open index.html with Live Server to preview.
3) To change a product image: replace the file in assets/images/ and update the <img src="..."> path if needed.
   - Recommended file names: ao-mu.jpg, ao-barca.jpg, etc.
4) To change price, discount, rating: edit the HTML value inside the product card:
   <div class="price">Giá: ₫499,000</div>
   <div class="discount">Giảm giá: 10%</div>
   <div class="rating">Đánh giá: ⭐4.2</div>
5) To add a real background video: put your mp4 in assets/images/bg-video.mp4 and replace the <img> in .intro with:
   <video autoplay muted loop><source src="assets/images/bg-video.mp4" type="video/mp4"></video>
6) Reviews: the review form saves to browser localStorage (demo). You can clear by localStorage.removeItem('giahieu_reviews').
7) Replace google analytics ID 'G-XXXXXXX' in the <head> if you have one.
8) Update sitemap.xml and robots.txt domain names (replace yourdomain.example).

ZIP location: /mnt/data/giahieustore.zip