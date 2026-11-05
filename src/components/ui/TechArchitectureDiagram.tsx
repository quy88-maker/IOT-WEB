import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Monitor, Server, Cpu, Database, Cloud, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface ArchitectureLayer {
  id: string;
  number: string;
  nameVi: string;
  nameEn: string;
  taglineVi: string;
  taglineEn: string;
  icon: React.ElementType;
  componentsVi: string[];
  componentsEn: string[];
  techStack: string[];
  accentColor: string;
}

export const TechArchitectureDiagram: React.FC = () => {
  const { language } = useLanguage();
  const [selectedLayerId, setSelectedLayerId] = useState<string>('application');

  const layers: ArchitectureLayer[] = [
    {
      id: 'experience',
      number: '01',
      nameVi: 'Tầng Trải nghiệm (Experience Layer)',
      nameEn: 'Experience Layer',
      taglineVi: 'Giao diện đa kênh trực quan, phản hồi tức thì và tương tác cao',
      taglineEn: 'Omnichannel UI, sub-second reactivity, and immersive interaction',
      icon: Monitor,
      componentsVi: [
        'Cổng bán vé điện tử Web & Mobile PWA',
        'Bản đồ tương tác số WebGIS (Vector Tiles 60fps)',
        'Giao diện điều hành dữ liệu POI / CMS trực quan',
        'Màn hình hiển thị sân khấu sự kiện tương tác thời gian thực'
      ],
      componentsEn: [
        'E-Ticketing Web & Mobile Progressive Web App',
        'Interactive WebGIS spatial map canvas (60fps Vector Tiles)',
        'Administrative POI & Content Management Portals',
        'Real-time arena stage displays & audience synchronization'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'MapLibre GL', 'Motion'],
      accentColor: '#38BDF8',
    },
    {
      id: 'application',
      number: '02',
      nameVi: 'Tầng Ứng dụng & Nghiệp vụ (Application Layer)',
      nameEn: 'Application & Domain Layer',
      taglineVi: 'Động cơ xử lý nghiệp vụ chịu tải cao, microservices và logic mở rộng',
      taglineEn: 'High-concurrency business domain engines, microservices, and modular workflows',
      icon: Server,
      componentsVi: [
        'Ticket99 Core Engine: Quản lý phòng chờ ảo & phân bổ ghế ngồi',
        'izMap Spatial Engine: Định vị, dẫn đường & định tuyến thông minh',
        'CMS99 Engine: Trình biên tập lược đồ động và xuất bản nội dung',
        'Hệ thống xác thực token và mã QR xoay vòng TOTP'
      ],
      componentsEn: [
        'Ticket99 Core Engine: Virtual queue governance & seat allocations',
        'izMap Spatial Engine: Geolocation, route solver & spatial indexes',
        'CMS99 Engine: Dynamic schema modeling & edge publishing',
        'Authentication gateway & dynamic TOTP QR token rotation'
      ],
      techStack: ['Node.js', 'Express', 'TypeScript', 'Clean Architecture', 'Go (Evaluation)'],
      accentColor: '#3B82F6',
    },
    {
      id: 'integration',
      number: '03',
      nameVi: 'Tầng Tích hợp & Kết nối (Integration Layer)',
      nameEn: 'Integration & Gateway Layer',
      taglineVi: 'Giao thức giao tiếp đồng bộ & bất đồng bộ, cổng thanh toán và tin nhắn đa kênh',
      taglineEn: 'Synchronous & asynchronous protocols, payment gateways, and messaging brokers',
      icon: Cpu,
      componentsVi: [
        'API Gateway chuẩn hóa RESTful & GraphQL',
        'WebSockets truyền dữ liệu thời gian thực độ trễ < 50ms',
        'Tích hợp cổng thanh toán trực tuyến (VNPAY, Momo, Thẻ quốc tế)',
        'Hệ thống thông báo đẩy tự động qua Zalo ZNS, SMS, Webhook'
      ],
      componentsEn: [
        'Standardized RESTful & GraphQL API Gateways',
        'Sub-50ms low-latency WebSocket communication duplexes',
        'Payment gateway integration (Cards, E-wallets, QR-Pay)',
        'Automated dispatch hooks via Zalo ZNS, SMS, and Webhooks'
      ],
      techStack: ['GraphQL', 'REST API', 'WebSockets', 'RabbitMQ', 'OAuth 2.0'],
      accentColor: '#8B5CF6',
    },
    {
      id: 'data',
      number: '04',
      nameVi: 'Tầng Dữ liệu & Lưu trữ (Data Layer)',
      nameEn: 'Data & Storage Layer',
      taglineVi: 'Cơ sở dữ liệu quan hệ, dữ liệu không gian GIS và bộ đệm tốc độ cao',
      taglineEn: 'Relational data integrity, geospatial spatial indexing, and edge in-memory caching',
      icon: Database,
      componentsVi: [
        'PostgreSQL & PostGIS: Lưu trữ dữ liệu quan hệ và tọa độ địa lý quốc gia',
        'Redis Cluster: Bộ đệm phiên làm việc và hàng đợi tức thời',
        'GeoServer & MBTiles: Lưu trữ và phân phối lát bản đồ số',
        'Sao lưu tự động và phân vùng dữ liệu an toàn'
      ],
      componentsEn: [
        'PostgreSQL & PostGIS: Relational storage & national spatial coordinate data',
        'Redis Cluster: In-memory session state & high-speed message queues',
        'GeoServer & MBTiles: Spatial vector tile repositories',
        'Automated replication, point-in-time recovery & cryptographic encryption'
      ],
      techStack: ['PostgreSQL', 'PostGIS', 'Redis', 'MBTiles', 'Object Storage'],
      accentColor: '#10B981',
    },
    {
      id: 'infrastructure',
      number: '05',
      nameVi: 'Tầng Hạ tầng & Bảo mật (Infrastructure Layer)',
      nameEn: 'Infrastructure & Security Layer',
      taglineVi: 'Đám mây đàn hồi, mạng phân phối nội dung và giám sát chủ động 24/7',
      taglineEn: 'Elastic cloud containers, edge CDN distribution, and 24/7 proactive observability',
      icon: Cloud,
      componentsVi: [
        'Container hóa Docker và triển khai Cloud tự động co giãn',
        'Mạng phân phối CDN toàn cầu tối ưu tốc độ tải ảnh và assets',
        'Tường lửa ứng dụng WAF & Bảo vệ chống DDoS',
        'Hệ thống giám sát lỗi và cảnh báo sự cố tức thời'
      ],
      componentsEn: [
        'Docker containerization and auto-scaling cloud compute clusters',
        'Global CDN caching optimizing image, video, and vector assets',
        'Cloud Web Application Firewall (WAF) & DDoS mitigation',
        'Continuous uptime telemetry and automated incident alerting'
      ],
      techStack: ['Docker', 'Cloud Run / Kubernetes', 'Cloudflare CDN', 'CI/CD Pipelines'],
      accentColor: '#F59E0B',
    },
  ];

  const selectedLayer = layers.find((l) => l.id === selectedLayerId) || layers[1];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Interactive Layer Stack */}
        <div className="lg:col-span-6 space-y-3">
          {layers.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            const Icon = layer.icon;

            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 border flex items-center justify-between group ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/30'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs px-2 py-1 rounded transition-colors ${
                      isSelected
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                        : 'bg-slate-800/60 text-slate-400'
                    }`}
                  >
                    L{layer.number}
                  </span>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        backgroundColor: isSelected ? `${layer.accentColor}25` : '#1E293B',
                        color: isSelected ? layer.accentColor : '#94A3B8',
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-semibold tracking-tight transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {language === 'vi' ? layer.nameVi : layer.nameEn}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {language === 'vi' ? layer.taglineVi : layer.taglineEn}
                      </p>
                    </div>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Side: Deep-Dive Layer Inspector */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLayer.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 lg:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl"
            >
              {/* Accent top gradient indicator */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: selectedLayer.accentColor }}
              />

              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${selectedLayer.accentColor}20`,
                      color: selectedLayer.accentColor,
                    }}
                  >
                    <selectedLayer.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400">
                      LAYER {selectedLayer.number} ARCHITECTURE
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {language === 'vi' ? selectedLayer.nameVi : selectedLayer.nameEn}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {language === 'vi' ? selectedLayer.taglineVi : selectedLayer.taglineEn}
              </p>

              {/* Functional Components in Layer */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  {language === 'vi' ? 'Các cấu phần & Năng lực thực thi' : 'Core Components & Capabilities'}
                </h4>
                <div className="space-y-2.5">
                  {(language === 'vi' ? selectedLayer.componentsVi : selectedLayer.componentsEn).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: selectedLayer.accentColor }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Representative Technologies */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  {language === 'vi' ? 'Công nghệ đại diện' : 'Representative Technologies'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedLayer.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 text-slate-200 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
