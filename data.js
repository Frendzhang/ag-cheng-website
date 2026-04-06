// 楼层数据
const floors = [
    { level: "B1", name: "烟火集市", desc: "生鲜市集+特色餐饮。告别传统菜场的乏味，让买菜也变成一件有意思的事。形成如逛动漫展和文化展的体验效果，兼顾日常所需与精神格调。同时规划主力店与特色餐饮档口，满足周边居民与青年客群的日常饮食需求。", brands: ["大鑫烧鸟","唐人夜食","刀板香","衢小满"] },
    { level: "1F", name: "装备泉水", desc: "电竞装备+数码潮品+美妆茶饮。这是唐山AG回城商业中心的“入口”，也是流量的入口。推门即是氛围感铺满的时尚空间，一站式满足年轻人购机、变美、小聚的即时需求，用高颜值+强刚需，牢牢抓住青年客群的第一眼。", brands: ["华为","荣耀","汉堡王","吉野家","瑞幸咖啡","宝可梦授权店"] },
    { level: "2F", name: "潮玩空间", desc: "二次元专属聚集地。谷子店、IP店、手办店、妆造间——给同好一个家。用小众文化聚人气，全龄配套留客源，做城市独一无二的次元文化地标。让非主流文化作为突破口形成独属于唐山次元文化潮流的专属区域，以更开阔和包容的姿态接纳多元文化的聚集。实现青年客群与家庭客群的双重覆盖。", brands: ["飞享俱乐部","射手部落","谷子店","WeSpace腾讯官方店"] },
    { level: "3F", name: "先知峡谷", desc: "亲子成长空间。让家长带娃求学、休闲、购物一站式搞定。瞄准新中产家庭的教育痛点与陪伴需求，集儿童教育、体能锻炼、休闲娱乐于一体，搭配主次力店强化商业引力，把亲子流量转化为长效消费，同时规划主次力店，提升区域商业吸引力。", brands: ["帆书","枫丹云舍","海伦钢琴"] },
    { level: "4F", name: "次元穿越", desc: "电竞+沉浸娱乐+夜经济。KPL官方观赛点、密室、影院、音乐餐吧——这里是唐山的“夜城”。打造城市潮玩社交主场，引爆年轻活力。以电竞为核心引擎，集结影院、密室、次元餐厅、音乐餐吧，打造全场景沉浸娱乐体验，无论是开黑竞技、观影放松，还是团建小聚，都能在这里找到快乐，成为年轻人释放压力、社交打卡的核心阵地。", brands: ["金逸影城","云海肴","共和之约"] },
    { level: "5F", name: "运练营地", desc: "24h运动健康空间。不用迁就营业时间。贴合健康趋势，解锁全天候运动生活，延长消费时长。聚焦青年健康需求，打造24小时自助健身+运动潮品的复合空间，搭配主力餐饮与生活配套，实现“运动+餐饮+购物”的闭环。不用迁就营业时间，随时能开启健身模式，运动后就近休闲觅食，让健康生活变得轻松便捷，留住年轻客群的碎片化时间。", brands: ["绿树电竞","麦粒KTV","自助舞蹈室"] },
    { level: "6F", name: "云中见影", desc: "宠物主题空间。给毛孩子一个地方，也给宠物主一个社交场。同时也给每一个喜欢亲近自然与小动物的家庭提供一个自在的空间。通过不同主题场景的规划设计，让萌宠亲密接触与自然科学普及相结合，形成独属于每个家庭的自然课堂。", brands: ["多家品牌洽谈中"], extra: "*欢迎宠物用品/服务类品牌入驻" }
];

// 页面内容（完整保留所有文本）
const pagesContent = [
    // 页0：封面 + 序言
    `<div style="text-align:center; margin-bottom:1rem;">
        <div class="hero-badge">⚡ 引领青年文化潮流 · 重塑城市商业未来</div>
        <h1 style="font-size:2rem; font-weight:800; background:linear-gradient(135deg,#fff,#f5a65b,#ff7a2f); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">唐山AG回城电竞商业中心</h1>
        <p style="margin:0.5rem 0; opacity:0.9;">十年沉淀 · 电竞+二次元 | 打造唐山商业新样板</p>
        <div class="img-wrapper"><img src="images/cover.jpg" alt="主视觉" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center; border-radius:20px;\'>🏙️ 主视觉<br>建议上传 images/cover.jpg</div>'"></div>
        <div style="margin:1rem 0;"><a href="javascript:void(0)" id="gotoFormFromPage1" style="background:linear-gradient(95deg,#f15a24,#ff7a3f); padding:12px 28px; border-radius:60px; display:inline-block; font-weight:bold; text-decoration:none; color:white;">📢 诚邀同行 变革未来 →</a></div>
    </div>
    <h2>序言 · 十年沉淀 重塑未来</h2>
    <p>十年的光景我们见证了时代的更迭，从即时通信到AI智能，人们对于商业中心的思考也在不断迭代。单纯的物质形态已无法满足当下的情绪价值，所以让商业中心成为安抚内心、满足兴趣和日常购物的综合场所才是未来的商业趋势。</p>
    <div class="stats-row">
        <div class="stat-card"><div class="stat-number">2016→2025</div><div>电竞百亿→千亿</div></div>
        <div class="stat-card"><div class="stat-number">42%+</div><div>二次元复合增速</div></div>
        <div class="stat-card"><div class="stat-number">5亿+</div><div>泛二次元用户</div></div>
    </div>
    <p>十年间我们见证了2025年电影《哪吒2》创造154亿的票房神话，也看到AG电竞战队在世界电竞舞台的异军突起，斩获数十个世界冠军与全国冠军，关于二次元、动漫、游戏、IP等系列产业也在商业领域的表现异常优异。当青年潮流文化成为消费主流，当电竞与漫次元的商业价值持续爆发，唐山AG回城电竞商业中心的出现，不是一次转型，而是消费蝶变的必然。</p>
    <p>&nbsp;</p>
    <h3 style="color:#f5a65b;">我们不是在追赶风口。风口，就在这里。</h3>
    <div class="img-wrapper"><img src="images/highlight.jpg" alt="十年高光" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🏆 十年高光<br>images/highlight.jpg</div>'"></div>
    <p>AG回城以“电竞+二次元”为核心定位，精准卡位当前增长最快的消费赛道，符合从“功能消费”向“情绪消费”转型的市场趋势。这是一场关于中国未来商业的一次勇敢探索，更是未来唐山商业的样板，以电竞、二次元、动漫为核、潮流为翼、商业为基，融合多元业态与情感价值，打造全新的青年消费与社交生态，也必将成为城市商业发展的全新路径。</p>
    <div class="golden-card"><p style="font-weight:bold; font-size:1.2rem;">AG于此，即见未来。</p><p>电竞动漫为核 · 潮流为翼 · 商业为基</p></div>`,

    // 页1：起因 + 转念
    `<h2>起因 · 看见热爱</h2>
    <p>唐山这片土地上，藏着一群被忽视却真实存在的需求群体——<span class="highlight">5所高校、7个校区，逾10万名师生</span>，他们追潮而行，热爱电竞世界，眷恋二次元天地。或许他们的消费能力尚在成长，但那份对同好相聚、兴趣落地的需求，纯粹而迫切。</p>
    <p>他们渴望一处专属空间：能见证电竞赛事的热血沸腾，能寻觅心仪的二次元周边，能定格COSplay的灵动瞬间，更能与志同道合者围坐畅谈，安放心底的热爱。只是放眼周边，远洋城、万达、爱琴海等主流商场，皆以家庭客群、商务人士为核心服务对象，聚焦于高消费层级，却未曾为这群有热爱、有需求的年轻人，预留一方天地。</p>
    <p>我们深知，唐山从不缺有需求的人，缺的是懂需求的载体。除了朝气蓬勃的青年学子，这座城市还有一群30至45岁的男性群体——他们是职场上独当一面的骨干，是家庭里遮风挡雨的顶梁柱，腕间的手表、座驾的质感，承载着他们的成就感，也悄悄包裹着不为人知的压抑与疲惫。</p>
    <div class="quote-block"><strong>"男人至死是少年"</strong> — AG回城愿为每一个曾经的少年留一处安放热爱的角落。</div>
    <p>世人多关注他们的责任与能力，却少有人问及他们的精神渴求。殊不知，“男人致死是少年”，那些年少时在游戏里收获的快乐与纯粹，从未被时光磨灭，反而成为他们卸下疲惫、回归本真的最好出口。唐山AG回城商业中心，从不只是年轻人的潮流聚集地，更愿为这些“曾经的少年”，留一处安放热爱、释放情绪的角落。</p>
    <div class="img-wrapper"><img src="images/youth.jpg" alt="青年圈层" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>👾 青年圈层<br>images/youth.jpg</div>'"></div>
    <p>项目周边<span class="highlight">3公里内234个居民区，50万常住人口</span>。他们就生活在我们身边，不是没有休闲、社交、释放热爱的需求，只是长久以来，始终没有一个空间，能精准契合这份期待。</p>
    <p>读懂这片土地的需求，看见每一群人的热爱，便是我们选择于此，打造唐山AG回城商业中心的初心与底气。</p>
    <div class="img-wrapper"><img src="images/market.jpg" alt="市场数据" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>📊 市场数据<br>images/market.jpg</div>'"></div>
    <h2 style="margin-top:1.5rem;">转念 · 重塑商业逻辑</h2>
    <div class="compare-card"><strong>🎯 定位不同</strong><br>不做传统购物中心，做围绕电竞、动漫、二次元的商业中心。我们不是在跟传统商业中心抢客源，我们做的是传统商业中心无法承载的商业形态。</div>
    <div class="img-wrapper"><img src="images/定位不同.jpg" alt="定位差异" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🎮🌸 电竞+二次元概念图</div>'"></div>
    <div class="compare-card"><strong>👥 客群不同</strong><br>传统商场服务<span class="highlight">“有消费能力的客群”</span>，我们服务<span class="highlight">“有需求的客群”</span>——被忽视的年轻人一代，被现实压抑的中年人。</div>
    <div class="img-wrapper"><img src="images/客群不同.jpg" alt="客群场景" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>👾🧔 双客群场景</div>'"></div>
    <div class="compare-card"><strong>🤝 关系不同</strong><br>传统商业中心在乎的是：你能否按期足额缴纳租金，你是否服从管理。而在AG回城看来，商户与商户之间、商户与运营团队之间，不是一个个独立的个体，而是一个紧密连接的整体。我们的追求，不是做最好的商业运营团队，而是做最好的商业服务团队。我们愿意同商户一起讨论经营的困难，帮助商户摆脱经营的困局。</div>
    <div class="img-wrapper"><img src="images/关系不同.jpg" alt="商户共创" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🤝💡 服务团队与商户共创</div>'"></div>
    <div class="golden-card"><p>不是商业运营团队，而是商业服务团队</p><p style="font-size:0.8rem;">与商户共成长 · 同破局 · 创未来</p></div>
    <div class="tiny-text">*以上数据来源于2025年中国电竞产业发展报告及二次元产业研究</div>`,

    // 页2：六层潮玩矩阵 + 生态共同体
    `<h2>🏢 六层潮玩矩阵</h2>
    <div id="floorList"></div>
    <div class="quote-block"><strong>✨ 生态共同体 · 客流互哺</strong><br>电竞装备+茶饮、谷子店+咖啡厅、密室+音乐餐吧动线贯通，实现商户共生、客流共享。</div>
    <div class="img-wrapper"><img src="images/atmosphere.jpg" alt="整体动线" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🔄 整体动线<br>images/atmosphere.jpg</div>'"></div>
    <h2 style="margin-top:1.2rem;">沉淀 · 商业生态共同体</h2>
    <p>我们注重的不仅是业态布局和商户的专属区域，而是通过运营和活动，让这些商户有效联动，形成良好可持续性的商业氛围。</p>
    <p>在 AG 回城，每一位入驻商户皆非独立经营的个体，而是深度共生的商业生态共同体。我们摒弃传统商业 <span class="highlight">“简单排布、零散入驻”</span> 的粗放模式，坚持以<span class="highlight">业态共生、客流互哺、场景联动</span>为核心规划逻辑，让商户彼此依托、有机共生，形成可持续的商业生长力。</p>
    <div class="img-wrapper"><img src="images/1.jpg" alt="生态概念" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🌿🤝 商业生态共同体概念图</div>'"></div>
    <p>我们依据各商户经营特质与客群行为逻辑，进行科学动线规划与业态匹配，实现<span class="highlight">人、场、店的高效联动</span>：</p>
    <div class="scene-card"><strong>🎮 电竞装备 × 电竞茶饮</strong><br>购置外设的消费者多需现场调试体验，而休憩茶饮恰好承接其停留需求，既延长驻留时长，亦实现双向消费转化，彼此成就<span class="highlight">客流闭环</span>。</div>
    <div class="img-wrapper"><img src="images/2.jpg" alt="电竞茶饮" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🎮☕ 电竞装备+茶饮场景</div>'"></div>
    <div class="scene-card"><strong>🎁 谷子零售 × 主题咖啡厅</strong><br>逛展选购后，消费者天然需要交流分享的空间，咖啡厅为圈层社交提供场景载体，社交行为又自然催生消费行为，让<span class="highlight">兴趣转化为持续客流</span>。</div>
    <div class="img-wrapper"><img src="images/3.jpg" alt="谷子咖啡" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🎁☕ 谷子店+咖啡厅</div>'"></div>
    <div class="scene-card"><strong>🔐 密室体验 × 音乐餐吧</strong><br>密室结束后，消费者仍处于情绪高点，音乐餐吧恰好成为情绪延续与社交延伸的承接场景，有效避免客流外流，实现<span class="highlight">体验与消费的无缝衔接</span>。</div>
    <div class="img-wrapper"><img src="images/4.jpg" alt="密室餐吧" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🔐🎵 密室+音乐餐吧</div>'"></div>
    <div class="golden-card"><p>共生 · 共享 · 共创</p><p style="font-size:0.8rem;">设计商业氛围 · 运营未来价值</p></div>`,

    // 页3：运营赋能（完整保留活动、社群、会员内容）
    `<h2>入局 · 高能运营赋能</h2>
    <div style="background:#1b1f2c; border-radius:28px; padding:1rem; margin:0.5rem 0 1rem 0; text-align:center;">🎯 <span class="highlight">“高频活动聚客、精准社群留客、完善会员锁客”</span></div>
    <p>在<span class="highlight">“酒香也怕巷子深”</span>的时代，AG回城运营团队核心的运营优势与招商底气在于以<span class="highlight">“高频活动聚客、精准社群留客、完善会员锁客”</span>为核心运营逻辑，构建全场景、高粘性的消费生态，为入驻商户持续输送精准客流、提升经营转化。</p>
    <h3>🎪 高频多元活动 · 筑牢客流基础</h3>
    <p>我们坚持<span class="highlight">“平日有展、周末有秀、假日有节”</span>的活动频次，年均举办各类主题活动近百场，以高频活动打破消费淡季，持续激活项目人气，为商户带来稳定且精准的潜在客群。</p>
    <p>活动类型精准贴合目标客群需求，兼顾兴趣属性与消费场景，实现<span class="highlight">“活动聚客、消费转化”</span>的双向赋能：</p>
    <div class="activity-grid">
        <div class="activity-card"><strong>🎮 电竞类</strong><br>电竞赛事观赛点、粉丝见面会、明星表演赛、电竞嘉年华</div>
        <div class="activity-card"><strong>🌸 漫次元类</strong><br>国漫微街展、随机宅舞、吃谷大会、次元巡游</div>
        <div class="activity-card"><strong>🔥 潮流类</strong><br>潮玩艺术展、IP快闪店、电音狂欢节、主题市集</div>
        <div class="activity-card"><strong>👨‍👩‍👧 亲子类</strong><br>儿童才艺大赛、亲子嘉年华、家庭互动体验</div>
    </div>
    <div class="img-wrapper"><img src="images/6.jpg" alt="活动集锦" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🎪🎤 活动集锦</div>'"></div>
    <h3>💬 精准社群运营 · 强化客群粘性</h3>
    <p>基于活动沉淀，我们搭建了几十个精准兴趣社群，涵盖<span class="highlight">电竞粉丝群、二次元同好群、潮玩玩家群、亲子成长群</span>四大核心类别，实现客群精准分层运营。</p>
    <div class="info-card" style="background:rgba(17,21,31,0.7); border-radius:28px; padding:1rem; margin:1rem 0;"><p><span class="highlight">运营核心：“以兴趣为纽带，实现客群沉淀与精准的情绪触达”</span></p><p style="margin-top:0.5rem;">通过社群日常互动、活动预告、专属福利、同好交流，强化客群对项目的认同感与归属感；同时，社群作为商户与客群的沟通桥梁，可助力入驻商户快速触达目标客群，同时联动不同品类的商户产生裂变效应，发布新品、活动信息，提升营销效率，降低获客成本。</p></div>
    <div class="img-wrapper"><img src="images/7.jpg" alt="社群互动" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>💬👥 社群互动</div>'"></div>
    <h3>🔐 完善会员体系 · 实现锁客增值</h3>
    <p>我们构建<span class="highlight">“线上+线下”一体化会员体系</span>，兼顾便捷性与实用性，实现客群锁定、消费转化与精准营销的闭环，为入驻商户持续赋能：</p>
    <ul style="margin-left:1.2rem; margin-bottom:1rem;">
        <li><strong class="highlight">线上虚拟店</strong>：依托小程序/APP，实现会员积分兑换、服务预约、活动报名一站式操作，提升会员体验，引导线上引流、线下消费；</li>
        <li><strong class="highlight">线下实体卡</strong>：推出全场通用一卡通，覆盖所有入驻商户，提升会员消费便捷性，同时绑定会员长期消费，提升复购率；</li>
        <li><strong class="highlight">精准数据赋能</strong>：整合会员消费记录、兴趣标签等数据，为入驻商户提供精准营销参考，助力商户优化产品与服务，精准匹配客群需求，提升经营效益。</li>
    </ul>
    <div class="img-wrapper"><img src="images/8.jpg" alt="会员体系" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>📱💳 会员体系</div>'"></div>
    <div class="golden-card"><p>高频活动引流 · 精准社群沉淀 · 完善会员锁客</p><p style="font-size:0.75rem;">共生 · 共享 · 共赢</p></div>
    <div class="img-wrapper"><img src="images/community1.jpg" alt="社群活动" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>💬 社群活动1</div>'"></div>
    <div class="img-wrapper"><img src="images/community2.jpg" alt="社群活动" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>💬 社群活动2</div>'"></div>
    <div class="img-wrapper"><img src="images/community3.jpg" alt="社群活动" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>💬 社群活动3</div>'"></div>`,

    // 页4：招商政策 + 入驻流程 + 表单
    `<h2>📜 招商政策</h2>
    <div class="policy-box">
        <div><strong>🎯 业态共生互补</strong><br>优先引入电竞/二次元/潮玩品牌</div>
        <div style="margin:12px 0;"><strong>💰 合作方式</strong><br>根据业态、面积不同灵活制定合作方案</div>
        <div><strong>📢 全域流量扶持</strong><br>共享社群、会员、活动流量</div>
        <div style="margin-top:12px;"><strong>🤝 全周期陪伴</strong><br>专业团队全程护航</div>
    </div>
    <div class="img-wrapper"><img src="images/brands.jpg" alt="品牌墙" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🏷️ 品牌墙<br>images/brands.jpg</div>'"></div>
    <h2>📌 入驻流程</h2>
    <div id="stepsContainer"></div>
    <div class="img-wrapper"><img src="images/sign.jpg" alt="签约场景" style="width:100%; border-radius:24px;" onerror="this.parentNode.innerHTML='<div class=\'img-placeholder\' style=\'background:#10131f; padding:1rem; text-align:center;\'>🤝 签约场景<br>images/sign.jpg</div>'"></div>
    <h2>📝 入驻申请</h2>
    <div class="form-card">
        <form id="joinForm">
            <input type="text" placeholder="品牌/公司名称 *" id="brandName">
            <input type="text" placeholder="联系人姓名 *" id="contactName">
            <input type="tel" placeholder="联系电话 *" id="phone">
            <input type="email" placeholder="电子邮箱" id="email">
            <select id="intentFloor">
                <option value="">意向楼层/业态</option>
                <option>B1 烟火集市</option><option>1F 装备泉水</option><option>2F 潮玩空间</option>
                <option>3F 先知峡谷</option><option>4F 次元穿越</option><option>5F 运练营地</option><option>6F 云中见影</option>
            </select>
            <textarea rows="2" id="message" placeholder="品牌简介、面积需求"></textarea>
            <button type="submit">🚀 立即提交申请</button>
        </form>
    </div>
    <div style="text-align:center; margin-top:1rem;">
        <p><strong>招商合作咨询</strong><br>项目招商部</p>
        <p>☎️ 0315-5379888 | 📧 dg2100@163.com</p>
    </div>
    <div class="tiny-text">© 2026 唐山AG回城电竞商业中心 | 电竞+二次元新地标</div>`
];
