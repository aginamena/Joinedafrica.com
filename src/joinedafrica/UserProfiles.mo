import Type "types";
import Trie "mo:base/Trie";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Option "mo:base/Option";
import Debug "mo:base/Debug";
import Array "mo:base/Array";

/**
    This module contains all operations on users create, update, read, delete and so on.
*/
module {
    type UserId = Type.UserId;
    type Profile = Type.Profile;
    type Result<T, E> = Result.Result<T, E>;

    public class UserProfiles() {
        var userProfiles : Trie.Trie<UserId, Profile> = Trie.empty();

        public func createUserProfile(user : Profile, caller : UserId) : Result<Profile, Text> {
            //users that already have a profile shouldn't be able to create another profile with thesame identity
            Debug.print(debug_show (caller));
            if (not userHasCreatedProfile(caller)) {
                userProfiles := Trie.put<UserId, Profile>(userProfiles, key(caller), Principal.equal, user).0;
                #ok(user);
            } else {
                #err("User already exists");
            };

        };
        func key(t : UserId) : Trie.Key<UserId> {
            { hash = Principal.hash(t); key = t };
        };
        public func getUserProfile(caller : UserId) : Result<Profile, Text> {
            switch (Trie.get(userProfiles, key(caller), Principal.equal)) {
                case null #err("User doesn't exists");
                case (?profile) #ok(profile);
            };
        };
        func userHasCreatedProfile(caller : UserId) : Bool {
            switch (Trie.get(userProfiles, key(caller), Principal.equal)) {
                case null false;
                case (?profile) true;
            };

        };
        //test function
        public func allPrincipals() : [UserId] {
            let iter = Trie.iter(userProfiles);
            var arr : [UserId] = [];
            for ((k, v) in iter) {
                arr := Array.append(arr, [k]);
            };
            return arr;

        };

    };
};
