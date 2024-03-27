import {TOfferPreview} from '../../types/index';
import OfferCard from '../ui/offer-card';
import {useAppSelector} from '../../hooks';
import {getActiveSortType} from '../../store/app-process/selectors';
import {sortByOption} from '../../utils/utils';
import {useMemo, memo} from 'react';
import styles from './offers-list.module.css';

type OffersListProps = {
  offers: TOfferPreview[];
  onCardHover: (offerId: TOfferPreview['id'] | null) => void;
}

const OffersList = memo(({onCardHover, offers}: OffersListProps): JSX.Element => {
  const activeSortType = useAppSelector(getActiveSortType);

  const currentSort = useMemo(
    () => sortByOption(offers, activeSortType),
    [activeSortType, offers]
  );

  return (
    <div className={`${styles.offerList}`}>
      {currentSort.map((item) =>
        <OfferCard key={item.id} offer={item} onCardHover={onCardHover} block={'cities'} size={'large'}/>
      )}
    </div>
  );
});

OffersList.displayName = 'OffersList';

export default OffersList;
