import React from 'react';
import HomeTemplate from '../templates/HomeTemplate';
import axios from 'axios';
import { APIResponse } from '../lib/types/api';
import useAsync from '../hooks/useAsync';
import BaseTemplate from '../templates/BaseTemplate';

async function getData() {
  const res = await axios.get<APIResponse>(`appserver_endpoint_here`);
  return res.data.result;
}

interface HomePageProps {
  logged: boolean;
}

function HomePage({ logged }: HomePageProps) {
  const [state] = useAsync(getData, []);

  const { loading, data, error } = state;

  return (
    <BaseTemplate headerType={logged ? 'menu' : 'auth'}>
      {error ? <div>error</div> : <HomeTemplate data={data || []} loading={loading} />}
    </BaseTemplate>
  );
}

export default HomePage;
