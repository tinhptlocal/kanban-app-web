export const ApiKeys = {
  // --- auth ---
  Login: "/auth/login",
  RefreshToken: "/auth/refresh-token",
};

export const StatusCodes = {
  UNAUTHORIZED: 401,
  INTERNAL_SERVER: 500,
  MAINTAINING: 503,
} as const;
