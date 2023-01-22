import type { Principal } from '@dfinity/principal';
export type AssocList = [] | [[[Key, Trie_1], List_2]];
export type AssocList_1 = [] | [[[Key, List], List_1]];
export interface Branch { 'left' : Trie, 'size' : bigint, 'right' : Trie }
export interface Branch_1 { 'left' : Trie_1, 'size' : bigint, 'right' : Trie_1 }
export type CategoryName = string;
export type Hash = number;
export interface Key { 'key' : CategoryName, 'hash' : Hash }
export interface Leaf { 'size' : bigint, 'keyvals' : AssocList }
export interface Leaf_1 { 'size' : bigint, 'keyvals' : AssocList_1 }
export type List = [] | [[Post, List]];
export type List_1 = [] | [[[Key, List], List_1]];
export type List_2 = [] | [[[Key, Trie_1], List_2]];
export interface Post {
  'creatorsId' : Principal,
  'description' : string,
  'creation_date_of_Post' : string,
  'lastName' : string,
  'images' : Array<number>,
  'firstName' : string,
}
export interface Post__1 {
  'creatorsId' : Principal,
  'description' : string,
  'creation_date_of_Post' : string,
  'lastName' : string,
  'images' : Array<number>,
  'firstName' : string,
}
export type Trie = { 'branch' : Branch } |
  { 'leaf' : Leaf } |
  { 'empty' : null };
export type Trie_1 = { 'branch' : Branch_1 } |
  { 'leaf' : Leaf_1 } |
  { 'empty' : null };
export interface ViewCategory { 'name' : string, 'posts' : Array<Post__1> }
export interface _SERVICE {
  'getSubCategory' : (arg_0: CategoryName) => Promise<Array<ViewCategory>>,
  'gets' : () => Promise<Trie>,
}
