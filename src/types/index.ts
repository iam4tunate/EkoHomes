// export type INavLink = {
//   imgURL: string;
//   route: string;
//   label: string;
// };

// export type IUpdateUser = {
//   userId: string;
//   name: string;
//   bio: string;
//   imageId: string;
//   imageUrl: URL | string;
//   file: File[];
// };

export type INewHome = {
  userId: string;
  title: string;
  price: string;
  address: string;
  no_of_bathrooms: string;
  no_of_bedrooms: string;
  year_built: string;
  sqm: string;
  payment_method: string;
  description: string;
  features: string;
  files: File[];
};

// export type IUpdatePost = {
//   postId: string;
//   caption: string;
//   imageId: string;
//   imageUrl: URL;
//   file: File[];
//   location?: string;
//   tags?: string;
// };

export type IUser = {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  imageUrl: string;
};

export type INewUser = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
};
