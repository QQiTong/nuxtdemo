export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = true;

  const user = useUser();
  console.log("------", user.isLoggedIn)
  if (!userIsLoggedIn) {
    return navigateTo({ path: "/login" });
  }
});
