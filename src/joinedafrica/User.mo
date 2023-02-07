import Type "types";
import Trie "mo:base/Trie";
import Principal "mo:base/Principal";
//module contains all operations on users create, update, read, delete and so on.
module {
    type UserId = Type.UserId;
    type Profile = Type.Profile;

    public class Users() {
        var users : Trie.Trie<UserId, Profile> = Trie.empty();

        public func createUser(user : Profile) {
            users := Trie.put<UserId, Profile>(users, key(user.id), Principal.equal, user).0;
            // func put<K, V>(t : Trie<K, V>, k : Key<K>, k_eq : (K, K) -> Bool, v : V) : (Trie<K, V>, ?V)
        };
        func key(t : UserId) : Trie.Key<UserId> {
            { hash = Principal.hash(t); key = t };
        };
    };
};
