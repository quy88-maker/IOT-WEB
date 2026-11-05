import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-software',
    slug: 'custom-software-development',
    pillar: 'technology',
    titleVi: 'Phát triển phần mềm theo yêu cầu',
    titleEn: 'Custom Software Development',
    shortDescVi: 'Kiến trúc và lập trình các hệ sinh thái phần mềm doanh nghiệp, APIs, và ứng dụng nghiệp vụ quy mô lớn.',
    shortDescEn: 'Architecting and developing resilient enterprise software ecosystems, APIs, and mission-critical workflows.',
    fullDescVi: 'IOT mang đến giải pháp phát triển phần mềm toàn trình từ phân tích nghiệp vụ, thiết kế kiến trúc hệ thống phân tán, xây dựng backend/frontend chuẩn mực, cho đến bảo mật và triển khai đám mây. Chúng tôi ưu tiên kiến trúc mở, khả năng mở rộng linh hoạt và mã nguồn sạch.',
    fullDescEn: 'IOT delivers full-lifecycle software engineering from domain analysis, distributed systems architecture, robust backend/frontend implementation, to cloud deployment and hardening.',
    iconName: 'Code2',
    heroImage: '/src/assets/images/project_cms99_1793900285940.jpg',
    targetAudienceVi: [
      'Doanh nghiệp cần tự động hóa quy trình nghiệp vụ đặc thù',
      'Tập đoàn muốn nâng cấp hệ thống phần mềm legacy lên cloud-native',
      'Tổ chức cần nền tảng quản trị dữ liệu tập trung'
    ],
    targetAudienceEn: [
      'Enterprises needing custom operational automation',
      'Corporations migrating legacy architectures to cloud-native platforms',
      'Organizations requiring centralized data control planes'
    ],
    challengesVi: [
      'Hệ thống cũ rời rạc, khó đồng bộ dữ liệu giữa các phòng ban',
      'Phần mềm đóng gói thương mại không đáp ứng các quy chuẩn đặc thù',
      'Tắc nghẽn hiệu năng khi số lượng người dùng và giao dịch tăng cao'
    ],
    challengesEn: [
      'Fragmented legacy software unable to sync inter-departmental data',
      'Commercial off-the-shelf software lacking domain-specific customization',
      'Performance bottlenecks under scaling traffic and transaction volume'
    ],
    solutionsVi: [
      'Kiến trúc Microservices / Modular Monolith linh hoạt',
      'Thiết kế RESTful & GraphQL API chuẩn hóa kết nối',
      'Tối ưu cơ sở dữ liệu quan hệ và phi quan hệ với độ trễ thấp',
      'Hệ thống CI/CD tự động và giám sát vận hành 24/7'
    ],
    solutionsEn: [
      'Scalable Microservices / Modular Monolith architecture',
      'Standardized RESTful & GraphQL API gateway design',
      'Low-latency relational and NoSQL database optimization',
      'Automated CI/CD pipelines with comprehensive telemetry'
    ],
    processStepsVi: [
      { step: '01', title: 'Khảo sát & Phân tích', desc: 'Làm rõ các luồng nghiệp vụ, ranh giới dữ liệu và yêu cầu phi chức năng.' },
      { step: '02', title: 'Thiết kế Kiến trúc', desc: 'Xây dựng sơ đồ thực thể (ERD), API specifications và kiến trúc bảo mật.' },
      { step: '03', title: 'Phát triển Agile', desc: 'Triển khai qua các Sprint 2 tuần với demo thực tế và mã nguồn kiểm thử tự động.' },
      { step: '04', title: 'Kiểm thử & UAT', desc: 'Stress test, bảo mật lỗ hổng và kiểm thử chấp nhận người dùng.' },
      { step: '05', title: 'Bàn giao & Vận hành', desc: 'Chuyển giao tài liệu kỹ thuật, đào tạo nhân sự và bảo trì định kỳ.' }
    ],
    processStepsEn: [
      { step: '01', title: 'Discovery & Domain Modeling', desc: 'Clarifying business logic workflows, data boundaries, and non-functional requirements.' },
      { step: '02', title: 'Architecture Blueprint', desc: 'Establishing ERD models, OpenAPI specifications, and security policies.' },
      { step: '03', title: 'Agile Engineering', desc: 'Executing 2-week sprints with verifiable builds and automated test coverage.' },
      { step: '04', title: 'Testing & Stress Validation', desc: 'Load testing, vulnerability scans, and user acceptance verification.' },
      { step: '05', title: 'Deployment & Continuity', desc: 'Technical documentation handover, training, and SLA maintenance.' }
    ],
    keyFeaturesVi: [
      'Mã nguồn sạch, tuân thủ Clean Architecture và SOLID',
      'Hệ thống phân quyền chi tiết Role-based Access Control (RBAC)',
      'Tích hợp xác thực đa yếu tố (MFA, SSO, OAuth2)',
      'Giao diện quản trị Admin trực quan, responsive'
    ],
    keyFeaturesEn: [
      'Clean codebase adhering to Clean Architecture & SOLID principles',
      'Granular Role-based Access Control (RBAC) governance',
      'Multi-factor authentication integration (MFA, SSO, OAuth2)',
      'Modern, highly responsive administrative portals'
    ],
    deliverablesVi: [
      'Mã nguồn hoàn chỉnh có phiên bản kiểm soát Git',
      'Tài liệu đặc tả kiến trúc và API Swagger / OpenAPI',
      'Môi trường triển khai Docker / Kubernetes trên Cloud',
      'Chính sách bảo hành và cam kết dịch vụ SLA'
    ],
    deliverablesEn: [
      'Complete Git repository with branch governance',
      'Architecture documentation and OpenAPI/Swagger specifications',
      'Containerized Docker/Kubernetes deployment manifests',
      'SLA warranty and continuous maintenance guidelines'
    ],
    faqsVi: [
      {
        question: 'Thời gian phát triển một hệ thống phần mềm mất bao lâu?',
        answer: 'Tùy thuộc vào quy mô tính năng, một dự án MVP thường từ 6–10 tuần, trong khi các hệ thống phức tạp cấp doanh nghiệp kéo dài từ 3–6 tháng.'
      },
      {
        question: 'Doanh nghiệp có sở hữu toàn bộ bản quyền mã nguồn không?',
        answer: 'Có, toàn bộ mã nguồn, cơ sở dữ liệu và tài liệu kiến trúc được chuyển giao quyền sở hữu hoàn toàn cho khách hàng khi hoàn tất hợp đồng.'
      }
    ],
    faqsEn: [
      {
        question: 'How long does a typical software project take?',
        answer: 'Depending on feature scope, an MVP typically requires 6–10 weeks, while enterprise-grade systems span 3–6 months.'
      },
      {
        question: 'Does the client own 100% of the intellectual property?',
        answer: 'Yes, full source code ownership, database schemas, and documentation are transferred to the client upon milestone delivery.'
      }
    ],
    relatedProjects: ['cms99', 'rgp-concept']
  },
  {
    id: 'digital-platforms',
    slug: 'digital-platforms-web-mobile',
    pillar: 'technology',
    titleVi: 'Xây dựng nền tảng số & Ứng dụng Web / Mobile',
    titleEn: 'Digital Platforms & Web/Mobile Apps',
    shortDescVi: 'Nền tảng giao dịch trực tuyến, bán vé điện tử, cổng thông tin thành phố và ứng dụng di động hiệu năng cao.',
    shortDescEn: 'Scalable e-ticketing portals, digital community exchanges, and high-performance cross-platform mobile apps.',
    fullDescVi: 'Chúng tôi phát triển các nền tảng số có khả năng xử lý hàng triệu lượt truy cập đồng thời, tích hợp cổng thanh toán trực tuyến, quét mã QR thời gian thực và quản lý vé thông minh cho các sự kiện tầm cỡ.',
    fullDescEn: 'Engineering resilient digital platforms capable of sustaining peak concurrent users, automated payment reconciliation, and real-time QR ticketing verification.',
    iconName: 'Smartphone',
    heroImage: '/src/assets/images/project_ticket99_1793900284431.jpg',
    targetAudienceVi: [
      'Ban tổ chức sự kiện, biểu diễn âm nhạc, giải đấu thể thao',
      'Doanh nghiệp dịch vụ muốn cung cấp ứng dụng tự phục vụ (Self-service)',
      'Các tổ chức quản lý địa điểm du lịch, vui chơi giải trí'
    ],
    targetAudienceEn: [
      'Event organizers, musical festivals, and sporting tournaments',
      'Service businesses providing customer self-service applications',
      'Destination, tourism, and entertainment management operators'
    ],
    challengesVi: [
      'Nghẽn mạng khi mở bán vé đợt cao điểm với hàng nghìn truy cập mỗi giây',
      'Gian lận vé giả, sao chép mã QR không kiểm soát được',
      'Đồng bộ dữ liệu thời gian thực giữa thiết bị quét tại cổng và máy chủ'
    ],
    challengesEn: [
      'Server downtime during flash ticketing drops with thousands of requests/sec',
      'Counterfeit ticket fraud and duplicate barcode reuse',
      'Sub-second synchronization between handheld gate scanners and cloud databases'
    ],
    solutionsVi: [
      'Kiến trúc hàng đợi phân tán (Message Queue) ngăn sập hệ thống',
      'Mã QR động có cơ chế chống chụp màn hình và mã hóa token xoay vòng',
      'Ứng dụng di động quét vé có chế độ Offline Cache thông minh'
    ],
    solutionsEn: [
      'Distributed message queuing preventing server overload during flash drops',
      'Dynamic rolling QR tokens preventing screenshot fraud',
      'Mobile scanning apps featuring offline cache resilience'
    ],
    processStepsVi: [
      { step: '01', title: 'Đặc tả Trải nghiệm', desc: 'Thiết kế hành trình mua sắm, check-in và nhận diện vé mượt mà.' },
      { step: '02', title: 'Phát triển Core Engine', desc: 'Xây dựng engine giữ chỗ (Seat-booking), tính cước và thanh toán.' },
      { step: '03', title: 'Ứng dụng Gate & Scanner', desc: 'Lập trình ứng dụng di động cho nhân viên kiểm soát tại cửa ra vào.' },
      { step: '04', title: 'Kiểm tra Tải cao điểm', desc: 'Mô phỏng 10,000+ kết nối đồng thời để tinh chỉnh cơ sở hạ tầng.' }
    ],
    processStepsEn: [
      { step: '01', title: 'UX Journey Blueprint', desc: 'Mapping seamless purchase, checkout, and gate check-in workflows.' },
      { step: '02', title: 'Core Engine Build', desc: 'Developing seat-selection engine, price calculation, and payment gateways.' },
      { step: '03', title: 'Gate Scanner App', desc: 'Deploying high-speed mobile verification apps for checkpoint staff.' },
      { step: '04', title: 'Load Simulation', desc: 'Simulating 10,000+ concurrent checkouts to benchmark and optimize infra.' }
    ],
    keyFeaturesVi: [
      'Xử lý giao dịch tức thì qua thẻ nội địa, quốc tế, ví điện tử',
      'Check-in < 0.5 giây / lượt khách qua máy quét',
      'Báo cáo dòng tiền và số lượng check-in theo thời gian thực',
      'Hỗ trợ ứng dụng iOS, Android và PWA'
    ],
    keyFeaturesEn: [
      'Instant settlement across domestic/international cards and e-wallets',
      'Sub-0.5s check-in gate scanning speed',
      'Live revenue dashboards and checkpoint throughput telemetry',
      'Native iOS, Android, and progressive web application support'
    ],
    deliverablesVi: [
      'Cổng bán vé web responsive & Ứng dụng di động',
      'App quét mã kiểm soát vé cho đội ngũ vận hành',
      'Dashboard quản trị doanh thu và khách tham dự'
    ],
    deliverablesEn: [
      'Responsive web booking portal & mobile client apps',
      'Staff checkpoint scanning app with hardware laser/camera support',
      'Real-time operations and analytics dashboard'
    ],
    faqsVi: [
      {
        question: 'Hệ thống có hoạt động khi mất kết nối mạng Internet tại sự kiện không?',
        answer: 'Có, các thiết bị quét được trang bị cơ chế đồng bộ cục bộ (Local Mesh / Offline Sync), tự động đối chiếu vé và đồng bộ lên Cloud ngay khi có kết nối trở lại.'
      }
    ],
    faqsEn: [
      {
        question: 'Does the gate verification app work without active internet?',
        answer: 'Yes, handheld scanning units utilize encrypted offline caching, syncing entries back to the cloud the moment connectivity resumes.'
      }
    ],
    relatedProjects: ['ticket99', 'traotrao']
  },
  {
    id: 'digital-maps-gis',
    slug: 'digital-maps-gis-solutions',
    pillar: 'technology',
    titleVi: 'Giải pháp bản đồ số & GIS thông minh',
    titleEn: 'Smart GIS & Digital Map Solutions',
    shortDescVi: 'Số hóa dữ liệu địa lý, bản đồ du lịch thông minh, định vị điểm đến và hệ thống quy hoạch không gian.',
    shortDescEn: 'Geospatial data digitization, smart provincial tourism GIS, and spatial planning visualization.',
    fullDescVi: 'Nền tảng GIS của IOT cung cấp năng lực dựng bản đồ số 2D/3D tương tác cao, kết nối dữ liệu danh lam thắng cảnh, cơ sở lưu trú, tuyến đường giao thông và tiện ích công cộng cho các tỉnh thành và khu đô thị.',
    fullDescEn: 'IOT GIS platforms deliver high-interactivity 2D/3D geospatial visualization, linking tourism landmarks, hospitality providers, transport corridors, and public amenities for smart provinces.',
    iconName: 'Map',
    heroImage: '/src/assets/images/project_izmap_1793900285032.jpg',
    targetAudienceVi: [
      'Sở Văn hóa, Thể thao và Du lịch các tỉnh, thành phố',
      'Ban quản lý di sản, khu du lịch sinh thái và công viên quốc gia',
      'Doanh nghiệp bất động sản và logistics cần bản đồ phân tích không gian'
    ],
    targetAudienceEn: [
      'Provincial departments of culture, tourism, and spatial development',
      'Heritage conservation authorities and national park administrations',
      'Real estate developers and logistics networks requiring spatial analytics'
    ],
    challengesVi: [
      'Dữ liệu du lịch phân tán trên nhiều tài liệu giấy hoặc cổng thông tin cũ',
      'Bản đồ thương mại đại trà thiếu chiều sâu văn hóa bản địa và dữ liệu hành chính',
      'Khó khăn trong việc cập nhật sự kiện, cảnh báo thời tiết và dẫn đường chuyên biệt'
    ],
    challengesEn: [
      'Scattered destination data trapped across paper archives and legacy portals',
      'Commercial consumer maps lack provincial depth, cultural context, and official boundaries',
      'Inability to broadcast dynamic emergency advisories and curated tourist trails'
    ],
    solutionsVi: [
      'Nền tảng WebGIS và Mobile GIS với lớp dữ liệu địa lý đa tầng',
      'Hệ thống quản lý điểm đến (POI) phân cấp theo địa bàn hành chính',
      'Dẫn đường thông minh tối ưu theo phương tiện và thời tiết địa phương',
      'Thuyết minh tự động bằng âm thanh (Audio Guide) theo tọa độ GPS'
    ],
    solutionsEn: [
      'Multi-layered interactive WebGIS and Mobile GIS spatial stack',
      'Hierarchical Point-of-Interest (POI) management mapped to administrative units',
      'Weather-aware route optimization tailored for provincial travel corridors',
      'GPS-triggered automated multilingual audio guides'
    ],
    processStepsVi: [
      { step: '01', title: 'Thu thập & Khảo sát Địa lý', desc: 'Đo đạc, số hóa tọa độ GPS và biên tập nội dung điểm đến.' },
      { step: '02', title: 'Xây dựng Cơ sở Dữ liệu GIS', desc: 'Thiết lập PostGIS / GeoServer với các lớp bản đồ vector và raster.' },
      { step: '03', title: 'Thiết kế Giao diện Trải nghiệm', desc: 'Tạo bản đồ tương tác mượt mà trên trình duyệt và ứng dụng di động.' },
      { step: '04', title: 'Tích hợp Dịch vụ Thông minh', desc: 'Đồng bộ dữ liệu thời tiết, đặt phòng khách sạn và dịch vụ lữ hành.' }
    ],
    processStepsEn: [
      { step: '01', title: 'Geospatial Survey', desc: 'Field GPS coordinate mapping and cultural narrative curation.' },
      { step: '02', title: 'Spatial DB Setup', desc: 'Configuring PostGIS / GeoServer vector and raster tile infrastructure.' },
      { step: '03', title: 'Interactive Map UI', desc: 'Engineering fast 60fps vector tile rendering for mobile and web.' },
      { step: '04', title: 'Smart Ecosystem Sync', desc: 'Connecting live weather alerts, hospitality booking, and itinerary planning.' }
    ],
    keyFeaturesVi: [
      'Tải bản đồ nhanh chuẩn Vector Tiles với dung lượng tối ưu',
      'Chế độ xem bản đồ vệ tinh, địa hình 3D và lớp quy hoạch',
      'Tìm kiếm điểm đến theo danh mục: Ẩm thực, Di tích, Lưu trú, Khẩn cấp',
      'Hỗ trợ chế độ offline cho vùng núi xa không có sóng điện thoại'
    ],
    keyFeaturesEn: [
      'High-speed Vector Tile streaming with minimal network footprint',
      'Satellite photography, 3D terrain elevation, and administrative boundary overlays',
      'Categorized spatial search: Heritage, Culinary, Lodging, Emergency Services',
      'Full offline map caching for mountainous trails without cellular reception'
    ],
    deliverablesVi: [
      'Hệ thống Bản đồ số tương tác trên Web và Mobile',
      'Cổng thông tin quản trị dữ liệu POI cho cán bộ phụ trách',
      'Bộ tài liệu API mở phục vụ tích hợp các ứng dụng chính quyền số'
    ],
    deliverablesEn: [
      'Interactive Web and Mobile GIS Provincial Applications',
      'Administrative POI CMS with role-based editing permissions',
      'Open GIS API documentation for municipal data exchange'
    ],
    faqsVi: [
      {
        question: 'Dữ liệu bản đồ có đảm bảo tuân thủ quy định đo đạc bản đồ Việt Nam?',
        answer: 'Hệ thống bản đồ của chúng tôi tuân thủ nghiêm ngặt hệ quy chiếu VN-2000 và các quy chuẩn hiển thị chủ quyền lãnh thổ theo quy định hiện hành.'
      }
    ],
    faqsEn: [
      {
        question: 'Does the mapping system comply with Vietnamese geographic regulations?',
        answer: 'Yes, our platforms strictly adhere to the VN-2000 coordinate reference system and national boundary display mandates.'
      }
    ],
    relatedProjects: ['izmap-icaobang']
  },
  {
    id: 'comm-strategy',
    slug: 'communication-strategy',
    pillar: 'creative',
    titleVi: 'Chiến lược truyền thông tổng thể',
    titleEn: 'Comprehensive Communication Strategy',
    shortDescVi: 'Xây dựng thông điệp định vị, hoạch định kế hoạch truyền thông tích hợp (IMC) và quản trị danh tiếng thương hiệu.',
    shortDescEn: 'Crafting brand positioning architectures, integrated marketing communications (IMC), and corporate reputation management.',
    fullDescVi: 'Chúng tôi giúp doanh nghiệp xác lập câu chuyện thương hiệu độc bản, lựa chọn kênh truyền thông chính xác và triển khai các chiến dịch có chiều sâu, mang lại sự gắn kết bền chặt với công chúng mục tiêu.',
    fullDescEn: 'Helping brands define their authentic identity narrative, selecting high-resonance communication channels, and executing multi-phase campaigns that drive lasting audience alignment.',
    iconName: 'Compass',
    heroImage: '/src/assets/images/hero_digital_ecosystem_1793900282776.jpg',
    targetAudienceVi: [
      'Doanh nghiệp chuẩn bị ra mắt sản phẩm hoặc mở rộng thị trường',
      'Tổ chức cần tái định vị thương hiệu hiện đại hơn',
      'Doanh nghiệp mong muốn thiết lập tiếng nói thương hiệu nhất quán trên mọi điểm chạm'
    ],
    targetAudienceEn: [
      'Enterprises launching new product lines or expanding territory',
      'Corporations undergoing modern brand repositioning',
      'Organizations seeking voice and message consistency across all touchpoints'
    ],
    challengesVi: [
      'Thông điệp rời rạc, thiếu sự khác biệt so với đối thủ cạnh tranh',
      'Chi phí truyền thông dàn trải nhưng không đo lường được hiệu quả chuyển đổi',
      'Thiếu kịch bản ứng phó trước các biến động khủng hoảng truyền thông'
    ],
    challengesEn: [
      'Fragmented messaging without distinct differentiation from competitors',
      'Scattered media spend without transparent return on objective measurement',
      'Absence of structured crisis protocols during media volatility'
    ],
    solutionsVi: [
      'Nghiên cứu thị trường và phân tích insight khách hàng bằng dữ liệu',
      'Xây dựng kiến trúc thông điệp (Brand Key & Messaging House)',
      'Lập kế hoạch phân bổ ngân sách truyền thông đa kênh khoa học',
      'Quy trình quản trị khủng hoảng và bảo vệ danh tiếng thương hiệu'
    ],
    solutionsEn: [
      'Data-backed audience research and ethnographic insight synthesis',
      'Messaging House and Brand Key architecture formulation',
      'Algorithmic multi-channel media mix and budget optimization',
      'Proactive reputation monitoring and crisis containment playbook'
    ],
    processStepsVi: [
      { step: '01', title: 'Đánh giá Hiện trạng', desc: 'Audit toàn diện thương hiệu, đối thủ cạnh tranh và cảm nhận thị trường.' },
      { step: '02', title: 'Xác lập Định vị', desc: 'Định hình Proposition độc bản và thông điệp hạt nhân.' },
      { step: '03', title: 'Chiến lược Kênh (IMC)', desc: 'Lập bản đồ phân phối nội dung trên Paid, Owned, Earned Media.' },
      { step: '04', title: 'Triển khai & Đo lường', desc: 'Theo dõi chỉ số nhận diện, thảo luận (Share of Voice) và tối ưu liên tục.' }
    ],
    processStepsEn: [
      { step: '01', title: 'Brand Audit', desc: 'Comprehensive analysis of brand health, competitive landscape, and market sentiment.' },
      { step: '02', title: 'Positioning Anchor', desc: 'Establishing core brand value proposition and singular master narrative.' },
      { step: '03', title: 'IMC Channel Matrix', desc: 'Mapping content orchestration across Paid, Owned, and Earned Media.' },
      { step: '04', title: 'Execution & Measurement', desc: 'Tracking brand equity, Share of Voice, and agile iteration.' }
    ],
    keyFeaturesVi: [
      'Bộ tài liệu Brand Guidelines và Message Architecture chuẩn chỉnh',
      'Kế hoạch hành động chi tiết theo từng quý (Actionable Timeline)',
      'Bộ chỉ số KPI đo lường hiệu quả cụ thể',
      'Khung thông điệp tương thích từng nhóm khách hàng'
    ],
    keyFeaturesEn: [
      'Comprehensive Brand Guidelines and Message Architecture master book',
      'Quarterly operational timelines with clear milestone gates',
      'Concrete ROI and brand recall KPI frameworks',
      'Segmented messaging variants for diverse stakeholder profiles'
    ],
    deliverablesVi: [
      'Chiến lược truyền thông tổng thể (Master Strategy Book)',
      'Kế hoạch sản xuất nội dung và phân phối kênh',
      'Bộ quy chuẩn ứng phó khủng hoảng truyền thông'
    ],
    deliverablesEn: [
      'Master Strategic Communication Roadmap',
      'Content Production and Distribution Calendar',
      'Crisis Management and Media Protocol Playbook'
    ],
    faqsVi: [
      {
        question: 'Chiến lược truyền thông có bao gồm khâu sản xuất nội dung thực tế không?',
        answer: 'Chúng tôi cung cấp cả gói tư vấn chiến lược thuần túy hoặc gói trọn gói bao gồm sản xuất nội dung sáng tạo và vận hành kênh.'
      }
    ],
    faqsEn: [
      {
        question: 'Does communication strategy include creative content execution?',
        answer: 'We provide both dedicated strategic advisory engagements and turnkey retainers covering full creative production and media buying.'
      }
    ],
    relatedProjects: ['km99', 'traotrao']
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    pillar: 'creative',
    titleVi: 'Tiếp thị số & Tăng trưởng (Digital Marketing)',
    titleEn: 'Performance & Digital Marketing',
    shortDescVi: 'Tối ưu hóa chiến dịch quảng cáo đa nền tảng, SEO chuyên sâu, tự động hóa phễu tiếp thị và phân tích dữ liệu.',
    shortDescEn: 'Multi-platform performance advertising, technical SEO, marketing automation funnels, and data attribution.',
    fullDescVi: 'Kết hợp tư duy dữ liệu và nội dung sáng tạo để tối đa hóa tỷ lệ chuyển đổi, giảm thiểu chi phí thu nạp khách hàng (CAC) và duy trì sự tăng trưởng bền vững cho sản phẩm số và thương hiệu.',
    fullDescEn: 'Bridging computational data science with creative storytelling to maximize conversion rates, reduce acquisition costs, and drive sustainable growth loops.',
    iconName: 'TrendingUp',
    heroImage: '/src/assets/images/project_ticket99_1793900284431.jpg',
    targetAudienceVi: [
      'Doanh nghiệp B2B muốn thu thập Lead chất lượng cao',
      'Nền tảng thương mại điện tử cần tăng trưởng doanh số và đơn hàng',
      'Startup công nghệ cần thu hút người dùng cho ứng dụng mới'
    ],
    targetAudienceEn: [
      'B2B firms seeking qualified enterprise lead pipelines',
      'E-commerce brands scaling transaction volume and order values',
      'Tech startups driving customer acquisition for digital applications'
    ],
    challengesVi: [
      'Chi phí quảng cáo ngày càng đắt đỏ do cạnh tranh khốc liệt',
      'Không xác định được kênh mang lại doanh thu thực tế (Mất dấu Attribution)',
      'Nội dung quảng cáo nhanh chóng bị bão hòa, tỷ lệ nhấp chuột giảm sút'
    ],
    challengesEn: [
      'Escalating cost-per-click across crowded digital advertising channels',
      'Attribution loss making it difficult to pinpoint genuine revenue drivers',
      'Creative fatigue leading to declining click-through rates'
    ],
    solutionsVi: [
      'Mô hình phân bổ đa điểm chạm (Multi-touch Attribution)',
      'Tự động hóa tiếp thị (Marketing Automation & Nurturing Sequences)',
      'Thử nghiệm A/B Testing liên tục về tiêu đề, hình ảnh và landing page',
      'SEO kỹ thuật và tối ưu công cụ tìm kiếm hữu cơ lâu dài'
    ],
    solutionsEn: [
      'Multi-touch conversion attribution models',
      'Automated marketing funnels and lifecycle email nurturing',
      'Continuous A/B testing across headlines, visual assets, and landing pages',
      'Technical SEO and programmatic organic visibility architectures'
    ],
    processStepsVi: [
      { step: '01', title: 'Cài đặt Hạ tầng Dữ liệu', desc: 'Thiết lập Pixel, Google Analytics 4, Server-side Tracking chuẩn xác.' },
      { step: '02', title: 'Xây dựng Phễu Chuyển đổi', desc: 'Thiết kế landing page tốc độ cao và luồng tương tác người dùng.' },
      { step: '03', title: 'Chạy Thử nghiệm & Scale', desc: 'Triển khai quảng cáo trên Meta, Google, LinkedIn và tối ưu bid giá.' },
      { step: '04', title: 'Phân tích & Tinh chỉnh', desc: 'Báo cáo hàng tuần với chỉ số ROI, CPA, LTV minh bạch.' }
    ],
    processStepsEn: [
      { step: '01', title: 'Data Plumbing', desc: 'Deploying server-side tracking, GA4 measurement protocols, and event tagging.' },
      { step: '02', title: 'Funnel Optimization', desc: 'Engineering sub-second landing pages and frictionless conversion funnels.' },
      { step: '03', title: 'Testing & Scaling', desc: 'Executing paid campaigns across Meta, Google, LinkedIn with dynamic bidding.' },
      { step: '04', title: 'Analytics & Iteration', desc: 'Weekly transparent reporting with explicit CAC, ROAS, and LTV metrics.' }
    ],
    keyFeaturesVi: [
      'Báo cáo tự động hóa Dashboard theo thời gian thực',
      'Tích hợp CRM giúp đội ngũ kinh doanh chốt đơn nhanh chóng',
      'Tối ưu tỷ lệ chuyển đổi (CRO) dựa trên hành vi bản đồ nhiệt',
      'Tuân thủ bảo mật dữ liệu người dùng'
    ],
    keyFeaturesEn: [
      'Real-time automated marketing analytics dashboards',
      'Direct CRM integration routing hot leads to sales representatives',
      'Conversion Rate Optimization (CRO) guided by user heatmaps',
      'Full privacy compliance with international data standards'
    ],
    deliverablesVi: [
      'Hệ thống tài khoản và chiến dịch quảng cáo tối ưu',
      'Bộ Landing page hiệu năng cao phục vụ chuyển đổi',
      'Báo cáo phân tích hiệu quả chi phí định kỳ'
    ],
    deliverablesEn: [
      'Fully calibrated multi-platform ad accounts and campaign architecture',
      'High-speed conversion landing pages',
      'Periodic executive performance and attribution reports'
    ],
    faqsVi: [
      {
        question: 'Ngân sách quảng cáo có trả trực tiếp cho các nền tảng không?',
        answer: 'Đúng vậy, ngân sách quảng cáo được thanh toán trực tiếp cho Google / Meta bằng thẻ của doanh nghiệp, chúng tôi thu phí dịch vụ quản lý và tối ưu minh bạch.'
      }
    ],
    faqsEn: [
      {
        question: 'Is media spend billed directly to advertising platforms?',
        answer: 'Yes, ad spend is settled directly with Google/Meta using your corporate card, with our transparent management retainer billed separately.'
      }
    ],
    relatedProjects: ['km99', 'ticket99']
  },
  {
    id: 'creative-event-production',
    slug: 'event-production-creative',
    pillar: 'creative',
    titleVi: 'Sản xuất sự kiện & Trải nghiệm sáng tạo',
    titleEn: 'Event Production & Creative Experiences',
    shortDescVi: 'Tổ chức hội nghị công nghệ, lễ ra mắt sản phẩm, sân khấu nghệ thuật tương tác và sản xuất nội dung visual.',
    shortDescEn: 'Technology summits, flagship product reveals, interactive spatial stages, and high-impact visual direction.',
    fullDescVi: 'Biến mỗi sự kiện thành một trải nghiệm công nghệ đáng nhớ. Chúng tôi tích hợp màn hình LED cong không gian, hiệu ứng ánh sáng đồng bộ, công nghệ check-in thông minh và sản xuất video visual đỉnh cao.',
    fullDescEn: 'Transforming corporate gatherings into unforgettable technological experiences. Integrating curved LED spatial canvases, synchronized lighting, smart check-in gates, and premier visual production.',
    iconName: 'Sparkles',
    heroImage: '/src/assets/images/creative_event_production_1793900285613.jpg',
    targetAudienceVi: [
      'Tập đoàn tổ chức đại hội khách hàng hoặc hội nghị thường niên',
      'Hãng công nghệ ra mắt sản phẩm mới tại Việt Nam',
      'Đơn vị tổ chức lễ hội âm nhạc và chương trình nghệ thuật quy mô lớn'
    ],
    targetAudienceEn: [
      'Enterprises staging customer summits or annual conventions',
      'Tech hardware/software brands launching flagship products in Vietnam',
      'Producers of music festivals and spatial entertainment productions'
    ],
    challengesVi: [
      'Sự kiện lặp lại khuôn mẫu cũ, thiếu yếu tố công nghệ và tương tác',
      'Ùn tắc nghiêm trọng tại sảnh đón khách khi kiểm tra vé hoặc phát thẻ đeo',
      'Thiếu kịch bản visual sân khấu đồng bộ với nội dung bài thuyết trình'
    ],
    challengesEn: [
      'Formulaic event formats lacking modern technological immersion and attendee interaction',
      'Severe bottleneck at reception desks during badge distribution and ticket scans',
      'Visual stage cues out of sync with keynote presentations'
    ],
    solutionsVi: [
      'Sân khấu công nghệ với visual 3D motion sống động',
      'Cổng check-in thông minh với tốc độ quét < 0.5 giây / người',
      'Trải nghiệm tương tác tại sảnh chờ (Interactive Exhibition Booth)',
      'Hệ thống livestream đa góc máy chất lượng phát sóng 4K'
    ],
    solutionsEn: [
      'Architectural stage engineering with custom 3D motion design',
      'Sub-0.5s automated barcode check-in gates and badge printing',
      'Interactive pre-function exhibition installations',
      'Multi-camera 4K broadcast-grade live streaming infrastructure'
    ],
    processStepsVi: [
      { step: '01', title: 'Ý tưởng & Concept', desc: 'Xây dựng chủ đề (Theme), Key Visual và mô phỏng 3D sân khấu không gian.' },
      { step: '02', title: 'Sản xuất Visual & Âm thanh', desc: 'Dựng video mở màn, motion graphics và nhạc hiệu chương trình độc quyền.' },
      { step: '03', title: 'Lắp đặt & Rehearsal', desc: 'Thi công sân khấu, cân chỉnh ánh sáng, âm thanh và tổng duyệt kịch bản.' },
      { step: '04', title: 'Vận hành Chính thức', desc: 'Điều phối sân khấu chuyên nghiệp với đội ngũ đạo diễn và kỹ thuật viên.' }
    ],
    processStepsEn: [
      { step: '01', title: 'Concept & 3D Spatial Previz', desc: 'Developing the master theme, Key Visual, and 3D architectural stage rendering.' },
      { step: '02', title: 'Visual & Audio Assets', desc: 'Producing opening intro videos, dynamic motion loops, and custom sonic branding.' },
      { step: '03', title: 'Rigging & Technical Rehearsal', desc: 'Stage assembly, LED calibration, audio engineering, and full dress rehearsal.' },
      { step: '04', title: 'Live Execution', desc: 'Precision stage direction and operations supported by veteran technical crew.' }
    ],
    keyFeaturesVi: [
      'Hệ thống âm thanh ánh sáng đạt tiêu chuẩn quốc tế',
      'Đội ngũ đạo diễn sân khấu và biên tập nội dung giàu kinh nghiệm',
      'Tích hợp công nghệ bán vé Ticket99 và quản lý khách mời khép kín',
      'Gói truyền thông trước, trong và sau sự kiện toàn diện'
    ],
    keyFeaturesEn: [
      'International concert-grade audio, lighting, and stage rigging',
      'Experienced creative directors and broadcast engineers',
      'Seamless integration with Ticket99 access control and registration',
      'Comprehensive pre-, live-, and post-event media amplification'
    ],
    deliverablesVi: [
      'Hồ sơ thiết kế 3D sân khấu và mặt bằng phân bổ khu vực',
      'Toàn bộ video visual, intro và tư liệu truyền thông sự kiện',
      'Báo cáo vận hành và thư viện ảnh/video chất lượng cao sau sự kiện'
    ],
    deliverablesEn: [
      'Complete 3D stage blueprint and venue traffic layout documentation',
      'All master visual motion files, keynote decks, and show reels',
      'Post-event operations debrief and high-res photo/video archives'
    ],
    faqsVi: [
      {
        question: 'IOT có nhận tổ chức sự kiện quy mô từ bao nhiêu khách?',
        answer: 'Chúng tôi đáp ứng linh hoạt từ các buổi hội thảo chuyên sâu 100 khách VIP cho đến các đại nhạc hội và lễ hội ngoài trời lên tới 10,000+ người tham dự.'
      }
    ],
    faqsEn: [
      {
        question: 'What event sizes does IOT handle?',
        answer: 'We cater flexibly from intimate 100-delegate executive roundtables to massive outdoor music festivals hosting 10,000+ attendees.'
      }
    ],
    relatedProjects: ['ticket99', 'rgp-concept']
  }
];
