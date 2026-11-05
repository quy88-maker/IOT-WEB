import { InsightArticle } from '../types';

export const insightsData: InsightArticle[] = [
  {
    id: 'gis-smart-provinces',
    slug: 'gis-spatial-intelligence-smart-tourism-vietnam',
    titleVi: 'Ứng dụng GIS và Bản đồ số trong phát triển du lịch thông minh tại các tỉnh miền núi phía Bắc',
    titleEn: 'Applying GIS and Spatial Intelligence to Smart Tourism Development in Northern Vietnam',
    category: 'tech-gis',
    categoryVi: 'Công nghệ & Bản đồ số',
    categoryEn: 'GIS & Spatial Tech',
    publishedDate: 'Chuyên đề Công nghệ IOT',
    readTime: '6 phút đọc',
    author: 'Đội ngũ Kỹ thuật IOT',
    authorRoleVi: 'Bộ phận Nghiên cứu & Phát triển Hệ thống GIS',
    authorRoleEn: 'GIS Research & Development Unit',
    coverImage: '/src/assets/images/project_izmap_1793900285032.jpg',
    isEditorialSample: true,
    summaryVi: 'Cách thức kiến trúc Vector Tiles và dữ liệu địa lý đa tầng giúp các địa phương số hóa di sản, tối ưu hóa dòng khách và tạo ra trải nghiệm du lịch số liền mạch.',
    summaryEn: 'How multi-layered Vector Tile architectures empower regional administrations to digitize heritage, optimize tourist flow, and deliver seamless digital journeys.',
    tags: ['GIS', 'Smart Tourism', 'Vector Tiles', 'Bản đồ số'],
    contentVi: [
      {
        heading: 'Thực trạng chuyển đổi số du lịch tại các địa phương',
        paragraphs: [
          'Tại nhiều tỉnh thành có tiềm năng du lịch lớn như Cao Bằng, Hà Giang hay Lào Cai, tài nguyên du lịch phân bổ rải rác trên địa hình đồi núi hiểm trở. Việc số hóa các điểm đến trước đây chủ yếu dừng lại ở danh sách text hoặc các bản đồ tĩnh trên website, gây khó khăn cho việc tra cứu vị trí thực tế.',
          'Hệ thống GIS hiện đại không chỉ đơn thuần là việc vẽ lại bản đồ, mà là xây dựng một cơ sở dữ liệu không gian có cấu trúc chuẩn, cho phép truy vấn khoảng cách, độ dốc và tiện ích đi kèm theo thời gian thực.'
        ]
      },
      {
        heading: 'Kiến trúc Vector Tiles: Chìa khóa cho vùng sóng yếu',
        paragraphs: [
          'Một trong những rào cản lớn nhất của du lịch miền núi là sự không ổn định của mạng viễn thông 4G/5G. Giải pháp kiến trúc Vector Tiles phân mảnh bản đồ thành các gói dữ liệu siêu nhỏ (dưới 50KB), cho phép thiết bị di động tải nhanh và lưu đệm cục bộ (Local Cache).',
          'Du khách có thể tiếp tục xem bản đồ chi tiết, tìm đường và kích hoạt thuyết minh âm thanh ngay cả khi đi vào các hẻm núi không có tín hiệu di động.'
        ]
      },
      {
        heading: 'Tích hợp đa ngành: Từ du lịch đến quy hoạch phát triển bền vững',
        paragraphs: [
          'Dữ liệu GIS sau khi được chuẩn hóa sẽ trở thành tài sản số của địa phương. Ban quản lý có thể phân tích mật độ du khách theo mùa, từ đó dự báo nhu cầu cơ sở hạ tầng, bãi đỗ xe và bảo tồn cảnh quan tự nhiên hiệu quả hơn.'
        ]
      }
    ],
    contentEn: [
      {
        heading: 'The Current Landscape of Regional Tourism Digitization',
        paragraphs: [
          'In provinces with extraordinary ecotourism assets such as Cao Bang or Ha Giang, cultural landmarks are distributed across rugged topography. Traditional digitization often halted at static text directories, leaving visitors struggling to navigate spatial realities.',
          'Modern GIS goes beyond passive cartography: it builds structured geospatial databases capable of querying gradients, physical distances, and proximity amenities in real time.'
        ]
      },
      {
        heading: 'Vector Tile Architecture: Resilience in Low-Connectivity Zones',
        paragraphs: [
          'Mobile connectivity drops frequently in mountainous corridors. Vector tile streaming shards map geographic data into lightweight sub-50KB packets, caching coordinates locally for offline rendering.',
          'Travelers retain fluid map navigation and automated coordinate-triggered audio guides even in remote valleys without cellular coverage.'
        ]
      },
      {
        heading: 'Interdisciplinary Synthesis: From Tourism to Sustainable Planning',
        paragraphs: [
          'Standardized spatial datasets evolve into municipal digital assets, empowering regional planners to monitor seasonal visitor density and safeguard fragile ecological reserves.'
        ]
      }
    ]
  },
  {
    id: 'event-access-control-scalability',
    slug: 'scaling-event-ticketing-qr-security-architecture',
    titleVi: 'Kiến trúc bảo mật QR Token xoay vòng và bài toán tải cao điểm trong quản lý vé sự kiện',
    titleEn: 'Dynamic QR Token Security & High-Concurrency Scaling for Event Access Engines',
    category: 'software-scale',
    categoryVi: 'Kỹ thuật Phần mềm',
    categoryEn: 'Software Engineering',
    publishedDate: 'Chuyên đề Kỹ thuật IOT',
    readTime: '8 phút đọc',
    author: 'Đội ngũ Kỹ thuật IOT',
    authorRoleVi: 'Kiến trúc sư Giải pháp Phần mềm',
    authorRoleEn: 'Lead Software Architect',
    coverImage: '/src/assets/images/project_ticket99_1793900284431.jpg',
    isEditorialSample: true,
    summaryVi: 'Phân tích giải pháp đối phó với hiện tượng chụp màn hình bán lại vé và cách xử lý 10,000+ lượt quét vé mỗi giờ tại các cổng kiểm soát đại nhạc hội.',
    summaryEn: 'Technical analysis on combating ticket screenshot fraud and engineering sub-second gate validation under 10,000+ hourly scans.',
    tags: ['Ticketing', 'Concurrency', 'Security', 'WebSockets'],
    contentVi: [
      {
        heading: 'Nghịch lý giữa tốc độ check-in và độ an toàn bảo mật',
        paragraphs: [
          'Tại các sự kiện quy mô trên 5,000 khán giả, mục tiêu hàng đầu của ban tổ chức là thông quan cổng nhanh nhất có thể (dưới 1 giây/khách) để tránh tình trạng dồn ứ trước cổng rào. Tuy nhiên, nếu chỉ sử dụng mã QR tĩnh, rủi ro một vé bị bán cho nhiều người là rất lớn.',
          'Để giải quyết nghịch lý này, cần một cơ chế sinh mã động dựa trên thuật toán TOTP (Time-based One-Time Password) kết hợp chữ ký số mã hóa.'
        ]
      },
      {
        heading: 'Cơ chế xoay vòng Token và xác thực cục bộ',
        paragraphs: [
          'Ứng dụng người dùng tự động làm mới mã QR mỗi 15-30 giây. Khi đưa vào đầu đọc quang học tại cửa kiểm soát, máy quét giải mã token bằng khóa công khai đã được nạp sẵn vào bộ nhớ đệm, hoàn toàn không cần chờ phản hồi mạng từ server trung tâm.',
          'Sau khi xác thực thành công, trạng thái đã sử dụng được phát tán qua giao thức mạng nội bộ (Mesh / Local LAN) tới tất cả các làn kiểm soát khác trong vòng chưa đầy 100ms.'
        ]
      }
    ],
    contentEn: [
      {
        heading: 'The Ingress Velocity vs. Fraud Prevention Paradox',
        paragraphs: [
          'At gatherings exceeding 5,000 attendees, gate throughput velocity is paramount (sub-second per attendee) to avoid entrance concourse crowding. Yet static QR codes expose organizers to rampant screenshot re-selling.',
          'Solving this demands an encrypted Time-based One-Time Password (TOTP) algorithm coupled with elliptic-curve digital signing.'
        ]
      },
      {
        heading: 'Rolling Token Ingress and Local Mesh Sync',
        paragraphs: [
          'Attendee apps cycle QR tokens every 15–30 seconds. Handheld gate readers decrypt tokens using pre-cached public keys in memory, eliminating reliance on cloud roundtrips.',
          'Upon entry, validated ticket statuses broadcast across a local gate LAN mesh within 100ms, immediately locking the credential across all lanes.'
        ]
      }
    ]
  },
  {
    id: 'creative-technology-integration',
    slug: 'creative-technology-spatial-storytelling-events',
    titleVi: 'Khi Công nghệ gặp Nghệ thuật Sân khấu: Trải nghiệm không gian tương tác thế hệ mới',
    titleEn: 'When Engineering Meets Spatial Art: Next-Generation Interactive Stage Experiences',
    category: 'creative-tech',
    categoryVi: 'Sáng tạo & Sự kiện',
    categoryEn: 'Creative & Events',
    publishedDate: 'Chuyên đề Sáng tạo IOT',
    readTime: '5 phút đọc',
    author: 'Bộ phận Sáng tạo IOT',
    authorRoleVi: 'Đạo diễn Trải nghiệm & Kỹ thuật Sân khấu',
    authorRoleEn: 'Experience Director & Stage Tech',
    coverImage: '/src/assets/images/creative_event_production_1793900285613.jpg',
    isEditorialSample: true,
    summaryVi: 'Xu hướng kết nối giữa visual chuyển động theo thời gian thực (Generative Visuals), hệ thống âm thanh không gian và sự tham gia chủ động của khán giả.',
    summaryEn: 'Emerging trends in generative live visuals, spatial audio arrays, and participatory audience interaction at marquee conferences.',
    tags: ['Interactive Stage', 'Generative Art', 'Event Tech'],
    contentVi: [
      {
        heading: 'Vượt qua giới hạn của những video trình chiếu sẵn',
        paragraphs: [
          'Trong các hội nghị công nghệ cao cấp hiện nay, khán giả không còn thỏa mãn với những đoạn video trailer dựng sẵn phát đi phát lại. Xu hướng mới là Generative Visuals — đồ họa được render trực tiếp theo thời gian thực dựa trên nhịp điệu bài phát biểu, cử chỉ của diễn giả hoặc phản hồi từ khán phòng.',
          'Công nghệ này tạo ra cảm giác sân khấu là một thực thể sống động, biến đổi liên tục và duy nhất cho từng buổi diễn.'
        ]
      },
      {
        heading: 'Biến điện thoại của khán giả thành một phần của màn trình diễn',
        paragraphs: [
          'Thông qua việc kết nối WebSockets trực tiếp, màn hình điện thoại hoặc đèn flash của hàng nghìn khán giả có thể đồng bộ theo từng nốt nhạc, tạo nên làn sóng ánh sáng di chuyển khắp khán đài mà không cần phát vòng tay thông minh tốn kém.'
        ]
      }
    ],
    contentEn: [
      {
        heading: 'Beyond Pre-Rendered Stage Loops',
        paragraphs: [
          'At high-profile technology keynotes, audiences expect more than static looped video backdrops. The frontier is real-time generative visual design, dynamically responsive to keynote cadences and ambient crowd energy.',
          'This transforms the stage into an organic, breathing digital canvas unique to that singular moment.'
        ]
      },
      {
        heading: 'Synchronizing Thousands of Pocket Screens',
        paragraphs: [
          'By leveraging low-latency browser WebSockets, attendee smartphones synchronize screen colors and flash bursts with orchestral crescendos, generating sweeping arena waves without disposable hardware.'
        ]
      }
    ]
  }
];
