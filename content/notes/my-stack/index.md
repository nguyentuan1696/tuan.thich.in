---
title: Về các kỹ năng và công nghệ của mình
description: Về các kỹ năng và công nghệ của mình
date: 2025-03-20
---

Trong quá trình làm việc, mình có cơ hội tiếp cận nhiều công nghệ khác nhau. Dưới đây là những công nghệ và công cụ mình sử dụng thường xuyên để xây dựng các sản phẩm.

## 1. Frontend (React & Next.js)

Mình bắt đầu làm việc với React từ năm 2019 và sử dụng Next.js từ năm 2021 để phát triển các ứng dụng web hiện đại. TypeScript luôn được sử dụng trong hầu hết các dự án nhằm tăng tính an toàn của mã nguồn và giúp việc bảo trì trở nên dễ dàng hơn.

Khi xây dựng giao diện, mình thường áp dụng phương pháp [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) để tổ chức component một cách rõ ràng, giúp dự án dễ mở rộng và dễ bảo trì khi quy mô ngày càng lớn.

## 2. Styling (Tailwind CSS & shadcn/ui)

[Tailwind CSS](https://tailwindcss.com) là framework CSS mình sử dụng trong hầu hết các dự án nhờ cách tiếp cận utility-first, giúp quá trình phát triển giao diện nhanh và nhất quán.

Bên cạnh đó, mình thường kết hợp với [shadcn/ui](https://ui.shadcn.com) để xây dựng những giao diện hiện đại, dễ tùy biến và đảm bảo trải nghiệm người dùng.

## 3. Backend (Golang & Node.js)

Mình bắt đầu làm việc với Node.js từ năm 2019 và Golang từ năm 2021.

Node.js phù hợp với các dự án cần phát triển nhanh hoặc xây dựng MVP, trong khi Golang là lựa chọn ưu tiên cho các hệ thống yêu cầu hiệu năng cao, khả năng xử lý đồng thời tốt và dễ mở rộng.

Tùy vào từng bài toán, mình sẽ lựa chọn công nghệ phù hợp thay vì chỉ sử dụng một ngôn ngữ duy nhất.

## 4. Cơ sở dữ liệu (PostgreSQL)

PostgreSQL là hệ quản trị cơ sở dữ liệu mình sử dụng nhiều nhất nhờ tính ổn định, hiệu năng tốt và hỗ trợ nhiều tính năng mạnh mẽ.

Mình ưu tiên viết SQL thuần để tối ưu truy vấn và kiểm soát dữ liệu tốt hơn. Với Node.js, mình sử dụng thư viện [postgres](https://github.com/porsager/postgres), còn với Golang là [sqlx](https://github.com/jmoiron/sqlx).

## 5. Hạ tầng (Infrastructure)

Mình triển khai các dự án trên VPS, sử dụng Docker để đóng gói ứng dụng và Ansible để tự động hóa quá trình cấu hình cũng như triển khai.

Đối với việc giám sát hệ thống, mình sử dụng Prometheus và Grafana để theo dõi hiệu năng, kết hợp với Nginx làm reverse proxy và quản lý lưu lượng truy cập.

Bạn có thể tham khảo cấu hình hạ tầng mình đang sử dụng tại kho mã nguồn [infra-ops](https://github.com/nguyentuan1696/infra-ops) trên GitHub.

