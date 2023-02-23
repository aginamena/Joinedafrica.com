import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

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
  'images' : Array<Uint8Array>,
}
export interface Profile {
  'email' : string,
  'profilePicture' : Uint8Array,
  'lastName' : string,
  'firstName' : string,
}
export type UserId = Principal;
export interface _SERVICE {
  'createPost' : ActorMethod<[Post], undefined>,
  'createUserProfile' : ActorMethod<[Profile], undefined>,
  'getAllMyPostings' : ActorMethod<[], Array<Post>>,
  'whoAmI' : ActorMethod<[], UserId>,
}
