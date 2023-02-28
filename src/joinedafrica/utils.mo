import Type "types";
import Trie "mo:base/Trie";
import Principal "mo:base/Principal";
import Text "mo:base/Text";

module {
    type UserId = Type.UserId;
    type PostId = Type.PostId;

    //hashing the user id
    public func myPostingsKey(t : UserId) : Trie.Key<UserId> {
        { hash = Principal.hash(t); key = t };
    };

    public func myPostingsEqual(t1 : UserId, t2 : UserId) : Bool {
        Principal.equal(t1, t2);
    };
    public func postsIdsKey(t : PostId) : Trie.Key<PostId> {
        { hash = Text.hash(t); key = t };
    };
    public func postsIdsEqual(t1 : PostId, t2 : PostId) : Bool {
        Text.equal(t1, t2);
    };
};
