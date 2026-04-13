// 渲染楼层列表
function renderFloors() {
    return floors.map(f => {
        const brandHtml = f.brands.map(b => `<span>${b}</span>`).join('');
        const extraHtml = f.extra ? `<p class="tiny-text" style="margin-top:6px;">${f.extra}</p>` : '';
        const imgFile = `images/${f.level.toLowerCase()}.jpg`;
        return `<div class="floor-item">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                <span style="background:#f15a24; padding:4px 12px; border-radius:60px; font-weight:bold;">${f.level}</span>
                <strong style="font-size:1.2rem;">${f.name}</strong>
            </div>
            <p style="font-size:0.9rem; margin-bottom:8px;">${f.desc}</p>
            ${extraHtml}
            <div class="brand-list">${brandHtml}</div>
            <div class="img-wrapper">
                <img src="${imgFile}" alt="${f.level}层效果图" style="width:100%; border-radius:18px;" onerror="this.style.display='none'; this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🏢 ${f.level}层效果图<br>请上传 ${imgFile}</div>'">
            </div>
        </div>`;
    }).join('');
}

// 渲染入驻流程步骤
function renderSteps() {
    const steps = ["意向沟通", "实地考察", "商务洽谈", "签约入驻", "装修开业", "运营赋能"];
    return `<div class="process-steps">${steps.map((s, idx) => `<div class="step"><div class="step-num">${idx+1}</div>${s}<span class="tiny-text">全程陪跑</span></div>`).join('')}</div>`;
}

// 钉钉代理地址
const DINGTALK_PROXY_URL = "dingtalk_proxy.php";

function showToast(msg, isErr) {
    const toast = document.getElementById('toastMsg');
    toast.textContent = msg;
    toast.style.background = isErr ? '#dc2626' : '#10b981';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function sendToDingtalk(data, callback) {
    const text = `## 🎮 AG回城入驻申请\n\n---\n**品牌：** ${data.brand}\n**联系人：** ${data.contactName}\n**电话：** ${data.phone}\n**邮箱：** ${data.email || '未填'}\n**意向楼层：** ${data.intentFloor || '未选择'}\n**备注：** ${data.message || '无'}\n⏰ ${new Date().toLocaleString()}`;

    fetch(DINGTALK_PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            msgtype: 'markdown',
            markdown: { title: 'AG回城入驻申请', text: text },
            at: { isAtAll: false }
        })
    })
    .then(res => res.json())
    .then(result => {
        if (result.errcode === 0) {
            showToast('✅ 提交成功！招商经理会尽快联系您');
            callback(true);
        } else {
            console.error('钉钉错误:', result);
            showToast(`⚠️ 提交成功但通知失败（${result.errmsg || '未知错误'}）`, true);
            const copyMsg = `品牌：${data.brand}\n联系人：${data.contactName}\n电话：${data.phone}\n邮箱：${data.email}\n意向：${data.intentFloor}\n备注：${data.message}`;
            if (confirm('通知发送失败，是否复制申请信息以便手动联系？')) {
                navigator.clipboard.writeText(copyMsg).then(() => showToast('已复制信息，请拨打 0315-5379888', false));
            }
            callback(false);
        }
    })
    .catch(err => {
        console.error('代理请求异常:', err);
        showToast('⚠️ 提交成功但通知服务不可用（请检查代理是否部署）', true);
        const copyMsg = `品牌：${data.brand}\n联系人：${data.contactName}\n电话：${data.phone}\n邮箱：${data.email}\n意向：${data.intentFloor}\n备注：${data.message}`;
        if (confirm('网络异常，是否复制申请信息以便手动联系？')) {
            navigator.clipboard.writeText(copyMsg).then(() => showToast('已复制信息，请拨打 0315-5379888', false));
        }
        callback(false);
    });
}

// 构建页面
const container = document.getElementById('pagesContainer');
const pages = [];
pagesContent.forEach((html, idx) => {
    const div = document.createElement('div');
    div.className = 'page';
    div.innerHTML = html;
    container.appendChild(div);
    pages.push(div);
});

// 填充动态内容
const floorContainer = document.getElementById('floorList');
if (floorContainer) floorContainer.innerHTML = renderFloors();
const stepsContainer = document.getElementById('stepsContainer');
if (stepsContainer) stepsContainer.innerHTML = renderSteps();

// 表单提交
const form = document.getElementById('joinForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const brand = document.getElementById('brandName').value.trim();
        const name = document.getElementById('contactName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        if (!brand || !name || !phone) return showToast('请填写品牌名称、联系人及电话', true);
        const btn = form.querySelector('button');
        const orig = btn.innerText;
        btn.innerText = '提交中...';
        btn.disabled = true;
        sendToDingtalk({
            brand, contactName: name, phone,
            email: document.getElementById('email').value,
            intentFloor: document.getElementById('intentFloor').value,
            message: document.getElementById('message').value
        }, () => {
            form.reset();
            btn.innerText = orig;
            btn.disabled = false;
        });
    });
}

// 分页 + 强制置顶
let current = 0;
const total = pages.length;
const indicator = document.getElementById('pageIndicator');
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');
const navItems = document.querySelectorAll('.nav-item');

function showPage(index) {
    if (index < 0) index = 0;
    if (index >= total) index = total - 1;
    pages.forEach((p, i) => p.classList.toggle('active', i === index));
    current = index;
    indicator.innerText = `${current+1}/${total}`;
    navItems.forEach((item, i) => {
        if (parseInt(item.dataset.page) === index) item.classList.add('active');
        else item.classList.remove('active');
    });
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // 切换页面后重新初始化轮播（确保当前页面的轮播生效）
    setTimeout(() => initCarousels(), 50);
}

prev.addEventListener('click', () => showPage(current-1));
next.addEventListener('click', () => showPage(current+1));
navItems.forEach(item => {
    item.addEventListener('click', () => showPage(parseInt(item.dataset.page)));
});
showPage(0);

function jumpForm() {
    showPage(total-1);
    setTimeout(() => document.getElementById('joinForm')?.scrollIntoView({behavior:'smooth', block:'center'}), 150);
}
const gotoBtn = document.getElementById('gotoFormFromPage1');
if (gotoBtn) gotoBtn.addEventListener('click', (e) => { e.preventDefault(); jumpForm(); });

// ========== 轮播图组件 ==========
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach((carousel) => {
        // 避免重复初始化
        if (carousel.hasAttribute('data-initialized')) return;
        carousel.setAttribute('data-initialized', 'true');
        
        const imagesAttr = carousel.getAttribute('data-images');
        if (!imagesAttr) return;
        let images = [];
        try {
            images = JSON.parse(imagesAttr);
        } catch(e) {
            console.warn('轮播图 data-images 格式错误', e);
            return;
        }
        if (!images.length) return;

        carousel.innerHTML = `
            <div class="carousel-container" style="position:relative; overflow:hidden; border-radius:24px;">
                <div class="carousel-wrapper" style="display:flex; transition:transform 0.4s ease;">
                    ${images.map(src => `<div class="carousel-slide" style="flex:0 0 100%;"><img src="${src}" style="width:100%; display:block;" onerror="this.src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22200%22%20viewBox%3D%220%200%20100%20200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2310131f%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%238f9bb5%22%3E图片加载失败%3C%2Ftext%3E%3C%2Fsvg%3E';"></div>`).join('')}
                </div>
                <button class="carousel-prev" style="position:absolute; left:8px; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.5); color:white; border:none; border-radius:50%; width:36px; height:36px; cursor:pointer; z-index:2; backdrop-filter:blur(4px);">◀</button>
                <button class="carousel-next" style="position:absolute; right:8px; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.5); color:white; border:none; border-radius:50%; width:36px; height:36px; cursor:pointer; z-index:2; backdrop-filter:blur(4px);">▶</button>
                <div class="carousel-dots" style="position:absolute; bottom:12px; left:0; right:0; display:flex; justify-content:center; gap:8px; z-index:2;"></div>
            </div>
        `;
        
        const wrapper = carousel.querySelector('.carousel-wrapper');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        let currentIndex = 0;
        const totalSlides = slides.length;

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.style.width = '8px';
            dot.style.height = '8px';
            dot.style.borderRadius = '50%';
            dot.style.background = i === 0 ? '#f15a24' : 'rgba(255,255,255,0.5)';
            dot.style.cursor = 'pointer';
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        const dots = dotsContainer.children;

        function updateDots() {
            for (let i = 0; i < totalSlides; i++) {
                dots[i].style.background = i === currentIndex ? '#f15a24' : 'rgba(255,255,255,0.5)';
            }
        }

        function goToSlide(index) {
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentIndex = index;
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        }

        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

        let autoInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
        carousel.addEventListener('mouseenter', () => clearInterval(autoInterval));
        carousel.addEventListener('mouseleave', () => {
            autoInterval = setInterval(() => goToSlide(currentIndex + 1), 3000);
        });
    });
}

// 首次加载初始化轮播
document.addEventListener('DOMContentLoaded', () => {
    initCarousels();
});
