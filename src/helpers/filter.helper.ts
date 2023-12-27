import map from 'lodash/map';
import uniqBy from 'lodash/uniqBy';
import reverse from 'lodash/reverse';
import { IOffer, Value } from '../store/data/slice';

const colorPrecedence = ['Черный', 'Серый', 'Светло-зеленый'];
const sizePrecedence = ['M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

const getFilterByKey = (offers: IOffer[], key: keyof IOffer, title: string) => {
  const uniqueOffersByKey =
    key === 'color'
      ? uniqBy(offers, (offer) => offer[key]).sort((a, b) => {
          let index1 = colorPrecedence.indexOf(b.color);
          let index2 = colorPrecedence.indexOf(a.color);
          return index1 == -1 ? 1 : index2 == -1 ? -1 : index1 - index2;
        })
      : uniqBy(offers, (offer) => offer[key]).sort((a, b) => {
          let index1 = sizePrecedence.indexOf(b.size);
          let index2 = sizePrecedence.indexOf(a.size);
          return index1 == -1 ? 1 : index2 == -1 ? -1 : index1 - index2;
        });

  const filterItems = map(uniqueOffersByKey, (uniqueOfferByKey) => {
    return {
      value: uniqueOfferByKey[key] as Value,
      disabled: false,
    };
  });

  const data =
    key === 'size'
      ? filterItems.sort((a, b) => {
          let index1 = sizePrecedence.indexOf(b.value.toString());
          let index2 = sizePrecedence.indexOf(a.value.toString());
          return index1 == -1 ? 1 : index2 == -1 ? -1 : index1 - index2;
        })
      : filterItems;

  const filter = { title, filters: reverse(data) };
  return filter;
};

export { getFilterByKey };
