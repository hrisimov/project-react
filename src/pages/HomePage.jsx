import { useEffect, useState } from 'react';

import api from '@/api';
import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator } from '@/components/ui';

const HomePage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const response = await api.get('/api/listings');
      setListings(response.data);
    };

    fetchListings();
  }, []);

  const handleFilters = (filters) => {
    // Will implement later
  };

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleFilters} />
        <Separator className='my-4' />
      </div>
      <ListingList listings={listings} />
    </div>
  );
};

export default HomePage;
