<script setup>
const route = useRoute();

const { data, error } = await useFetch(
  `https://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
  {
    pick: ["Plot", "Title", "Poster", "Error"],
    key: `/movies/${route.params.id}`,
    // onResponse({ request, response }) {
    //   if (response._data.Error === "Incorrect IMDb ID.") {
    //     showError({ statusCode: 404, statusMessage: "Page Not Found" });
    //   }
    // },
  }
);

// if (error.value) {
//   console.log(error.value);
// }
if (data.value.Error === "Incorrect IMDb ID.") {
  console.log("----------", data.value.Error);
  showError({ statusCode: 404, statusMessage: "Page Not Found" });
}
useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>
<template>
  <div>
    <pre>
        {{ data }}
    </pre>
  </div>
</template>
