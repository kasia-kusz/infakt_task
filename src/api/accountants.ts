export type AccountantType = {
    cell: string;
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: { thumbnail: string; medium: string };
    login: {
      uuid: string;
    };
  };

  type AccountantResponseType = {
    results: AccountantType[];
    info: {
      page: number;
    };
  };

  export async function getAccountants(page:number):Promise<AccountantResponseType>{
    const data = await fetch(`https://randomuser.me/api/?seed=seed&gender=female&page=${page}&results=4`);

    return await data.json();
  }