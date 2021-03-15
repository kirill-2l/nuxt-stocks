export default function ({ $axios, $config }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      common: {
        accept: 'application/json',
      },
    },
  });
  api.setHeader(
    'Content-Type',
    'application/x-www-form-urlencoded; charset=UTF-8'
  );
  api.setHeader('X-Finnhub-Token', $config.API_KEY);
  api.setBaseURL($config.BASE_URL);
  // Inject to context as $api
  inject('api', api);
}
