export const idlFactory = ({ IDL }) => {
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
  return IDL.Service({
    'createPost' : IDL.Func([Post], [], []),
    'getAllMyPostings' : IDL.Func([], [IDL.Vec(Post)], []),
  });
};
export const init = ({ IDL }) => { return []; };
