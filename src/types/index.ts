// export type IUpdateUser = {
//   usersId: string;
//   name: string;
//   bio: string;
//   imageId: string;
//   imageUrl: URL | string;
//   file: File[];
// };

export type INavLink = {
  icon: React.ReactNode;
  route: string;
  label: string;
};

export type INewHome = {
  userId: string;
  accountId: string;
  title: string;
  price: number;
  year_built: number;
  payment_method: string;
  bathrooms: number;
  bedrooms: number;
  toilets: number;
  address: string;
  state: string;
  lga: string;
  description: string;
  features: string;
  files: File[];
};

export type IUpdateHome = {
  homeId: string;
  title: string;
  price: number;
  year_built: number;
  payment_method: string;
  bathrooms: number;
  bedrooms: number;
  toilets: number;
  address: string;
  state: string;
  lga: string;
  description: string;
  features: string;
  files: File[];
  imageIds: string[];
  imageUrls: string[];
  // imageUrls: URL[] | string[];
  // imageUrls: URL;
};

export type IUser = {
  id: string;
  accountId: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  imageUrl: string;
  label: string;
};

export type INewUser = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
};

export type IUpgradeAgent = {
  id: string;
  agency_name?: string;
  label: string;
};
