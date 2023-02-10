import Type "types";
import Trie "mo:base/Trie";
import Principal "mo:base/Principal";

module {
    type UserId = Type.UserId;

    //hashing the user id
    public func key(t : UserId) : Trie.Key<UserId> {
        { hash = Principal.hash(t); key = t };
    };

    public func equal(t1 : UserId, t2 : UserId) : Bool {
        Principal.equal(t1, t2);
    };
};
