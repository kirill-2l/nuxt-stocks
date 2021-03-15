export default function ({ $axios, $config }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        accept: 'application/json',
      },
    },
  });
  api.setBaseURL($config.BASE_URL);
  // Inject to context as $api
  inject('api', api);
}
