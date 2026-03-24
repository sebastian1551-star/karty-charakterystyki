<script>
    // Funkcja rozwijania kategorii
    function toggle(el) { el.classList.toggle('active'); }

    // Logika wyszukiwarki
    document.getElementById('search').addEventListener('input', function(e) {
        let filter = e.target.value.toLowerCase();
        document.querySelectorAll('.category-item').forEach(cat => {
            let items = cat.querySelectorAll('.file-item');
            let hasMatch = false;
            items.forEach(item => {
                let text = item.textContent.toLowerCase();
                if (text.includes(filter)) { item.classList.remove('hidden'); hasMatch = true; } 
                else { item.classList.add('hidden'); }
            });
            if (filter.length > 0) {
                cat.classList.toggle('hidden', !hasMatch);
                if (hasMatch) { 
                    cat.querySelector('.submenu').style.display = 'block'; 
                    cat.querySelector('.category-header').classList.add('active'); 
                }
            } else {
                cat.classList.remove('hidden'); 
                cat.querySelector('.submenu').style.display = ''; 
                cat.querySelector('.category-header').classList.remove('active');
            }
        });
    });

    // REJESTRACJA TRYBU OFFLINE (Service Worker)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
        .then(() => console.log("Tryb offline gotowy!"));
    }
</script>
