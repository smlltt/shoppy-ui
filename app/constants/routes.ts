export const openRoutes = [
  { title: "Login", path: "/auth/login" },
  { title: "Signup", path: "/auth/signup" },
];

export const openPaths = {
  login: "/auth/login",
  signup: "/auth/signup",
};

export const privateRoutes = [{ title: "Home", path: "/" }];

export const privatePaths = {
  home: "/",
  productDetails: (slug: string) => `/products/${slug}`,
};
