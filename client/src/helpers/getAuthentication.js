// Helper to verify authentication
export const getAuthentication = () => {
  const token = localStorage.getItem("token");
  return token || false;
};
