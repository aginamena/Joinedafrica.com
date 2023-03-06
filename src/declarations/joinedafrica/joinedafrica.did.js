export const idlFactory = ({ IDL }) => {
  const Post = IDL.Record({
    'creationDateOfPost' : IDL.Text,
    'isPublished' : IDL.Bool,
    'productTitle' : IDL.Text,
    'subcategory' : IDL.Text,
    'category' : IDL.Text,
    'productSpecification' : IDL.Variant({
      'Mobile_phones_and_tables' : IDL.Record({
        'Year_of_manufacture' : IDL.Nat,
        'Model' : IDL.Text,
        'Name_of_manufacturer' : IDL.Text,
      }),
      'Properties' : IDL.Variant({
        'Land_and_plots_for_sale' : IDL.Nat,
        'Houses_and_apartments_for_rent' : IDL.Record({
          'Furnished' : IDL.Bool,
          'Parking_space' : IDL.Bool,
          'Duration_of_rent_in_months' : IDL.Nat,
        }),
        'Houses_and_apartments_for_sale' : IDL.Record({
          'Furnished' : IDL.Bool,
          'Parking_space' : IDL.Bool,
        }),
      }),
      'Fashion' : IDL.Record({ 'Gender' : IDL.Text }),
      'Electronics' : IDL.Record({
        'Year_of_manufacture' : IDL.Nat,
        'Model' : IDL.Text,
        'Name_of_manufacturer' : IDL.Text,
      }),
      'Vehicles' : IDL.Record({
        'Year_of_manufacture' : IDL.Nat,
        'Model' : IDL.Text,
        'Name_of_manufacturer' : IDL.Text,
      }),
      'Health_and_beauty' : IDL.Record({ 'Gender' : IDL.Text }),
    }),
    'amount' : IDL.Nat,
    'productDescription' : IDL.Text,
    'condition' : IDL.Text,
    'postId' : IDL.Text,
    'images' : IDL.Vec(IDL.Vec(IDL.Nat8)),
  });
  const Profile = IDL.Record({
    'email' : IDL.Text,
    'profilePicture' : IDL.Vec(IDL.Nat8),
    'lastName' : IDL.Text,
    'firstName' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : Profile, 'err' : IDL.Text });
  const PostId = IDL.Text;
  const UserId = IDL.Principal;
  return IDL.Service({
    'createPost' : IDL.Func([Post], [], []),
    'createUserProfile' : IDL.Func([Profile], [Result], []),
    'getAllMyPostings' : IDL.Func([], [IDL.Vec(Post)], []),
    'getPost' : IDL.Func([PostId], [IDL.Opt(Post)], []),
    'getUserProfile' : IDL.Func([], [Result], []),
    'whoAmI' : IDL.Func([], [UserId], []),
  });
};
export const init = ({ IDL }) => { return []; };
