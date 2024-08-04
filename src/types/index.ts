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

// export type INewPost = {
//   userId: string;
//   caption: string;
//   file: File[];
//   location?: string;
//   tags?: string;
// };

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
