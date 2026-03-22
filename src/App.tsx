import { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 47 * 60 + 13);
  const [slotsLeft, setSlotsLeft] = useState(23);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Slots logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (slotsLeft > 7 && Math.random() < 0.3) {
        setSlotsLeft((prev) => prev - 1);
      }
    }, 18000);
    return () => clearInterval(interval);
  }, [slotsLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    const fmt = (n: number) => String(n).padStart(2, '0');
    return `${fmt(h)}:${fmt(m)}:${fmt(s)}`;
  };

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-gold/30">
      <motion.div className="scroll-line" style={{ scaleX, originX: 0 }} />

      {/* NAV */}
      <nav className="nav">
        <span className="nav-brand">⚡ Claude Co-work</span>
        <button className="nav-cta" onClick={scrollToOffer}>Đăng ký ngay →</button>
      </nav>

      {/* URGENCY BAR */}
      <div className="urgency-bar">
        🔥 &nbsp; ƯU ĐÃI GIỚI HẠN: Giảm 60% — chỉ còn <span>{formatTime(timeLeft).substring(3)}</span> &nbsp; 🔥
      </div>

      {/* HERO */}
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hero-eyebrow"
        >
          Khóa học AI thực chiến số 1
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-headline"
        >
          Biến Claude thành<br />
          <em>nhân viên 24/7</em><br />
          <strong>chạy khi bạn ngủ</strong>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-sub"
        >
          Thành thạo Claude Co-work trong 52 phút — khai thác 100% sức mạnh AI mà 90% người dùng bỏ lỡ
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-proof"
        >
          <div className="proof-stat">
            <Counter target={2847} />
            <span className="proof-label">Học viên</span>
          </div>
          <div className="proof-div"></div>
          <div className="proof-stat">
            <span className="proof-num">4.9<span style={{ fontSize: '18px' }}>★</span></span>
            <span className="proof-label">Đánh giá TB</span>
          </div>
          <div className="proof-div"></div>
          <div className="proof-stat">
            <Counter target={3} />
            <span className="proof-label">Giờ tiết kiệm/ngày</span>
          </div>
          <div className="proof-div"></div>
          <div className="proof-stat">
            <span className="proof-num">52</span>
            <span className="proof-label">Phút học xong</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-cta-group"
        >
          <button className="btn-primary" onClick={scrollToOffer}>
            🚀 &nbsp; Bắt đầu ngay hôm nay — Chỉ 299K
          </button>
          <button className="btn-ghost" onClick={scrollToSkills}>
            Xem đầy đủ nội dung ↓
          </button>
          <p className="hero-guarantee"><span>✓</span> Hoàn tiền 100% trong 30 ngày nếu không hài lòng</p>
        </motion.div>
      </section>

      {/* PAIN SECTION */}
      <RevealSection className="pain">
        <div className="pain-inner">
          <p className="section-label">◆ Bạn có đang gặp phải điều này?</p>
          <h2 className="section-title">Bạn đang dùng Claude như<br /><em>bà nội dùng smartphone</em></h2>
          <p style={{ color: 'var(--white2)', fontSize: '16px', maxWidth: '560px', margin: '0 auto' }}>Mở app → gõ câu hỏi → nhận câu trả lời → đóng app → ngày mai lặp lại từ đầu. Và bạn tự hỏi tại sao AI không làm được nhiều hơn cho bạn.</p>

          <ul className="pain-list">
            <li>
              <span className="pain-icon">😤</span>
              <div className="pain-text">
                <strong>Claude không nhớ bạn là ai</strong>
                <span>Mỗi cuộc trò chuyện phải giải thích lại từ đầu — tên, nghề nghiệp, cách bạn muốn tương tác. Lãng phí hàng chục phút mỗi ngày.</span>
              </div>
            </li>
            <li>
              <span className="pain-icon">🔄</span>
              <div className="pain-text">
                <strong>Sao chép thủ công từ app này sang app khác</strong>
                <span>Copy email từ Gmail, paste vào Claude, copy câu trả lời, paste lại Gmail. Lặp đi lặp lại mỗi ngày — trong khi AI đáng lẽ làm tất cả cho bạn.</span>
              </div>
            </li>
            <li>
              <span className="pain-icon">⏰</span>
              <div className="pain-text">
                <strong>Claude chỉ làm việc khi bạn mở app</strong>
                <span>Bạn phải ở đó, gõ prompt, chờ kết quả. Nhưng một nhân viên giỏi làm việc ngay cả khi sếp không có mặt.</span>
              </div>
            </li>
            <li>
              <span className="pain-icon">🎲</span>
              <div className="pain-text">
                <strong>Kết quả không nhất quán — phụ thuộc vào mood của bạn</strong>
                <span>Hôm nay viết prompt hay → kết quả tốt. Hôm khác lười → kết quả tệ. Không có hệ thống, không có workflow ổn định.</span>
              </div>
            </li>
            <li>
              <span className="pain-icon">📊</span>
              <div className="pain-text">
                <strong>Bạn đang bỏ phí 90% tiềm năng của AI</strong>
                <span>Skills, Connectors, Scheduled Tasks, Claude MD — những tính năng biến Claude thành nhân viên AI thực sự. Và hầu hết mọi người chưa bao giờ nghe đến chúng.</span>
              </div>
            </li>
          </ul>

          <div style={{ padding: '32px', background: 'rgba(201,168,76,0.05)', border: '1px solid var(--gold-border)', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: '22px', fontStyle: 'italic', color: 'var(--white2)' }}>
              "Không phải lỗi của Claude. Là vì bạn chưa biết cách <span className="hl">thiết lập đúng</span>."
            </p>
          </div>
        </div>
      </RevealSection>

      {/* SOLUTION */}
      <RevealSection className="solution">
        <div className="solution-inner">
          <p className="section-label">◆ Giải pháp</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>4 siêu năng lực biến Claude<br /><em>thành nhân viên thực sự</em></h2>
          <p style={{ textAlign: 'center', color: 'var(--white2)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>Đây là những tính năng mà 90% người dùng chưa bao giờ chạm vào — và chúng thay đổi hoàn toàn cách AI làm việc cho bạn.</p>

          <div className="solution-grid">
            <div className="sg-cell">
              <span className="sg-num">01</span>
              <span className="sg-icon">📄</span>
              <div className="sg-title">Tệp Claude MD</div>
              <p className="sg-desc">Tệp nhận dạng mà Claude đọc TRƯỚC mỗi cuộc trò chuyện. Nó biết bạn là ai, bạn làm gì, bạn muốn giao tiếp thế nào — không cần giải thích lại bao giờ nữa.</p>
              <span className="sg-tag">Thiết lập một lần · Dùng mãi mãi</span>
            </div>
            <div className="sg-cell">
              <span className="sg-num">02</span>
              <span className="sg-icon">🧩</span>
              <div className="sg-title">Skills — Lệnh tùy chỉnh</div>
              <p className="sg-desc">Dạy Claude một quy trình một lần. Sau đó một từ khóa duy nhất kích hoạt toàn bộ workflow — tạo báo cáo, nghiên cứu chủ đề, tóm tắt cuộc họp, tạo slide...</p>
              <span className="sg-tag">1 từ = toàn bộ quy trình</span>
            </div>
            <div className="sg-cell">
              <span className="sg-num">03</span>
              <span className="sg-icon">🔌</span>
              <div className="sg-title">Connectors — Kết nối ứng dụng</div>
              <p className="sg-desc">Claude kết nối trực tiếp Gmail, Slack, Google Calendar, Notion, GitHub và 8.000+ ứng dụng khác qua Zapier MCP. Đọc, viết, gửi — tất cả tự động.</p>
              <span className="sg-tag">38+ ứng dụng tích hợp sẵn</span>
            </div>
            <div className="sg-cell">
              <span className="sg-num">04</span>
              <span className="sg-icon">⏰</span>
              <div className="sg-title">Scheduled Tasks — Lịch tự động</div>
              <p className="sg-desc">Đặt lịch một lần — Claude tự chạy hàng ngày không cần bạn can thiệp. Morning briefing lúc 7am, báo cáo hàng tuần, quét đối thủ — tất cả tự động.</p>
              <span className="sg-tag">Chạy kể cả khi bạn ngủ</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '40px', background: 'var(--gold-dim)', border: '1px solid var(--gold-border)' }}>
            <p style={{ fontSize: '13px', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px' }}>Kết quả cuối cùng</p>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', fontStyle: 'italic', color: 'var(--white)' }}>
              Nhân viên AI đào tạo một lần → làm việc 24/7 → không bao giờ quên → không bao giờ mệt
            </p>
          </div>
        </div>
      </RevealSection>

      {/* COMPARE */}
      <RevealSection className="compare-block">
        <div className="compare-inner">
          <p className="section-label" style={{ textAlign: 'center' }}>◆ Trước & Sau</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Một ngày làm việc<br /><em>thay đổi như thế nào</em></h2>

          <div className="vs-table">
            <div className="vs-col">
              <div className="vs-header bad">❌ Trước khi học Co-work</div>
              <div className="vs-cell bad"><span>😩</span> Mở 5 app khác nhau để bắt đầu ngày</div>
              <div className="vs-cell bad"><span>⌛</span> 45 phút đọc email, lịch, tin tức</div>
              <div className="vs-cell bad"><span>📋</span> Tự mình viết tóm tắt cuộc họp</div>
              <div className="vs-cell bad"><span>🔄</span> Giải thích lại bối cảnh cho Claude mỗi ngày</div>
              <div className="vs-cell bad"><span>💤</span> Claude không làm gì khi bạn ngủ</div>
              <div className="vs-cell bad"><span>📊</span> Tự tổng hợp số liệu tuần</div>
              <div className="vs-cell bad"><span>🎯</span> Mất 2h tạo bài trình bày</div>
            </div>
            <div className="vs-center"><span className="vs-badge">SO SÁNH</span></div>
            <div className="vs-col">
              <div className="vs-header good">✅ Sau khi học Co-work</div>
              <div className="vs-cell good"><span>🌅</span> Morning briefing HTML sẵn sàng lúc 7am</div>
              <div className="vs-cell good"><span>⚡</span> 0 phút — Claude tổng hợp tự động</div>
              <div className="vs-cell good"><span>✨</span> Dán transcript → nhận action items ngay</div>
              <div className="vs-cell good"><span>🧠</span> Claude luôn biết bạn là ai và cần gì</div>
              <div className="vs-cell good"><span>🤖</span> Scheduled tasks chạy suốt đêm</div>
              <div className="vs-cell good"><span>📈</span> Báo cáo tuần tự tạo mỗi thứ Hai</div>
              <div className="vs-cell good"><span>🚀</span> Một câu → slide deck hoàn chỉnh trong 30s</div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* SKILLS */}
      <RevealSection id="skills-section" className="skills-section">
        <div className="skills-inner">
          <p className="section-label">◆ Bạn sẽ nhận được</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>7 skills <em>không thể thiếu</em><br />— tặng kèm miễn phí</h2>
          <p style={{ textAlign: 'center', color: 'var(--white2)', fontSize: '15px', maxWidth: '580px', margin: '0 auto' }}>Đây không phải template đơn giản. Đây là hệ thống workflow thực chiến đã được kiểm chứng bởi hàng nghìn người dùng.</p>

          <div className="skills-grid">
            <SkillCard color="#e8c66a" number="01" emoji="🌅" name="Morning Briefing" desc="Tự động quét lịch, email, tin tức AI. Tạo dashboard HTML đẹp gửi thẳng vào Slack trước khi bạn thức dậy." save="Tiết kiệm 45 phút/ngày" />
            <SkillCard color="#7ec8a0" number="02" emoji="🔬" name="Research Assistant" desc="Nghiên cứu bất kỳ chủ đề nào → tài liệu đầy đủ nguồn, tóm tắt điều hành, dữ liệu và thống kê — lưu thành file thực sự." save="Tiết kiệm 60 phút/báo cáo" />
            <SkillCard color="#c8a0e8" number="03" emoji="📝" name="Meeting Notes" desc="Dán transcript → nhận ngay bản tóm tắt, action items, deadline — được lưu thành markdown sẵn sàng chia sẻ." save="1h họp = 10 bước rõ ràng" />
            <SkillCard color="#e8c66a" number="04" emoji="📊" name="Slide Deck Generator" desc="Một câu mô tả → bài thuyết trình HTML hoàn chỉnh với animation mượt mà. Đây chính là slides dùng trong khóa học này!" save="3h → 30 giây" />
            <SkillCard color="#e8a07e" number="05" emoji="🎨" name="Visual Explainer" desc="Mô tả bất kỳ khái niệm → trang HTML tương tác với diagram, typography chuyên nghiệp. Dùng để giải thích hệ thống, quy trình." save="Thay thế 3 đoạn giải thích" />
            <SkillCard color="#7ec8c8" number="06" emoji="📐" name="Diagram Generator" desc="Mô tả hệ thống → file Excalidraw JSON sẵn sàng import. Không cần vẽ tay. Chuyên nghiệp trong 10 giây." save="30 phút → 10 giây" />
            <SkillCard color="#e8c66a" number="07" emoji="🏗️" name="Skill Creator" desc="Tạo skill riêng cho bất kỳ quy trình nào của bạn. Dạy Co-work cách làm việc theo đặc thù ngành — giáo viên, bất động sản, marketing, tư vấn..." save="Vô hạn khả năng tùy chỉnh" />
          </div>
        </div>
      </RevealSection>

      {/* PROOF */}
      <RevealSection className="proof-section">
        <div className="proof-inner">
          <p className="section-label" style={{ textAlign: 'center' }}>◆ Học viên nói gì</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Kết quả <em>thực tế</em><br />từ người đã học</h2>

          <div className="big-number-row">
            <div className="bn-cell">
              <span className="bn-num">3h</span>
              <span className="bn-label">Tiết kiệm/ngày trung bình</span>
            </div>
            <div className="bn-cell">
              <span className="bn-num">52'</span>
              <span className="bn-label">Hoàn thành toàn bộ khóa</span>
            </div>
            <div className="bn-cell">
              <span className="bn-num">24/7</span>
              <span className="bn-label">AI làm việc không ngừng</span>
            </div>
            <div className="bn-cell">
              <span className="bn-num">100%</span>
              <span className="bn-label">Hoàn tiền nếu không hài lòng</span>
            </div>
          </div>

          <div className="testimonials">
            <Testimonial stars={5} quote="Morning Briefing skill thay đổi cách tôi bắt đầu ngày làm việc hoàn toàn. Thay vì mở 6 tab khác nhau, giờ tôi chỉ cần đọc một trang HTML và biết hết mọi thứ cần làm." author="Nguyễn Minh Châu" role="Marketing Manager · TP.HCM" emoji="👩‍💼" />
            <Testimonial stars={5} quote="Tôi đã thử nhiều khóa học AI nhưng đây là lần đầu tiên tôi thực sự thiết lập xong một hệ thống chạy tự động. Scheduled Tasks + Connectors = magic." author="Trần Đức Anh" role="Startup Founder · Hà Nội" emoji="👨‍💻" />
            <Testimonial stars={5} quote="Slide Deck Generator đã tiết kiệm cho tôi ít nhất 6 tiếng mỗi tuần. Tôi chỉ cần viết một câu, Co-work tạo ra bài thuyết trình hoàn chỉnh với thiết kế đẹp." author="Lê Thị Hương" role="Content Creator · Đà Nẵng" emoji="👩‍🏫" />
            <Testimonial stars={5} quote="Sau khi thiết lập Claude MD, Claude hiểu context của tôi ngay lập tức. Không còn phải giải thích 'tôi là ai' mỗi lần nữa. Tiết kiệm được 20-30 phút mỗi ngày chỉ từ tính năng này." author="Phạm Quang Huy" role="Freelance Designer · TP.HCM" emoji="👨‍🎨" />
          </div>
        </div>
      </RevealSection>

      {/* OFFER */}
      <RevealSection id="offer" className="offer">
        <div className="offer-inner">
          <p className="section-label" style={{ textAlign: 'center' }}>◆ Đăng ký ngay hôm nay</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Mọi thứ bạn nhận được<br /><em>trong một gói duy nhất</em></h2>

          <div className="offer-box">
            <ul className="offer-items">
              <OfferItem title="Khóa học video đầy đủ (52 phút)" desc="Hướng dẫn từng bước từ cài đặt đến tự động hóa hoàn toàn" value="Trị giá 499K" />
              <OfferItem title="7 Skills sẵn dùng (file zip)" desc="Morning Briefing · Research · Meeting Notes · Slides · Visual · Diagram · Skill Creator" value="Trị giá 299K" />
              <OfferItem title="Hướng dẫn Claude MD theo ngành" desc="5 template cho: Marketer · Developer · Designer · Freelancer · Doanh nhân" value="Trị giá 199K" />
              <OfferItem title="Cộng đồng học viên trên School" desc="Chia sẻ skills, hỏi đáp, cập nhật tính năng mới nhất" value="Trị giá 199K" />
              <OfferItem title="Hướng dẫn Zapier MCP + 8.000 ứng dụng" desc="Kết nối bất kỳ app nào không có tích hợp gốc trong Co-work" value="Trị giá 149K" />
              <OfferItem title="Cập nhật miễn phí trọn đời" desc="Tính năng mới, skills mới, connectors mới — bạn luôn có phiên bản mới nhất" value="Miễn phí" isFree />
            </ul>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderTop: '1px solid var(--gold-border)', marginTop: '8px' }}>
              <span style={{ fontSize: '14px', color: 'var(--white3)', letterSpacing: '1px', textTransform: 'uppercase' }}>Tổng giá trị</span>
              <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--white2)', textDecoration: 'line-through' }}>1.345.000đ</span>
            </div>

            <div className="price-box">
              <div className="price-badge">GIẢM 78% — CHỈ HÔM NAY</div>
              <span className="price-new">299.000đ</span>
              <p className="price-period">Thanh toán một lần · Truy cập trọn đời · Không phí ẩn</p>
              <button className="btn-primary" style={{ width: '100%', fontSize: '18px', padding: '24px' }} onClick={() => alert('Chức năng thanh toán sẽ được tích hợp tại đây')}>
                ⚡ &nbsp; Tôi muốn nhân viên AI 24/7 ngay bây giờ
              </button>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', color: 'var(--white3)' }}>🔒 Thanh toán bảo mật</span>
                <span style={{ fontSize: '12px', color: 'var(--white3)' }}>↩ Hoàn tiền 30 ngày</span>
                <span style={{ fontSize: '12px', color: 'var(--white3)' }}>📱 Truy cập ngay tức thì</span>
                <span style={{ fontSize: '12px', color: 'var(--white3)' }}>♾ Cập nhật trọn đời</span>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* GUARANTEE */}
      <RevealSection className="guarantee">
        <div className="guarantee-inner">
          <span className="guarantee-icon">🛡️</span>
          <h3 className="guarantee-title">Cam kết hoàn tiền 30 ngày</h3>
          <p className="guarantee-text">Nếu sau khi học xong, bạn thiết lập đầy đủ theo hướng dẫn mà không thấy hiệu quả — chúng tôi hoàn tiền 100%, không hỏi lý do. Chúng tôi tin vào giá trị của khóa học này đến mức sẵn sàng chịu rủi ro hoàn toàn về phía mình.</p>
          <div style={{ marginTop: '24px', padding: '16px 24px', background: 'rgba(76,175,125,0.08)', border: '1px solid rgba(76,175,125,0.2)', display: 'inline-block' }}>
            <span style={{ fontSize: '13px', color: 'var(--green)', fontWeight: 700, letterSpacing: '1px' }}>✓ BẠN KHÔNG CÓ GÌ ĐỂ MẤT. CHỈ CÓ GIỜ LÀM VIỆC ĐỂ TIẾT KIỆM.</span>
          </div>
        </div>
      </RevealSection>

      {/* FAQ */}
      <RevealSection className="faq">
        <div className="faq-inner">
          <p className="section-label" style={{ textAlign: 'center' }}>◆ Câu hỏi thường gặp</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Bạn đang <em>thắc mắc</em> gì?</h2>

          <div className="faq-list">
            <FaqItem 
              id={0} 
              isOpen={openFaq === 0} 
              onToggle={() => setOpenFaq(openFaq === 0 ? null : 0)}
              q="Tôi có cần biết code hay kỹ thuật không?" 
              a="Hoàn toàn không. Claude Co-work được thiết kế cho mọi người — từ nhân viên văn phòng đến doanh nhân, từ giáo viên đến marketer. Toàn bộ thao tác đều thực hiện qua giao diện click-and-type, không cần terminal hay lập trình." 
            />
            <FaqItem 
              id={1} 
              isOpen={openFaq === 1} 
              onToggle={() => setOpenFaq(openFaq === 1 ? null : 1)}
              q="Tôi cần trả thêm phí gì không?" 
              a="Claude Co-work (ứng dụng desktop) miễn phí tải về. Bạn cần tài khoản Claude Pro (~$20/tháng) để sử dụng đầy đủ tính năng Scheduled Tasks và Connectors. Zapier MCP có gói miễn phí cho nhu cầu cơ bản." 
            />
            <FaqItem 
              id={2} 
              isOpen={openFaq === 2} 
              onToggle={() => setOpenFaq(openFaq === 2 ? null : 2)}
              q="Mất bao lâu để thiết lập xong hệ thống?" 
              a="Sau khi học 52 phút khóa học, bạn có thể thiết lập hoàn chỉnh — Claude MD, 7 Skills, Connectors chính và Scheduled Tasks — trong khoảng 2-3 tiếng. Sau đó hệ thống chạy tự động không cần can thiệp thêm." 
            />
            <FaqItem 
              id={3} 
              isOpen={openFaq === 3} 
              onToggle={() => setOpenFaq(openFaq === 3 ? null : 3)}
              q="Claude Co-work có khác Claude thường không?" 
              a="Cùng AI nhưng khác hoàn toàn về cách sử dụng. Claude thường = chatbot (hỏi → trả lời → quên). Claude Co-work = trợ lý AI có bộ nhớ, có quy trình, kết nối với apps của bạn và chạy tự động theo lịch." 
            />
            <FaqItem 
              id={4} 
              isOpen={openFaq === 4} 
              onToggle={() => setOpenFaq(openFaq === 4 ? null : 4)}
              q="Khóa học này khác gì so với video YouTube miễn phí?" 
              a="Video YouTube cho bạn kiến thức tổng quan. Khóa học này cho bạn 7 Skills sẵn sàng dùng (trị giá 299K), 5 template Claude MD theo ngành, hướng dẫn từng bước có checkpoint, và cộng đồng để hỏi đáp khi gặp vấn đề. Tiết kiệm hàng tuần mày mò thử nghiệm." 
            />
            <FaqItem 
              id={5} 
              isOpen={openFaq === 5} 
              onToggle={() => setOpenFaq(openFaq === 5 ? null : 5)}
              q="Nếu Claude ra tính năng mới thì sao?" 
              a="Bạn nhận cập nhật miễn phí trọn đời. Khi Anthropic ra tính năng mới, chúng tôi sẽ bổ sung skills và hướng dẫn mới vào khóa học — không tốn thêm phí." 
            />
          </div>
        </div>
      </RevealSection>

      {/* FINAL CTA */}
      <RevealSection className="final-cta">
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <h2 className="final-headline">
            Ngừng dùng AI như bà nội.<br />
            Bắt đầu có <span>nhân viên 24/7</span><br />
            ngay hôm nay.
          </h2>
          <p className="final-sub">Mỗi ngày bạn chờ đợi = thêm 3 tiếng làm việc thủ công không cần thiết. 2.847 người đã thiết lập xong hệ thống của họ. Đến lượt bạn.</p>

          <div style={{ marginBottom: '24px' }}>
            <button className="btn-primary" style={{ fontSize: '18px', padding: '22px 60px' }} onClick={scrollToOffer}>
              ⚡ &nbsp; Bắt đầu với 299.000đ — Hôm nay
            </button>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--white3)' }}>
            <span style={{ color: 'var(--green)' }}>✓</span> Hoàn tiền 30 ngày &nbsp;·&nbsp;
            <span style={{ color: 'var(--green)' }}>✓</span> Truy cập ngay &nbsp;·&nbsp;
            <span style={{ color: 'var(--green)' }}>✓</span> Cập nhật trọn đời
          </p>
        </div>
      </RevealSection>

      {/* STICKY TIMER */}
      <div className="timer-bar">
        <div>
          <div className="timer-text">⏰ Giá ưu đãi kết thúc sau: <span className="timer-count">{formatTime(timeLeft)}</span></div>
          <div style={{ fontSize: '12px', color: 'var(--white3)', marginTop: '2px' }}>Sau đó giá trở lại 699.000đ</div>
        </div>
        <div style={{ fontSize: '13px', color: 'var(--white2)', maxWidth: '300px' }}>
          <strong style={{ color: 'var(--white)' }}>Chỉ còn <span style={{ color: slotsLeft <= 10 ? 'var(--red)' : 'inherit' }}>{slotsLeft}</span> suất</strong> với giá ưu đãi trong đợt này
        </div>
        <button className="timer-cta" onClick={scrollToOffer}>
          Đăng ký ngay →
        </button>
      </div>
    </div>
  );
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.round(current));
      if (current >= target) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [hasStarted, target]);

  return <span ref={ref} className="proof-num">{count.toLocaleString()}{target === 4.9 && <span style={{ fontSize: '18px' }}>★</span>}</span>;
}

function RevealSection({ children, className, id }: { children: ReactNode, className?: string, id?: string }) {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SkillCard({ color, number, emoji, name, desc, save }: { color: string, number: string, emoji: string, name: string, desc: string, save: string }) {
  return (
    <div className="skill-card" style={{ '--sk-color': color } as any}>
      <div className="sk-number">SKILL {number}</div>
      <span className="sk-emoji">{emoji}</span>
      <div className="sk-name">{name}</div>
      <div className="sk-desc">{desc}</div>
      <div className="sk-save">{save}</div>
    </div>
  );
}

function Testimonial({ stars, quote, author, role, emoji }: { stars: number, quote: string, author: string, role: string, emoji: string }) {
  return (
    <div className="testi">
      <div className="testi-stars">{'★'.repeat(stars)}</div>
      <div className="testi-quote">{quote}</div>
      <div className="testi-author">
        <div className="testi-avatar">{emoji}</div>
        <div><div className="testi-name">{author}</div><div className="testi-role">{role}</div></div>
      </div>
    </div>
  );
}

function OfferItem({ title, desc, value, isFree }: { title: string, desc: string, value: string, isFree?: boolean }) {
  return (
    <li>
      <span className="offer-check">◆</span>
      <div className="offer-item-text"><strong>{title}</strong><span>{desc}</span></div>
      <span className="offer-value" style={{ color: isFree ? 'var(--green)' : 'var(--white2)' }}>{value}</span>
    </li>
  );
}

function FaqItem({ q, a, isOpen, onToggle, id }: { q: string, a: string, isOpen: boolean, onToggle: () => void, id: number }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle}>
        <span>{q}</span>
        <span className="faq-icon">+</span>
      </button>
      <div className="faq-a" style={{ maxHeight: isOpen ? '300px' : '0', paddingBottom: isOpen ? '22px' : '0' }}>
        {a}
      </div>
    </div>
  );
}
