import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'ticket99',
    slug: 'ticket99-event-ticketing-platform',
    name: 'Ticket99',
    category: 'platforms',
    categoryLabelVi: 'Nền tảng số',
    categoryLabelEn: 'Digital Platform',
    shortDescriptionVi: 'Hệ thống phân phối vé điện tử, định danh người tham dự và kiểm soát cổng check-in sự kiện tốc độ cao.',
    shortDescriptionEn: 'Digital ticketing distribution system with real-time attendee identity and high-speed gate admission.',
    fullDescriptionVi: 'Ticket99 được nghiên cứu và thiết kế như một nền tảng bán vé và kiểm soát ra vào chuyên nghiệp dành cho các sự kiện văn hóa, đại nhạc hội và hội thảo công nghệ. Nền tảng tập trung vào khả năng chịu tải đột biến khi mở bán và cơ chế chống gian lận mã vé.',
    fullDescriptionEn: 'Ticket99 is engineered as an enterprise-grade ticketing and access management engine for major concerts, cultural summits, and technology conferences, prioritizing peak drop stability and anti-counterfeiting security.',
    coverImage: '/src/assets/images/project_ticket99_1793900284431.jpg',
    gallery: [
      '/src/assets/images/project_ticket99_1793900284431.jpg',
      '/src/assets/images/creative_event_production_1793900285613.jpg'
    ],
    capabilitiesVi: ['Phát triển ứng dụng Web/Mobile', 'Hệ thống thanh toán trực tuyến', 'Kiến trúc bảo mật QR xoay vòng'],
    capabilitiesEn: ['Cross-platform Web/Mobile Engineering', 'Payment Gateway Integration', 'Dynamic Rolling QR Tokens'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'Tailwind CSS'],
    status: 'In Development',
    publicationApproved: false,
    isConceptDemo: true,
    verificationNoticeVi: 'Dự án ứng viên — Đang hoàn thiện hồ sơ kỹ thuật và chờ xác nhận công bố chính thức từ IOT.',
    verificationNoticeEn: 'Candidate Project — Under technical review and pending formal publication sign-off from IOT.',
    problemStatementVi: 'Các sự kiện âm nhạc và giải trí tại Việt Nam thường xuyên đối mặt với tình trạng nghẽn server khi mở bán vé đợt đầu (flash-sale) và tình trạng phe vé làm giả mã QR ở cổng vào.',
    problemStatementEn: 'Major entertainment events in Vietnam frequently suffer server outages during flash drops, alongside ticket scalping and counterfeit static QR codes at gates.',
    approachVi: 'Xây dựng kiến trúc hàng đợi phi tập trung (Virtual Queue) và mã QR có token thay đổi mỗi 15 giây, tích hợp ứng dụng quét vé tại cửa với chế độ đệm ngoại tuyến (Offline-First Cache).',
    approachEn: 'Designing a decentralized virtual waiting room paired with dynamic QR tokens rotating every 15 seconds, supported by an offline-first mobile gate check-in app.',
    keyFeaturesVi: [
      'Phòng chờ ảo thông minh (Virtual Queue) bảo vệ server khỏi sập',
      'Mã QR động xoay vòng token ngăn chặn chụp ảnh màn hình bán lại',
      'Ứng dụng quét vé di động check-in dưới 0.5 giây / lượt khách',
      'Dashboard theo dõi lưu lượng khách vào cổng và dòng tiền trực tiếp'
    ],
    keyFeaturesEn: [
      'Virtual waiting room mitigating traffic spikes during ticket releases',
      'Dynamic rolling QR tokens eliminating screenshot scalping',
      'Sub-0.5s handheld gate check-in scanning software',
      'Real-time gate ingress velocity and revenue tracking dashboards'
    ],
    expectedImpactVi: 'Hỗ trợ ban tổ chức kiểm soát 100% doanh thu vé và loại bỏ hoàn toàn hiện tượng vé giả tại cổng ra vào.',
    expectedImpactEn: 'Equips event organizers with total revenue visibility while eliminating entrance gate counterfeit fraud.'
  },
  {
    id: 'izmap-icaobang',
    slug: 'izmap-smart-gis-icaobang',
    name: 'izMap / iCaoBang',
    category: 'data_maps',
    categoryLabelVi: 'Dữ liệu & Bản đồ số',
    categoryLabelEn: 'GIS & Spatial Data',
    shortDescriptionVi: 'Hệ thống bản đồ số và cổng thông tin du lịch thông minh hỗ trợ định vị di sản, tiện ích và trải nghiệm khám phá địa phương.',
    shortDescriptionEn: 'Smart provincial GIS map and digital tourism gateway highlighting heritage trails, local amenities, and spatial navigation.',
    fullDescriptionVi: 'Giải pháp izMap / iCaoBang ứng dụng công nghệ GIS hiện đại để số hóa toàn diện mạng lưới điểm du lịch, ẩm thực, làng nghề truyền thống và dịch vụ lữ hành. Nền tảng cung cấp bản đồ vector tương tác mượt mà, hỗ trợ tìm kiếm không gian và chỉ đường trực quan.',
    fullDescriptionEn: 'The izMap / iCaoBang solution leverages modern GIS spatial engines to comprehensively digitize regional tourism landmarks, indigenous handicraft villages, and hospitality networks through fast vector tile cartography.',
    coverImage: '/src/assets/images/project_izmap_1793900285032.jpg',
    gallery: [
      '/src/assets/images/project_izmap_1793900285032.jpg',
      '/src/assets/images/hero_digital_ecosystem_1793900282776.jpg'
    ],
    capabilitiesVi: ['Số hóa GIS không gian', 'Bản đồ số tương tác Vector Tiles', 'Dẫn đường theo tọa độ địa phương'],
    capabilitiesEn: ['Geospatial GIS Digitization', 'Interactive Vector Tile Mapping', 'Local Coordinate Navigation'],
    technologies: ['Mapbox GL / MapLibre', 'PostGIS', 'GeoServer', 'Next.js / React', 'Node.js', 'GeoJSON'],
    status: 'In Development',
    publicationApproved: false,
    isConceptDemo: true,
    verificationNoticeVi: 'Dự án ứng viên — Mô hình giải pháp bản đồ số và quy hoạch dữ liệu không gian chờ xác nhận công bố.',
    verificationNoticeEn: 'Candidate Project — Spatial GIS concept & prototype awaiting formal public clearance.',
    problemStatementVi: 'Du khách và cán bộ quản lý địa phương thiếu một bản đồ số chuyên biệt, cập nhật chính xác các tuyến đường đèo, danh lam thắng cảnh và cơ sở dịch vụ theo chuẩn dữ liệu quốc gia.',
    problemStatementEn: 'Travelers and provincial planners lack a dedicated digital GIS platform accurately displaying mountain passes, heritage landmarks, and hospitality points conforming to national mapping protocols.',
    approachVi: 'Xây dựng nền tảng WebGIS trên nền Vector Tiles với khả năng tùy biến lớp bản đồ (Layers), tích hợp công cụ tìm kiếm POI đa tiêu chí và hỗ trợ tải trước bản đồ ngoại tuyến.',
    approachEn: 'Building a vector-tile WebGIS platform with dynamic multi-layer filters, semantic POI discovery, and local offline terrain caching for low-connectivity regions.',
    keyFeaturesVi: [
      'Bản đồ vệ tinh và địa hình 3D hiển thị độ dốc các cung đường',
      'Danh mục điểm đến văn hóa, ẩm thực, lưu trú phân theo huyện thị',
      'Định vị GPS chính xác và dẫn đường tối ưu cho du khách',
      'Hệ thống quản lý nội dung POI cho ban quản lý du lịch địa phương'
    ],
    keyFeaturesEn: [
      'Satellite and 3D contour terrain layers rendering elevation changes',
      'Categorized cultural, culinary, and hospitality POIs by municipality',
      'Accurate GPS geolocation with turn-by-turn regional wayfinding',
      'Administrative POI CMS with role-based editing permissions'
    ],
    expectedImpactVi: 'Thúc đẩy du lịch thông minh, quảng bá văn hóa bản địa và cung cấp công cụ quy hoạch số cho địa phương.',
    expectedImpactEn: 'Promotes smart tourism, amplifies regional cultural heritage, and equips authorities with modern spatial governance tools.'
  },
  {
    id: 'cms99',
    slug: 'cms99-headless-enterprise-cms',
    name: 'CMS99',
    category: 'software',
    categoryLabelVi: 'Phần mềm',
    categoryLabelEn: 'Software',
    shortDescriptionVi: 'Nền tảng quản trị nội dung không đầu (Headless CMS) hiệu năng cao phục vụ xuất bản đa kênh và quản trị dữ liệu tập trung.',
    shortDescriptionEn: 'High-performance Headless Content Management System for multi-channel digital publishing and centralized data governance.',
    fullDescriptionVi: 'CMS99 cung cấp giải pháp quản trị nội dung linh hoạt với kiến trúc API-first. Nền tảng cho phép doanh nghiệp biên tập nội dung một lần và phân phối đồng thời tới website, ứng dụng di động, màn hình thông minh (Kiosk) và các dịch vụ bên thứ ba.',
    fullDescriptionEn: 'CMS99 delivers an API-first headless content management framework, empowering enterprises to author structured content once and publish simultaneously across web, mobile apps, and interactive kiosks.',
    coverImage: '/src/assets/images/project_cms99_1793900285940.jpg',
    gallery: [
      '/src/assets/images/project_cms99_1793900285940.jpg',
      '/src/assets/images/hero_digital_ecosystem_1793900282776.jpg'
    ],
    capabilitiesVi: ['Kiến trúc Headless API', 'Quản trị quyền hạn doanh nghiệp', 'Tối ưu SEO tự động'],
    capabilitiesEn: ['Headless API Architecture', 'Enterprise RBAC Governance', 'Automated SEO Schemas'],
    technologies: ['TypeScript', 'GraphQL', 'REST API', 'PostgreSQL', 'Docker', 'Redis'],
    status: 'In Development',
    publicationApproved: false,
    isConceptDemo: true,
    verificationNoticeVi: 'Dự án ứng viên — Giải pháp kiến trúc phần mềm nội bộ đang trong giai đoạn tiền khả thi.',
    verificationNoticeEn: 'Candidate Project — Internal software architectural framework currently under validation.',
    problemStatementVi: 'Các hệ thống CMS truyền thống gắn chặt giao diện với cơ sở dữ liệu (Monolithic), gây khó khăn khi cần mở rộng ứng dụng di động hoặc tùy biến trải nghiệm người dùng.',
    problemStatementEn: 'Legacy monolithic CMS architectures couple front-end presentation with database storage, stalling mobile app expansion and omni-channel customer experiences.',
    approachVi: 'Tách rời hoàn toàn giao diện Frontend và bộ máy Backend qua các cổng GraphQL & REST API tốc độ cao, hỗ trợ Schema Builder trực quan cho quản trị viên.',
    approachEn: 'Decoupling frontend presentation from backend data storage via high-speed GraphQL and REST APIs, paired with a visual schema modeler.',
    keyFeaturesVi: [
      'Xây dựng trường dữ liệu linh hoạt (Dynamic Custom Schemas)',
      'Phân quyền biên tập viên, kiểm duyệt viên và quản trị viên',
      'Đồng bộ tài nguyên hình ảnh/video qua CDN tốc độ cao',
      'Tự động sinh cấu trúc dữ liệu Schema.org và tối ưu SEO'
    ],
    keyFeaturesEn: [
      'Visual dynamic custom field modeler without requiring code deployments',
      'Granular roles for authors, editors, legal reviewers, and administrators',
      'Asset optimization and edge distribution via global CDN pipelines',
      'Automated Schema.org structured data generation for technical SEO'
    ],
    expectedImpactVi: 'Rút ngắn 60% thời gian ra mắt các chiến dịch truyền thông đa kênh và giảm tải gánh nặng kỹ thuật.',
    expectedImpactEn: 'Accelerates time-to-market for multi-channel marketing campaigns while freeing developer resources.'
  },
  {
    id: 'km99',
    slug: 'km99-marketing-loyalty-engine',
    name: 'KM99',
    category: 'communication',
    categoryLabelVi: 'Truyền thông & Tiếp thị',
    categoryLabelEn: 'Communication & Marketing',
    shortDescriptionVi: 'Giải pháp tự động hóa chương trình khuyến mãi, tích điểm đổi quà và quản trị khách hàng thân thiết đa kênh.',
    shortDescriptionEn: 'Multi-channel marketing automation engine for loyalty point accumulation, reward redemption, and customer retention.',
    fullDescriptionVi: 'KM99 là giải pháp kết nối giữa hoạt động truyền thông và tỷ lệ giữ chân khách hàng. Hệ thống hỗ trợ doanh nghiệp phát hành mã giảm giá thông minh, phân hạng thành viên tự động và gửi thông báo cá nhân hóa qua Zalo ZNS, SMS và Email.',
    fullDescriptionEn: 'KM99 bridges brand communication campaigns with direct customer retention, automating targeted promo codes, tiered membership points, and omnichannel notifications.',
    coverImage: '/src/assets/images/project_ticket99_1793900284431.jpg',
    gallery: [
      '/src/assets/images/project_ticket99_1793900284431.jpg',
      '/src/assets/images/creative_event_production_1793900285613.jpg'
    ],
    capabilitiesVi: ['Tự động hóa tiếp thị', 'Hệ thống tích điểm Loyalty', 'Tích hợp Zalo ZNS & SMS'],
    capabilitiesEn: ['Marketing Automation', 'Omnichannel Loyalty Engine', 'Zalo ZNS & SMS Integration'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'RabbitMQ', 'Tailwind CSS'],
    status: 'In Development',
    publicationApproved: false,
    isConceptDemo: true,
    verificationNoticeVi: 'Dự án ứng viên — Đề xuất giải pháp CRM & Marketing Automation chờ kiểm duyệt.',
    verificationNoticeEn: 'Candidate Project — CRM and marketing automation concept awaiting organizational verification.',
    problemStatementVi: 'Doanh nghiệp chi tiêu nhiều ngân sách để thu hút khách hàng mới nhưng thiếu công cụ nuôi dưỡng và giữ chân khách hàng cũ, dẫn đến chi phí CAC tăng cao.',
    problemStatementEn: 'Brands invest heavily in customer acquisition but lack structured tools to retain existing buyers, leading to inflated blended acquisition costs.',
    approachVi: 'Xây dựng engine tích điểm theo giá trị đơn hàng, tích hợp minigame tương tác tại sự kiện và gửi kịch bản chăm sóc tự động theo chu kỳ mua sắm.',
    approachEn: 'Designing a transaction-based point engine linked to event minigames and lifecycle trigger sequences based on historical purchase frequency.',
    keyFeaturesVi: [
      'Quản lý danh mục ưu đãi và phân loại mã voucher động',
      'Đồng bộ điểm thưởng qua số điện thoại hoặc mã vạch thành viên',
      'Tự động gửi lời chúc sinh nhật và ưu đãi riêng biệt',
      'Báo cáo phân tích hành vi tiêu dùng và tần suất quay lại'
    ],
    keyFeaturesEn: [
      'Dynamic voucher configuration with fraud prevention controls',
      'Point synchronization via phone numbers or digital loyalty cards',
      'Automated personalized birthday vouchers and milestone rewards',
      'Customer lifetime value and repeat purchase behavioral analytics'
    ],
    expectedImpactVi: 'Gia tăng tỷ lệ mua lại và tối ưu chi phí tiếp thị của thương hiệu.',
    expectedImpactEn: 'Drives repeat purchase frequency and maximizes blended customer lifetime value.'
  },
  {
    id: 'traotrao',
    slug: 'traotrao-digital-community-platform',
    name: 'TraoTrao',
    category: 'platforms',
    categoryLabelVi: 'Nền tảng số',
    categoryLabelEn: 'Digital Platform',
    shortDescriptionVi: 'Mô hình nền tảng kết nối trao đổi giá trị số và cộng đồng tương tác trực tuyến cho các sáng kiến xã hội.',
    shortDescriptionEn: 'Digital exchange and interactive community platform fostering civic engagement and shared value creation.',
    fullDescriptionVi: 'TraoTrao được định hình như một không gian số hóa kết nối các nguồn lực cộng đồng, nơi các cá nhân và tổ chức có thể chia sẻ tri thức, vật phẩm hoặc đồng hành trong các chiến dịch vì cộng đồng với tính minh bạch cao.',
    fullDescriptionEn: 'TraoTrao is designed as a digital civic exchange platform bridging social resources, where participants share knowledge, support initiatives, and track social impact with full transparency.',
    coverImage: '/src/assets/images/hero_digital_ecosystem_1793900282776.jpg',
    gallery: [
      '/src/assets/images/hero_digital_ecosystem_1793900282776.jpg',
      '/src/assets/images/project_cms99_1793900285940.jpg'
    ],
    capabilitiesVi: ['Mạng lưới cộng đồng số', 'Minh bạch hóa hoạt động', 'Giao diện thân thiện người dùng'],
    capabilitiesEn: ['Civic Social Networking', 'Public Ledger Transparency', 'Intuitive Accessible UI'],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Cloud Storage', 'Express'],
    status: 'In Development',
    publicationApproved: false,
    isConceptDemo: true,
    verificationNoticeVi: 'Dự án ứng viên — Concept nghiên cứu nền tảng cộng đồng phi lợi nhuận & xã hội hóa.',
    verificationNoticeEn: 'Candidate Project — Research concept for non-profit civic engagement platform.',
    problemStatementVi: 'Các chiến dịch đóng góp và chia sẻ nguồn lực cộng đồng thường thiếu công cụ công khai minh bạch và khó theo dõi hành trình của từng đóng góp.',
    problemStatementEn: 'Grassroots community campaigns frequently lack transparent tracking mechanisms to demonstrate tangible impact to contributors.',
    approachVi: 'Thiết kế luồng trải nghiệm đơn giản, minh bạch từng hoạt động đóng góp và kết nối người cho - người nhận thông qua hệ thống định vị thông minh.',
    approachEn: 'Designing a lightweight, accessible workflow with public impact logs and location-aware resource matching.',
    keyFeaturesVi: [
      'Bảng tin hoạt động cộng đồng cập nhật thời gian thực',
      'Định vị các điểm hỗ trợ gần nhất trên bản đồ số',
      'Quy trình xác minh thông tin nghiêm ngặt',
      'Tính năng chia sẻ câu chuyện truyền cảm hứng'
    ],
    keyFeaturesEn: [
      'Real-time civic impact newsfeed with verifiable media',
      'Geospatial proximity locator for regional drop-off centers',
      'Multi-stage identity and project verification workflow',
      'Inspiring editorial storytelling module for social amplification'
    ],
    expectedImpactVi: 'Lan tỏa giá trị nhân văn và gia tăng niềm tin cho các hoạt động thiện nguyện xã hội.',
    expectedImpactEn: 'Enhances civic trust and transparency for social and humanitarian initiatives.'
  },
  {
    id: 'rgp-concept',
    slug: 'rgp-realtime-interactive-performance',
    name: 'RGP (Real-time Gaming & Performance)',
    category: 'software',
    categoryLabelVi: 'Phần mềm & Tương tác',
    categoryLabelEn: 'Software & Interaction',
    shortDescriptionVi: 'Bộ công cụ tương tác thời gian thực dành cho sân khấu sự kiện, minigame trường quay và visual âm thanh ánh sáng.',
    shortDescriptionEn: 'Real-time interactive engine powering live event stages, audience studio minigames, and responsive visual triggers.',
    fullDescriptionVi: 'RGP là giải pháp kết nối trực tiếp giữa khán giả tại khán phòng với màn hình LED sân khấu thông qua điện thoại thông minh, biến hàng nghìn khán giả thành những người tham gia tích cực vào màn trình diễn nghệ thuật.',
    fullDescriptionEn: 'RGP links thousands of in-venue audience smartphones directly with stage LED displays in real-time, transforming passive attendees into active participants in spatial performances.',
    coverImage: '/src/assets/images/creative_event_production_1793900285613.jpg',
    gallery: [
      '/src/assets/images/creative_event_production_1793900285613.jpg',
      '/src/assets/images/hero_digital_ecosystem_1793900282776.jpg'
    ],
    capabilitiesVi: ['Truyền thông WebSockets độ trễ siêu thấp', 'Đồ họa Canvas tương tác', 'Điều khiển phần cứng DMX / OSC'],
    capabilitiesEn: ['Ultra-low Latency WebSockets', 'Interactive Canvas Rendering', 'DMX / OSC Hardware Bridge'],
    technologies: ['WebSockets', 'Canvas API', 'Node.js', 'OSC Protocol', 'TypeScript'],
    status: 'In Development',
    publicationApproved: false,
    isConceptDemo: true,
    verificationNoticeVi: 'Dự án ứng viên — Nghiên cứu thử nghiệm công nghệ tương tác thời gian thực tại sự kiện.',
    verificationNoticeEn: 'Candidate Project — Experimental research into ultra-low latency live audience interaction.',
    problemStatementVi: 'Khán giả xem sự kiện thường ở thế bị động, thiếu sự tương tác hai chiều với nghệ sĩ và sân khấu.',
    problemStatementEn: 'Live audience engagement remains one-way and passive, missing opportunities for direct interactive dialogue.',
    approachVi: 'Sử dụng WebSockets truyền tín hiệu hai chiều với độ trễ < 50ms, cho phép khán giả bình chọn, lắc điện thoại để tạo hiệu ứng ánh sáng đồng bộ trên toàn bộ khán phòng.',
    approachEn: 'Deploying sub-50ms WebSockets allowing attendees to sync their phone flashlights and participate in arena-scale interactive visual games.',
    keyFeaturesVi: [
      'Khả năng chịu tải 5,000+ kết nối đồng thời trong cùng một khán phòng',
      'Tương tác không cần cài đặt ứng dụng (Chỉ cần quét QR vào WebApp)',
      'Đồng bộ tín hiệu điều khiển ánh sáng sân khấu DMX',
      'Bảng xếp hạng trực tiếp trên màn hình LED chính'
    ],
    keyFeaturesEn: [
      'Tested to sustain 5,000+ concurrent local WebSocket connections',
      'Frictionless web-based access requiring no app store downloads',
      'Direct OSC/DMX stage lighting trigger bridge',
      'Real-time arena leaderboards rendered onto central LED displays'
    ],
    expectedImpactVi: 'Tạo nên những khoảnh khắc bùng nổ cảm xúc và ấn tượng công nghệ đột phá cho các sự kiện lớn.',
    expectedImpactEn: 'Delivers electrifying crowd synchronization moments at marquee tech and entertainment festivals.'
  }
];
