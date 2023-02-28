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
  'postId' : string,
  'images' : Array<Uint8Array>,
}
export type PostId = string;
export interface Profile {
  'email' : string,
  'profilePicture' : Uint8Array,
  'lastName' : string,
  'firstName' : string,
}
export type Result = { 'ok' : Profile } |
  { 'err' : string };
export type UserId = Principal;
export interface _SERVICE {
  'allPrincipals' : ActorMethod<[], Array<UserId>>,
  'createPost' : ActorMethod<[Post], undefined>,
  'createUserProfile' : ActorMethod<[Profile], Result>,
  'getAllMyPostings' : ActorMethod<[], Array<Post>>,
  'getPost' : ActorMethod<[PostId], [] | [Post]>,
  'getUserProfile' : ActorMethod<[], Result>,
  'whoAmI' : ActorMethod<[], UserId>,
}
