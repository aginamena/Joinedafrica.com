import type { Principal } from '@dfinity/principal';
export interface Post {
  'creationDateOfPost' : string,
  'productTitle' : string,
  'subcategory' : string,
  'category' : string,
  'productSpecification' : {
    'model' : string,
    'numberOfPlots' : bigint,
    'isFurnished' : boolean,
    'hasParkingSpace' : boolean,
    'yearOfManufacture' : bigint,
    'durationOfRenting' : bigint,
    'gender' : string,
    'nameOfManufacturer' : string,
  },
  'amount' : string,
  'productDescription' : string,
  'condition' : string,
  'images' : Array<Array<number>>,
}
export interface _SERVICE {
  'createPost' : (arg_0: Post) => Promise<undefined>,
  'getAllMyPostings' : () => Promise<Array<Post>>,
}
