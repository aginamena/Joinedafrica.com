export const idlFactory = ({ IDL }) => {
  const List = IDL.Rec();
  const List_1 = IDL.Rec();
  const List_2 = IDL.Rec();
  const Trie = IDL.Rec();
  const Trie_1 = IDL.Rec();
  const Branch = IDL.Record({
    'left' : Trie,
    'size' : IDL.Nat,
    'right' : Trie,
  });
  const CategoryName = IDL.Text;
  const Hash = IDL.Nat32;
  const Key = IDL.Record({ 'key' : CategoryName, 'hash' : Hash });
  const Branch_1 = IDL.Record({
    'left' : Trie_1,
    'size' : IDL.Nat,
    'right' : Trie_1,
  });
  const Post = IDL.Record({
    'creatorsId' : IDL.Principal,
    'description' : IDL.Text,
    'creation_date_of_Post' : IDL.Text,
    'lastName' : IDL.Text,
    'images' : IDL.Vec(IDL.Nat8),
    'firstName' : IDL.Text,
  });
  List.fill(IDL.Opt(IDL.Tuple(Post, List)));
  List_1.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(Key, List), List_1)));
  const AssocList_1 = IDL.Opt(IDL.Tuple(IDL.Tuple(Key, List), List_1));
  const Leaf_1 = IDL.Record({ 'size' : IDL.Nat, 'keyvals' : AssocList_1 });
  Trie_1.fill(
    IDL.Variant({ 'branch' : Branch_1, 'leaf' : Leaf_1, 'empty' : IDL.Null })
  );
  List_2.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(Key, Trie_1), List_2)));
  const AssocList = IDL.Opt(IDL.Tuple(IDL.Tuple(Key, Trie_1), List_2));
  const Leaf = IDL.Record({ 'size' : IDL.Nat, 'keyvals' : AssocList });
  Trie.fill(
    IDL.Variant({ 'branch' : Branch, 'leaf' : Leaf, 'empty' : IDL.Null })
  );
  return IDL.Service({ 'gets' : IDL.Func([], [Trie], ['query']) });
};
export const init = ({ IDL }) => { return []; };
