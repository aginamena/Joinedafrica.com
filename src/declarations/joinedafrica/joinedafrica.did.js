export const idlFactory = ({ IDL }) => {
  const UserId = IDL.Principal;
  const Post = IDL.Record({
    'creationDateOfPost' : IDL.Text,
    'productTitle' : IDL.Text,
    'subcategory' : IDL.Text,
    'category' : IDL.Text,
    'productSpecification' : IDL.Record({
      'model' : IDL.Text,
      'numberOfPlots' : IDL.Int,
      'isFurnished' : IDL.Bool,
      'hasParkingSpace' : IDL.Bool,
      'yearOfManufacture' : IDL.Int,
      'durationOfRenting' : IDL.Int,
      'gender' : IDL.Text,
      'nameOfManufacturer' : IDL.Text,
    }),
    'amount' : IDL.Text,
    'productDescription' : IDL.Text,
    'condition' : IDL.Text,
    'images' : IDL.Vec(IDL.Vec(IDL.Nat8)),
  });
  const Profile = IDL.Record({
    'email' : IDL.Text,
    'profilePicture' : IDL.Vec(IDL.Nat8),
    'lastName' : IDL.Text,
    'firstName' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : Profile, 'err' : IDL.Text });
  return IDL.Service({
    'allPrincipals' : IDL.Func([], [IDL.Vec(UserId)], []),
    'createPost' : IDL.Func([Post], [], []),
    'createUserProfile' : IDL.Func([Profile], [Result], []),
    'getAllMyPostings' : IDL.Func([], [IDL.Vec(Post)], []),
    'getUserProfile' : IDL.Func([], [Result], []),
    'whoAmI' : IDL.Func([], [UserId], []),
  });
};
export const init = ({ IDL }) => { return []; };
