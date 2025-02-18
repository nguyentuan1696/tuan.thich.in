const runtimeConfig = useRuntimeConfig()

const {
    getPocketCustomerKey: get_pocket_customer_key,
    getPocketAccessToken: get_pocket_access_token,
  } = runtimeConfig

export const fetchBookmarks = async () => {
  try {
    const response = await fetch('https://getpocket.com/v3/get', {
      method: 'POST',
      headers: {
        'X-Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        consumer_key:get_pocket_customer_key,
        access_token: get_pocket_access_token,
      }),
    });
    const data = await response.json();
    return Object.values(data.list); // Chuyển đổi đối tượng thành mảng
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    throw error; // Ném lỗi để xử lý ở nơi gọi
  }
};
