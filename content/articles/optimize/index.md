---
title: Optimize
description: Optimize
date: 2025-06-03
---

### 1. Xác định vấn đề, nguyên nhân
- Sử dụng công cụ monitoring như New Relic, Datadog để theo dõi:
  - Thời gian phản hồi (Response time)
  - Tỉ lệ lỗi (Error rate)
  - Tài nguyên sử dụng (CPU, Memory, Network)
- Phân tích logs để tìm các bottleneck
- Xác định các endpoint có performance kém
### 2. Stress test API
- Sử dụng các công cụ như Apache JMeter, K6, Artillery để:
  - Test khả năng chịu tải
  - Xác định điểm bão hòa (Breaking point)
  - Đo lường latency dưới tải nặng
  - Kiểm tra memory leaks
### 3. Tối ưu tầng Application
- Implement caching:
  - Response caching
  - In-memory caching (Redis, Memcached)
  - HTTP caching headers
- Tối ưu code:
  - Sử dụng connection pooling
  - Implement pagination
  - Optimize queries
  - Sử dụng async/await cho các tác vụ non-blocking
- API Design:
  - GraphQL để tránh over-fetching
  - Batch requests
  - Compression (GZIP)
### 4. Tối ưu tầng Database
- Index optimization:
  - Tạo và maintain các index phù hợp
  - Analyze query execution plans
- Query optimization:
  - Tối ưu các câu query phức tạp
  - Sử dụng materialized views
  - Implement database sharding nếu cần
- Connection management:
  - Connection pooling
  - Query caching
### 5. Tối ưu tầng Infrastructure
- Load balancing:
  - Distribute traffic evenly
  - Health checks
- Scaling:
  - Horizontal scaling
  - Auto-scaling based on metrics
- CDN:
  - Sử dụng CDN cho static content
  - Edge caching
- Network optimization:
  - DNS optimization
  - Keep-alive connections
  - HTTP/2 or HTTP/3


