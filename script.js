/**
 * DIGITAL PORTFOLIO INTERACTIVITY SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Header Scroll Shadow / Transparency adjustment
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Intersection Observer for Fade-in-up animations
  const fadeElems = document.querySelectorAll('.fade-in-up');
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  fadeElems.forEach(elem => {
    appearOnScroll.observe(elem);
  });

  // Interactive Lesson Data for Modals
  // Được cấu hình trỏ tới các tài liệu PDF thực tế trong thư mục sources/
  const lessonsData = {
    lesson1: {
      title: "Bài tập 1: Thao tác cơ bản với tập tin & thư mục",
      badge: "Bài 1 - Chương 1.4",
      image: "assets/images/lesson1.png",
      tag: "Quản lý dữ liệu",
      duration: "Tuần 1",
      difficulty: "Cơ bản",
      desc: "Trình bày cấu trúc thư mục tối ưu, khoa học và các quy tắc đặt tên tập tin/thư mục đã được thiết lập để quản lý hiệu quả tài nguyên học tập cá nhân. Bài tập này giúp xây dựng nền móng tư duy tổ chức khoa học cho toàn bộ quá trình học tập và làm việc chuyên nghiệp sau này.",
      objectives: [
        "Thiết lập cấu trúc cây thư mục học tập khoa học, phân chia rõ ràng các học phần và dự án.",
        "Áp dụng nguyên tắc đặt tên file nhất quán (CamelCase, snake_case hoặc Kebab-case kết hợp Versioning).",
        "Hiểu sâu về đường dẫn tương đối, tuyệt đối và cách sao lưu dữ liệu đám mây an toàn."
      ],
      results: [
        "Sơ đồ cây thư mục học tập được chuẩn hóa rõ ràng.",
        "Quy chuẩn đặt tên file tránh lỗi tương thích hệ điều hành hoặc lỗi tiếng Việt có dấu.",
        "Bộ ảnh chụp minh họa cấu trúc thư mục đã hoàn thiện trên máy tính."
      ],
      localPdf: "sources/1. Máy tính và các thiết bị ngoại vi.pdf",
      fileName: "1. Máy tính và các thiết bị ngoại vi.pdf",
      fileSize: "1.11 MB"
    },
    lesson2: {
      title: "Bài tập 2: Tìm kiếm & đánh giá thông tin học thuật",
      badge: "Bài 2 - Chương 2.4",
      image: "assets/images/lesson2.png",
      tag: "Nghiên cứu khoa học",
      duration: "Tuần 2",
      difficulty: "Trung bình",
      desc: "Trực quan hóa kết quả tìm kiếm học thuật chất lượng cao bằng cách áp dụng các toán tử tìm kiếm nâng cao (AND, OR, NOT, filetype, site) và thực hiện đánh giá độ tin cậy của nguồn thông tin dựa trên tiêu chí khoa học rõ ràng (CRAAP test).",
      objectives: [
        "Sử dụng thành thạo các cú pháp tìm kiếm nâng cao trên Google Scholar, ResearchGate.",
        "Phân biệt nguồn thông tin khoa học đáng tin cậy với các tin tức chưa được kiểm chứng.",
        "Trích dẫn tài liệu tham khảo đúng chuẩn khoa học (APA, IEEE)."
      ],
      results: [
        "Bảng tổng hợp kết quả tìm kiếm các bài báo học thuật theo chủ đề tự chọn.",
        "Bản đánh giá chi tiết độ tin cậy của 3 nguồn tài liệu quan trọng nhất.",
        "Danh mục tài liệu tham khảo được chuẩn hóa định dạng hoàn chỉnh."
      ],
      localPdf: "sources/2. Khai thác dữ liệu và thông tin.pdf",
      fileName: "2. Khai thác dữ liệu và thông tin.pdf",
      fileSize: "580 KB"
    },
    lesson3: {
      title: "Bài tập 3: Viết Prompt hiệu quả cho các tác vụ học tập",
      badge: "Bài 3 - Chương 3.4",
      image: "assets/images/lesson3.png",
      tag: "Trí tuệ nhân tạo (AI)",
      duration: "Tuần 3",
      difficulty: "Nâng cao",
      desc: "Trình bày sự so sánh chi tiết và sinh động giữa Prompt ban đầu (sơ sài, thiếu ngữ cảnh) và Prompt cải tiến (áp dụng các cấu trúc kỹ nghệ prompt chuyên nghiệp như Persona, Task, Context, Format) cùng với kết quả đầu ra tương ứng từ mô hình AI lớn.",
      objectives: [
        "Nắm vững các kỹ thuật cấu trúc prompt: Role-playing, Zero-shot, Few-shot và Chain-of-Thought.",
        "Hiểu cách điều chỉnh tham số đầu ra của AI và sửa lỗi hallucination (ảo tưởng của AI).",
        "Ứng dụng AI vào việc tóm tắt tài liệu, giải thích khái niệm phức tạp và gợi ý ý tưởng sáng tạo."
      ],
      results: [
        "Bảng so sánh trực quan Prompt ban đầu vs Prompt tối ưu kèm phân tích lý do cải tiến.",
        "Ảnh chụp màn hình kết quả đầu ra vượt trội của AI sau khi áp dụng kỹ thuật prompt mới.",
        "Tài liệu hướng dẫn cá nhân về các prompt học tập thông dụng."
      ],
      localPdf: "sources/3. Tổng quát về trí tuệ nhân tạo.pdf",
      fileName: "3. Tổng quát về trí tuệ nhân tạo.pdf",
      fileSize: "545 KB"
    },
    lesson4: {
      title: "Bài tập 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
      badge: "Bài 4 - Chương 4.4",
      image: "assets/images/lesson4.png",
      tag: "Làm việc nhóm số",
      duration: "Tuần 4",
      difficulty: "Cơ bản",
      desc: "Minh chứng sinh động về việc sử dụng các nền tảng quản lý dự án trực tuyến (như Trello, Notion, Jira) và công cụ đồng soạn thảo (Google Workspace, Canva) để phân chia nhiệm vụ, theo dõi tiến độ và phối hợp làm việc nhóm hiệu quả.",
      objectives: [
        "Sử dụng bảng Kanban để quản lý luồng công việc (To do, In progress, Done) của nhóm.",
        "Cơ chế đồng soạn thảo thời gian thực, quản lý phân quyền và kiểm soát lịch sử phiên bản.",
        "Xây dựng biên bản họp nhóm trực tuyến và lưu trữ kết quả thống nhất trên đám mây."
      ],
      results: [
        "Ảnh chụp giao diện bảng Trello/Notion phân bổ công việc chi tiết cho các thành viên nhóm.",
        "Đường dẫn đến slide thuyết trình nhóm đồng soạn thảo trên Google Slides.",
        "Nhật ký hoạt động nhóm minh chứng sự đóng góp tích cực của từng cá nhân."
      ],
      localPdf: "sources/4. Giao tiếp và hợp tác trong môi trường số.pdf",
      fileName: "4. Giao tiếp và hợp tác trong môi trường số.pdf",
      fileSize: "485 KB"
    },
    lesson5: {
      title: "Bài tập 5: Sử dụng AI tạo sinh hỗ trợ sáng tạo nội dung",
      badge: "Bài 5 - Chương 5.4",
      image: "assets/images/lesson5.png",
      tag: "Sáng tạo nội dung",
      duration: "Tuần 5",
      difficulty: "Nâng cao",
      desc: "Trưng bày các sản phẩm sáng tạo nội dung số chất lượng cao được thiết kế với sự hỗ trợ của các công cụ AI Tạo sinh (hình ảnh từ Midjourney/DALL-E, video từ Runway/Sora hoặc văn bản/kịch bản được tinh chỉnh từ LLMs).",
      objectives: [
        "Kết hợp linh hoạt giữa tư duy thẩm mỹ của con người và sức mạnh tạo sinh của AI.",
        "Sử dụng công cụ thiết kế đồ họa (Canva, Photoshop) để biên tập và hoàn thiện ấn phẩm AI.",
        "Hiểu về quyền tác giả, bản quyền hình ảnh khi sử dụng tác phẩm tạo ra từ AI."
      ],
      results: [
        "Bộ sưu tập poster, infographic hoặc video ngắn được xây dựng dựa trên ý tưởng AI hỗ trợ.",
        "Bài viết/Kịch bản truyền thông được biên tập chỉn chu từ bản thảo gợi ý bởi AI.",
        "Tài liệu mô tả quy trình phối hợp (workflow) giữa người và máy để đạt sản phẩm cuối cùng."
      ],
      localPdf: "sources/5. Sáng tạo nội dung số.pdf",
      fileName: "5. Sáng tạo nội dung số.pdf",
      fileSize: "676 KB"
    },
    lesson6: {
      title: "Bài tập 6: Sử dụng AI có trách nhiệm trong học tập & nghiên cứu",
      badge: "Bài 6 - Chương 6.4",
      image: "assets/images/lesson6.png",
      tag: "Đạo đức công nghệ",
      duration: "Tuần 6",
      difficulty: "Trung bình",
      desc: "Xây dựng và trình bày bộ nguyên tắc ứng xử học thuật cá nhân khi sử dụng trí tuệ nhân tạo. Cam kết đề cao tính liêm chính, minh bạch hóa nguồn thông tin và bảo vệ quyền sở hữu trí tuệ dựa trên các nghiên cứu khoa học uy tín.",
      objectives: [
        "Nhận thức rõ ranh giới giữa việc sử dụng AI hỗ trợ học tập và hành vi gian lận học thuật.",
        "Xác định các nguy cơ về định kiến, thiên kiến, và vi phạm quyền riêng tư dữ liệu của AI.",
        "Cách thức khai báo nguồn thông tin và mức độ đóng góp của AI trong các báo cáo nghiên cứu."
      ],
      results: [
        "Bản cam kết/Tuyên ngôn Đạo đức AI cá nhân được thiết kế dưới dạng cẩm nang ngắn.",
        "Danh sách kiểm tra (checklist) tính liêm chính học thuật trước khi nộp bài tập.",
        "Bài tự luận phản biện về vai trò của đạo đức công nghệ trong kỷ nguyên AI."
      ],
      localPdf: "sources/6. An toàn và liêm chính học thuật.pdf",
      fileName: "6. An toàn và liêm chính học thuật.pdf",
      fileSize: "462 KB"
    }
  };

  // Select Modal elements
  const modalOverlay = document.getElementById('project-modal');
  const modalClose = modalOverlay.querySelector('.modal-close-btn');
  const modalImg = modalOverlay.querySelector('.modal-header-img');
  const modalBadge = modalOverlay.querySelector('.modal-meta-badge');
  const modalTag = modalOverlay.querySelector('.modal-meta-tag');
  const modalDuration = modalOverlay.querySelector('.modal-meta-duration');
  const modalDifficulty = modalOverlay.querySelector('.modal-meta-difficulty');
  const modalTitle = modalOverlay.querySelector('.modal-title');
  const modalDesc = modalOverlay.querySelector('.modal-desc');
  const modalObjectivesList = modalOverlay.querySelector('.modal-objectives-list');
  const modalResultsList = modalOverlay.querySelector('.modal-results-list');
  
  // Document preview and download selectors
  const modalPreviewBox = document.getElementById('modal-preview-box');
  const modalDocPreview = document.getElementById('modal-doc-preview');
  const modalDocDownload = document.getElementById('modal-doc-download');
  const modalDocFilename = document.getElementById('modal-doc-filename');
  const modalDocFilesize = document.getElementById('modal-doc-filesize');
  const modalDocOpenBtn = document.getElementById('modal-doc-open-btn');

  // Open Modal function
  function openModal(lessonKey) {
    const data = lessonsData[lessonKey];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalBadge.innerHTML = `<i class="fas fa-bookmark"></i> ${data.badge}`;
    modalTag.innerHTML = `<i class="fas fa-tag"></i> ${data.tag}`;
    modalDuration.innerHTML = `<i class="fas fa-calendar-alt"></i> ${data.duration}`;
    modalDifficulty.innerHTML = `<i class="fas fa-tachometer-alt"></i> ${data.difficulty}`;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    // Clear and build objectives
    modalObjectivesList.innerHTML = '';
    data.objectives.forEach(obj => {
      const li = document.createElement('li');
      li.textContent = obj;
      modalObjectivesList.appendChild(li);
    });

    // Clear and build results
    modalResultsList.innerHTML = '';
    data.results.forEach(res => {
      const li = document.createElement('li');
      li.textContent = res;
      modalResultsList.appendChild(li);
    });

    // Load Local Document preview and configure download/open cards
    if (data.localPdf) {
      const encodedPdfPath = encodeURI(data.localPdf);
      
      // Update iframe source (hiding the PDF viewer toolbar/page numbers so it only allows scrolling)
      if (modalDocPreview) {
        modalDocPreview.src = encodedPdfPath + '#toolbar=0&navpanes=0';
      }
      if (modalPreviewBox) {
        modalPreviewBox.style.display = 'block';
      }

      // Configure Local download card
      if (modalDocFilename) {
        modalDocFilename.textContent = data.fileName;
      }
      if (modalDocFilesize && data.fileSize) {
        modalDocFilesize.textContent = `Tài liệu PDF chính thức • ${data.fileSize}`;
      }
      if (modalDocOpenBtn) {
        modalDocOpenBtn.href = encodedPdfPath;
      }
      if (modalDocDownload) {
        modalDocDownload.style.display = 'flex';
      }
    } else {
      if (modalDocPreview) {
        modalDocPreview.src = '';
      }
      if (modalPreviewBox) {
        modalPreviewBox.style.display = 'none';
      }
      if (modalDocDownload) {
        modalDocDownload.style.display = 'none';
      }
    }

    // Show modal overlay
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  // Close Modal function
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Clear iframe src on close to stop loading/performance footprint
    if (modalDocPreview) {
      modalDocPreview.src = '';
    }
  }

  // Add event listeners to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const lessonKey = card.getAttribute('data-lesson');
      openModal(lessonKey);
    });
  });

  // Close modal click handlers
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Handle escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
