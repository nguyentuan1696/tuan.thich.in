---
title: Postgresql
description: Postgresql
date: 2025-06-03
---

## Common PostgreSQL Index Types

Postgres supports many index types, from the default b-tree indexes to more exotic types like hash, GIN, GiST, or BRIN. They are well documented in the [PostgreSQL docs](https://www.postgresql.org/docs/current/indexes-types.html), but here’s a quick summary:

### B-Tree indexes (default index type in PostgreSQL)

```sql
CREATE INDEX index_product_id ON products (product_id);
```

- Default index type in PostgreSQL.
- Supports <, <=, =, >=, >, BETWEEN, IN, IS NULL, IS NOT NULL.
- Organizes entries in ascending order.

### Hash indexes

```sql
CREATE INDEX index_product_id ON products USING HASH (product_id);
```

- Ideal for equality checks, especially for integers.
- Doesn't support range queries or sorting.

### Composite indexes

```sql
CREATE INDEX index_product_id_name ON products (product_id, product_name);
```

- Multicolumn index defined on multiple table columns.
- Optimize based on columns frequently used in WHERE clauses.

### Partial indexes

```sql
CREATE INDEX index_product_id ON products(product_id) where product_available = ‘true’;
```

- Built over a subset of a table, defined by a conditional expression.
- Useful for filtering out frequently unqueried rows.

### Covering indexes

```sql
CREATE INDEX index_product_id_name_status ON products (product_id, product_name) include (status);
```

- Allows index-only scans when the select list matches index columns.
- Additional columns are specified with the INCLUDE keyword.

### Block Range index (BRIN)

```sql
CREATE INDEX brin_example_index ON logs USING BRIN(log_date);
```

- Designed for large, sorted tables like time-series data.
- Space-efficient, storing min and max values within logical blocks.

### GiST and SP-GiST indexes
 
 ```sql
 CREATE INDEX idx_gist ON my_table USING gist(my_column);
 ```

 - GiST (Generalized Search Tree) supports indexing of complex data types such as geometric shapes and full-text documents.
- Allows for custom operators for querying, supporting advanced search functionalities like natural language processing.
- Uses "lossy" indexing strategies to summarize complex items, potentially leading to false positives that require detailed row checks.

```sql
CREATE INDEX idx_spgist ON my_table USING spgist(my_column);
```

- SP-GiST (Space Partitioned Generalized Search Tree) is ideal for data with natural partitioning, such as spatial and hierarchical data.
- Enables different branching factors at different nodes, allowing tailored tree structures that reduce search space.
- Particularly efficient for applications requiring complex spatial queries or managing large data hierarchies.

