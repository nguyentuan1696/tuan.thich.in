---
title: 'Ghi chép về tối ưu database'
description: 'Ghi chép về tối ưu database'
thumbnail: '/img/toi-uu-database.png'
slug: 'bai-viet/toi-uu-database'
date: 09/04/2024
---

- Index
- Composite Index (Multi Index)
- Thứ tự index
- Mức độ ưu tiên index trong toán tử

- Don't use ORDER BY if you don't need it.

-Don't return columns you don't need to see. Just generating unnecessary columns alone is work.

- Don't return columns you don't need because they might not be included in the indexes.

- WHERE clause conditions are generally better stated as equivalency than NOT equal to. For instance, WHERE ID = 7 is better than WHERE ID <> 8.

- Wrapping predicate statements in functions frequently defeats index efficiencies. For instance, WHERE YEAR(START_DT) = '2021' looks nicer than using a spelled out date range, but will likely take more processing.
