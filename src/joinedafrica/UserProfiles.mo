import Type "types";
import Trie "mo:base/Trie";
import Principal "mo:base/Principal";
//module contains all operations on users create, update, read, delete and so on.
module {
    type UserId = Type.UserId;
    type Profile = Type.Profile;

    public class UserProfiles() {
        var userProfiles : Trie.Trie<UserId, Profile> = Trie.empty();

        public func createUserProfile(user : Profile, caller : UserId) {
            userProfiles := Trie.put<UserId, Profile>(userProfiles, key(caller), Principal.equal, user).0;

        };
        func key(t : UserId) : Trie.Key<UserId> {
            { hash = Principal.hash(t); key = t };
        };
        public func getUserProfile(caller : UserId) : ?Profile {
            return Trie.get(userProfiles, key(caller), Principal.equal);
        };
    };
};
