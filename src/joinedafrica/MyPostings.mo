import Trie "mo:base/Trie";
import List "mo:base/List";
import Type "types";
import Utils "utils";
import Result "mo:base/Result";

/**
    This module is responsible for managing all my private posts. Including creating, deleting, editing and so on
*/
module {
    type Post = Type.Post;
    type UserId = Type.UserId;
    type Result<T, E> = Result.Result<T, E>;

    public class MyPostings() {
        var myPostings : Trie.Trie<UserId, List.List<Post>> = Trie.empty();
        public func createPost(newPost : Post, userId : UserId) {
            //if the user doesn't have an account, tell them to create an account
            //with Profile details before they can create a post
            if (userHasCreatedAnAccount(userId)) {
                let userPostings : List.List<Post> = switch (Trie.get(myPostings, Utils.key(userId), Utils.equal)) {
                    case null List.nil();
                    case (?posts) posts;
                };
                myPostings := Trie.put(myPostings, Utils.key(userId), Utils.equal, List.push(newPost, userPostings)).0;

            } else {

                //..tell them to create an account
            };
        };
        public func getAllMyPostings(userId : UserId) : [Post] {
            switch (Trie.get(myPostings, Utils.key(userId), Utils.equal)) {
                case null [];
                case (?myPosts) List.toArray(myPosts);
            };
        };
        private func userHasCreatedAnAccount(userId : UserId) : Bool {
            //to be implemented
            return true;
        };
    };
};
