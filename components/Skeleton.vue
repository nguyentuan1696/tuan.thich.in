<template>
  <div class="skeleton">
    <div class="skeleton-title"></div>
    <div class="skeleton-excerpt"></div>
    <div class="skeleton-link"></div>
    <div class="skeleton-image"></div>
  </div>
</template>

<style scoped>
.skeleton {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  margin: 10px 0;
  animation: pulse 1.5s infinite;
}

.skeleton-title {
  height: 20px;
  width: 80%;
  background: #e0e0e0;
  margin-bottom: 10px;
}

.skeleton-excerpt {
  height: 15px;
  width: 90%;
  background: #e0e0e0;
  margin-bottom: 10px;
}

.skeleton-link {
  height: 15px;
  width: 50%;
  background: #e0e0e0;
  margin-bottom: 10px;
}

.skeleton-image {
  height: 100px;
  width: 100%;
  background: #e0e0e0;
}

@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style> 