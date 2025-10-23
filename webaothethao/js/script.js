function renderReviews() {
  const list = document.getElementById('review-list');
  list.innerHTML = '';
  const reviews = JSON.parse(localStorage.getItem('giahieu_reviews') || '[]');
  if (reviews.length === 0) {
    list.innerHTML = '<p class="meta">Chưa có đánh giá nào. Hãy là người đầu tiên!</p>';
    return;
  }
  reviews.slice().reverse().forEach(r => {
    const div = document.createElement('div');
    div.className = 'review';
    div.innerHTML = '<strong>' + escapeHtml(r.name) + '</strong> <span class="rating">⭐'.concat(r.rating,'</span><p>'+escapeHtml(r.text)+'</p>');
    list.appendChild(div);
  });
}
function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
document.addEventListener('DOMContentLoaded', function(){
  renderReviews();
  const form = document.getElementById('review-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.querySelector('[name=name]').value || 'Khách hàng';
      const text = form.querySelector('[name=message]').value || '';
      const rating = form.querySelector('[name=rating]').value || '5';
      const reviews = JSON.parse(localStorage.getItem('giahieu_reviews') || '[]');
      reviews.push({name, text, rating});
      localStorage.setItem('giahieu_reviews', JSON.stringify(reviews));
      form.reset();
      renderReviews();
    });
  }
});