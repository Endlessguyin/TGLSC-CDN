// 📦 TGLSC CDN Package cdn.js //

const TGLSC_CDNx12_API = "https://glseries.net/api/cdn"; // or you can choose any other TGLSC link, but it must end with /api/cdn to work with this code

let TGLSC_CDNx12_items = [];

async function TGLSC_CDNx12_init() {
    const grid = document.getElementById("TGLSC_CDNx12_grid");
    try {
        const res = await fetch(TGLSC_CDNx12_API);
        const json = await res.json();
        if (json.success) {
            TGLSC_CDNx12_items = json.data;
            TGLSC_CDNx12_render();
        } else {
            grid.textContent = "load failed.";
        }
    } catch (e) {
        grid.textContent = "Error: " + e.message;
    }
}

function TGLSC_CDNx12_render() {
    const q = document.getElementById("TGLSC_CDNx12_search").value.toLowerCase();
    const grid = document.getElementById("TGLSC_CDNx12_grid");
    const filtered = TGLSC_CDNx12_items.filter(g => g.title.toLowerCase().includes(q));

    if (!filtered.length) {
        grid.innerHTML = "<p>nothing found.</p>";
        return;
    }

    grid.innerHTML = filtered.map(g => `
        <div class="TGLSC_CDNx12_card" onclick="TGLSC_CDNx12_play('${g.embed_url}')">
            <img src="${g.thumbnail}" loading="lazy" onerror="this.style.display='none'" alt="">
            <p>${g.title}</p>
        </div>
    `).join("");
}

function TGLSC_CDNx12_play(url) {
    document.getElementById("TGLSC_CDNx12_frame").src = url;
    document.getElementById("TGLSC_CDNx12_player").style.display = "block";
}

document.getElementById("TGLSC_CDNx12_close").addEventListener("click", () => {
    document.getElementById("TGLSC_CDNx12_player").style.display = "none";
    document.getElementById("TGLSC_CDNx12_frame").src = "";
});

document.getElementById("TGLSC_CDNx12_search").addEventListener("input", TGLSC_CDNx12_render);

TGLSC_CDNx12_init();