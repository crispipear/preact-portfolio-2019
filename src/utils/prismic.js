import Prismic from 'prismic-javascript';
var accessToken = process.env.PA_PRISMIC_TOKEN;
const apiEndpoint = 'https://suli-portfolio-website.cdn.prismic.io/api/v2';

const Client = Prismic.client(apiEndpoint, { accessToken })

export const fetchData = name => {
    return Client.query(
      Prismic.Predicates.at('document.type', name)
    );
}

export const fetchOrderData = (name, orderings) => {
  return Client.query(
    Prismic.Predicates.at('document.type', name),
    { orderings }
  );
}