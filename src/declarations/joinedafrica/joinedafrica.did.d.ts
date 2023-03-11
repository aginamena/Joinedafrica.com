import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Post {
  'creationDateOfPost' : string,
  'isPublished' : boolean,
  'productTitle' : string,
  'subcategory' : string,
  'category' : string,
  'productSpecification' : {
      'Mobile_phones_and_tables' : {
        'Year_of_manufacture' : bigint,
        'Model' : string,
        'Name_of_manufacturer' : string,
      }
    } |
    {
      'Properties' : { 'Land_and_plots_for_sale' : bigint } |
        {
          'Houses_and_apartments_for_rent' : {
            'Furnished' : string,
            'Parking_space' : string,
            'Duration_of_rent_in_months' : bigint,
          }
        } |
        {
          'Houses_and_apartments_for_sale' : {
            'Furnished' : string,
            'Parking_space' : string,
          }
        }
    } |
    { 'Fashion' : { 'Gender' : string } } |
    {
      'Electronics' : {
        'Year_of_manufacture' : bigint,
        'Model' : string,
        'Name_of_manufacturer' : string,
      }
    } |
    {
      'Vehicles' : {
        'Year_of_manufacture' : bigint,
        'Model' : string,
        'Name_of_manufacturer' : string,
      }
    } |
    { 'Health_and_beauty' : { 'Gender' : string } },
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
  'createPost' : ActorMethod<[Post], undefined>,
  'createUserProfile' : ActorMethod<[Profile], Result>,
  'getAllMyPostings' : ActorMethod<[], Array<Post>>,
  'getPost' : ActorMethod<[PostId], [] | [Post]>,
  'getUserProfile' : ActorMethod<[], Result>,
  'whoAmI' : ActorMethod<[], UserId>,
}
